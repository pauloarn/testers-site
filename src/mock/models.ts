import { ModelDefinition } from 'miragejs/-types'
import { Model } from 'miragejs'

export const models = {
  users: Model as ModelDefinition<{
    name: string
    email: string
    password: string
  }>
}

export type ModelsMock = typeof models
