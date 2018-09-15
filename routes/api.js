const router = require('express').Router()
    , mongoose = require('mongoose')

const User = require('../models/User')
    , Note = require('../models/Note')

console.log('... /api routes loaded')

router.get('/test', (req, res) => res.json({ message: 'Server working ok.' }))

router.get('/notes', (req, res) => {
  console.log('Getting notes')
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    console.log('User logged in')
    User.findById(req.user._id)
      .populate('notes')
      .exec((err, foundUser) => {
        if (err) console.log(err)
        res.status(200).json({ notes: foundUser.notes })
      })
  } else {
    console.log('No User')
    res.status(200).json({ notes: [] })
  }
})

router.post('/notes', (req, res) => {
  console.log('request recieved to make new note...')
  if (req.isAuthenticated()) {
    console.log('Looking up user...')
    User.findById(req.user._id, (err, foundUser) => {
      console.log('Writing note to db')
      if (err) console.log(err)
      Note.create(
        {
          name: 'Untitled Note',
          body: '',
          author: {
            username: req.user.username,
            id: req.user._id
          }
        },
        (err, note) => {
          if (err) console.log(err)
          foundUser.notes.push(note._id)
          foundUser.save(err => res.status(200).json({ note }))
      })
    })

  } else {
    console.log('Sending dummy note...')
    res.status(200).json({
      note: {
        name: 'Untitled Note',
        body: ''
      }
    })
  }
})

router.put('/notes', (req, res) => {
  console.log(req.body)
  Note.findById(req.body._id, (err, foundNote) => {
    foundNote.name = req.body.name
    foundNote.body = req.body.body
    foundNote.updated = req.body.updated
    foundNote.tags = req.body.tags
    foundNote.save((err, note) => {
      res.status(200).json({ note })
    })
  })
})

router.delete('/notes', (req, res) => {
  if (req.isAuthenticated()) {
    User.findById(req.user._id, (err, user) => {
      if (err) console.log(err)
      user.notes.remove(req.body._id)
      user.save()
      Note.findByIdAndRemove(req.body._id, (err, found) => {
        if (err) console.log(err)
        else res.status(200).json({ deleted: true })
      })
    })
  } else {
    res.status(200).json({ deleted: true })
  }
})

router.get('/newtest', (req, res) => {res.json({ message: 'router workingok' })})


module.exports = router
