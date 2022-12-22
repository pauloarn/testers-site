import { makeRoute } from '../makeRoute'
import { success } from '../response'
import { getMockData } from '@utils/tableMockData'

const mockDataConsulta = getMockData(60)

export const consultaRoute = makeRoute('/consulta', (server) => {
  server.get('', (schema, request) => {
    return success(mockDataConsulta)
  })
})
