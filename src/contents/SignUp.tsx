import * as React from 'react'
import { TopLayout } from './top'
import { SignUpLoginLayout } from 'src/components/Modal/SignUpLoginModal'

export const SignUpLayout: React.FC = () => {
  const [showSignUpModal, setShowSignUpModal] = React.useState(true)
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  return (
    <>
      <TopLayout />
      <SignUpLoginLayout
        showSignUpModal={showSignUpModal}
        showLoginModal={showLoginModal}
        setShowSignUpModal={setShowSignUpModal}
        setShowLoginModal={setShowLoginModal}
      />
    </>
  )
}
