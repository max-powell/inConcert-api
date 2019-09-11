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
  expect(setCookie.parse(res)[0].value.length).toBe(12)
})

const authorizationCode = 'AQAPD1w8HZWt4WZaSVqy1vO8cEd1CuD2S-0oXwecRMGK2jY_5YviiSyVWcutpUuAA7VvRkcwOqKKzNs9i-78jZVKhe21fPAfLQT_QgwlhzLCUfKU7EkNZj6qMiT-GIyYQsHjTnSO2PFko98R3SXJFGAKZAUiFmn2mGukW5ZLPJvbeugKpRQBCEzQPM41QBs7758DRrzqnPPR_813pv30_E4INL9u3hw'

test("Should return the user's data", async () => {
  const res = await request(app)
    .get('/callback')
    .set('Cookie', 'spotify_auth_state=GRsbc44XfJzw')
    .query({
      code: authorizationCode,
      state: 'GRsbc44XfJzw'
    })

  expect(res.display_name).toBeTruthy()
})

test('Should send an error if error param given', async () => {
  await request(app)
    .get('/callback')
    .set('Cookie', 'spotify_auth_state=GRsbc44XfJzw')
    .query({
      error: 'access_denied',
      state: 'GRsbc44XfJzw'
    })
    .send()
    .expect(400)
})

test('Should send error if state mismatch', async () => {
  await request(app)
    .get('/callback')
    .set('Cookie', 'spotify_auth_state=GRsbc44XfJzw')
    .query({
      code: authorizationCode,
      state: ''
    })
    .send()
    .expect(400)
})
