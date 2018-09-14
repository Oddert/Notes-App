const passport        = require('passport'),
      GithubStrategy  = require('passport-github')

const User            = require('../models/User')

require('dotenv').config()

passport.serializeUser ((user, done) => {
  console.log('#AUTH: Serializing User')
  done(null, user._id)
})

passport.deserializeUser ((id, done) => {
  console.log('#AUTH: De-serializing User')
  User.findById(id)
      .then(user => {
        done(null, user)
      })
})

passport.use (
  new GithubStrategy (
    {
      callbackURL: '/auth/github/redirect',
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret
    },
    (accessToken, refrechToken, profile, done) => {
      console.log('#AUTH: Github oath callback:')
      User.findOne({ githubId: profile.id })
          .then(currentUser => {
            if (currentUser) {
              console.log('...found user, finishing.')
              done(null, currentUser)
            } else {
              console.log('...creating new user, finishing.')
              new User ({
                username: profile.username,
                githubId: profile.id
              })
              .save()
              .then(newUser => done(null, newUser))
            }
          })
    }
  )
)
