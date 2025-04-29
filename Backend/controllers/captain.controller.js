const captainModel = require('../Models/captain.model')
const captainService = require('../Services/captain.service')
const { validationResult } = require('express-validator')

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