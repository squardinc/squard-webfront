import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { Link } from 'gatsby'

import backgroundImage from 'src/images/background.png'
import Logo from 'src/assets/Logo.svg'
import styles from './Footer.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

export const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <TextDisplay>
          <div className={styles.titleSub}>What's the</div>
          <div className={styles.titleMain}>Squard?</div>
        </TextDisplay>
        <TextDisplay className={styles.description}>
          Webサービス「Squard（スクアード）」は、新時代のチームメイキングソリューションを提供するコラボレーションプラットフォームです。
          <br />
          チームページから<span className='text-yellow-400'>Prospects（プロスペクト）</span>または<span className='text-yellow-400'>Angels（エンジェル）</span>としてチームに参加することで、コミュニケーションツールや限定コンテンツのアクセスなど<span className='text-yellow-400'>Class（クラス）</span>ごとに定められた各種特典を受け取ることができます。
        </TextDisplay>
        <TextDisplay className={styles.question + ' pb-4'}>
          「Prospects」や「Angels」についてはこちら↓
        </TextDisplay>
        <Link to='/about'>
          <TextDisplay className="border-2 border-yellow-400 rounded-full h-12 w-full flex items-center justify-center mr-2">
            <span className="text-yellow-400 font-bold text-lg">Class（クラス）ってなに？</span>
          </TextDisplay>
        </Link>
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
      <TextDisplay className={styles.copyright}>
        Copyright ©2020 Squard, Inc. All Rights Reseverd.
      </TextDisplay>
    </div>
  )
}
