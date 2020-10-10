import * as React from 'react'

import styles from './About.module.scss'
import styled from 'styled-components'
// import { Description } from 'src/components/Description/Description'
import { Rocket } from 'src/components/Rocket/Rocket'
import * as Const from '../../../styles/const'
interface AboutProps {}

const Description = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.sm};
  letter-spacing: ${Const.letterSpacing.normal};
  line-height: 1.785;
  padding-left: 58px;
  padding-right: 58px;
  margin-bottom: 10px;
  text-align: left;
`

export const About: React.FC<AboutProps> = (props) => {
  return (
    <div>
      <Description>
        Squard（スクアード）は個人でも法人でもない新しいチームの形を定義するコラボレーションプラットフォームです。
        Class（クラス）によって参加者や後援者の区分を最適化することで、プロジェクトの成功に向けて最前線を走る人もそれを応援する人も、それぞれが最も活躍できる環境を実現しています。
      </Description>
      <div className={styles.visualizeArea}>
        <Rocket></Rocket>
      </div>
    </div>
  )
}
