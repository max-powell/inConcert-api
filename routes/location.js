const express = require('express')
const router = express.Router()

const songkick = require('../utils/songkick')

router.get('/locations', async (req, res) => {
  if (!req.query.query) {
    return res.status(400).send()
  }

  const results = await songkick.searchLocations(req.query.query)
  res.send(results)
})

module.exports = router
