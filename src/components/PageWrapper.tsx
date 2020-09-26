import * as React from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { UserContextProvider } from 'src/context/UserContext'
import { Header } from 'src/components/Header/Header'
import { Footer } from 'src/components/Footer/Footer'
import { MetaData } from './MetaData'

export const PageWrapper: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <MetaData />
      <div className={`theme-${theme || 'dark'}`}>
        <div className="page-base-container">
          <UserContextProvider>
            <Header />
            {children}
            <Footer />
          </UserContextProvider>
        </div>
      </div>
    </>
  )
}
