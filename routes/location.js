const express = require('express')
const router = express.Router()

const songkick = require('../utils/songkick')

router.get('/locations', async (req, res) => {
  if (!req.query.query) {
    return res.status(400).send()
  }

  try {
    const results = await songkick.searchLocations(req.query.query)
    res.send(results)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
