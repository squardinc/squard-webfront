import * as React from 'react'
import { SignUpLoginLayout } from 'src/components/Modal/SignUpLoginModal'
import { TeamLayout } from './team/TeamLayout'

export const SignUpLayout: React.FC = () => {
  const [showSignUpModal, setShowSignUpModal] = React.useState(true)
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  return (
    <>
      <TeamLayout />
      <SignUpLoginLayout
        showSignUpModal={showSignUpModal}
        showLoginModal={showLoginModal}
        setShowSignUpModal={setShowSignUpModal}
        setShowLoginModal={setShowLoginModal}
      />
    </>
  )
}
