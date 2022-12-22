import { useFormElement, z } from 'plc-shared/components/FormElement'
import {
  EstadoCivilEnum,
  SexoEnum,
  TipoSenioridadeEnum,
  TipoVagasEnum
} from '../../mock/valoresMock'

export interface ConfiguracaoFormSchema {
  nomeCompleto: string
  sexo?: SexoEnum
  estadoCivil?: EstadoCivilEnum
  cpf: string
  nascimento: Date
  telefone: string

  isWpp: boolean

  emailPrincipal: string

  emailSecundario?: string
  cep: string
  estado: string
  cidade: string

  vagasSomenteCidadeSelecionada: boolean

  endereco: string
  numero: string

  tipoVaga: TipoVagasEnum[]

  tipoSenioridade: TipoSenioridadeEnum[]
  aceitaReceberWpp: boolean
  aceitaReceberSms: boolean
  aceitaReceberEmail: boolean
  aceitoCompartilharDados: boolean
  aceitarTermosDePrivacidade: boolean
}
export const useFormConfig = () => {
  const schema = z.object({
    nomeCompleto: z.string(),
    sexo: z.optional(z.nativeEnum(SexoEnum)),
    estadoCivil: z.optional(z.nativeEnum(EstadoCivilEnum)),
    cpf: z.string(),
    nascimento: z.date(),
    isWpp: z.boolean(),
    emailPrincipal: z.string().email('Email inválido'),
    emailSecundario: z.optional(z.string().email('Email inválido')),
    cep: z.string(),
    estado: z.string(),
    cidade: z.string(),
    vagasSomenteCidadeSelecionada: z.boolean(),
    tipoVaga: z.array(z.nativeEnum(TipoVagasEnum)),
    tipoSenioridade: z.array(z.nativeEnum(TipoSenioridadeEnum)),
    aceitaReceberWpp: z.boolean()
  })

  return useFormElement<ConfiguracaoFormSchema>({
    validation: schema,
    defaultValues: {
      nomeCompleto: '',
      cpf: '',
      isWpp: false,
      emailPrincipal: '',
      vagasSomenteCidadeSelecionada: false,
      aceitaReceberWpp: false,
      aceitaReceberEmail: false,
      aceitaReceberSms: false,
      aceitarTermosDePrivacidade: false,
      aceitoCompartilharDados: false
    }
  })
}
