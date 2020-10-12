import * as React from 'react'
import { ConfirmSignUpModal } from 'src/components/Modal/ConfirmSignUpModal'
import { TopLayout } from '../TopLayout'

export const ConfirmSignUpLayout: React.FC = () => {
  return (
    <>
      <TopLayout />
      <ConfirmSignUpModal />
    </>
  )
}
