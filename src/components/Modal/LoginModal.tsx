import * as React from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { CompleteModal } from './CompleteModal'
import { ErrorModal } from './ErrorModal'

type LoginComponentProps = ModalProps & {
  showSignUpModal: VoidFunction
}
const LoginComponent: React.FC<LoginComponentProps> = ({ closeModal, showSignUpModal }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [succeeded, setSucceeded] = React.useState(false)
  const [errorMesasge, setErrorMessage] = React.useState('')
  return (
    <DefaultModalContainer closeModal={closeModal}>
      {!succeeded ?
        <>
          <TextDisplay className='text-4xl font-semibold'>Login</TextDisplay>
          <TextDisplay className='mb-8 text-sm'>ログイン情報を入力してください</TextDisplay>
          <RoundInput value={email} onChange={setEmail} placeholder='メールアドレス' faIcon={faEnvelope} />
          <RoundInput value={password} onChange={setPassword} placeholder='パスワード' type='password' faIcon={faLock} />
          <TextDisplay className='flex justify-end w-full text-sm mb-4'>パスワードを忘れた方はこちら</TextDisplay>
          <div className='flex flex-col'>
            <RoundButton className='text-black bg-white' text='ログイン' onClick={async () => {
              new AuthService().login(email, password).then(
                (credential) => { setSucceeded(!!credential) },
                (err) => { setErrorMessage(err) }
              )
            }} />
            <RoundButton className='text-white bg-blue-700' text='Facebookでログイン' />
          </div>
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
