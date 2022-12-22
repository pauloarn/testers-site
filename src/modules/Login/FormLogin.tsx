import { FormTextField } from 'plc-shared/components/FormElement'
import { Grid } from '@mui/material'
import { CustomButton } from 'plc-shared/components/input'
import { CriarContaModal } from './CriarContaModal'
import { FormLoginData, useFormLogin } from './useFormLogin'
import { sessionService } from '@services/sessionService'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getItem } from 'plc-shared/utils/localStorageUtil'
import { useSnackbar } from 'plc-shared/hooks'
import { useAuth } from '@modules/Autenticacao/AuthProvider'
import { SessionData } from '@typings/session'
import { FormTextPassword } from '@modules/Login/FormTextPassword'
import { useStore } from '@hooks/useRedux'

export const FormLogin = () => {
  const auth = useAuth()
  const store = useStore()
  const navigate = useNavigate()
  const { control, submit } = useFormLogin()
  const { login } = sessionService()
  const { snackSuccess, snackError, snackWarning } = useSnackbar()
  const [loginAttempts, setLoginAttempts] = useState(0)

  const handleAuth = (user: SessionData) => {
    if (auth.initialized) {
      auth.handleLogin(user)
      navigate('/consulta')
    }
  }

  useEffect(() => {
    const user = store().auth.user
    const isAuth = getItem('isAuth')
    if (isAuth && user) {
      handleAuth(user)
    }
  }, [])

  const onSubmitFormLogin = (data: FormLoginData) => {
    login(data.login, data.password).then((data) => {
      if (data.success) {
        snackSuccess('Bem-vindo')
        handleAuth(data.body)
      } else {
        setLoginAttempts((prevState) => prevState + 1)
        snackError('Usuário ou Senha incorreta')
      }
    })
  }

  useEffect(() => {
    if (loginAttempts >= 3) {
      snackWarning('Usuário bloqueado por 15 min')
      setLoginAttempts(0)
    }
  }, [loginAttempts])

  return (
    <Grid
      container
      rowGap={2}
      direction={'column'}
      component={'form'}
      onSubmit={submit(onSubmitFormLogin)}
    >
      <Grid item>
        <FormTextField
          id={'e507f62a-a310-4a66-840c-eddc05a4d470'}
          control={control}
          name={'login'}
          label={'Email'}
          fullWidth
        />
      </Grid>
      <Grid item>
        <FormTextPassword
          id={'c41f6b79-ae03-4a8a-8620-e6e6daa6331d'}
          control={control}
          name={'password'}
          label={'Senha'}
          fullWidth
        />
      </Grid>
      <Grid item>
        <CustomButton
          id={'9a1682d8-49e6-41ac-a6fc-bc142d4744cc'}
          variant={'contained'}
          fullWidth
          type={'submit'}
        >
          Entrar
        </CustomButton>
      </Grid>
      <Grid item>
        <CriarContaModal />
      </Grid>
    </Grid>
  )
}
