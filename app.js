const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const locationRouter = require('./routes/location')
const gigRouter = require('./routes/gig')
const spotifyRouter = require('./routes/spotify')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(locationRouter)
app.use(gigRouter)
app.use(spotifyRouter)

module.exports = app
