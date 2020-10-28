import * as React from 'react'
import { withFadeOut } from 'src/utils/Modal'
import { ErrorMessageModal } from '../ErrorMessageModal'
import { LoginModal } from './LoginModal'
import { LogoutModal } from './LogoutModal'
import { PasswordResetRequestModal } from './PasswordResetRequestModal'
import { SignUpModal } from './SignUpModal'

interface AuthModalProps {
  openModal: ModalType
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>
}
export type ModalType = 'SignUp' | 'Login' | 'PasswordResetRequest' | 'Logout' | 'Closed'
export const AuthModal: React.FC<AuthModalProps> = ({ openModal, setOpenModal }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | JSX.Element | undefined>()
  if (errorMessage)
    return <ErrorMessageModal message={errorMessage} closeModal={() => setErrorMessage(undefined)} />
  return (
    <>
      {openModal === 'SignUp' && (
        <SignUpModal
          closeModal={() => setOpenModal('Closed')}
          showLoginModal={withFadeOut(() => setOpenModal('Login'))}
        />
      )}
      {openModal === 'Login' && (
        <LoginModal
          closeModal={() => setOpenModal('Closed')}
          showSignUpModal={withFadeOut(() => setOpenModal('SignUp'))}
          showPasswordResetRequestModal={withFadeOut(() => setOpenModal('PasswordResetRequest'))}
          setErrorMessage={setErrorMessage}
        />
      )}
      {openModal === 'PasswordResetRequest' && (
        <PasswordResetRequestModal closeModal={() => setOpenModal('Closed')} />
      )}
      {openModal === 'Logout' && <LogoutModal closeModal={() => setOpenModal('Closed')} />}
    </>
  )
}
