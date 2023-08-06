
const express = require('express')
const dotenv = require('dotenv')

dotenv.config({path:"./config.env"})
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// router object
const bookRoute = require('./routes/Book.js')
app.use('/api/v1', bookRoute)

const PORT = process.env.PORT 
const server = app.listen(PORT, () => {
    console.log(`Server started on 127.0.0.1:${PORT}`)
})

process.on("unhandledRejection", (err) => {
    console.log(err.message)
    server.close(() => process.exit())
})
