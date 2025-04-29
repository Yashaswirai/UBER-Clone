const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First Name must be atleast of 3 characters"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last Name must be atleast of 3 characters"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength:[3,"Email must be atleast of 3 characters"]
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength:[8,"Password must be atleast of 8 characters"]
    },
    socketId: {
        type: String
    },
    status:{
        type:String,
        enum:["online","offline"],
        default:"offline"
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,"Color must be atleast of 3 characters"]
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"Plate must be atleast of 3 characters"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"Capacity must be atleast of 1"]
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        },
        location:{
            latitude:{
                type:Number,
                default:0
            },
            longitude:{
                type:Number,
                default:0
            }
        }
    }
})

captainSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    return token
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

module.exports = mongoose.model('captain', captainSchema)