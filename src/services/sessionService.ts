import makeService from 'plc-shared/utils/makeService'
import { CreateAccountSessionData, SessionData } from '@typings/session'
import { ServerData } from 'plc-shared/typing/genericTypes'
import { parseResponseData } from 'plc-shared/utils'

export const sessionService = makeService('/session', ({ post }) => {
  const login = (login: string, password: string) => {
    const { response } = post<ServerData<SessionData>>('/login', { login, password })
    return response.then(parseResponseData)
  }

  const logout = () => {
    const { response } = post('/logout')
    return response
  }

  const createAccount = async (data: CreateAccountSessionData) => {
    const { response } = post<ServerData<void>>('/account', data)
    return response.then(parseResponseData)
  }

  return {
    login,
    logout,
    createAccount
  }
})
