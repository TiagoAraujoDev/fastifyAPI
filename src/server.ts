import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify({
  logger: true,
})

app.get('/hello', async () => {
  const tables = knex('sqlite_schema').select('*')

  return tables
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
