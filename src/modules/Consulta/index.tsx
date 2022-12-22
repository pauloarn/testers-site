import { Container, Grid, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { ConsultaHeader } from './ConsultaHeader'
import { ConsultaFilter } from './ConsultaFilter'
import ListaConsulta from './ListaConsulta'
import { Undefined } from 'plc-shared/typing/genericTypes'
import { FiltroSchema, useFormFiltro } from './useFormFiltro'
import { DadosTabela } from '@utils/tableMockData'
import { filtraDadosTabela } from './useFiltraDados'
import { useSnackbar } from 'plc-shared/hooks'
import { consultaService } from '@services/consultaService'

const Consulta = () => {
  const formElement = useFormFiltro()
  const [dadosTabela, setDadosTabela] = useState<DadosTabela[]>([])
  const [dadosFiltrados, setDadosFiltrados] = useState<DadosTabela[]>([])
  const [filtro, setFiltro] = useState<Undefined<FiltroSchema>>()

  const { snackError } = useSnackbar()
  const { getAll } = consultaService()

  useEffect(() => {
    getAll().then((res) => {
      if (res.success) {
        setDadosTabela(res.body)
        setDadosFiltrados(res.body)
      } else {
        snackError('Não foi possivel ter dados')
      }
    })
  }, [])

  useEffect(() => {
    setDadosFiltrados(filtraDadosTabela(filtro, dadosTabela))
  }, [filtro])

  return (
    <Stack alignItems={'center'} width={'100vw'} height={'100vh'} component={Container}>
      <Grid container sx={{ py: 8, px: 6 }} spacing={4}>
        <ConsultaHeader />
        <ConsultaFilter formElement={formElement} setFiltro={setFiltro} />
        <ListaConsulta
          dadosTabela={dadosFiltrados}
          setFitro={setFiltro}
          formElement={formElement}
        />
      </Grid>
    </Stack>
  )
}
export default Consulta
