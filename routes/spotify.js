const express = require('express')
const router = express.Router()

const SpotifyWebApi = require('spotify-web-api-node')

const { CLIENT_ROOT_URL } = require('../constants')

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: `${CLIENT_ROOT_URL}/auth`
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

router.post('/auth', async (req, res) => {
  const code = req.body.code
  const state = req.body.state
  const setState = req.cookies ? req.cookies[stateKey] : null

  if (state === null || state !== setState) {
    return res.status(401).send({error: 'state_mismatch'})
  }

  res.clearCookie(stateKey)

  try {
    const authRes = await spotifyApi.authorizationCodeGrant(code)

    res.send({
      access_token: authRes.body.access_token,
      refresh_token: authRes.body.refresh_token
    })
  } catch (e) {
    console.log(e);
    res.status(500).send(e)
  }


})

module.exports = router
