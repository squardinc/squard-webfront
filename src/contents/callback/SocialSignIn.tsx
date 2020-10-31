import { navigate } from 'gatsby'
import * as React from 'react'
import Loading from 'src/components/Loading'
import { AgreementsModal } from 'src/components/Modal/AgreementsModal'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { ErrorMessageModal } from 'src/components/Modal/ErrorMessageModal'
import { UserContext } from 'src/context/UserContext'
import { getPreviousPath } from 'src/utils/LocalStorage'
import { parseSearchParams } from 'src/utils/UrlParser'

interface SearchParam {
  error_description?: string
}

export const SocialSigninLayout: React.FC = () => {
  const { user } = React.useContext(UserContext)
  const [showModal, setShowModal] = React.useState(false)
  const [showErrorModal, setShowErrorModal] = React.useState(false)
  const [showAgreementModal, setShowAgreementModal] = React.useState(false)
  React.useEffect(() => {
    const params: SearchParam = parseSearchParams(window.location.search)
    if (params.error_description) {
      setShowErrorModal(true)
      return
    }
    setShowModal(user.loggedIn)
  }, [user])
  return (
    <>
      {!showModal && !showAgreementModal && !showErrorModal && <Loading loading />}
      {showModal && (
        <CompleteModal
          title="Login Completed!"
          footerDescription="ログインしました"
          closeModal={() => {
            setShowModal(false)
            if (!user.agreementsVerified) {
              setShowAgreementModal(true)
              return
            }
            navigate(getPreviousPath())
          }}
        />
      )}
      {showAgreementModal && (
        <AgreementsModal
          closeModal={() => {
            navigate(getPreviousPath())
          }}
        />
      )}
      {showErrorModal && (
        <ErrorMessageModal
          closeModal={() => {
            setShowErrorModal(false)
            navigate(getPreviousPath())
          }}
          errorData={JSON.stringify({
            url: window.location.href,
          })}
        />
      )}
    </>
  )
}

export default SocialSigninLayout
