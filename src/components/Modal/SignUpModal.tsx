import * as React from 'react'
import { faEnvelope, faLock, faCheck } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { CompleteModal } from './CompleteModal'

type SignUpComponentProps = ModalProps & {
  showLoginModal: VoidFunction
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({ closeModal, showLoginModal }) => {
  const [userId, setUserId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [registrationUserId, setRegistrationUserId] = React.useState('')
  const [verificationCode, setVerificationCode] = React.useState('')
  const [succeeded, setSucceeded] = React.useState(false)

  return (
    <DefaultModalContainer closeModal={closeModal} >
      {!registrationUserId ?
        <>
          <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
          <TextDisplay className='mb-8 text-sm'>アカウント情報を入力してください</TextDisplay>
          <RoundInput value={userId} onChange={setUserId} placeholder='メールアドレス' faIcon={faEnvelope} />
          <RoundInput value={password} onChange={setPassword} placeholder='パスワード' type='password' faIcon={faLock} />
          <TextDisplay className='flex justify-end w-full text-sm mb-4'>※8文字以上16文字以内</TextDisplay>
          <div className='flex flex-col'>
            <RoundButton className='text-black bg-white' text='新規登録' onClick={async () => {
              const registrationUser = await new AuthService().signUp(userId, password).catch((err) => { console.log(err) }) // TODO
              if (registrationUser) {
                setRegistrationUserId(registrationUser.userId)
              }
            }} />
            <RoundButton className='text-white bg-blue-700' text='Facebookアカウントで登録' />
          </div>
          <TextDisplay className='mt-10 flex justify-center text-sm'>
            アカウントをお持ちですか？ログインは
          <div className='underline cursor-pointer' onClick={() => showLoginModal()}>こちら</div>
          </TextDisplay>
        </>
        :
        <>
          <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
          <TextDisplay className='mb-8 text-sm'>認証コードを入力してください</TextDisplay>
          <RoundInput value={verificationCode} onChange={setVerificationCode} placeholder='認証コード' faIcon={faCheck} />
          <RoundButton className='text-black bg-white' text='認証' onClick={async () => {
            await new AuthService().signUpConfirmation(registrationUserId, verificationCode).catch((err) => { console.log(err) })
            setSucceeded(true)
          }} />
        </>
      }
      {succeeded
        ?
        <CompleteModal
          title='SignUp'
          headerDescription='Registration Complteted!'
          footerDescription='登録が完了しました'
          closeModal={closeModal}
        />
        : ''}
    </DefaultModalContainer >
  )
}

export const SignUpModal = asModal(SignUpComponent)
