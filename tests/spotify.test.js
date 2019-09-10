const request = require('supertest')
const app = require('../app')

const setCookie = require('set-cookie-parser')

test('Should redirect to Spotify auth on login', async () => {
  const res = await request(app)
    .get('/authorize')
    .send()
    .expect(302)

  expect(res.headers.location).toEqual(expect.any(String))
  expect(setCookie.parse(res)[0].name).toBe('spotify_auth_state')
  expect(setCookie.parse(res)[0].value).toEqual(expect.any(String))
})
