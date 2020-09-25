import * as React from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'

type LoginComponentProps = ModalProps & {
  showSignUpModal: VoidFunction
}
const LoginComponent: React.FC<LoginComponentProps> = ({ closeModal, showSignUpModal }) => {
  return (
    <DefaultModalContainer closeModal={closeModal}>
      <TextDisplay className='text-4xl font-semibold'>Login</TextDisplay>
      <TextDisplay className='mb-8 text-sm'>ログイン情報を入力してください</TextDisplay>
      <RoundInput placeholder='メールアドレス' faIcon={faEnvelope} />
      <RoundInput placeholder='パスワード' faIcon={faLock} />
      <TextDisplay className='flex justify-end w-full text-sm mb-4'>パスワードを忘れた方はこちら</TextDisplay>
      <RoundButton className='text-black bg-white' text='ログイン' />
      <RoundButton className='text-white bg-blue-700' text='Facebookでログイン' />
      <TextDisplay className='mt-10 flex justify-center text-sm'>まだ登録していませんか？新規登録は
        <div className='underline cursor-pointer' onClick={() => showSignUpModal()}>こちら</div>
      </TextDisplay>
    </DefaultModalContainer>
  )
}

export const LoginModal = asModal(LoginComponent)
