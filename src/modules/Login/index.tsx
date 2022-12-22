import { Grid, Paper, Stack, Typography } from '@mui/material'
import { FormLogin } from './FormLogin'
import { AppLogo } from '@components/AppLogo'

const Login = () => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'} width={'100vw'} height={'100vh'}>
      <Paper sx={{ py: 1.5, px: 2.5 }}>
        <Grid
          container
          direction={'column'}
          wrap={'nowrap'}
          justifyContent={'center'}
          alignItems={'center'}
          rowGap={3}
        >
          <Grid item>
            <AppLogo />
          </Grid>
          <Grid item>
            <Typography color={'primary'} sx={{ fontWeight: 'bold' }}>
              Esteja sempre a frente da concorrência! Receba alertas de vagas de TI em tempo real
            </Typography>
          </Grid>
          <Grid item width={'100%'}>
            <FormLogin />
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  )
}

export default Login
