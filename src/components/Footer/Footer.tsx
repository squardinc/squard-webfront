import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { Link } from 'gatsby'

import backgroundImage from 'src/images/background.png'
import Logo from 'src/assets/Logo.svg'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <div className={styles.titleSub}>What's the</div>
        <div className={styles.titleMain}>Squard?</div>
        <div className={styles.description}>
          Webサービス「Squard（スクアード）」は、個人でもなく法人でもない新しい働き方の実現を目標に、新時代のチームメイキングソリューションを提供するコラボレーションプラットフォームです。
          <br />
          チームページからProspects（プロスペクト）またはAngels（エンジェル）としてチームに参加することで、チームが定めた各種特典を受け取ることができます。
        </div>
        <div className={styles.question}>
          「Prospects」や「Angels」についてはこちら↓
        </div>
        <Link to='/about'>
          <DefaultButton text='Class（クラス）ってなに？' />
        </Link>
        <div className={styles.sitemap}>
          <div className={styles.links}>
            <Link to='/faq'>FAQ</Link>
            <Link to='/about'>About</Link>
            <Link to='/company'>Company</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
          </div>
          <Link to='/'>
            <Logo className={styles.logo} />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright ©2020 Squard, Inc. All Rights Reseverd.
      </div>
    </div>
  )
}

