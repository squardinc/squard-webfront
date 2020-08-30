import * as React from 'react'
import { Header } from 'src/components/Header/Header'
import { Footer } from 'src/components/Footer/Footer'
import { MetaData } from './MetaData'

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <>
      <MetaData />
      <Header />
        {children}
      <Footer />
    </>
  )
}

