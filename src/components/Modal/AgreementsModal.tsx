import { gql, useMutation } from '@apollo/client'
import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { Checkbox } from 'src/components/Checkbox'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { TERMS_OF_USE_VERSION } from 'src/contents/termsofuse/TermsOfUsePage'
import { UserContext } from 'src/context/UserContext'
import { agreeTermsOfUse } from 'src/graphql/mutations'
import { AuthService } from 'src/services/AuthService'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import { AgreeTermsOfUseMutation, AgreeTermsOfUseMutationVariables } from 'src/types/API'
import { formattedDateJp } from 'src/utils/date'
import { withFadeOut } from 'src/utils/Modal'
import ExternalLink from '../Link/ExternalLink'
import asModal, { ModalProps } from './asModal'
import { MessageComponent } from './MessageModal'
import { DefaultModalContainer } from './ModalContainer'

type AgreementsModalProps = ModalProps & {
  currentVersion?: string
  showLogoutModal?: (e: React.MouseEvent) => void
}
export const AgreementsComponent: React.FC<AgreementsModalProps> = ({
  showLogoutModal,
  closeModal,
  closable,
  currentVersion,
}) => {
  const { setUser } = React.useContext(UserContext)
  const [showAgreedTermsOfUseModal, setShowAgreedTermsOfUseModal] = React.useState(false)
  const [agreedTermsOfUse, setAgreedTermsOfUse] = React.useState(false)
  const [agreeTermsOfUseRequest, agreeTermsOfUseResponse] = useMutation<
    AgreeTermsOfUseMutation,
    AgreeTermsOfUseMutationVariables
  >(gql(agreeTermsOfUse))
  React.useEffect(() => {
    if (agreeTermsOfUseResponse.data) {
      withFadeOut(() => setShowAgreedTermsOfUseModal(true))({})
    }
  }, [agreeTermsOfUseResponse.data])

  return (
    <>
      {showAgreedTermsOfUseModal ? (
        <MessageComponent
          message="利用規約に同意頂きありがとうございます。引き続きSquardをご利用ください。"
          closeModal={closeModal}
        />
      ) : (
          <DefaultModalContainer closeModal={closeModal} closable={closable}>
            <TextDisplay className="text-3xl font-semibold text-center">{'利用規約への同意'}</TextDisplay>
            <div className="flex flex-col justify-center items-center">
              <TextDisplay className="mb-8 whitespace-pre-wrap">
                {`ご利用を継続頂くには${formattedDateJp(
                  currentVersion || TERMS_OF_USE_VERSION
                )}施行の`}
                <ExternalLink href="/termsofuse" className="underline">
                  利用規約をご確認
              </ExternalLink>
              頂き、その内容について同意して頂く必要があります。
            </TextDisplay>
              <div className="flex justify-center items-center mb-2">
                <Checkbox
                  label="form-checkbox"
                  checked={agreedTermsOfUse}
                  onChange={(e) => setAgreedTermsOfUse(e.target.checked)}
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
                  agreeTermsOfUseRequest({
                    variables: { version: currentVersion || TERMS_OF_USE_VERSION },
                  })
                }}
                disabled={!agreedTermsOfUse}
              />
              <RoundButton
                className="border-2 text-lg"
                text="同意せず利用を中断する"
                onClick={async (e) => {
                  await AuthService.logout()
                  setUser(LoginUserModel.guest())
                  if (showLogoutModal) showLogoutModal(e)
                }}
              />
            </div>
          </DefaultModalContainer>
        )}
    </>
  )
}
export const AgreementsModal = asModal(AgreementsComponent, false)
