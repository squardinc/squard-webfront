import * as React from 'react'
import { asModal, ModalProps } from './asModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faTimes } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from '../Input/Input'
import { RoundButton } from '../Button/DefaultButton'
import { TextDisplay } from '../TextDisplay/TextDisplay'

type SignUpComponentProps = ModalProps & {
  showLoginModal: VoidFunction
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({ closeModal, showLoginModal }) => {
  return (
    <div className='bg-v-gradient text-white p-6 rounded-xl w-7/9'>
      <div className='flex justify-end w-full'>
        <FontAwesomeIcon icon={faTimes} className='text-white cursor-pointer' onClick={closeModal} />
      </div>
      <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
      <TextDisplay className='mb-8 text-sm'>アカウント情報を入力してください</TextDisplay>
      <RoundInput placeholder='メールアドレス' faIcon={faEnvelope} />
      <RoundInput placeholder='パスワード' faIcon={faLock} />
      <TextDisplay className='flex justify-end w-full text-sm mb-4'>※8文字以上16文字以内</TextDisplay>
      <RoundButton textColor='text-black' bgColor='bg-white' text='新規登録' />
      <RoundButton textColor='text-white' bgColor='bg-blue-700' text='Facebookアカウントで登録' />
      <TextDisplay className='mt-10 flex justify-center text-sm'>
        アカウントをお持ちですか？ログインは
        <div className='underline cursor-pointer' onClick={() => showLoginModal()}>こちら</div>
      </TextDisplay>
    </div >
  )
}

export const SignUpModal = asModal(SignUpComponent)
