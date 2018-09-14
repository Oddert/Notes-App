const router = require('express').Router()
    , mongoose = require('mongoose')

const Note = require('../models/Note')

router.get('/test', (req, res) => res.json({ message: 'Server working ok.' }))

router.get('/notes', (req, res) => {
  Note.find({})
  .exec((err, notes) => {
    if (err) console.log(err)
    else res.status(200).json({ notes })
  })
})

router.post('/notes', (req, res) => {
  console.log('request recieved to make new note...')
  Note.create(
    { name: 'Untitled Note', body: '' },
    (err, note) => {
      if (err) console.log(err)
      else res.status(200).json({ note })
  })
})

router.put('/notes', (req, res) => {
  Note.findById(req.body._id, (err, foundNote) => {
    foundNote.name = req.body.name
    foundNote.body = req.body.body
    foundNote.updated = req.body.updated
    foundNote.save((err, note) => {
      res.status(200).json({ note })
    })
  })
})

router.delete('/notes', (req, res) => {
  Note.findByIdAndRemove(req.body._id, (err, found) => {
    if (err) console.log(err)
    else res.status(200).json({ deleted: true })
  })
})

router.get('/newtest', (req, res) => {res.json({ message: 'router workingok' })})


module.exports = router
