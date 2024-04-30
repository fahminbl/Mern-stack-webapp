// Deklarasi dependensi
require('dotenv').config()
const express = require('express')
const bookRouter = require('./routes/books')
const mongoose = require('mongoose')
// Aplikasi express
const app = express()

// Port
const port = process.env.PORT || 5000

// Middleware
app.use('/api/books', bookRouter)

// Koneksi mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`Server berjalan di port: ${port}`))
  })
  .catch((err) => console.error(err))

// Handler rute
app.get('/', (req, res) => res.json({ message: "Endpoint GET home" }))



