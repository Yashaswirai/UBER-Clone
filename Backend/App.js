const express = require('express')
const app = express()
const connectTodb = require('./db/db')
connectTodb()
const userRoutes = require('./Routes/user.routes')
const captainRoutes = require('./Routes/captain.routes')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user',userRoutes)
app.use('/api/captain',captainRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = app