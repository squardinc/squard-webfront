import * as React from 'react'

import styles from './JoinCard.module.scss'

import { addComma } from 'src/utils/NumberFormatter'
import { TextDisplay } from '../TextDisplay/TextDisplay'

interface JoinCardProps {
  main: string
  sub: string
  monthlyPrice: number
  entitlements: string[]
}

export const JoinCard: React.FC<JoinCardProps> = (props) => {
  const formattedPrice = addComma(props.monthlyPrice)

  return (
    <div className={styles.card}>
      <div className={styles.flagWrapper}>
        <div className={styles.flag}>
          <TextDisplay className={styles.nameMain}>{props.main}</TextDisplay>
          <TextDisplay className={styles.nameSub}>（{props.sub}）</TextDisplay>
          <TextDisplay className={styles.price}>
            ￥{formattedPrice} / 月額
          </TextDisplay>
        </div>
      </div>
      <div className={styles.entitlements}>
        {props.entitlements.map((el, index) => (
          <TextDisplay key={index} className={styles.entitlement}>
            {el}
          </TextDisplay>
        ))}
      </div>
      <div className={styles.joinNowWrapper}>
        <TextDisplay className={styles.joinNow}>今すぐ参加する</TextDisplay>
      </div>
    </div>
  )
}
