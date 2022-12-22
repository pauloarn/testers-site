import { DadosTabela } from '@utils/tableMockData'
import { Grid } from '@mui/material'
import CustomPowerfulTable, { QueryParam } from 'plc-shared/components/CustomPowerfulTable'
import { formatDate } from '@utils/dateUtils'
import { Undefined } from 'plc-shared/typing/genericTypes'
import { FiltroSchema } from './useFormFiltro'
import { FormElementReturn } from 'plc-shared/components/FormElement/useFormElement'

interface ListaConsultaProps {
  dadosTabela: DadosTabela[]
  setFitro: (filtroData: Undefined<FiltroSchema>) => void
  formElement: FormElementReturn<FiltroSchema>
}
const ListaConsulta = ({ dadosTabela, setFitro, formElement }: ListaConsultaProps) => {
  const listaBugada = ['estado', 'cidade', 'senioridade']

  const handleReorder = (queryParam: QueryParam) => {
    const { order } = queryParam
    if (order && listaBugada.includes(order.field)) {
      setFitro(undefined)
      formElement.reset()
    }
  }

  return (
    <Grid container item>
      <CustomPowerfulTable<DadosTabela>
        multiple={false}
        onChangeQuery={handleReorder}
        columns={[
          {
            field: 'tipoVaga',
            title: 'Tipo de Vaga',
            render: (rowData) => rowData.tipoVaga.label
          },
          {
            field: 'senioridade',
            title: 'Senioridade',
            render: (rowData) => rowData.senioridade.label
          },
          {
            field: 'empresa',
            title: 'Empresa'
          },
          {
            field: 'estado',
            title: 'Estado',
            render: (rowData) => rowData.estado.nome
          },
          {
            field: 'cidade',
            title: 'Cidade'
          },
          {
            field: 'remoto',
            title: 'Remoto',
            render: (rowData) => (rowData.remoto ? 'Sim' : 'Não')
          },
          {
            field: 'dataPublicacao',
            title: 'Data de publicação',
            render: (rowData) => formatDate(rowData.dataPublicacao)
          }
        ]}
        id={'4750145d-d5c8-4213-a861-75f10582d0a7'}
        data={dadosTabela}
        options={{ pageSize: 10 }}
      />
    </Grid>
  )
}

export default ListaConsulta
