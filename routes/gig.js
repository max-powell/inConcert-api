const express = require('express')
const router = express.Router()

const songkick = require('../utils/songkick')

router.get('/gigs', async (req, res) => {
  const {location, date} = req.query

  if (!location || !date) {
    return res.status(400).send()
  }

  try {
    const results = await songkick.getGigs(location, date)
    res.send(results)
  } catch (e) {
    console.log(e);
    res.status(500).send(e)
  }
})

module.exports = router
