import fastify from 'fastify'
import { randomUUID as uuid } from 'crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify({
  logger: true,
})

app.get('/', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: uuid(),
      title: 'Testing title',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

app.listen(
  {
    host: env.HOST,
    port: env.PORT,
  },
  (error, address) => {
    if (!error) {
      console.log('🚀 Server running!')
      console.log(`🌐 Access: ${address}`)
    } else {
      console.log(error)
    }
  },
)
