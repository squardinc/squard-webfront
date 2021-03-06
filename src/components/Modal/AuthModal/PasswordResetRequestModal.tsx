import * as React from 'react'
// import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { LoadingContext } from 'src/context/LoadingContextProvider'
import { AuthService } from 'src/services/AuthService'
import { validEmaliAddress } from 'src/utils/StringValidator'
import styled from 'styled-components'
import * as Const from '../../../styles/const'
import { EMailAddressInput } from '../../Input/EMailAddressInput'
import { asModal, ModalProps } from '../asModal'
import { MessageModal } from '../MessageModal'
import { DefaultModalContainer } from '../ModalContainer'

const RoundButton = styled.button`
  font-size: ${Const.fontSize.sm};
  font-weight: ${Const.fontWeight.dimlight};
  border-radius: 50vh;
  height: 45px;
  margin-bottom: 10px;
  background: white;
  color: black;
`
const MessageBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

type PasswordResetRequestComponentProps = ModalProps & {}
const PasswordResetRequestComponent: React.FC<PasswordResetRequestComponentProps> = ({
  closeModal,
}) => {
  const [email, setEmail] = React.useState('')
  const [succeeded, setSucceeded] = React.useState(false)
  const isSubmittable = React.useMemo(() => validEmaliAddress(email), [email])
  const [errorMesasge, setErrorMessage] = React.useState('')
  const { setLoading } = React.useContext(LoadingContext)

  return (
    <>
      {!errorMesasge ? (
        <DefaultModalContainer closeModal={closeModal}>
          <TextDisplay className="text-4xl font-semibold">Password Reset</TextDisplay>
          {!succeeded ? (
            <>
              <TextDisplay className="mb-8 text-sm">
                ご登録のメールアドレスを入力してください
              </TextDisplay>
              <EMailAddressInput value={email} onChange={setEmail} />
              <div className="flex flex-col">
                <RoundButton
                  style={{
                    opacity: isSubmittable ? 1 : 0.7,
                  }}
                  disabled={!isSubmittable}
                  onClick={async () => {
                    const { host, pathname } = window.location
                    try {
                      setLoading(true)
                      await AuthService.resetPasswordRequest(email, host, pathname)
                      setSucceeded(true)
                      setLoading(false)
                    } catch (err) {
                      setLoading(false)
                      setErrorMessage(err)
                    }
                  }}
                >
                  送信
                </RoundButton>
              </div>
            </>
          ) : (
            <MessageBox>
              <TextDisplay className="mb-8 text-sm">
                {email} 宛にパスワード再設定用リンクを送信しました。
              </TextDisplay>
              <RoundButton
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                  width: '80%',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
                onClick={closeModal}
              >
                OK
              </RoundButton>
            </MessageBox>
          )}
        </DefaultModalContainer>
      ) : (
        <MessageModal message={errorMesasge} closeModal={() => setErrorMessage('')} />
      )}
    </>
  )
}

export const PasswordResetRequestModal = asModal(PasswordResetRequestComponent)
