import * as React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { ErrorModal } from './ErrorModal'

type PasswordResetRequestComponentProps = ModalProps & {}
const PasswordResetRequestComponent: React.FC<PasswordResetRequestComponentProps> = ({ closeModal }) => {
  const [email, setEmail] = React.useState('')
  const [succeeded, setSucceeded] = React.useState(false)
  const [errorMesasge, setErrorMessage] = React.useState('')

  return (
    <>
      {!errorMesasge ?
        <DefaultModalContainer closeModal={closeModal} >
          <TextDisplay className='text-4xl font-semibold'>Password Reset</TextDisplay>
          {!succeeded ?
            <>
              <TextDisplay className='mb-8 text-sm'>ご登録のメールアドレスを入力してください</TextDisplay>
              <RoundInput value={email} onChange={setEmail} placeholder='メールアドレス' faIcon={faEnvelope} />
              <div className='flex flex-col'>
                <RoundButton className='text-black bg-white' text='送信' onClick={async () => {
                  const { host, pathname } = window.location
                  AuthService.resetPasswordRequest(email, host, pathname).then(
                    () => setSucceeded(true),
                    (err) => setErrorMessage(err)
                  )
                }} />
              </div>
            </>
            :
            <>
              <TextDisplay className='mb-8 text-sm'>{email} 宛にパスワード再設定用リンクを送信しました。</TextDisplay>
              <RoundButton className='border-2 text-lg' text='OK' onClick={closeModal} />
            </>
          }
        </DefaultModalContainer >
        : <ErrorModal message={errorMesasge} closeModal={() => setErrorMessage('')} />}
    </>
  )
}

export const PasswordResetRequestModal = asModal(PasswordResetRequestComponent)
