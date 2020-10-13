import * as React from 'react'
import { Link } from 'gatsby'

import Logo from 'src/assets/Logo.svg'
import BlueLogo from 'src/assets/Logo_Blue.svg'
import styles from './Footer.module.scss'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { FooterWrapper } from './FooterWrapper'
import { ThemeContext } from 'src/context/ThemeContext'

interface SiteMapProps {
  backgroundColor?: string
}

export const SiteMap = (props?: SiteMapProps) => {
  const { theme } = React.useContext(ThemeContext)

  const styleBg =
    props && props.backgroundColor
      ? { backgroundColor: props.backgroundColor }
      : {}

  return (
    <>
      <FooterWrapper>
        <div className={styles.content} style={styleBg}>
          <div
            className={`${styles.sitemap} `}
          >
            <TextDisplay
              className={
                theme === 'dark' ? styles.links : styles.linksThemeWhite
              }
            >
              <Link to="/faq" style={{ height: '23px' }}>
                FAQ
              </Link>
              <Link to="/about" style={{ height: '23px' }}>
                About
              </Link>
              <Link to="/company" style={{ height: '23px' }}>
                Company
              </Link>
              <Link to="/privacypolicy" style={{ height: '23px' }}>
                Privacy Policy
              </Link>
            </TextDisplay>
            <Link to="/">
              {theme === 'dark' ? (
                <Logo className={styles.logo} />
              ) : (
                // FIXME Resize
                <BlueLogo className={styles.logo} />
              )}
            </Link>
          </div>
        </div>
      </FooterWrapper>
    </>
  )
}
