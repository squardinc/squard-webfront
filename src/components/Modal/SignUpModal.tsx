import * as React from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { ErrorModal } from './ErrorModal'
import { fadeIn } from '../../utils/Modal'

type SignUpComponentProps = ModalProps & {
  showLoginModal: VoidFunction
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({
  closeModal,
  showLoginModal,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [registrationUserId, setRegistrationUserId] = React.useState('')
  const [errorMesasge, setErrorMessage] = React.useState('')

  React.useEffect(() => {
    fadeIn()
  }, [registrationUserId, errorMesasge])

  return (
    <>
      {!errorMesasge ? (
        <DefaultModalContainer closeModal={closeModal}>
          {!registrationUserId ? (
            <>
              <TextDisplay className="text-4xl font-semibold">
                SignUp
              </TextDisplay>
              <TextDisplay className="mb-8 text-sm">
                アカウント情報を入力してください
              </TextDisplay>
              <RoundInput
                value={email}
                onChange={setEmail}
                placeholder="メールアドレス"
                faIcon={faEnvelope}
              />
              <RoundInput
                value={password}
                onChange={setPassword}
                placeholder="パスワード"
                type="password"
                faIcon={faLock}
              />
              <TextDisplay className="flex justify-end w-full text-sm mb-4">
                ※8文字以上16文字以内
              </TextDisplay>
              <div className="flex flex-col">
                <RoundButton
                  className="text-black bg-white"
                  text="新規登録"
                  onClick={async () => {
                    const { host, pathname } = window.location
                    AuthService.signUp(email, password, host, pathname).then(
                      (userId) => {
                        setRegistrationUserId(userId)
                      },
                      (err) => {
                        setErrorMessage(err)
                      }
                    )
                    setErrorMessage('')
                  }}
                />
              </div>
              <TextDisplay className="mt-10 flex justify-center text-sm">
                アカウントをお持ちですか？ログインは
                <div
                  className="underline cursor-pointer"
                  onClick={() => showLoginModal()}
                >
                  こちら
                </div>
              </TextDisplay>
            </>
          ) : (
            <>
              <TextDisplay className="text-4xl font-semibold">
                SignUp
              </TextDisplay>
              <TextDisplay className="mb-8 text-sm">
                {email}{' '}
                宛にご確認のメールを送信しました。メッセージ内リンクから登録を完了してください。
              </TextDisplay>
              <RoundButton
                className="border-2 text-lg"
                text="OK"
                onClick={closeModal}
              />
            </>
          )}
        </DefaultModalContainer>
      ) : (
        <ErrorModal
          message={errorMesasge}
          closeModal={() => setErrorMessage('')}
        />
      )}
    </>
  )
}

export const SignUpModal = asModal(SignUpComponent)
