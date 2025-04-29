const captainModel = require('../Models/captain.model')
const captainService = require('../Services/captain.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../Models/backlistToken.model')

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { fullname, email, password, vehicle } = req.body

    const isCaptain = await captainModel.findOne({ email })
    if (isCaptain) {
        return res.status(400).json({ error: 'Captain already exists' })
    }
    const hashedPassword = await captainModel.hashPassword(password)
    const captain = await captainService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        vehicle:{
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        }
    })
    const token = await captain.generateAuthToken()
    res.cookie('token', token)
    res.status(201).json({ captain, token })
}

module.exports.loginUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    const captain = await captainModel.findOne({ email }).select('+password')
    if (!captain) {
        return res.status(400).json({ error: 'Invalid email or password' })
    }
    const isMatch = await captain.comparePassword(password)
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' })
    }
    const token = await captain.generateAuthToken()
    res.cookie('token', token)
    res.status(200).json({ captain, token })
}

module.exports.profile = async (req, res) => {
    res.status(200).json({ captain: req.captain })
}

module.exports.logout = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    await blacklistTokenModel.create({ token:token })
    res.clearCookie('token')
    res.status(200).json({ message: 'Logged out successfully' })
}