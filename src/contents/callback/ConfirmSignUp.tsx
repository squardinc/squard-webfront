import * as React from 'react'
import { TeamLayout } from 'src/contents/team/TeamLayout'
import { ConfirmSignUpModal } from 'src/components/Modal/ConfirmSignUpModal'

export const ConfirmSignUpLayout: React.FC = () => {
  return (
    <>
      <TeamLayout />
      <ConfirmSignUpModal />
    </>
  )
}