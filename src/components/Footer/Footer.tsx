import * as React from 'react'
import { Link } from 'gatsby'

import Logo from 'src/assets/Logo.svg'
import BlueLogo from 'src/assets/Logo_Blue.svg'
import styles from './Footer.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import { FooterWrapper } from './FooterWrapper'
import { ThemeContext } from 'src/context/ThemeContext'

export const Footer = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <FooterWrapper>
        <div className={styles.content}>
          <div
            className={`${styles.sitemap} ${
              theme === 'dark' ? 'text-theme-text-sub' : ''
            }`}
          >
            <TextDisplay className={styles.links}>
              <Link to="/faq">FAQ</Link>
              <Link to="/about">About</Link>
              <Link to="/company">Company</Link>
              <Link to="/privacypolicy">Privacy Policy</Link>
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
      <TextDisplay
        className={`${styles.copyright} background-theme-footer text-theme-text-sub`}
      >
        Copyright ©2020 Squard, Inc. All Rights Reseverd.
      </TextDisplay>
    </>
  )
}
