const express = require('express')
const router = express.Router()

const SpotifyWebApi = require('spotify-web-api-node')
const querystring = require('querystring')

const { CLIENT_ROOT_URL } = require('../constants')

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
  const code = req.query.code
  const error = req.query.error
  const state = req.query.state
  const setState = req.cookies ? req.cookies[stateKey] : null

  if (error) {
    return res.redirect(`${CLIENT_ROOT_URL}/?` + querystring.stringify({
      error
    }))
  }

  if (state === null || state !== setState) {
    return res.redirect(`${CLIENT_ROOT_URL}/?` + querystring.stringify({
      error: 'state_mismatch'
    }))
  }

  res.clearCookie(stateKey)

  try {
    const authRes = await spotifyApi.authorizationCodeGrant(code)

    res.redirect(`${CLIENT_ROOT_URL}/auth?` + querystring.stringify({
      access_token: authRes.body.access_token,
      refresh_token: authRes.body.refresh_token
    }))
  } catch (e) {
    console.log(e);
    res.status(500).send(e)
  }


})

module.exports = router
