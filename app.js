const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      cookieParser  = require('cookie-parser'),
      path          = require('path'),
      mongoose      = require('mongoose'),
      passport      = require('passport');

const passportSetup = require('./locals/passport-setup')

require('dotenv').config();

const handleError = require('./locals/handleError');

mongoose.connect(process.env.DATABASE, () => console.log('DB connection'))

app.use(require('express-session')({
  secret: process.env.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: false
  }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname + '/client/build')))


app.use('/api', require('./routes/api'))
app.use('/auth', require('./routes/auth'))


app.get('/', (req, res) => {
  console.log('Default route accessed')
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server Initialised on PORT: ${PORT}`)
)
