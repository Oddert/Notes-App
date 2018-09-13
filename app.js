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
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname + '/client/build')))

app.get('/api/test', (req, res) => res.json({ message: 'Server working ok.' }))

app.get('/api/notes', (req, res) => {
  Note.find({})
  .exec((err, notes) => {
    if (err) console.log(err)
    else res.status(200).json({ notes })
  })
})

app.post('/api/notes', (req, res) => {
  console.log('request recieved to make new note...')
  Note.create(
    { name: 'Untitled Note', body: '' },
    (err, note) => {
      if (err) console.log(err)
      else res.status(200).json({ note })
  })
})

app.put('/api/notes', (req, res) => {
  console.log('Updating a note')
  console.log(req.body);
  Note.findById(req.body._id, (err, foundNote) => {
    console.log('...note found:')
    console.log(err)
    console.log(foundNote)
    foundNote.name = req.body.name
    foundNote.body = req.body.body
    foundNote.updated = req.body.updated
    foundNote.save((err, note) => {
      console.log('SAVE')
      console.log(err)
      console.log(note)
      res.status(200).json({ note })
    })
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
