import * as React from 'react'
import { SignUpModal } from './SignUpModal'
import { LoginModal } from './LoginModal'

interface SignUpLoginLayoutProps {
  showSignUpModal: boolean
  setShowSignUpModal: React.Dispatch<React.SetStateAction<boolean>>
  showLoginModal: boolean
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>
  // setLoginUser: React.Dispatch<React.SetStateAction<any>> // FIXME
}
export const SignUpLoginLayout: React.FC<SignUpLoginLayoutProps> = ({
  showSignUpModal,
  setShowSignUpModal,
  showLoginModal,
  setShowLoginModal,
  setLoginUser,
}) => {
  return (
    <>
      {showSignUpModal ? (
        <SignUpModal
          closeModal={() => setShowSignUpModal(false)}
          showLoginModal={() => {
            setShowSignUpModal(false)
            setShowLoginModal(true)
          }}
        />
      ) : (
        ''
      )}
      {showLoginModal ? (
        <LoginModal
          closeModal={() => setShowLoginModal(false)}
          showSignUpModal={() => {
            setShowLoginModal(false)
            setShowSignUpModal(true)
          }}
        />
      ) : (
        ''
      )}
    </>
  )
}
