import * as React from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { Header } from 'src/components/Header/Header'
import { Footer } from 'src/components/Footer/Footer'
import { MetaData } from './MetaData'

export const PageWrapper: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <MetaData />
      <div className={`theme-${theme || 'dark'}`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
