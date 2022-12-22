import { Grid } from '@mui/material'
import { FiltroSchema } from './useFormFiltro'
import { senioridades, TipoSenioridadeEnum, tipoVagas, TipoVagasEnum } from '../../mock/valoresMock'
import { useEffectNotFirstRender } from 'plc-shared/hooks'
import { estados } from '../../estados'
import { useEffect, useState } from 'react'
import {
  FormAutoComplete,
  FormDateRangePicker,
  FormSwitch
} from 'plc-shared/components/FormElement'
import { CustomButton } from 'plc-shared/components/input'
import { FormElementReturn } from 'plc-shared/components/FormElement/useFormElement'
import { Undefined } from 'plc-shared/typing/genericTypes'

interface ConsultaFilterInterface {
  formElement: FormElementReturn<FiltroSchema>
  setFiltro: (filtro: Undefined<FiltroSchema>) => void
}

export const ConsultaFilter = ({ formElement, setFiltro }: ConsultaFilterInterface) => {
  const { control, submit, watch, setValue, reset } = formElement
  const [cidades, setCidades] = useState<string[]>([])
  const remotoState = watch('remoto')
  const estadoState = watch('estado')

  useEffect(() => {
    if (estadoState) {
      const estadoSelecionado = estados.find((a) => a.sigla === estadoState)
      if (estadoSelecionado) {
        setCidades(estadoSelecionado.cidades)
      } else {
        setCidades([])
      }
    } else {
      setCidades([])
    }
  }, [estadoState])

  useEffectNotFirstRender(() => {
    if (!remotoState) {
      setValue('remoto', true)
    }
  }, [remotoState])

  const formataTipoVaga = () => {
    return tipoVagas.map((vaga) => vaga.value)
  }

  const formataEstados = () => {
    return estados.map((estado) => estado.sigla)
  }

  const getOptionEstados = (option: string) => {
    const value = estados.find((a) => a.sigla === option)
    if (value) return value.nome
    return '-'
  }
  const formataNivelSenioridade = () => {
    return senioridades.map((vaga) => vaga.value)
  }

  const getOptionSenioridade = (option: TipoSenioridadeEnum) => {
    const value = senioridades.find((a) => a.value === option)
    if (value) return value.label
    return '-'
  }

  const getOptionTipoVaga = (option: TipoVagasEnum) => {
    const value = tipoVagas.find((a) => a.value === option)
    if (value) return value.label
    return '-'
  }

  const handleReset = () => {
    setFiltro(undefined)
    reset()
  }

  return (
    <Grid container item component={'form'} rowGap={2} onSubmit={submit(setFiltro)}>
      <Grid container item spacing={2}>
        <Grid item xs={7}>
          <FormAutoComplete
            id={'84e516f8-b52f-471d-a91f-f198379586f8'}
            options={formataTipoVaga()}
            label={'Tipos de vagas'}
            name={'tipoVaga'}
            control={control}
            getOptionLabel={getOptionTipoVaga}
            fullWidth
            disableCloseOnSelect
            multiple
          />
        </Grid>
        <Grid item xs={3}>
          <FormAutoComplete
            id={'84e516f8-b52f-471d-a91f-f198379586f8'}
            options={formataNivelSenioridade()}
            label={'Nível de Senioridade'}
            name={'tipoSenioriadde'}
            getOptionLabel={getOptionSenioridade}
            control={control}
            fullWidth
            disableCloseOnSelect
          />
        </Grid>
        <Grid item xs={1} sx={{ ml: 1.5 }}>
          <FormSwitch
            id={'37af8c79-4298-4bfc-bbf3-412ee2e86801'}
            selectedLabel={'Sim'}
            notSelectedLabel={'Não'}
            title={'Remoto'}
            name={'remoto'}
            formControlProps={{
              sx: {
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
            control={control}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={3}>
          <FormAutoComplete
            id={'84e516f8-b52f-471d-a91f-f198379586f8'}
            options={formataEstados()}
            label={'Estados'}
            name={'estado'}
            control={control}
            getOptionLabel={getOptionEstados}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormAutoComplete
            id={'84e516f8-b52f-471d-a91f-f198379586f8'}
            disabled={!estadoState}
            options={cidades}
            label={'Cidades'}
            name={'cidade'}
            control={control}
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
          <FormDateRangePicker
            label={'Data de Publicação'}
            labelDateLeft={'De'}
            labelDateRight={'Até'}
            name={'dataPublicacao'}
            control={control}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2} sx={{ justifyContent: 'flex-end' }}>
        <Grid item xs={2}>
          <CustomButton
            id={'a3f9f16f-cdbf-47da-a7b7-ff74aee271df'}
            fullWidth
            variant={'outlined'}
            onClick={() => handleReset()}
          >
            Limpar
          </CustomButton>
        </Grid>
        <Grid item xs={2}>
          <CustomButton
            id={'a3f9f16f-cdbf-47da-a7b7-ff74aee271df'}
            type={'submit'}
            fullWidth
            variant={'contained'}
          >
            Buscar
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
