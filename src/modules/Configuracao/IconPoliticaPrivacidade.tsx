import { IconButton } from '@mui/material'
import { FaQuestionCircle } from 'react-icons/fa'
import { useState } from 'react'
import ModalPoliticaPrivacidade from './ModalPoliticaPrivacidade'

interface IconPoliticaPrivacidadeProps {
  handleRejeitaPoliticas: () => void
  handleAcceptPoliticas: () => void
}

const IconPoliticaPrivacidade = ({
  handleAcceptPoliticas,
  handleRejeitaPoliticas
}: IconPoliticaPrivacidadeProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setIsModalOpen(true)} size={'small'}>
        <FaQuestionCircle />
      </IconButton>
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
    </>
  )
}

export default IconPoliticaPrivacidade
