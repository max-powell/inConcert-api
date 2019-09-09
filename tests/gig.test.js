const request = require('supertest')
const app = require('../app')

test('Should return a list of gigs given a city and date', async () => {
  const res = await request(app)
    .get('/gigs?location=24426&date=2019-09-15')
    .send()
    .expect(200)

  const results = res.body
  expect(results).toEqual(expect.any(Array))

  expect(results[0].id).toBeTruthy()
  expect(results[0].performance).toBeTruthy()
})

test('Should return an error if no city or date given', async () => {
  await request(app)
    .get('/gigs?date=2019-09-15')
    .send()
    .expect(400)

  await request(app)
    .get('/gigs?location=24426')
    .send()
    .expect(400)
})
