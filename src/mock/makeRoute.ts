import { Server } from 'miragejs/server'
import { ModelsMock } from './models'
export { Response } from 'miragejs'

export type RegistryMock = any // Registry<ModelsMock, AnyFactories>

export interface ServerMethods {
  get: Server<RegistryMock>['get']
  post: Server<RegistryMock>['post']
  put: Server<RegistryMock>['put']
  delete: Server<RegistryMock>['delete']
}

type Methods = Pick<Server, 'get' | 'post' | 'put' | 'delete'>

type MethodFunction<T extends keyof Methods> = (
  server: Server<RegistryMock>
) => Server<ModelsMock>[T]

type MakeRouteRoutes = (methods: ServerMethods) => void

export type MakeRoute = (
  path: string,
  routes: MakeRouteRoutes
) => (server: Server<RegistryMock>) => void

export const makeRoute: MakeRoute = (path, server) => {
  const buildPath = (subPath: string) => {
    return path + subPath
  }

  const get: MethodFunction<'get'> = (server) => {
    return (path, handler, options) => server.get(buildPath(path), handler, options)
  }

  const post: MethodFunction<'post'> = (server) => {
    return (path, handler, options) => server.post(buildPath(path), handler, options)
  }

  const put: MethodFunction<'put'> = (server) => {
    return (path, handler, options) => server.put(buildPath(path), handler, options)
  }

  const del: MethodFunction<'delete'> = (server) => {
    return (path, handler, options) => server.delete(buildPath(path), handler, options)
  }

  return (s) =>
    server({
      get: get(s),
      post: post(s),
      put: put(s),
      delete: del(s)
    })
}
