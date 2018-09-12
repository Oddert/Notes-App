const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema ({
  name: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
})
