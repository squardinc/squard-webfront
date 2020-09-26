import * as React from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { CompleteModal } from './CompleteModal'
import { ErrorModal } from './ErrorModal'
import { UserContext } from 'src/context/UserContext'
import { AuthService } from 'src/services/AuthService'

type LoginComponentProps = ModalProps & {
  showSignUpModal: VoidFunction
}
const LoginComponent: React.FC<LoginComponentProps> = ({ closeModal, showSignUpModal }) => {
  const { user, setUser } = React.useContext(UserContext)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMesasge, setErrorMessage] = React.useState('')

  React.useEffect(() => {
    setTimeout(() => {
      const element = document.getElementsByClassName('modal-transition')[1]
      if (element) {
        element.classList.remove('close')
        element.classList.add('open')
      }
    }, 100)
  }, [user, errorMesasge])

  return (
    <DefaultModalContainer closeModal={closeModal}>
      {!user.loggedIn ?
        <>
          <TextDisplay className='text-4xl font-semibold'>Login</TextDisplay>
          <TextDisplay className='mb-8 text-sm'>ログイン情報を入力してください</TextDisplay>
          <form>
            <RoundInput autoComplete='email' value={email} onChange={setEmail} placeholder='メールアドレス' faIcon={faEnvelope} />
            <RoundInput autoComplete='password' value={password} onChange={setPassword} placeholder='パスワード' type='password' faIcon={faLock} />
            <TextDisplay className='flex justify-end w-full text-sm mb-4'>パスワードを忘れた方はこちら</TextDisplay>
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
              <RoundButton className='text-white bg-blue-700' text='Facebookでログイン' />
            </div>
          </form>
          <TextDisplay className='mt-10 flex justify-center text-sm'>まだ登録していませんか？新規登録は
        <div className='underline cursor-pointer' onClick={() => showSignUpModal()}>こちら</div>
          </TextDisplay>
        </>
        :
        <CompleteModal
          title='Login Completed!'
          footerDescription='ログインしました'
          closeModal={closeModal}
        />}
      {errorMesasge ? <ErrorModal message={errorMesasge} closeModal={() => setErrorMessage('')} /> : ''}
    </DefaultModalContainer>
  )
}

export const LoginModal = asModal(LoginComponent)
