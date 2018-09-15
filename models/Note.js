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
  },
  author: {
    username: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'note-app-user'
    }
  },
  tags: [String]
})

module.exports = mongoose.model('note-app-note', NoteSchema)
