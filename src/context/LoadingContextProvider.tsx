import * as React from 'react'
import { useApolloNetworkStatus } from 'src/Apollo'
import Loading from 'src/components/Loading'

interface LoadingContextInterface {
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}
export const LoadingContext = React.createContext<LoadingContextInterface>({
  isLoading: true,
  setLoading: (isLoading: boolean) => {},
})

export const LoadingContextProvider: React.FC = ({ children }) => {
  const [isLoading, setLoading] = React.useState(true)
  const networkStatus = useApolloNetworkStatus()
  React.useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      <Loading loading={isLoading || networkStatus.numPendingQueries > 0}></Loading>
    </LoadingContext.Provider>
  )
}
