import * as React from 'react'

import styles from './About.module.scss'

import { Description } from 'src/components/Description/Description'
import { Rocket } from 'src/components/Rocket/Rocket'

interface AboutProps {}

export const About: React.FC<AboutProps> = (props) => {
  return (
    <div>
      <Description>
        Squard（スクワード）は個人でも法人でもない新しいチームの形を定義するコラボレーションプラットフォームです。
        Class（クラス）によって参加者や後援者の区分を最適化することで、プロジェクトの成功に向けて最前線を走る人もそれを応援する人も、それぞれが最も活躍できる環境を実現しています。
      </Description>
      <div className={styles.visualizeArea}>
        <Rocket></Rocket>
      </div>
    </div>
  )
}
