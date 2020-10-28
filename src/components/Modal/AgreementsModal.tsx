import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { TERMS_OF_USE_VERSION } from 'src/contents/termsofuse/TermsOfUsePage'
import { UserContext } from 'src/context/UserContext'
import { AuthService } from 'src/services/AuthService'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import ExternalLink from '../Link/ExternalLink'
import { ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'

type AgreementsModalProps = ModalProps & {}
export const AgreementsModal: React.FC<AgreementsModalProps> = ({ closeModal, closable }) => {
  const { setUser } = React.useContext(UserContext)
  const [agreeTermsOfUse, setAgreeTermsOfUse] = React.useState(false)
  return (
    <DefaultModalContainer closeModal={closeModal} closable={closable}>
      <TextDisplay className="text-3xl font-semibold">{'利用規約の同意'}</TextDisplay>
      <div className="flex flex-col justify-center items-center">
        <TextDisplay className="mb-8 whitespace-pre-wrap">
          {
            '利用規約が更新されました。利用を継続するには最新の利用規約をご確認頂き、同意を頂く必要があります。'
          }
        </TextDisplay>
        <div className="flex justify-center items-center mb-2">
          <input
            type="checkbox"
            checked={agreeTermsOfUse}
            className="form-checkbox"
            onChange={(e) => setAgreeTermsOfUse(e.target.checked)}
          />
          <div className="ml-2">
            <ExternalLink href="/termsofuse" className="underline">
              利用規約
            </ExternalLink>
            に同意する
          </div>
        </div>
        <RoundButton
          className="border-2 text-lg"
          text="同意して利用を継続する"
          onClick={() => {
            // agree with version
            console.log(TERMS_OF_USE_VERSION)
          }}
          disabled={!agreeTermsOfUse}
        />
        <RoundButton
          className="border-2 text-lg"
          text="同意せず利用を中断する"
          onClick={async (e) => {
            await AuthService.logout()
            setUser(LoginUserModel.guest())
          }}
        />
      </div>
    </DefaultModalContainer>
  )
}
