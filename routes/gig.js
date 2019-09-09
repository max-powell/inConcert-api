const express = require('express')
const router = express.Router()

const songkick = require('../utils/songkick')

router.get('/gigs', async (req, res) => {
  const {id, date} = req.query

  if (!id || !date) {
    return res.status(400).send()
  }

  try {
    const results = await songkick.getGigs(id, date)
    res.send(results.results)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
