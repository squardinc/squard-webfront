import * as React from 'react'

import styles from './JoinTeam.module.scss'

import { JoinCard } from 'src/components/JoinCard/JoinCard'
import { Heading3 } from 'src/components/Heading3/Heading3'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { ThemeContext, withTheme } from 'src/context/ThemeContext'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

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
      <Heading3>
        <TextDisplay>Join The Team</TextDisplay>
      </Heading3>
      <div className={styles.joinInfo}>
        <TextDisplay className={styles.joinTeam}>
          <span className={styles.teamName}>Squard</span>に参加する
        </TextDisplay>
        <TextDisplay className={styles.description}>
          チームが設定した月々のサブスクリプション料金を支払いProspectsやAngelsとしてチームに参加することで、様々な特典を受け取ることができます。
        </TextDisplay>
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
      <DefaultFooter />
    </div>
  )
}

export const JoinTeamPage = withTheme(Page, 'light')