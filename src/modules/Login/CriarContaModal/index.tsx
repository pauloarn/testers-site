import { useState } from 'react'
import { CustomButton } from 'plc-shared/components/input'
import { CriarContaModalContent } from './CriarContaModalContent'

export const CriarContaModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => setIsOpenModal(false)

  const openModal = () => setIsOpenModal(true)

  return (
    <>
      <CustomButton
        id={'58d7bdb4-8085-4274-84cd-c489794ec505'}
        variant={'outlined'}
        fullWidth
        onClick={openModal}
      >
        Criar conta
      </CustomButton>
      <CriarContaModalContent isOpen={isOpenModal} closeModal={closeModal} />
    </>
  )
}
