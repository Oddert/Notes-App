const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');

app.get('/', (req, res) => res.send('Server res ok'))

const PORT = process.env.PORT || 3000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server Initialised on PORT: ${PORT}`)
)
