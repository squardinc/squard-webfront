import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { Link } from 'gatsby'

import backgroundImage from 'src/images/background.png'
import Logo from 'src/assets/Logo.svg'
import styles from './Footer.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

export const Footer = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.content}>
          <div className={styles.sitemap}>
            <TextDisplay className={styles.links}>
              <Link to='/faq'>FAQ</Link>
              <Link to='/about'>About</Link>
              <Link to='/company'>Company</Link>
              <Link to='/privacypolicy'>Privacy Policy</Link>
            </TextDisplay>
            <Link to='/'>
              <Logo className={styles.logo} />
            </Link>
          </div>
        </div>
      </div>
      <TextDisplay className={styles.copyright}>
        Copyright ©2020 Squard, Inc. All Rights Reseverd.
      </TextDisplay>
    </>
  )
}
