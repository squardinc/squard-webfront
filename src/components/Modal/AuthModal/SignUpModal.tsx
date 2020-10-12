import * as React from 'react'
// import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from 'src/components/Modal/asModal'
import { DefaultModalContainer } from 'src/components/Modal/ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { MessageModal } from 'src/components/Modal/MessageModal'
import { EMailAddressInput } from 'src/components/Input/EMailAddressInput'
import { PasswordInput } from 'src/components/Input/PasswordInput'
import { validEmaliAddress } from 'src/utils/StringValidator'
import styled from 'styled-components'
import * as Const from '../../../styles/const'

const SignupContent = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`

const SignupTitle = styled.div`
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.bold};
  font-size: ${Const.fontSize.xl3};
  letter-spacing: 0.04em;
  padding-left: 10px;
`
const HintWrapper = styled.div`
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.dimlight};
  font-size: 10px;
  line-spacing: 1.8;
  display: flex;
  flex-wrap: nowrap;
  margin-right: 15px;
  margin-bottom: 5px;
`
const BottomWrapper = styled.div`
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.dimlight};
  font-size: ${Const.fontSize.xs};
  display: flex;
  justify-content: center;
  align-items:center;
  line-spacing: 1.8;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
  margin-bottom: 5px;
`

const Label = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.thin};
  font-size: ${Const.fontSize.xs};
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  padding-left: 10px;
`
const EmailWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
const RoundButton = styled.button`
  font-family: ${Const.fontFamily.sans};
  font-size: ${Const.fontSize.sm};
  font-weight: ${Const.fontWeight.dimlight};
  border-radius: 50vh;
  height: 45px;
  margin-bottom: 10px;
`

type SignUpComponentProps = ModalProps & {
  showLoginModal: (e: React.MouseEvent) => void
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({
  closeModal,
  showLoginModal,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const isSubmittable = React.useMemo(
    () => validEmaliAddress(email) && password.length >= 8,
    [email, password]
  )
  const [registrationUserId, setRegistrationUserId] = React.useState('')
  const [errorMesasge, setErrorMessage] = React.useState('')

  return (
    <>
      {registrationUserId && (
        <MessageModal
          title="SignUp"
          message={`${email} 宛にご確認のメールを送信しました。メッセージ内リンクから登録を完了してください。`}
          buttonText="OK"
          closeModal={closeModal}
        />
      )}
      {!errorMesasge ? (
        <DefaultModalContainer closeModal={closeModal}>
          <SignupContent>
            <SignupTitle>SignUp</SignupTitle>
            <Label>アカウント情報を入力してください</Label>
            <EmailWrapper>
              <EMailAddressInput value={email} onChange={setEmail} />
            </EmailWrapper>

            <PasswordInput value={password} onChange={setPassword} />
            <TextDisplay className="flex justify-end w-full text-sm mb-4">
              <HintWrapper>※8文字以上16文字以内</HintWrapper>
            </TextDisplay>
            <div className="flex flex-col">
              <RoundButton
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                }}
                disabled={!isSubmittable}
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
              >
                新規登録
              </RoundButton>
              <RoundButton
                style={{
                  color: 'white',
                  backgroundColor: '#3B5998',
                }}
                onClick={AuthService.loginWithFacebook}
              >
                Facebookで登録
              </RoundButton>
            </div>
            <TextDisplay>
              <BottomWrapper>
                アカウントをお持ちですか？ログインは
                <div
                  className="underline cursor-pointer"
                  onClick={showLoginModal}
                >
                  こちら
                </div>
              </BottomWrapper>
            </TextDisplay>
          </SignupContent>
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

export const SignUpModal = asModal(SignUpComponent)
