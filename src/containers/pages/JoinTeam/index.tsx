import * as React from 'react'
import JoinTeam from '../../../components/pages/JoinTeam'
import { ITeam } from '../../../models/team'

export const JoinTeamContainer = () => {
  const teamData: ITeam[] = [
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
  return <JoinTeam isLoading={false} teamData={teamData} />
}

export default JoinTeamContainer
