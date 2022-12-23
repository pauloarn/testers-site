const env = process.env

const isDev = env.NODE_ENV === 'development'

export const config = {
  appName: 'plc-qa-test',
  env: env.NODE_ENV,
  isDevelopment: isDev,
  authRoute: '/login',
  baseRoute: '',
  apiContext: '',
  baseUrl: '/api'
}
