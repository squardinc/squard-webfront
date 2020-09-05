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
        <DefaultButton text='Class（クラス）ってなに？' />
        <div className={styles.sitemap}>
          <div className={styles.links}>
            <Link to='/'>FAQ</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Company</Link>
            <Link to='/'>Privacy Policy</Link>
          </div>
          <Logo className={styles.logo} />
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright ©2020 Squard, Inc. All Rights Reseverd.
      </div>
    </div>
  )
}

