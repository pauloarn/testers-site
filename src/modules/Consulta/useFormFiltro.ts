import { useFormElement, z } from 'plc-shared/components/FormElement'
export interface FiltroSchema {
  tipoVaga?: string[]
  tipoSenioriadde?: string
  remoto: boolean
  estado?: string
  cidade?: string
  dataPublicacao?: {
    start?: Date
    end?: Date
  }
}

export const useFormFiltro = () => {
  const filtroSchema = z.object({
    tipoVaga: z.array(z.string()),
    tipoSenioridade: z.nullable(z.optional(z.string())),
    remoto: z.boolean(),
    estado: z.nullable(z.optional(z.string())),
    cidade: z.nullable(z.optional(z.string())),
    dataPublicacao: z
      .object({
        start: z.date().optional(),
        end: z.date().optional()
      })
      .optional(),
    dataEnvioCentral: z
      .object({
        start: z.date().optional(),
        end: z.date().optional()
      })
      .optional()
  })

  return useFormElement<FiltroSchema>({
    validation: filtroSchema,
    defaultValues: {
      tipoVaga: [],
      remoto: false
    }
  })
}
