const express = require('express')
const app = express()
const connectTodb = require('./db/db')
connectTodb()
const userRoutes = require('./Routes/user.routes')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user',userRoutes)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = app