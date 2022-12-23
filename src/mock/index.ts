import { createServer } from 'miragejs'
import { loginRoute } from './routes/loginRoute'
import { models } from './models'
import { consultaRoute } from './routes/consultaRoute'

createServer({
  models,
  logging: true,

  routes() {
    this.namespace = '/api'

    loginRoute(this)
    consultaRoute(this)
  }
})
