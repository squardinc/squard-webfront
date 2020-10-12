import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from 'src/components/Modal/asModal'
import { DefaultModalContainer } from 'src/components/Modal/ModalContainer'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { MessageModal } from 'src/components/Modal/MessageModal'
import { UserContext } from 'src/context/UserContext'
import { AuthService } from 'src/services/AuthService'
import { EMailAddressInput } from 'src/components/Input/EMailAddressInput'
import { PasswordInput } from 'src/components/Input/PasswordInput'
import { validEmaliAddress } from 'src/utils/StringValidator'
import styled from 'styled-components'
import * as Const from '../../../styles/const'

const LoginContent = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`

const LoginTitle = styled.div`
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.bold};
  font-size: ${Const.fontSize.xl3};
  letter-spacing: 0.04em;
`
const ForgotPassWrapper = styled.div`
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.regular};
  font-size: 10px;
  line-spacing: 1.8;
  display: flex;
  flex-wrap: nowrap;
  margin-right: 15px;
  margin-bottom: 5px;
`
const Label = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.xs};
  letter-spacing: 0.04em;
  margin-bottom: 40px;
`
const EmailWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

interface LoginFormProps {
  login: (e: React.MouseEvent, email: string, password: string) => Promise<void>
  closeModal: (e: React.MouseEvent) => void
  showPasswordResetRequestModal: (e: React.MouseEvent) => void
  showSignUpModal: (e: React.MouseEvent) => void
}
const LoginFormModal: React.FC<LoginFormProps> = ({
  login,
  closeModal,
  showPasswordResetRequestModal,
  showSignUpModal,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const isSubmittable = React.useMemo(
    () => validEmaliAddress(email) && password.length >= 8,
    [email, password]
  )
  return (
    <DefaultModalContainer closeModal={closeModal}>
      <LoginContent>
        <LoginTitle>Login</LoginTitle>
        <Label>ログイン情報を入力してください</Label>
        <form>
          <EmailWrapper>
            <EMailAddressInput value={email} onChange={setEmail} />
          </EmailWrapper>

          <PasswordInput value={password} onChange={setPassword} />
          <TextDisplay className="flex justify-end w-full text-sm mb-4">
            <ForgotPassWrapper>
              パスワードを忘れた方は
              <div
                className="underline cursor-pointer"
                onClick={showPasswordResetRequestModal}
              >
                こちら
              </div>
            </ForgotPassWrapper>
          </TextDisplay>
          <div className="flex flex-col">
            <RoundButton
              className={
                isSubmittable
                  ? 'text-black bg-white'
                  : 'text-gray-600 bg-gray-500'
              }
              text="ログイン"
              type="submit"
              disabled={!isSubmittable}
              onClick={(e) => login(e, email, password)}
            />
            <RoundButton
              className="text-white bg-blue-700"
              text="Facebookでログイン"
              onClick={AuthService.loginWithFacebook}
            />
          </div>
        </form>
        <TextDisplay className="mt-10 flex justify-center text-sm">
          まだ登録していませんか？新規登録は
          <button
            className="underline cursor-pointer"
            onClick={showSignUpModal}
          >
            こちら
          </button>
        </TextDisplay>
      </LoginContent>
    </DefaultModalContainer>
  )
}

type LoginComponentProps = ModalProps & {
  showSignUpModal: (e: React.MouseEvent) => void
  showPasswordResetRequestModal: (e: React.MouseEvent) => void
}
const LoginComponent: React.FC<LoginComponentProps> = ({
  closeModal,
  showSignUpModal,
  showPasswordResetRequestModal,
}) => {
  const { user, setUser } = React.useContext(UserContext)
  const [errorMesasge, setErrorMessage] = React.useState('')
  return (
    <>
      {user.loggedIn && (
        <CompleteModal
          title="Login Completed!"
          footerDescription="ログインしました"
          closeModal={closeModal}
        />
      )}
      {!errorMesasge ? (
        <LoginFormModal
          login={async (e, email, password) => {
            AuthService.login(email, password).then(
              (user) => setUser(user),
              (err) => setErrorMessage(err)
            )
            e.preventDefault()
          }}
          closeModal={closeModal}
          showSignUpModal={showSignUpModal}
          showPasswordResetRequestModal={showPasswordResetRequestModal}
        />
      ) : (
        <MessageModal
          message={errorMesasge}
          closeModal={() => setErrorMessage('')}
        />
      )}
    </>
  )
}

export const LoginModal = asModal(LoginComponent)
