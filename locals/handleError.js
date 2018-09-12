const handleError = err => {
  console.log(err)
  return res.status(500).json({ err })
}

module.exports = handleError
