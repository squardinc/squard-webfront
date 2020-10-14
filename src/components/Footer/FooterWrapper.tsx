import * as React from 'react'

import { ThemeContext } from 'src/context/ThemeContext'
import backgroundImage from 'src/images/background.png'

export const FooterWrapper: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <div className="bg-theme-bg-main text-theme-text-main">
      <div
        className="content-footer"
        style={
          theme === 'dark' ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
      >
        {children}
      </div>
    </div>
  )
}
