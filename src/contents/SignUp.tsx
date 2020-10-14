import * as React from 'react'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import { TopLayout } from './TopLayout'

export const SignUpLayout: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<ModalType>('SignUp')
  return (
    <>
      <TopLayout />
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
