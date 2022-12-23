import { makeRoute } from '../makeRoute'
import { error, success } from '../response'
import { SessionData } from '@typings/session'

export const loginRoute = makeRoute('/session', (server) => {
  server.post('/login', (schema, request) => {
    const data = JSON.parse(request.requestBody)
    const user = schema.findBy('users', {
      email: data.login,
      password: data.password
    })

    if (user) {
      const { name, email } = user
      return success({
        name,
        email
      } as SessionData)
    }
    return error(null, { statusCode: 401 })
  })

  server.post('/account', (schema, request) => {
    const data = JSON.parse(request.requestBody)

    const user = schema.findBy('users', {
      email: data.email
    })

    if (user) {
      return error(null, { message: 'Usuário já cadastrado' })
    }

    schema.create('users', {
      name: data.name,
      email: data.email,
      password: data.password
    })

    return success(null, {
      message: 'Cadastro realizado com sucesso'
    })
  })
})
