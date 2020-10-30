import { gql, useLazyQuery } from '@apollo/client'
import * as React from 'react'
import { getLoginInfo } from 'src/graphql/queries'
import { AuthService } from 'src/services/AuthService'
import { LoginUser } from 'src/services/AuthService/interfaces'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import { GetMyselfQuery } from 'src/types/API'

interface UserContextInterface {
  loginingUserId: string
  setLoginingUserId: (loginingUserId: string) => void
  user: LoginUser
  setUser: (User: LoginUser) => void
  refreshTrigger: boolean
  refresh: () => void
}
export const UserContext = React.createContext<UserContextInterface>({
  loginingUserId: '',
  setLoginingUserId: (loginingUserId: string) => {},
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
        queryMyself()
        setLoginingUserId(userId)
        return
      })
      return
    }
    if (!data && loginingUserId) {
      queryMyself()
      return
    }
    const { id, page, icon, agreements } = data?.getMyself || {}
    if (id && id !== user.id) {
      setUser(
        LoginUserModel.user(id, page?.id || '', icon || '', agreements?.agreedTermsOfUseVersions)
      )
    }
    setLoginingUserId('')
  }, [loginingUserId, user, data])
  const refresh = () => setRefreshTrigger(!refreshTrigger)
  return (
    <UserContext.Provider
      value={{ loginingUserId, setLoginingUserId, user, setUser, refreshTrigger, refresh }}
    >
      {children}
    </UserContext.Provider>
  )
}
