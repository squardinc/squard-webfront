import * as React from 'react'

import styles from './JoinCard.module.scss'

import { addComma } from 'src/utils/NumberFormatter'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import { RoundButton } from '../Button/DefaultButton'

interface JoinCardProps {
  roleId: string
  sub: string
  monthlyPrice: number
  entitlements: string[]
  loggedIn: boolean
  login: VoidFunction
  join: (roleId: string) => Promise<void>
}

export const JoinCard: React.FC<JoinCardProps> = ({
  roleId,
  sub,
  monthlyPrice,
  entitlements,
  loggedIn,
  login,
  join,
}) => {
  const formattedPrice = addComma(monthlyPrice)

  return (
    <div className={styles.card}>
      <div className={styles.flagWrapper}>
        <div className={styles.flag}>
          <TextDisplay className={styles.nameMain}>{roleId}</TextDisplay>
          <TextDisplay className={styles.nameSub}>（{sub}）</TextDisplay>
          <TextDisplay className={styles.price}>
            ￥{formattedPrice} / 月額
          </TextDisplay>
        </div>
      </div>
      <div className={styles.entitlements}>
        {entitlements.map((el, index) => (
          <TextDisplay key={index} className={styles.entitlement}>
            {el}
          </TextDisplay>
        ))}
      </div>
      <div className={styles.joinNowWrapper}>
        <RoundButton
          className={styles.joinNow}
          text="今すぐ参加する"
          onClick={() => (loggedIn ? join(roleId) : login())}
        />
      </div>
    </div>
  )
}
