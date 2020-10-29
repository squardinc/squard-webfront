import { navigate } from 'gatsby'
import * as React from 'react'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { MessageModal } from 'src/components/Modal/MessageModal'
import { AuthService } from 'src/services/AuthService'
import { parseSearchParams } from 'src/utils/UrlParser'

export const ConfirmSignUpModal: React.FC = () => {
  const [showSignUpCompleteModal, setShowSignUpCompleteModal] = React.useState(false)
  const [showErrorMessage, setShowErrorMessage] = React.useState(false)
  const params = parseSearchParams(window.location.search)
  React.useEffect(() => {
    if (params.id && params.code) {
      AuthService.confirmSignUp(params.id, params.code).then(
        () => {
          setShowSignUpCompleteModal(true)
        },
        () => {
          setShowErrorMessage(true)
        }
      )
    }
  }, [])
  return (
    <>
      {showSignUpCompleteModal && (
        <CompleteModal
          title="登録完了"
          footerDescription="ご登録の情報でログイン頂けます。"
          closeModal={() => {
            setShowSignUpCompleteModal(false)
            navigate(params.path || '/')
          }}
        />
      )}
      {showErrorMessage && (
        <MessageModal
          message="登録に失敗しました。再度登録し直すか、管理者までお問い合わせください。"
          closeModal={() => {
            setShowErrorMessage(false)
            navigate(params.path || '/')
          }}
        />
      )}
    </>
  )
}
