import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import Loading from 'src/components/Loading'
import { asModal, ModalProps } from 'src/components/Modal/asModal'
import { DefaultModalContainer } from 'src/components/Modal/ModalContainer'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { LoadingContext } from 'src/context/LoadingContextProvider'
import { UserContext } from 'src/context/UserContext'
import { AuthService } from 'src/services/AuthService'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'

type LogoutComponentProps = ModalProps & {
  message?: string
}
export const LogoutComponent: React.FC<LogoutComponentProps> = ({
  closeModal,
  message = 'ログアウトしました',
}) => {
  const { setLoading } = React.useContext(LoadingContext)
  const { user, setUser } = React.useContext(UserContext)
  React.useEffect(() => {
    AuthService.logout().then(() => {
      setLoading(false)
      setUser(LoginUserModel.guest())
    })
  }, [])
  if (user.loggedIn) return <Loading loading />
  return (
    <DefaultModalContainer closeModal={closeModal}>
      <div className="flex flex-col justify-center items-center font-semibold">
        <TextDisplay className="text-3xl">{}</TextDisplay>
        <TextDisplay className="mb-8 text-lg">{message}</TextDisplay>
        <RoundButton className="border-2 text-lg" text="Close" onClick={closeModal} />
      </div>
    </DefaultModalContainer>
  )
}
export const LogoutModal = asModal(LogoutComponent)
