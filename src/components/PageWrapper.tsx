import React from 'react'
import { Header } from 'src/components/Header/Header'
import { ThemeContext } from 'src/context/ThemeContext'
import { Copyright } from './Footer/Copyright'
import { MetaData } from './MetaData'

export const PageWrapper: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <MetaData />
      <div id={"app-base-body"} className={`theme-${theme || 'dark'}`}>
        <div className="page-base-container bg-theme-bg-main text-theme-text-main">
          <Header />
          <div  className="page-base-body">
            {children}
          </div>
          <Copyright />
        </div>
      </div>
    </>
  )
}
