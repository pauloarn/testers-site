import { senioridades, TipoSenioridadeEnum, tipoVagas, TipoVagasEnum } from '../mock/valoresMock'
import { estados } from '../estados'
import { generateRandomDate, getRandomItemFromArray, selectNumberInRange } from '@utils/randoms'
import { isEven } from '@utils/isEven'

export interface DadosTabela {
  tipoVaga: {
    label: string
    value: TipoVagasEnum
  }
  senioridade: {
    label: string
    value: TipoSenioridadeEnum
  }
  empresa: string
  estado: {
    nome: string
    sigla: string
  }
  cidade: string
  remoto: boolean
  dataPublicacao: Date
}

export const getMockData = (totalItems = 20): DadosTabela[] => {
  const dados: DadosTabela[] = []
  for (let i = 0; i < totalItems; i++) {
    const estado = getRandomItemFromArray(estados)
    const cidade = getRandomItemFromArray(estado.cidades)
    const senioridade = getRandomItemFromArray(senioridades)
    const tipoVaga = getRandomItemFromArray(tipoVagas)
    const dataPublicacao = generateRandomDate()
    dados.push({
      cidade,
      estado: {
        nome: estado.nome,
        sigla: estado.sigla
      },
      dataPublicacao,
      empresa: `Empresa ${i}`,
      remoto: isEven(i + selectNumberInRange(20)),
      senioridade,
      tipoVaga
    })
  }
  return dados
}
