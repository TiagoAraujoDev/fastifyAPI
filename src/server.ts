import fastify from 'fastify'
import { knex } from './database'

const app = fastify({
  logger: true,
})

app.get('/hello', async () => {
  const tables = knex('sqlite_schema').select('*')

  return tables
})

app.listen(
  {
    host: '0.0.0.0',
    port: 8080,
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
