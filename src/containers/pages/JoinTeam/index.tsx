import * as React from 'react'
import JoinTeam from 'src/components/pages/JoinTeam'
import { ITeam } from 'src/models/team'
import { withTheme } from 'src/context/ThemeContext'

const JoinTeamContainer = () => {
  const teamData: ITeam[] = [
    {
      main: 'ANGELS',
      sub: 'エンジェル',
      monthlyPrice: 1000,
      entitlements: [
        'Slackワークスペースへの招待します。',
        'Notionにてチームの情報を一部公開します。',
        '月1回開催される\r\nZoom定例会にご招待します。',
      ],
    },
    {
      main: 'PROSPECTS',
      sub: 'プロスペクト',
      monthlyPrice: 15000,
      entitlements: [
        'Angelsの特典がすべて利用できます。',
        'GitHub/XDにアクセスできます。',
        'Slackでメンバーへの質問を\r\n優先的に受け付けます。',
        '週1で代表がまとめる\r\nブロックチェーンレポートを共有します。',
        'その他限定情報へのアクセスが可能です。',   
      ],
    },
    {
      main: 'GALLERIES',
      sub: 'ギャラリー',
      monthlyPrice: 0,
      entitlements: [
        'フィードにて進捗を方向します。\r\n※フィード機能は現在開発中です',
      ],
    },
  ]
  return <JoinTeam isLoading={false} teamData={teamData} />
}

export default withTheme(JoinTeamContainer, 'light')
