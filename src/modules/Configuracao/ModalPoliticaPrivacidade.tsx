import CustomDialog from 'plc-shared/components/CustomDialog'
import { termosEPoliticaPrivacidade } from '../../termosEPoliticaPrivacidade'
import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

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
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsBlinking(!isOpen)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setIsBlinking((prev) => !prev)
      }, 250)
      return () => clearInterval(interval)
    }
  }, [])

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
      isOpen={isOpen && isBlinking}
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
