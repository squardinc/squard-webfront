import * as React from 'react'
import { AuthService } from 'src/services/AuthService'
import { LoginUser } from 'src/services/AuthService/interfaces'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'

interface UserContextInterface {
  user: LoginUser
  setUser: (User: LoginUser) => void
  refreshTrigger: boolean
  refresh: () => void
}
export const UserContext = React.createContext<UserContextInterface>({
  user: LoginUserModel.guest(),
  setUser: (user: LoginUser) => {},
  refreshTrigger: false,
  refresh: () => {},
})

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<LoginUser>(LoginUserModel.guest())
  const [refreshTrigger, setRefreshTrigger] = React.useState(false)
  React.useEffect(() => {
    AuthService.intialize().then((user) => setUser(user))
  }, [])
  const refresh = () => setRefreshTrigger(!refreshTrigger)
  return (
    <UserContext.Provider value={{ user, setUser, refreshTrigger, refresh }}>
      {children}
    </UserContext.Provider>
  )
}
