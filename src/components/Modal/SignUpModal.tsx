import * as React from 'react'
import { faEnvelope, faLock, faCheck } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { CompleteModal } from './CompleteModal'
import { ErrorModal } from './ErrorModal'

type SignUpComponentProps = ModalProps & {
  showLoginModal: VoidFunction
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({ closeModal, showLoginModal }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [registrationUserId, setRegistrationUserId] = React.useState('')
  const [verificationCode, setVerificationCode] = React.useState('')
  const [succeeded, setSucceeded] = React.useState(false)
  const [errorMesasge, setErrorMessage] = React.useState('')

  return (
    <DefaultModalContainer closeModal={closeModal} >
      {!registrationUserId ?
        <>
          <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
          <TextDisplay className='mb-8 text-sm'>アカウント情報を入力してください</TextDisplay>
          <RoundInput value={email} onChange={setEmail} placeholder='メールアドレス' faIcon={faEnvelope} />
          <RoundInput value={password} onChange={setPassword} placeholder='パスワード' type='password' faIcon={faLock} />
          <TextDisplay className='flex justify-end w-full text-sm mb-4'>※8文字以上16文字以内</TextDisplay>
          <div className='flex flex-col'>
            <RoundButton className='text-black bg-white' text='新規登録' onClick={async () => {
              AuthService.signUp(email, password).then(
                (userId) => { setRegistrationUserId(userId) },
                (err) => { setErrorMessage(err) }
              )
            }} />
          </div>
          <TextDisplay className='mt-10 flex justify-center text-sm'>
            アカウントをお持ちですか？ログインは
          <div className='underline cursor-pointer' onClick={() => showLoginModal()}>こちら</div>
          </TextDisplay>
        </>
        :
        <>
          <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
          <TextDisplay className='mb-8 text-sm'>ご登録のメールアドレスに送られた認証コードを入力してください。</TextDisplay>
          <RoundInput value={verificationCode} onChange={setVerificationCode} placeholder='認証コード' faIcon={faCheck} />
          <RoundButton className='text-black bg-white' text='認証' onClick={async () => {
            AuthService.signUpConfirmation(registrationUserId, verificationCode).then(
                () => { setSucceeded(true) },
                (err) => { setErrorMessage(err) }
              )
          }} />
        </>
      }
      {succeeded
        ?
        <CompleteModal
          title='Registered!'
          footerDescription='登録が完了しました'
          closeModal={() => {
            setSucceeded(false)
            closeModal()
          }}
        />
        : ''}
      {errorMesasge ? <ErrorModal message={errorMesasge} closeModal={() => setErrorMessage('')} /> : ''}
    </DefaultModalContainer >
  )
}

export const SignUpModal = asModal(SignUpComponent)
