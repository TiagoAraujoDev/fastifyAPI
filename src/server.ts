import fastify from 'fastify'

const app = fastify({
  logger: true,
})

app.get('/hello', () => {
  return { message: 'Hello, world!' }
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
