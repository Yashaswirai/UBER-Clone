const captainModel = require('../Models/captain.model')

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password,
    vehicle
}) => {
    if (!firstname || !email || !password || !vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType) {
        throw new Error('All fields are required')
    }
    
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        }
    })
    return captain
}
