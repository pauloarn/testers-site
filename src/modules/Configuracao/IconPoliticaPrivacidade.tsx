import { Grid, IconButton, Typography } from '@mui/material'
import { CheckBoxesValues } from './ConfiguracaoForm'
import { FaQuestionCircle } from 'react-icons/fa'
import { useState } from 'react'
import ModalPoliticaPrivacidade from './ModalPoliticaPrivacidade'

interface IconPoliticaPrivacidadeProps {
  checkbox: CheckBoxesValues

  handleRejeitaPoliticas: () => void
  handleAcceptPoliticas: () => void
}

const IconPoliticaPrivacidade = ({
  checkbox,
  handleAcceptPoliticas,
  handleRejeitaPoliticas
}: IconPoliticaPrivacidadeProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Grid container alignItems={'center'} spacing={1}>
      <Grid item>
        <Typography>{checkbox.label}</Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={() => setIsModalOpen(true)} size={'small'}>
          <FaQuestionCircle />
        </IconButton>
      </Grid>
      <ModalPoliticaPrivacidade
        isOpen={isModalOpen}
        handleConfirm={() => {
          setIsModalOpen(false)
          handleAcceptPoliticas()
        }}
        handleClose={() => {
          handleRejeitaPoliticas()
          setIsModalOpen(false)
        }}
      />
    </Grid>
  )
}

export default IconPoliticaPrivacidade
