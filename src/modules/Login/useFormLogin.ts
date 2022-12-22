import { useFormElement, z } from 'plc-shared/components/FormElement'

export interface FormLoginData {
  login: string
  password: string
}

export const useFormLogin = () => {
  const loginSchema = z.object({
    login: z.string().email({ message: 'Email inválido' }),
    password: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
        'Senha não está no padrão'
      )
  })

  return useFormElement({
    validation: loginSchema,
    defaultValues: {
      login: '',
      password: ''
    }
  })
}
