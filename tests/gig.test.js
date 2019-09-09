const request = require('supertest')
const app = require('../app')

test('Should return a list of gigs given a city and date', async () => {
  const res = await request(app)
    .get('/gigs?location=24426&date=2019-09-15')
    .send()
    .expect(200)

  const results = res.body
  expect(results).toEqual(expect.any(Array))

  expect(results[0].id).toBe(expect.any(Number))
  expect(results[0].performance).toBe(expect.any(Object))
})
