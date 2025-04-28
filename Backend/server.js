const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const http = require('http')
const app = require('./App')
const { log } = require('console')

app.use(cors())

const port = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(port,()=>{
    log(`Server is running on port ${port}`)
})