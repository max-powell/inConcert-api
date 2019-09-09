const request = require('supertest')
const app = require('../app')

test('Should return a list of locations given a valid search', async () => {
  const res = await request(app)
    .get('/locations?query=London')
    .send()
    .expect(200)

  const results = res.body
  expect(results).toEqual(expect.any(Array))

  const londonUK = results[0]
  expect(londonUK).toEqual({location: 'London, UK', id: expect.any(Number)})

  const londonKY = results[1]
  expect(londonKY).toEqual({location: 'London, KY, US'})
})

test('Should return an error given an invalid search', async () => {
  const res = await request(app)
    .get('/locations?query=1234')
    .send()
    .expect(404)

  const error = res.body
  expect(error.message).toBeTruthy()
})

test('Should return an error if no search term given', async () => {
  await request(app)
    .get('/locations')
    .send()
    .expect(400)
})
