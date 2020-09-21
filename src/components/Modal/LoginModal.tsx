import * as React from 'react'
import { asModal, ModalProps } from './asModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faTimes } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from '../Input/Input'
import { RoundButton } from '../Button/DefaultButton'

type LoginComponentProps = ModalProps & {}
const LoginComponent: React.FC<LoginComponentProps> = ({ closeModal }) => {
  return (
    <div className='bg-v-gradient text-white p-6 rounded-lg w-5/6'>
      <div className='flex justify-end w-full'>
        <FontAwesomeIcon icon={faTimes} className='text-white cursor-pointer' onClick={closeModal} />
      </div>
      <div className='text-4xl'>Login</div>
      <div className='mb-8 text-sm'>ログイン情報を入力してください</div>
      <RoundInput placeholder='メールアドレス' faIcon={faEnvelope} />
      <RoundInput placeholder='パスワード' faIcon={faLock} />
      <div className='flex justify-end w-full text-sm mb-4'>パスワードを忘れた方はこちら</div>
      <RoundButton textColor='text-black' bgColor='bg-white' text='ログイン' />
      <RoundButton textColor='text-white' bgColor='bg-blue-700' text='Facebookでログイン' />
      <div className='mt-6 flex justify-center text-sm'>まだ登録していませんか？新規登録はこちら</div>
    </div>
  )
}

export const LoginModal = asModal(LoginComponent)
