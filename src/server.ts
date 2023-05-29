import { app } from './app'
import { env } from './env'

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
