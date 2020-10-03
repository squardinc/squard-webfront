import * as React from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { Header } from 'src/components/Header/Header'
import { MetaData } from './MetaData'
import { Copyright } from './Footer/Copyright'

export const PageWrapper: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <MetaData />
      <div className={`theme-${theme || 'dark'}`}>
        <div className="page-base-container bg-theme-bg-main text-theme-text-main">
          <Header />
          {children}
          <Copyright />
        </div>
      </div>
    </>
  )
}
