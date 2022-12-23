import { makeService, parseResponseData } from 'plc-shared/utils'
import { ServerData } from 'plc-shared/typing/genericTypes'
import { DadosTabela } from '@utils/tableMockData'
import { FiltroSchema } from '@modules/Consulta/useFormFiltro'
import { objectToQuery } from 'plc-shared/utils/queryUtil'

export const consultaService = makeService('/consulta', ({ get }) => {
  const getAll = (filtro?: FiltroSchema) => {
    const query = filtro ? `?${objectToQuery(filtro)}` : ''

    const { response } = get<ServerData<DadosTabela[]>>(query)
    return response.then(parseResponseData)
  }

  return {
    getAll
  }
})
