import { makeService, parseResponseData } from 'plc-shared/utils'
import { ServerData } from 'plc-shared/typing/genericTypes'
import { DadosTabela } from '@utils/tableMockData'

export const consultaService = makeService('/consulta', ({ get }) => {
  const getAll = () => {
    const { response } = get<ServerData<DadosTabela[]>>('')
    return response.then(parseResponseData)
  }

  return {
    getAll
  }
})
