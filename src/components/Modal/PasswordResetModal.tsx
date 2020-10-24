import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { MessageModal } from './MessageModal'
import { UserContext } from 'src/context/UserContext'
import { PasswordInput } from '../Input/PasswordInput'

type PasswordResetComponentProps = ModalProps & {
  username: string
  code: string
}
const PasswordResetComponent: React.FC<PasswordResetComponentProps> = ({
  username,
  code,
  closeModal,
}) => {
  const { setUser } = React.useContext(UserContext)
  const [password, setPassword] = React.useState('')
  const isSubmittable = React.useMemo(() => password.length >= 8, [password])
  const [succeeded, setSucceeded] = React.useState(false)
  const [errorMesasge, setErrorMessage] = React.useState('')

  return (
    <>
      {!errorMesasge ? (
        <DefaultModalContainer closeModal={closeModal}>
          <TextDisplay className="text-4xl font-semibold">Password Reset</TextDisplay>
          {!succeeded ? (
            <>
              <TextDisplay className="mb-8 text-sm">
                再設定するパスワードを入力してください
              </TextDisplay>
              <PasswordInput value={password} onChange={setPassword} />
              <div className="flex flex-col">
                <RoundButton
                  className={isSubmittable ? 'text-black bg-white' : 'text-gray-600 bg-gray-500'}
                  text="送信"
                  disabled={!isSubmittable}
                  onClick={async () => {
                    AuthService.resetPassword(username, code, password).then(
                      async () => {
                        setUser(await AuthService.login(username, password))
                        setSucceeded(true)
                      },
                      (err) => setErrorMessage(err)
                    )
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <TextDisplay className="mb-8 text-sm">パスワードの再設定が完了しました。</TextDisplay>
              <RoundButton className="border-2 text-lg" text="OK" onClick={closeModal} />
            </>
          )}
        </DefaultModalContainer>
      ) : (
        <MessageModal message={errorMesasge} closeModal={() => setErrorMessage('')} />
      )}
    </>
  )
}

export const PasswordResetModal = asModal(PasswordResetComponent)
