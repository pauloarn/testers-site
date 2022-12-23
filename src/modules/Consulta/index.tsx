import { Container, Grid, Stack } from '@mui/material'
import { useState } from 'react'
import { ConsultaHeader } from './ConsultaHeader'
import { ConsultaFilter } from './ConsultaFilter'
import ListaConsulta from './ListaConsulta'
import { Undefined } from 'plc-shared/typing/genericTypes'
import { FiltroSchema, useFormFiltro } from './useFormFiltro'

const Consulta = () => {
  const formElement = useFormFiltro()
  const [filtro, setFiltro] = useState<Undefined<FiltroSchema>>()

  return (
    <Stack alignItems={'center'} width={'100vw'} height={'100vh'} component={Container}>
      <Grid container sx={{ py: 8, px: 6 }} spacing={4}>
        <ConsultaHeader />
        <ConsultaFilter formElement={formElement} setFiltro={setFiltro} />
        <ListaConsulta filtros={filtro} formElement={formElement} />
      </Grid>
    </Stack>
  )
}
export default Consulta
