const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      cookieParser  = require('cookie-parser'),
      path          = require('path'),
      mongoose      = require('mongoose');

require('dotenv').config();

const handleError = require('./locals/handleError');

const Note = require('./models/Note')

mongoose.connect(process.env.DATABASE, () => console.log('DB connection'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname + '/client/build')))

app.get('/api/test', (req, res) => res.json({ message: 'Server working ok.' }))

app.get('/api/notes', (req, res) => {
  Note.find({})
  .then((err, notes) => {
    if (err) handleError(res, err)
    else res.status(200).json({ notes })
  })
})



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server Initialised on PORT: ${PORT}`)
)
