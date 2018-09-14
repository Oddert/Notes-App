const router    = require('express').Router()
    , mongoose  = require('mongoose')
    , passport  = require('passport')

const Note      = require('../models/Note')
    , User      = require('../models/User')


console.log('... /auth routes loaded')

router.get('/check', (req, res) => {
  console.log('User auth test')
  console.log(req.isAuthenticated())
  res.json({
    message: 'Auth test responding.'
  , isAuth: req.isAuthenticated()
  })
})


router.get('/login', (req, res) => {
  console.log('/auth/github/login route')
  res.send('Apparently this is a placeholder')
})


router.post('/logout', (req, res) => {
  console.log('Logging user out')
  res.logOut();
  res.status(200).json({
    logout: true
  })
})

router.get('/github', passport.authenticate('github', {
  scope: ['read:user']
}));

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
    console.log('Github redirect route hit')
    res.redirect('/')

    // res.status(200).json({
    //   message: 'successfully logged in with github!'
    // });
  })


module.exports = router
