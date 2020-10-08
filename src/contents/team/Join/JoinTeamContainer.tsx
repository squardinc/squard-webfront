import * as React from 'react'
import JoinTeam from 'src/contents/team/Join/JoinTeamPage'
import { ITeamClass } from 'src/models/team'
import { withTheme } from 'src/context/ThemeContext'
import { useQuery, useMutation, gql } from '@apollo/client'
import { requestSubscription } from 'src/graphql/mutations'
import { RequestSubscriptionMutation, RequestSubscriptionMutationVariables } from 'src/types/API'
import { checkout } from 'src/external/stripe'
import { UserContext } from 'src/context/UserContext'

interface JoinTeamContainerProps {
  teamId: string
}
const JoinTeamContainer: React.FC<JoinTeamContainerProps> = ({ teamId }) => {
  const { user } = React.useContext(UserContext)
  const [request, data] = useMutation<RequestSubscriptionMutation, RequestSubscriptionMutationVariables>(gql(requestSubscription));
  const teamData: ITeamClass[] = [
    {
      main: 'ANGELS',
      sub: 'エンジェル',
      monthlyPrice: 1000,
      benefits: [
        'Slackワークスペースへの招待します。',
        'Notionにてチームの情報を一部公開します。',
        '月1回開催される\r\nZoom定例会にご招待します。',
      ],
      classType: 'Angels',
      classId: 'squard_angels'
    },
    {
      main: 'PROSPECTS',
      sub: 'プロスペクト',
      monthlyPrice: 15000,
      benefits: [
        'Angelsの特典がすべて利用できます。',
        'GitHub/XDにアクセスできます。',
        'Slackでメンバーへの質問を\r\n優先的に受け付けます。',
        '週1で代表がまとめる\r\nブロックチェーンレポートを共有します。',
        'その他限定情報へのアクセスが可能です。',
      ],
      classType: 'Prospects',
      classId: 'squard_prospects'
    },
    {
      main: 'GALLERIES',
      sub: 'ギャラリー',
      monthlyPrice: 0,
      benefits: [
        'フィードにて進捗を方向します。\r\n※フィード機能は現在開発中です',
      ],
      classType: 'Galleries',
      classId: 'xxxxxx'
    },
  ]
  return <JoinTeam
    requestSubscription={async (teamClassId) => {
      const response = await request({ variables: { userId: user.id, teamId, teamClassId, origin: window.location.host } })
      if (response.data?.requestSubscription?.sessionId)
        checkout(response.data?.requestSubscription?.sessionId)
    }}
    isLoading={false}
    loggedIn={user.loggedIn}
    teamData={teamData}
  />
}

export default withTheme(JoinTeamContainer, 'light')
