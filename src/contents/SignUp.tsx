import * as React from 'react'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import { TeamLayout } from './team/TeamLayout'

export const SignUpLayout: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  return (
    <>
      <TeamLayout />
      <AuthModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  )
}
