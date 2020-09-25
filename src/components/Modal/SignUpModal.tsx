import * as React from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'

type SignUpComponentProps = ModalProps & {
  showLoginModal: VoidFunction
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({ closeModal, showLoginModal }) => {
  return (
    <DefaultModalContainer closeModal={closeModal} >
      <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
      <TextDisplay className='mb-8 text-sm'>アカウント情報を入力してください</TextDisplay>
      <RoundInput placeholder='メールアドレス' faIcon={faEnvelope} />
      <RoundInput placeholder='パスワード' faIcon={faLock} />
      <TextDisplay className='flex justify-end w-full text-sm mb-4'>※8文字以上16文字以内</TextDisplay>
      <RoundButton className='text-black bg-white' text='新規登録' />
      <RoundButton className='text-white bg-blue-700' text='Facebookアカウントで登録' />
      <TextDisplay className='mt-10 flex justify-center text-sm'>
        アカウントをお持ちですか？ログインは
        <div className='underline cursor-pointer' onClick={() => showLoginModal()}>こちら</div>
      </TextDisplay>
    </DefaultModalContainer>
  )
}

export const SignUpModal = asModal(SignUpComponent)
