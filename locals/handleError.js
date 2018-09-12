const handleError = (res, err) => {
  console.log('ERROR:')
  console.log(err)
  return res.status(500).json({ err })
}

module.exports = handleError
