// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use(express.json())
app.use(cors())

// BOOKS 
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
})

// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
})