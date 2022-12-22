import { Control, Path, useWatch } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { FormState } from 'react-hook-form/dist/types/form'

interface CheckPasswordProps<E extends { password: string }> {
  control: Control<E>
  name: Path<E>
  formState: FormState<E>
}

export const CheckPassword = <E extends { password: string }>({
  control,
  name,
  formState
}: CheckPasswordProps<E>) => {
  const [erros, setErros] = useState<string[]>([])

  const password = useWatch({
    control,
    name
  })

  useEffect(() => {
    if (formState.submitCount === 0) return
    const regexNumero = /(?=.*\d)/
    const regexMinuscula = /(?=.*[a-z])/
    const regexMaiuscula = /(?=.*[A-Z])/
    const regexCaracterEspecial = /(?=.*[$*&@#])/
    const regexTamanho = /^.{6,}$/

    const regexTest: [RegExp, string][] = [
      [regexNumero, 'Deve conter um número'],
      [regexMinuscula, 'Deve conter uma letra minúscula'],
      [regexMaiuscula, 'Deve conter uma letra maiúscula'],
      [regexCaracterEspecial, 'Deve conter um caracter especial'],
      [regexTamanho, 'Deve ter no mínimo 6 caracteres']
    ]

    const listaError: string[] = []

    regexTest.forEach(([regex, msg]) => {
      if (!regex.test(password)) {
        listaError.push(msg)
      }
    })

    setErros(listaError)
  }, [password, formState])

  return (
    <Grid container direction={'column'} wrap={'nowrap'}>
      {erros.map((err) => {
        return (
          <Grid item key={err}>
            <Typography color={'error'} fontSize={14}>
              {err}
            </Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}
