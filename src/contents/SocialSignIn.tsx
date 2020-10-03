import * as React from 'react'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import { TopLayout } from './TopLayout'
import { UserContext } from 'src/context/UserContext'
import { CompleteModal } from 'src/components/Modal/CompleteModal'

export const SocialSigninLayout: React.FC = () => {
  const { user } = React.useContext(UserContext)
  const [showModal, setShowModal] = React.useState(false)
  React.useEffect(() => { setShowModal(user.loggedIn) }, [user])
  return (
    <>
      <TopLayout />
      {showModal ?
        <CompleteModal
          title='Login Completed!'
          footerDescription='ログインしました'
          closeModal={() => setShowModal(false)}
        />
        : ''}
    </>
  )
}
