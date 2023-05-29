import { afterAll, beforeAll, test } from 'vitest'
import request from 'supertest'

import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('It should be able to create a transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'Title test',
      amount: 500,
      type: 'credit',
    })
    .expect(201)
})
