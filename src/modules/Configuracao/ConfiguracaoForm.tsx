import { Grid, Stack } from '@mui/material'
import {
  FormAutoComplete,
  FormCheckBox,
  FormDatePicker,
  FormTextField
} from 'plc-shared/components/FormElement'
import { ConfiguracaoFormSchema, useFormConfig } from './useFormConfig'
import { estadoCivilOptions, sexoOptions } from '../../mock/valoresMock'
import { useEffect, useState } from 'react'
import FormSwitch from 'plc-shared/components/FormElement/FormSwitch'
import { estados } from '../../estados'
import {
  checkBoxes,
  formataEstados,
  formataNivelSenioridade,
  formataTipoVaga,
  getOptionEstadoCivil,
  getOptionEstados,
  getOptionSenioridade,
  getOptionSexo,
  getOptionTipoVaga,
  setOthersCheckBoxes
} from './formConfigHelpers'
import { Path } from 'react-hook-form'
import IconPoliticaPrivacidade from './IconPoliticaPrivacidade'
import { useSnackbar } from 'plc-shared/hooks'
import { CustomButton } from 'plc-shared/components/input'

export interface CheckBoxesValues {
  label: string
  field: Path<ConfiguracaoFormSchema>
  id: string
}

interface ConfiguracaoFormProps {
  handleError: () => void
}

const ConfiguracaoForm = ({ handleError }: ConfiguracaoFormProps) => {
  const { snackError } = useSnackbar()
  const { control, watch, setValue, submit } = useFormConfig()

  const [cidades, setCidades] = useState<string[]>([])
  const estadoState = watch('estado')
  const observaSms = watch('aceitaReceberSms')
  const observaWpp = watch('aceitaReceberWpp')
  const observaEmail = watch('aceitaReceberEmail')
  const observaDados = watch('aceitoCompartilharDados')
  const observaPrivacidade = watch('aceitarTermosDePrivacidade')
  const tipoVaga = watch('tipoVaga')
  const observaSexo = watch('sexo')

  useEffect(() => {
    if (tipoVaga && tipoVaga.length >= 3) {
      snackError('Error')
    }
  }, [tipoVaga])

  useEffect(() => {
    if (observaSms) {
      setOthersCheckBoxes(setValue, 'aceitaReceberSms')
    }
  }, [observaSms])

  useEffect(() => {
    if (observaWpp) {
      setOthersCheckBoxes(setValue, 'aceitaReceberWpp')
    }
  }, [observaWpp])

  useEffect(() => {
    if (observaEmail) {
      setOthersCheckBoxes(setValue, 'aceitaReceberEmail')
    }
  }, [observaEmail])

  useEffect(() => {
    if (observaEmail) {
      setOthersCheckBoxes(setValue, 'aceitaReceberEmail')
    }
  }, [observaEmail])

  useEffect(() => {
    if (observaDados) {
      setOthersCheckBoxes(setValue, 'aceitoCompartilharDados')
    }
  }, [observaDados])

  useEffect(() => {
    if (observaPrivacidade) {
      setOthersCheckBoxes(setValue, 'aceitarTermosDePrivacidade')
    }
  }, [observaPrivacidade])

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

  useEffect(() => {
    setValue('sexo', undefined)
  }, [observaSexo])

  const onClickCancelar = () => {
    snackError('ERROR 500')
  }

  return (
    <Grid container item columnGap={2} rowGap={2} component={'form'} onSubmit={submit(handleError)}>
      <Grid container item spacing={2}>
        <Grid item xs={6}>
          <FormTextField
            fullWidth
            id={'8b6ad96b-8259-4596-b998-2406307cbd50'}
            control={control}
            label={'Nome completo'}
            name={'nomeCompleto'}
            fieldLimit={30}
          />
        </Grid>
        <Grid item xs={3}>
          <FormAutoComplete
            id={'961387cf-9a1c-4e21-abad-977d8740f127'}
            options={sexoOptions.map((sexo) => sexo.value)}
            getOptionLabel={getOptionSexo}
            fullWidth
            name={'sexo'}
            label={'Sexo'}
            control={control}
          />
        </Grid>
        <Grid item xs={3}>
          <FormAutoComplete
            id={'8b0d30b6-7e99-4a5e-9142-1d8ae224bfc0'}
            options={estadoCivilOptions.map((estadoCivil) => estadoCivil.value)}
            getOptionLabel={getOptionEstadoCivil}
            name={'sexo'}
            label={'Estado Civil'}
            fullWidth
            control={control}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={3}>
          <FormTextField
            fullWidth
            id={'e780cc34-75da-4b99-a89b-ca3d165c19d7'}
            control={control}
            fieldLimit={9}
            justNumber
            label={'CPF'}
            name={'cpf'}
          />
        </Grid>
        <Grid item xs={3}>
          <FormDatePicker
            id={'0129743b-4b4c-4258-8596-6dc1621bd8ec'}
            control={control}
            name={'nascimento'}
            label={'Nascimento'}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <FormTextField
            fullWidth
            id={'24d84439-1cb5-4284-9f69-e2e6faaf7120'}
            control={control}
            label={'Telefone'}
            name={'telefone'}
          />
        </Grid>
        <Grid container item xs={3} justifyContent={'center'}>
          <Grid item>
            <FormSwitch
              id={'13616948-b0e9-4cf8-b1d2-e4e1449c363e'}
              selectedLabel={'Sim'}
              notSelectedLabel={'Não'}
              formControlProps={{
                sx: {
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }}
              title={'Esse número é WhatsApp?'}
              name={'isWpp'}
              control={control}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={6}>
          <FormTextField
            fullWidth
            id={'55df5757-0b26-4284-9c77-c48d66d98692'}
            control={control}
            label={'Email Principal'}
            name={'emailPrincipal'}
          />
        </Grid>
        <Grid item xs={6}>
          <FormTextField
            fullWidth
            id={'34b86e78-4e20-4147-b7e1-f0b1c6998713'}
            control={control}
            label={'Email Secundário'}
            name={'emailSecundario'}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={3}>
          <FormTextField
            fullWidth
            id={'10d254d2-c6de-4ae5-a85e-c5b54356ece2'}
            control={control}
            pattern={'##.###-###'}
            justNumber
            label={'CEP'}
            name={'cep'}
          />
        </Grid>
        <Grid item xs={3}>
          <FormAutoComplete
            id={'c0c57cf9-3866-49ed-b571-5b346c855149'}
            options={formataEstados()}
            label={'Estados'}
            name={'estado'}
            control={control}
            getOptionLabel={getOptionEstados}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <FormAutoComplete
            id={'971c51fa-073a-42ce-ad77-44f5bf8c7d96'}
            disabled={!estadoState}
            options={cidades}
            label={'Cidades'}
            name={'cidade'}
            control={control}
            fullWidth
          />
        </Grid>
        <Grid container item xs={3} justifyContent={'center'}>
          <Grid item>
            <FormSwitch
              id={'c247ec7a-4e43-495e-ae77-eef6b96e6503'}
              selectedLabel={'Sim'}
              formControlProps={{
                sx: {
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }}
              notSelectedLabel={'Não'}
              title={'Desejo receber apenas vagas para esta cidade?'}
              name={'vagasSomenteCidadeSelecionada'}
              control={control}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={9}>
          <FormTextField
            fullWidth
            id={'2ec2c06c-8d5f-4703-9ee3-2b17293e4df8'}
            control={control}
            label={'Endereço'}
            name={'endereco'}
          />
        </Grid>
        <Grid item xs={3}>
          <FormTextField
            fullWidth
            id={'de09c3bb-5ae0-447f-8166-349c047175ba'}
            control={control}
            justNumber
            fieldLimit={10}
            label={'Número'}
            name={'numero'}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={9}>
          <FormAutoComplete
            id={'6e1ff640-ae9e-4f58-b77b-06e31acad39b'}
            options={formataTipoVaga()}
            label={'Tenho interesse em vagas para:'}
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
            id={'d6914e29-6e0a-4cd8-91fe-6b78c2e2fa17'}
            options={formataNivelSenioridade()}
            label={'Nível de Senioridade'}
            name={'tipoSenioridade'}
            getOptionLabel={getOptionSenioridade}
            multiple
            control={control}
            fullWidth
            disableCloseOnSelect
          />
        </Grid>
      </Grid>
      <Grid container item>
        {checkBoxes.map((checkBox) => (
          <Grid item xs={12} key={checkBox.id}>
            <Stack direction={'row'} alignItems={'center'}>
              <FormCheckBox
                id={'0efa3946-1d82-45df-a70b-896d787ff2b1'}
                label={checkBox.label}
                name={checkBox.field}
                control={control}
              />
              {checkBox.field === 'aceitarTermosDePrivacidade' && (
                <IconPoliticaPrivacidade
                  handleRejeitaPoliticas={() => setValue('aceitarTermosDePrivacidade', false)}
                  handleAcceptPoliticas={() => setValue('aceitarTermosDePrivacidade', true)}
                />
              )}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid container item spacing={2} justifyContent={'space-around'} sx={{ mt: 3 }}>
        <Grid item xs={3}>
          <CustomButton
            id={'0862f0c4-6d87-44bc-b34b-bfe60f8a538a'}
            fullWidth
            variant={'outlined'}
            onClick={onClickCancelar}
          >
            Cancelar
          </CustomButton>
        </Grid>
        <Grid item xs={3}>
          <CustomButton
            id={'eba82bdd-fe39-413e-ba5e-761c38d1bfee'}
            fullWidth
            variant={'contained'}
            type={'submit'}
          >
            Confirmar
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ConfiguracaoForm
