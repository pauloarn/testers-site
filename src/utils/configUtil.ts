const env = process.env

const isDev = env.NODE_ENV === 'development'
const isHomol = env.NODE_ENV === 'homol'
const appApiSicoob = isDev || isHomol ? env.REACT_APP_API_SICOOB : window.location.origin

export const config = {
  appName: 'plc-qa-test',
  env: env.NODE_ENV,
  isDevelopment: isDev,
  authRoute: '/login',
  baseRoute: '',
  apiContext: '',
  baseUrl: 'http://localhost:3000/api'
}
