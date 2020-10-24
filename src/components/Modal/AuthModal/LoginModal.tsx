import * as React from 'react'
import { EMailAddressInput } from 'src/components/Input/EMailAddressInput'
import { PasswordInput } from 'src/components/Input/PasswordInput'
import Loading from 'src/components/Loading'
import { asModal, ModalProps } from 'src/components/Modal/asModal'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { MessageModal } from 'src/components/Modal/MessageModal'
import { DefaultModalContainer } from 'src/components/Modal/ModalContainer'
// import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { UserContext } from 'src/context/UserContext'
import { AuthService } from 'src/services/AuthService'
import { validEmaliAddress } from 'src/utils/StringValidator'
import styled from 'styled-components'
import * as Const from '../../../styles/const'

const LoginContent = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`

const LoginTitle = styled.div`
  font-weight: ${Const.fontWeight.bold};
  font-size: ${Const.fontSize.xl3};
  letter-spacing: 0.04em;
  padding-left: 10px;
`
const ForgotPassWrapper = styled.div`
  font-weight: ${Const.fontWeight.light};
  font-size: 10px;
  line-spacing: 1.8;
  display: flex;
  flex-wrap: nowrap;
  margin-right: 15px;
  margin-bottom: 5px;
`
const Label = styled.div`
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.xs};
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  padding-left: 10px;
`
const EmailWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const BottomWrapper = styled.div`
  font-weight: ${Const.fontWeight.dimlight};
  font-size: ${Const.fontSize.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 5px;
`
const RoundButton = styled.button`
  font-size: ${Const.fontSize.sm};
  font-weight: ${Const.fontWeight.dimlight};
  border-radius: 50vh;
  height: 45px;
  margin-bottom: 10px;
  ${(props) => props.disabled && 'cursor-not-allowed'}
`

interface LoginFormProps {
  isLoading: boolean
  login: (e: React.MouseEvent, email: string, password: string) => Promise<void>
  closeModal: (e: React.MouseEvent) => void
  showPasswordResetRequestModal: (e: React.MouseEvent) => void
  showSignUpModal: (e: React.MouseEvent) => void
}
const LoginFormModal: React.FC<LoginFormProps> = ({
  isLoading,
  login,
  closeModal,
  showPasswordResetRequestModal,
  showSignUpModal,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const isSubmittable = React.useMemo(() => validEmaliAddress(email) && password.length >= 8, [
    email,
    password,
  ])
  return (
    <DefaultModalContainer closeModal={closeModal}>
      <Loading fromModal={true} loading={isLoading} />
      <LoginContent>
        <LoginTitle>
          <TextDisplay>Login</TextDisplay>
        </LoginTitle>
        <Label>
          <TextDisplay>ログイン情報を入力してください</TextDisplay>
        </Label>
        <form>
          <EmailWrapper>
            <EMailAddressInput value={email} onChange={setEmail} />
          </EmailWrapper>

          <PasswordInput value={password} onChange={setPassword} />
          <TextDisplay className="flex justify-end w-full text-sm mb-4">
            <ForgotPassWrapper>
              <TextDisplay>パスワードを忘れた方は</TextDisplay>
              <div className="underline cursor-pointer" onClick={showPasswordResetRequestModal}>
                <TextDisplay> こちら</TextDisplay>
              </div>
            </ForgotPassWrapper>
          </TextDisplay>
          <div className="flex flex-col">
            <RoundButton
              style={{
                color: 'black',
                backgroundColor: isSubmittable ? 'white' : 'gray',
                opacity: isSubmittable ? '' : '0.8',
              }}
              type="submit"
              disabled={!isSubmittable}
              onClick={(e) => login(e, email, password)}
            >
              <TextDisplay>ログイン</TextDisplay>
            </RoundButton>
            <RoundButton
              style={{
                color: 'white',
                backgroundColor: '#3B5998',
              }}
              onClick={(e) => {
                e.preventDefault()
                AuthService.loginWithFacebook()
              }}
            >
              <TextDisplay>Facebookでログイン</TextDisplay>
            </RoundButton>
          </div>
        </form>

        <BottomWrapper>
          <TextDisplay>まだ登録していませんか？新規登録は</TextDisplay>
          <button onClick={showSignUpModal}>
            <TextDisplay style={{ textDecoration: 'underline' }}>こちら</TextDisplay>
          </button>
        </BottomWrapper>
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
  const [isLoading, setLoading] = React.useState<boolean>(false)

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
          isLoading={isLoading}
          login={async (e, email, password) => {
            e.preventDefault()
            try {
              setLoading(true)
              const user = await AuthService.login(email, password)
              setUser(user)
              setLoading(false)
            } catch (err) {
              setErrorMessage(err)
            }
          }}
          closeModal={closeModal}
          showSignUpModal={showSignUpModal}
          showPasswordResetRequestModal={showPasswordResetRequestModal}
        />
      ) : (
        <MessageModal message={errorMesasge} closeModal={() => setErrorMessage('')} />
      )}
    </>
  )
}

export const LoginModal = asModal(LoginComponent)
