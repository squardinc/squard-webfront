import { gql, useMutation, useQuery } from '@apollo/client'
import * as React from 'react'
import JoinTeam from 'src/contents/team/Join/JoinTeamPage'
import { withTheme } from 'src/context/ThemeContext'
import { UserContext } from 'src/context/UserContext'
import { checkout } from 'src/external/stripe'
import { requestSubscription } from 'src/graphql/mutations'
import { getTeam } from 'src/graphql/queries'
import { ClassType } from 'src/models/person'
import { TeamClass } from 'src/models/team'
import {
  GetTeamQuery,
  RequestSubscriptionMutation,
  RequestSubscriptionMutationVariables
} from 'src/types/API'
import { parseSearchParams } from 'src/utils/UrlParser'

const JoinableClasses: ClassType[] = ['Angels', 'Prospects', 'Galleries']

interface JoinTeamContainerProps {
  teamId: string
}
const JoinTeamContainer: React.FC<JoinTeamContainerProps> = ({ teamId }) => {
  const params = parseSearchParams(window.location.search)
  const { user } = React.useContext(UserContext)
  const [request, _] = useMutation<
    RequestSubscriptionMutation,
    RequestSubscriptionMutationVariables
  >(gql(requestSubscription))
  const { loading, error, data } = useQuery<GetTeamQuery>(gql(getTeam), {
    variables: { id: teamId },
  })
  if (error) {
    // TODO
    return <></>
  }
  if (loading) {
    // TODO
    return <></>
  }
  if (!data?.getTeam) {
    return <></>
  }
  const team = data.getTeam
  const teamClasses = team.classes || []
  const joinableTeamClasses = JoinableClasses.map((joinableClass) => {
    const teamClass = teamClasses.find((each) => each?.classType === joinableClass)
    return new TeamClass(
      teamClass?.teamId,
      teamClass?.teamClassId,
      teamClass?.classType,
      teamClass?.benefits,
      teamClass?.price?.price || 0
    )
  })
  return (
    <JoinTeam
      requestSubscription={async (teamClassId) => {
        const response = await request({
          variables: { teamId, teamClassId, origin: window.location.host },
        })
        if (response.data?.requestSubscription?.sessionId)
          checkout(response.data?.requestSubscription?.sessionId)
      }}
      teamName={team.name || ''}
      isLoading={false}
      loggedIn={user.loggedIn}
      teamData={joinableTeamClasses}
      hasPaymentCancelled={params['payment_status'] === 'cancel'}
    />
  )
}

export default withTheme(JoinTeamContainer, 'light')
