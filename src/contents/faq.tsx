import * as React from 'react'

import { FAQ } from './faq/FAQ'
import { withTheme } from 'src/context/ThemeContext'

export const Page: React.FC = () => {
  return (
    <div>
      <FAQ></FAQ>
    </div>
  )
}

export const FAQPage = withTheme(Page, 'dark')
