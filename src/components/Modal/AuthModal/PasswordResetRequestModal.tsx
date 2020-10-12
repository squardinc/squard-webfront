import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from '../asModal'
import { DefaultModalContainer } from '../ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { MessageModal } from '../MessageModal'
import { EMailAddressInput } from '../../Input/EMailAddressInput'
import { validEmaliAddress } from 'src/utils/StringValidator'

type PasswordResetRequestComponentProps = ModalProps & {}
const PasswordResetRequestComponent: React.FC<PasswordResetRequestComponentProps> = ({
  closeModal,
}) => {
  const [email, setEmail] = React.useState('')
  const [succeeded, setSucceeded] = React.useState(false)
  const isSubmittable = React.useMemo(() => validEmaliAddress(email), [email])
  const [errorMesasge, setErrorMessage] = React.useState('')

  return (
    <>
      {!errorMesasge ? (
        <DefaultModalContainer closeModal={closeModal}>
          <TextDisplay className="text-4xl font-semibold">
            Password Reset
          </TextDisplay>
          {!succeeded ? (
            <>
              <TextDisplay className='mb-8 text-sm'>ご登録のメールアドレスを入力してください</TextDisplay>
              <EMailAddressInput value={email} onChange={setEmail} />
              <div className='flex flex-col'>
                <RoundButton
                  className={isSubmittable ? 'text-black bg-white' : 'text-gray-600 bg-gray-500'}
                  text='送信'
                  disabled={!isSubmittable}
                  onClick={async () => {
                    const { host, pathname } = window.location
                    AuthService.resetPasswordRequest(email, host, pathname).then(
                      () => setSucceeded(true),
                      (err) => setErrorMessage(err)
                    )
                  }} />
              </div>
            </>
          ) : (
            <>
              <TextDisplay className="mb-8 text-sm">
                {email} 宛にパスワード再設定用リンクを送信しました。
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
        <MessageModal
          message={errorMesasge}
          closeModal={() => setErrorMessage('')}
        />
      )}
    </>
  )
}

export const PasswordResetRequestModal = asModal(PasswordResetRequestComponent)
