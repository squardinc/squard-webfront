import React, { lazy } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { MetaData } from './MetaData'
const Header = lazy(() => import('src/components/Header/Header'))
const Copyright = lazy(() => import('./Footer/Copyright'))

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
