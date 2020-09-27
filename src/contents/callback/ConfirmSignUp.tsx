import * as React from 'react'
import { SignUpLoginLayout } from 'src/components/Modal/SignUpLoginModal'
import { TeamLayout } from 'src/contents/team/TeamLayout'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { Auth } from 'aws-amplify'
import { parseSearchParams } from 'src/utils/UrlParser'
import { AuthService } from 'src/services/AuthService'
import { ErrorModal } from 'src/components/Modal/ErrorModal'
import { navigate } from 'gatsby'

export const ConfirmSignUpLayout: React.FC = () => {
  const [showSignUpCompleteModal, setShowSignUpComplteModal] = React.useState(false)
  const [showErrorMessage, setShowErrorMessage] = React.useState(false)
  const [hasRequested, setHasRequested] = React.useState(false)
  const params = parseSearchParams(window.location.search)
  if (!hasRequested && params.id && params.code) {
    AuthService.confirmSignUp(params.id, params.code).then(
      () => { setShowSignUpComplteModal(true) },
      () => { setShowErrorMessage(true) }
    )
    setHasRequested(true)
  }
  return (
    <>
      <TeamLayout />
      {showSignUpCompleteModal
        ? <CompleteModal
          title='ご登録が完了しました。'
          closeModal={() => {
            setShowSignUpComplteModal(false)
            navigate(params.path || '/')
          }}
        />
        : ''
      }
      {showErrorMessage
        ? <ErrorModal
          message='登録に失敗しました。再度登録し直すか、管理者までお問い合わせください。'
          closeModal={() => {
            setShowErrorMessage(false)
            navigate(params.path || '/')
          }}
        />
        : ''
      }
    </>
  )
}