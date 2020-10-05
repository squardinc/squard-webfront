import * as React from 'react'
import LeaveTeam from 'src/contents/team/Leave/LeaveTeamPage'
import { ITeam } from 'src/models/team'
import { withTheme } from 'src/context/ThemeContext'

// TODO Teamデータを動的に書き換える
const LeaveTeamContainer = () => {
  const teamData: ITeam = {
    main: 'ANGELS',
    sub: 'エンジェル',
    monthlyPrice: 1000,
    entitlements: [
      'Slackワークスペースへの招待',
      'GitHub, XDファイルへのアクセス',
      '定例Zoomミーティングへの招待',
    ],
  }

  return <LeaveTeam isLoading={false} teamData={teamData} />
}

export default withTheme(LeaveTeamContainer, 'light')
