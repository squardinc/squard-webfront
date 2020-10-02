import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from 'src/components/Modal/asModal'
import { DefaultModalContainer } from 'src/components/Modal/ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { ErrorModal } from 'src/components/Modal/ErrorModal'
import { EMailAddressInput } from 'src/components/Input/EMailAddressInput'
import { PasswordInput } from 'src/components/Input/PasswordInput'
import { validEmaliAddress } from 'src/utils/StringValidator'

type SignUpComponentProps = ModalProps & {
  showLoginModal: (e: React.MouseEvent) => void
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({ closeModal, showLoginModal }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const isSubmittable = React.useMemo(() => (validEmaliAddress(email) && password.length >= 8), [email, password])
  const [registrationUserId, setRegistrationUserId] = React.useState('')
  const [errorMesasge, setErrorMessage] = React.useState('')

  return (
    <>
      {!errorMesasge ?
        <DefaultModalContainer closeModal={closeModal} >
          {!registrationUserId ?
            <>
              <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
              <TextDisplay className='mb-8 text-sm'>アカウント情報を入力してください</TextDisplay>
              <EMailAddressInput value={email} onChange={setEmail} />
              <PasswordInput value={password} onChange={setPassword} />
              <TextDisplay className='flex justify-end w-full text-sm mb-4'>※8文字以上16文字以内</TextDisplay>
              <div className='flex flex-col'>
                <RoundButton
                  className={isSubmittable ? 'text-black bg-white' : 'text-gray-600 bg-gray-500'}
                  text='新規登録'
                  disabled={!isSubmittable}
                  onClick={async () => {
                    const { host, pathname } = window.location
                    AuthService.signUp(email, password, host, pathname).then(
                      (userId) => { setRegistrationUserId(userId) },
                      (err) => { setErrorMessage(err) }
                    )
                    setErrorMessage('')
                  }} />
              </div>
              <TextDisplay className='mt-10 flex justify-center text-sm'>
                アカウントをお持ちですか？ログインは
                <div className='underline cursor-pointer' onClick={showLoginModal}>こちら</div>
              </TextDisplay>
            </>
            :
            <>
              <TextDisplay className='text-4xl font-semibold'>SignUp</TextDisplay>
              <TextDisplay className='mb-8 text-sm'>{email} 宛にご確認のメールを送信しました。メッセージ内リンクから登録を完了してください。</TextDisplay>
              <RoundButton className='border-2 text-lg' text='OK' onClick={closeModal} />
            </>
          }
        </DefaultModalContainer >
        : <ErrorModal message={errorMesasge} closeModal={() => setErrorMessage('')} />
      }
    </>
  )
}

export const SignUpModal = asModal(SignUpComponent)
