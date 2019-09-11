class SpotifyWebApi {
  constructor(clientId, clientSecret, redirectUri) {
  }

  createAuthorizeURL() {
    return ''
  }

  authorizationCodeGrant() {
    return {
      body: {
        access_token: 'access_token',
        refresh_token: 'refresh_token'
      }
    }
  }
}

module.exports = SpotifyWebApi
