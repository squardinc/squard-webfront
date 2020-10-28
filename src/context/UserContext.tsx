import { gql, useLazyQuery } from '@apollo/client'
import * as React from 'react'
import { getLoginInfo } from 'src/graphql/queries'
import { AuthService } from 'src/services/AuthService'
import { LoginUser } from 'src/services/AuthService/interfaces'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import { GetMyselfQuery } from 'src/types/API'

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
  const [loginingUserId, setLoginingUserId] = React.useState('')
  const [queryMyself, { data, error }] = useLazyQuery<GetMyselfQuery>(gql(getLoginInfo))
  const [refreshTrigger, setRefreshTrigger] = React.useState(false)
  React.useEffect(() => {
    if (!user.loggedIn && !loginingUserId) {
      AuthService.intialize().then((userId) => {
        if (!userId) {
          return
        }
        setLoginingUserId(userId)
        queryMyself()
      })
      return
    }
    const { id, icon, agreements } = data?.getMyself || {}
    if (id && icon !== user.icon) {
      setUser(LoginUserModel.user(id, icon || '', agreements?.agreedTermsOfUseVersions))
    }
    setLoginingUserId('')
  }, [user, data])
  const refresh = () => setRefreshTrigger(!refreshTrigger)
  return (
    <UserContext.Provider value={{ user, setUser, refreshTrigger, refresh }}>
      {children}
    </UserContext.Provider>
  )
}
