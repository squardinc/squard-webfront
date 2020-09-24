import * as React from 'react'

import styles from './JoinTeam.module.scss'

import { JoinCard } from 'src/components/JoinCard/JoinCard'
import { Heading3 } from 'src/components/Heading3/Heading3'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { ThemeContext, withTheme } from 'src/context/ThemeContext'

const Page: React.FC = (props) => {
  React.useContext(ThemeContext).setTheme('light')
  const classes = [
    {
      main: 'ANGELS',
      sub: 'エンジェル',
      monthlyPrice: 1000,
      entitlements: [
        'Slackワークスペースへの招待',
        'GitHub, XDファイルへのアクセス',
        '定例Zoomミーティングへの招待',
      ],
    },
    {
      main: 'PROSPECTS',
      sub: 'プロスペクト',
      monthlyPrice: 15000,
      entitlements: [
        'Slackワークスペースへの招待',
        'GitHub, XDファイルへのアクセス',
        '定例Zoomミーティングへの招待',
      ],
    },
    {
      main: 'GALLERIES',
      sub: 'ギャラリー',
      monthlyPrice: 0,
      entitlements: [
        'Slackワークスペースへの招待',
        'GitHub, XDファイルへのアクセス',
        '定例Zoomミーティングへの招待',
      ],
    },
  ]

  return (
    <div className={styles.pageWrapper}>
      <Heading3>Join The Team</Heading3>
      <div className={styles.joinInfo}>
        <div className={styles.joinTeam}>
          <span className={styles.teamName}>Squard</span>に参加する
        </div>
        <div className={styles.description}>
          チームが設定した月々のサブスクリプション料金を支払いProspectsやAngelsとしてチームに参加することで、様々な特典を受け取ることができます。
        </div>
      </div>
      <div className={styles.classCardWrapper}>
        {classes.map((el) => (
          <JoinCard
            main={el.main}
            sub={el.sub}
            monthlyPrice={el.monthlyPrice}
            entitlements={el.entitlements}
          />
        ))}
      </div>
      <DefaultFooter lightTheme />
    </div>
  )
}

export const JoinTeamPage = withTheme(Page, 'light')
