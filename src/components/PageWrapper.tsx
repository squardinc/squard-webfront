import * as React from 'react'
import { Header } from 'src/components/Header/Header'
import { Footer } from 'src/components/Footer/Footer'

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

