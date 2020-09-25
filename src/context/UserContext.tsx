import * as React from 'react';
import { LoginUser } from 'src/services/AuthService/interfaces';
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel';

interface UserContextInterface {
  user: LoginUser
  setUser: (User: LoginUser) => void
}
export const UserContext = React.createContext<UserContextInterface>({
  user: LoginUserModel.guest(),
  setUser: (user: LoginUser) => { },
})

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<LoginUser>(LoginUserModel.guest())
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
