import * as React from 'react'
import { SignUpModal } from './SignUpModal'
import { LoginModal } from './LoginModal'
import { LogoutModal } from './LogoutModal'
import { PasswordResetRequestModal } from './PasswordResetRequestModal'
import { withFadeOut } from 'src/utils/Modal'

interface AuthModalProps {
  openModal: ModalType
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>
}
export type ModalType =
  | 'SignUp'
  | 'Login'
  | 'PasswordResetRequest'
  | 'Logout'
  | 'Closed'
export const AuthModal: React.FC<AuthModalProps> = ({
  openModal,
  setOpenModal,
}) => {
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
          showPasswordResetRequestModal={withFadeOut(() =>
            setOpenModal('PasswordResetRequest')
          )}
        />
      )}
      {openModal === 'PasswordResetRequest' && (
        <PasswordResetRequestModal closeModal={() => setOpenModal('Closed')} />
      )}
      {openModal === 'Logout' && (
        <LogoutModal closeModal={() => setOpenModal('Closed')} />
      )}
    </>
  )
}
