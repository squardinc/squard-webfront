import * as React from 'react'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { ErrorModal } from 'src/components/Modal/ErrorModal'
import { parseSearchParams } from 'src/utils/UrlParser'
import { AuthService } from 'src/services/AuthService'
import { fadeIn } from 'src/utils/Modal'

export const ConfirmSignUpModal: React.FC = () => {
  const [showSignUpCompleteModal, setShowSignUpCompleteModal] = React.useState(false)
  const [showErrorMessage, setShowErrorMessage] = React.useState(false)
  const params = parseSearchParams(window.location.search)
  React.useEffect(() => {
    if (params.id && params.code) {
      AuthService.confirmSignUp(params.id, params.code).then(
        () => { setShowSignUpCompleteModal(true) },
        () => { setShowErrorMessage(true) }
      )
    }
  }, [])
  React.useEffect(() => {
    fadeIn()
  }, [showSignUpCompleteModal, showErrorMessage])
  return (
    <>
      {showSignUpCompleteModal
        ? <CompleteModal
          title='登録完了'
          closeModal={() => {setShowSignUpCompleteModal(false)}}
        />
        : ''
      }
      {showErrorMessage
        ? <ErrorModal
          message='登録に失敗しました。再度登録し直すか、管理者までお問い合わせください。'
          closeModal={() =>  setShowErrorMessage(false)}
        />
        : ''
      }
    </>
  )
}