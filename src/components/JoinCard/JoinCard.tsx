import * as React from 'react'

import styles from './JoinCard.module.scss'

import { addComma } from 'src/utils/NumberFormatter'

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
          <div className={styles.nameMain}>{props.main}</div>
          <div className={styles.nameSub}>（{props.sub}）</div>
          <div className={styles.price}>￥{formattedPrice} / 月額</div>
        </div>
      </div>
      <div className={styles.entitlements}>
        {props.entitlements.map((el) => (
          <div className={styles.entitlement}>{el}</div>
        ))}
      </div>
      <div className={styles.joinNowWrapper}>
        <div className={styles.joinNow}>今すぐ参加する</div>
      </div>
    </div>
  )
}
