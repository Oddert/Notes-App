const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema ({
  username: String,
  password: String,
  githubId: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'note-app-note'
    }
  ]
})

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('note-app-user', UserSchema)
