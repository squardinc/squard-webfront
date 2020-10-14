import * as React from 'react'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { UserContext } from 'src/context/UserContext'
import { TopLayout } from './TopLayout'

export const SocialSigninLayout: React.FC = () => {
  const { user } = React.useContext(UserContext)
  const [showModal, setShowModal] = React.useState(false)
  React.useEffect(() => {
    setShowModal(user.loggedIn)
  }, [user])
  return (
    <>
      <TopLayout />
      {showModal ? (
        <CompleteModal
          title="Login Completed!"
          footerDescription="ログインしました"
          closeModal={() => setShowModal(false)}
        />
      ) : (
        ''
      )}
    </>
  )
}
