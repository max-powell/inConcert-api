const express = require('express')
const router = express.Router()

const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
})

const stateKey = 'spotify_auth_state'

const generateRandomString = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let str = ''
  while (str.length < 12) {
    str += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return str
}

const scopes = ['playlist-modify-public']

router.get('/authorize', async (req, res) => {
  const state = generateRandomString()
  const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state)

  res.cookie(stateKey, state)
  res.redirect(authorizeUrl)
})

router.get('/callback', async (req, res) => {
  res.send('/callback')
})

module.exports = router
