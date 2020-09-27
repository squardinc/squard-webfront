import * as React from 'react'
import { TeamLayout } from 'src/contents/team/TeamLayout'
import { parseSearchParams } from 'src/utils/UrlParser'
import { AuthService } from 'src/services/AuthService'
import { navigate } from 'gatsby'
import { ConfirmSignUpModal } from 'src/components/Modal/ConfirmSignUpModal'

export const ConfirmSignUpLayout: React.FC = () => {
  return (
    <>
      <TeamLayout />
      <ConfirmSignUpModal />
    </>
  )
}