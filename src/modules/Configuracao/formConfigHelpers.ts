import {
  EstadoCivilEnum,
  estadoCivilOptions,
  senioridades,
  SexoEnum,
  sexoOptions,
  TipoSenioridadeEnum,
  tipoVagas,
  TipoVagasEnum
} from '../../mock/valoresMock'
import { estados } from '../../estados'
import { ConfiguracaoFormSchema } from './useFormConfig'
import { Path, UseFormSetValue } from 'react-hook-form'
import { CheckBoxesValues } from './ConfiguracaoForm'

export const checkBoxes: CheckBoxesValues[] = [
  {
    label: '- Eu aceito receber vagas via Whatsapp.',
    field: 'aceitaReceberWpp',
    id: '62cd4a03-ee26-4513-9215-eaa2a202013c'
  },
  {
    label: '- Eu aceito receber mensagens via SMS.',
    field: 'aceitaReceberSms',
    id: 'cad6f039-550c-4ec3-b51d-c1e50c37e97d'
  },
  {
    label: '- Eu aceito receber vagas por email.',
    field: 'aceitaReceberEmail',
    id: '8955d1b7-ab61-4983-a69e-2d88a378a88f'
  },
  {
    label: '- Eu aceito compartilhar meus dados pessoais com a plataforma Vagas já!',
    field: 'aceitoCompartilharDados',
    id: '6906861e-f12a-4859-976e-dc4e764b94a6'
  },
  {
    label: '- Você concorda com todos os Termos e aceita a Política de Privacidade.',
    field: 'aceitarTermosDePrivacidade',
    id: '0efa3946-1d82-45df-a70b-896d787ff2b1'
  }
]

export const setOthersCheckBoxes = (
  setValue: UseFormSetValue<ConfiguracaoFormSchema>,
  fieldTrue: Path<ConfiguracaoFormSchema>
) => {
  checkBoxes.forEach((ck) => {
    if (ck.field !== fieldTrue) {
      setValue(ck.field, false)
    }
  })
}

export const formataNivelSenioridade = () => {
  return senioridades.map((vaga) => vaga.value)
}
export const formataTipoVaga = () => {
  return tipoVagas.map((vaga) => vaga.value)
}
export const getOptionSenioridade = (option: TipoSenioridadeEnum) => {
  const value = senioridades.find((a) => a.value === option)
  if (value) return value.label
  return '-'
}

export const getOptionTipoVaga = (option: TipoVagasEnum) => {
  const value = tipoVagas.find((a) => a.value === option)
  if (value) return value.label
  return '-'
}
export const getOptionSexo = (option: SexoEnum) => {
  const value = sexoOptions.find((a) => a.value === option)
  if (value) return value.label
  return '-'
}

export const getOptionEstadoCivil = (option: EstadoCivilEnum) => {
  const value = estadoCivilOptions.find((a) => a.value === option)
  if (value) return value.label
  return '-'
}

export const formataEstados = () => {
  const estadosLista = estados.map((estado) => estado.sigla)
  return estadosLista
}

export const getOptionEstados = (option: string) => {
  const value = estados.find((a) => a.sigla === option)
  if (value) return value.nome
  return '-'
}
