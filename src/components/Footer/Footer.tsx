import * as React from 'react'
import { StaticImageFluid } from '../Image'

import styles from './Footer.module.scss'
import { DefaultButton } from '../Button/DefaultButton'
import { Link } from 'gatsby'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <StaticImageFluid image='background' />
      </div>
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
          <StaticImageFluid image='footerLogo' />
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright ©2020 Squard, Inc. All Rights Reseverd.
      </div>
    </div>
  )
}

