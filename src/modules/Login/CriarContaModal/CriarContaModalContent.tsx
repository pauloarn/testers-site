import CustomDialog from 'plc-shared/components/CustomDialog'
import { Grid, Typography } from '@mui/material'
import { FormTextField, useFormElement, z } from 'plc-shared/components/FormElement'
import { useEffect } from 'react'
import { sessionService } from '@services/sessionService'
import { CreateAccountFormData } from '@typings/session'
import { CheckPassword } from '../CheckPassword'
import { useSnackbar } from 'plc-shared/hooks'
import { FormTextPassword } from '@modules/Login/FormTextPassword'

interface CriarContaModalContentProps {
  isOpen: boolean
  closeModal: () => void
}

export const CriarContaModalContent = ({ isOpen, closeModal }: CriarContaModalContentProps) => {
  const { snackSuccess, snackError } = useSnackbar()
  const { createAccount } = sessionService()

  const criarContaSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
        'A senha não é boa'
      ),
    confirmPassword: z.string()
  })

  const { control, submit, reset, formState } = useFormElement({
    validation: criarContaSchema,
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationOnReset: false
  })

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen])

  const onSubmitCriarConta = (data: CreateAccountFormData) => {
    createAccount(data).then((response) => {
      if (response.success) {
        snackSuccess('Usuário cadastrado com sucesso!!!')
        closeModal()
      } else {
        snackError(response.message ?? 'Ocorreu um problema ao cadastrar usuário')
      }
    })
  }

  const content = () => {
    return (
      <Grid
        id={'a3137584-677e-4285-8e90-3c88ea97457c'}
        container
        direction={'column'}
        wrap={'nowrap'}
        rowGap={2}
        component={'form'}
        onSubmit={submit(onSubmitCriarConta)}
      >
        <Grid item>
          <Typography variant={'h5'} color={'primary'} fontWeight={'bold'}>
            Criar conta
          </Typography>
        </Grid>
        <Grid item>
          <FormTextField
            id={'3e101ad4-8bb6-457e-9a4a-8f8023d5f5ed'}
            control={control}
            name={'name'}
            label={'Nome'}
            fullWidth
          />
        </Grid>
        <Grid item>
          <FormTextField
            id={'c3553f84-08e5-4443-85f3-1ffab45ccd35'}
            control={control}
            name={'email'}
            label={'Email'}
            fullWidth
          />
        </Grid>
        <Grid item>
          <FormTextPassword
            id={'0a739555-bfdb-4fe9-a0e3-37ff35f6cdf6'}
            control={control}
            name={'password'}
            label={'Senha'}
            fieldLimit={8}
            fullWidth
          />
        </Grid>
        <Grid item>
          <FormTextPassword
            id={'ae43a029-686b-41ff-94c8-fe316478bb78'}
            control={control}
            name={'confirmPassword'}
            label={'Confirmação de senha'}
            fieldLimit={10}
            fullWidth
          />
        </Grid>
        <Grid item>
          <CheckPassword control={control} name={'password'} formState={formState} />
        </Grid>
      </Grid>
    )
  }

  return (
    <CustomDialog
      maxWidth={'sm'}
      fullWidth
      isOpen={isOpen}
      handleClose={closeModal}
      contentComponent={content()}
      labelBtnConfirm={'Criar'}
      labelBtnCancel={'Cancelar'}
      confirmButtonProps={{
        type: 'submit',
        form: 'a3137584-677e-4285-8e90-3c88ea97457c'
      }}
    />
  )
}
