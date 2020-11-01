import { navigate } from 'gatsby'
import * as React from 'react'
import { LogoutModal } from 'src/components/Modal/AuthModal/LogoutModal'
import { getPreviousPath } from 'src/utils/LocalStorage'

export const LogoutLayout: React.FC = () => {
  return (
    <LogoutModal
      message="セッションの有効期限が切れています。再度ログインしてください。"
      closeModal={() => {
        navigate(getPreviousPath())
      }}
    />
  )
}

export default LogoutLayout
