import * as React from 'react'
import { asModal, ModalProps } from './asModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faTimes } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from '../Input/Input'
import { RoundButton } from '../Button/DefaultButton'
import { TextDisplay } from '../TextDisplay/TextDisplay'

type LoginComponentProps = ModalProps & {
  showSignUpModal: VoidFunction
}
const LoginComponent: React.FC<LoginComponentProps> = ({ closeModal, showSignUpModal }) => {
  return (
    <div className='bg-v-gradient text-white p-6 rounded-xl w-7/9'>
      <div className='flex justify-end w-full'>
        <FontAwesomeIcon icon={faTimes} className='text-white cursor-pointer' onClick={closeModal} />
      </div>
      <TextDisplay className='text-4xl font-semibold'>Login</TextDisplay>
      <TextDisplay className='mb-8 text-sm'>ログイン情報を入力してください</TextDisplay>
      <RoundInput placeholder='メールアドレス' faIcon={faEnvelope} />
      <RoundInput placeholder='パスワード' faIcon={faLock} />
      <TextDisplay className='flex justify-end w-full text-sm mb-4'>パスワードを忘れた方はこちら</TextDisplay>
      <RoundButton textColor='text-black' bgColor='bg-white' text='ログイン' />
      <RoundButton textColor='text-white' bgColor='bg-blue-700' text='Facebookでログイン' />
      <TextDisplay className='mt-10 flex justify-center text-sm'>まだ登録していませんか？新規登録は
        <div className='underline cursor-pointer' onClick={() => showSignUpModal()}>こちら</div>
      </TextDisplay>
    </div>
  )
}

export const LoginModal = asModal(LoginComponent)
