import * as React from 'react'
import { LoginUser } from 'src/services/AuthService/interfaces'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import { AuthService } from 'src/services/AuthService'

interface UserContextInterface {
  user: LoginUser
  setUser: (User: LoginUser) => void
}
export const UserContext = React.createContext<UserContextInterface>({
  user: LoginUserModel.guest(),
  setUser: (user: LoginUser) => {},
})

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<LoginUser>(LoginUserModel.guest())
  React.useEffect(() => {
    AuthService.intialize().then((user) => setUser(user))
  }, [])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
