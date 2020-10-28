import { navigate } from 'gatsby'
import * as React from 'react'
import Loading from 'src/components/Loading'
import { AgreementsModal } from 'src/components/Modal/AgreementsModal'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { UserContext } from 'src/context/UserContext'
import { getPreviousPath } from 'src/utils/LocalStorage'

export const SocialSigninLayout: React.FC = () => {
  const { user } = React.useContext(UserContext)
  const [showModal, setShowModal] = React.useState(false)
  const [showAgreementModal, setShowAgreementModal] = React.useState(false)
  React.useEffect(() => {
    setShowModal(user.loggedIn)
  }, [user])
  return (
    <>
      {!showModal && !showAgreementModal && <Loading loading />}
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
    </>
  )
}

export default SocialSigninLayout
