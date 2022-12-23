import { makeRoute } from '../makeRoute'
import { success } from '../response'
import { getMockData } from '@utils/tableMockData'
import { FiltroSchema } from '@modules/Consulta/useFormFiltro'
import { filtraDadosTabela } from '@modules/Consulta/useFiltraDados'

const mockDataConsulta = getMockData(40)

export const consultaRoute = makeRoute('/consulta', (server) => {
  server.get('', (schema, request) => {
    if (!Object.keys(request.queryParams).length) {
      return success(mockDataConsulta)
    }

    const queryParams: FiltroSchema = {
      ...request.queryParams,
      remoto: request.queryParams.remoto === 'true'
    }

    return success(filtraDadosTabela(queryParams, mockDataConsulta))
  })
})
