import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { CompleteModal } from './CompleteModal'
import { ErrorModal } from './ErrorModal'
import { UserContext } from 'src/context/UserContext'
import { AuthService } from 'src/services/AuthService'
import { EMailAddressInput } from '../Input/EMailAddressInput'
import { PasswordInput } from '../Input/PasswordInput'

type LoginComponentProps = ModalProps & {
  showSignUpModal: (e: React.MouseEvent) => void
  showPasswordResetRequestModal: (e: React.MouseEvent) => void
}
const LoginComponent: React.FC<LoginComponentProps> = ({ closeModal, showSignUpModal, showPasswordResetRequestModal }) => {
  const { user, setUser } = React.useContext(UserContext)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMesasge, setErrorMessage] = React.useState('')
  return (
    <>
      {!errorMesasge ?
        <DefaultModalContainer closeModal={closeModal}>
          {!user.loggedIn ?
            <>
              <TextDisplay className='text-4xl font-semibold'>Login</TextDisplay>
              <TextDisplay className='mb-8 text-sm'>ログイン情報を入力してください</TextDisplay>
              <form>
                <EMailAddressInput value={email} onChange={setEmail} />
                <PasswordInput value={password} onChange={setPassword} />
                <TextDisplay className='flex justify-end w-full text-sm mb-4'>パスワードを忘れた方は
              <div className='underline cursor-pointer' onClick={showPasswordResetRequestModal}>こちら</div>
                </TextDisplay>
                <div className='flex flex-col'>
                  <RoundButton className='text-black bg-white'
                    text='ログイン'
                    type='submit'
                    onClick={async (e) => {
                      AuthService.login(email, password).then(
                        (user) => { setUser(user) },
                        (err) => { setErrorMessage(err) }
                      )
                      e.preventDefault()
                      setErrorMessage('')
                    }} />
                  <RoundButton className='text-white bg-blue-700' text='Facebookでログイン' onClick={AuthService.loginWithFacebook} />
                </div>
              </form>
              <TextDisplay className='mt-10 flex justify-center text-sm'>まだ登録していませんか？新規登録は
              <button tabIndex={0} className='underline cursor-pointer' onClick={showSignUpModal}>こちら</button>
              </TextDisplay>
            </>
            :
            <CompleteModal
              title='Login Completed!'
              footerDescription='ログインしました'
              closeModal={closeModal}
            />
          }
        </DefaultModalContainer>
        : <ErrorModal message={errorMesasge} closeModal={() => setErrorMessage('')} />
      }
    </>
  )
}

export const LoginModal = asModal(LoginComponent)
