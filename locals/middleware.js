const passport = require('passport')

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.status(402).json({
      err: 'You must be logged in to do that',
      isAuth: req.isAuthenticated()
    })
  }
}

const checkNoteOwnership = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.status(402).json({
      err: 'You must be logged in to do that',
      isAuth: req.isAuthenticated()
    })
  }
}

module.exports = {
  isLoggedIn,
  checkNoteOwnership
}
