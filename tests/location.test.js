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
  expect(londonUK).toEqual({name: 'London, UK', id: expect.any(Number)})

  const londonKY = results[1]
  expect(londonKY).toEqual({name: 'London, ON, Canada', id: expect.any(Number)})
})

test('Should return an error if no search term given', async () => {
  await request(app)
    .get('/locations?query=')
    .send()
    .expect(400)
})
