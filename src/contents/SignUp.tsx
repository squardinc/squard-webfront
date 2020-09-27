import * as React from 'react'
import { SignUpLoginLayout, ModalType } from 'src/components/Modal/SignUpLoginModal'
import { TeamLayout } from './team/TeamLayout'

export const SignUpLayout: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  return (
    <>
      <TeamLayout />
      <SignUpLoginLayout
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  )
}
