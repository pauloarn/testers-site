import CustomDialog from 'plc-shared/components/CustomDialog'
import { termosEPoliticaPrivacidade } from '../../termosEPoliticaPrivacidade'
import { Grid, Typography } from '@mui/material'

interface ModalPoliticaPrivacidadeProps {
  isOpen: boolean
  handleClose: () => void
  handleConfirm: () => void
}

const ModalPoliticaPrivacidade = ({
  isOpen,
  handleClose,
  handleConfirm
}: ModalPoliticaPrivacidadeProps) => {
  const getDescription = () => {
    return (
      <Grid container sx={{ p: 1 }}>
        <Grid item>
          <Typography sx={{ textJustify: 'justify' }}>{termosEPoliticaPrivacidade}</Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <CustomDialog
      isOpen={isOpen}
      maxWidth={'lg'}
      handleClose={handleClose}
      fullWidth
      handleConfirm={() => handleConfirm()}
      contentComponent={getDescription()}
      title={'Termos e Política de Privacidade'}
    />
  )
}
export default ModalPoliticaPrivacidade
