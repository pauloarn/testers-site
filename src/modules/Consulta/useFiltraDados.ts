import { FiltroSchema } from './useFormFiltro'
import { DadosTabela } from '@utils/tableMockData'
import { Undefined } from 'plc-shared/typing/genericTypes'

export const filtraDadosTabela = (
  filtro: Undefined<FiltroSchema>,
  dadosOriginais: DadosTabela[]
) => {
  console.log(!!filtro)
  if (filtro) {
    return dadosOriginais.filter((dado) => {
      const matchesFilter: boolean[] = []
      if (filtro.tipoSenioriadde) {
        matchesFilter.push(dado.senioridade.value === filtro.tipoSenioriadde)
      }
      if (filtro.estado) {
        matchesFilter.push(filtro.estado === dado.estado.sigla)
      }
      if (filtro.cidade) {
        matchesFilter.push(filtro.cidade === dado.cidade)
      }
      if (filtro.tipoVaga && filtro.tipoVaga.length > 0) {
        matchesFilter.push(filtro.tipoVaga.includes(dado.tipoVaga.value))
      }
      matchesFilter.push(dado.remoto === filtro.remoto)
      return matchesFilter.every(Boolean)
    })
  } else {
    return dadosOriginais
  }
}
