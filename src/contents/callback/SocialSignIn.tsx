import { navigate } from 'gatsby'
import * as React from 'react'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { UserContext } from 'src/context/UserContext'
import { getPreviousPath } from 'src/utils/LocalStorage'

export const SocialSigninLayout: React.FC = () => {
  const { user } = React.useContext(UserContext)
  const [showModal, setShowModal] = React.useState(false)
  React.useEffect(() => {
    setShowModal(user.loggedIn)
  }, [user])
  return (
    <>
      {showModal ? (
        <CompleteModal
          title="Login Completed!"
          footerDescription="ログインしました"
          closeModal={() => {
            setShowModal(false)
            navigate(getPreviousPath())
          }}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default SocialSigninLayout
