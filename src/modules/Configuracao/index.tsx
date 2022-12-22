import { Container, Grid, Stack } from '@mui/material'
import ConfiguracaoForm from './ConfiguracaoForm'
import { useState } from 'react'
import ErrorScreen from 'plc-shared/components/ErrorScreen'
import { AppLogo } from '@components/AppLogo'

const Configuracao = () => {
  const [showErro, setShowErro] = useState(false)

  if (showErro) {
    return (
      <Stack alignItems={'center'} width={'100vw'} height={'100vh'}>
        <ErrorScreen errorMsg={'FATAL ERROR 500'} />
      </Stack>
    )
  }

  return (
    <Stack alignItems={'center'} width={'100vw'} height={'100vh'} component={Container}>
      <Grid container direction={'column'} wrap={'nowrap'}>
        <Grid item sx={{ py: 6, px: 6 }}>
          <AppLogo />
        </Grid>
        <Grid item container sx={{ px: 6 }} spacing={2}>
          <ConfiguracaoForm handleError={() => setShowErro(true)} />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Configuracao
