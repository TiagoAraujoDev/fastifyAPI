import fastify from 'fastify'

import { env } from './env'

import { transactionsRoutes } from './routes/transactions'

const app = fastify({
  logger: true,
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
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
