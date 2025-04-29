const userModel = require('../Models/user.model')
const userService = require('../Services/user.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../Models/backlistToken.model')

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { fullname, email, password } = req.body
    const hashedPassword = await userModel.hashPassword(password)
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })
    const token = await user.generateAuthToken()
    res.status(201).json({ user, token })
}

module.exports.loginUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    const user = await userModel.findOne({ email }).select('+password')
    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' })
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' })
    }
    const token = await user.generateAuthToken()
    res.cookie('token', token)
    res.status(200).json({ user, token })
}

module.exports.profile = async (req, res) => {
    res.status(200).json({ user: req.user })
}

module.exports.logout = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    await blacklistTokenModel.create({ token:token })
    res.clearCookie('token')
    res.status(200).json({ message: 'Logged out successfully' })
}