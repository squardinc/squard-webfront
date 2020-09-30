import * as React from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { UserContext } from 'src/context/UserContext'
import { Header } from 'src/components/Header/Header'
import { Footer } from 'src/components/Footer/Footer'
import { MetaData } from './MetaData'
import { AuthService } from 'src/services/AuthService'

export const PageWrapper: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <MetaData />
      <div className={`theme-${theme || 'dark'}`}>
        <div className="page-base-container bg-theme-bg-main text-theme-text-main">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
