import { gql, MutationResult, useMutation, useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import * as React from 'react'
import Loading from 'src/components/Loading'
import JoinTeam from 'src/contents/team/Join/JoinTeamPage'
import { withTheme } from 'src/context/ThemeContext'
import { UserContext } from 'src/context/UserContext'
import { checkout } from 'src/external/stripe'
import { joinAsGalleries, requestSubscription } from 'src/graphql/mutations'
import { getTeam } from 'src/graphql/queries'
import { ClassType } from 'src/models/person'
import { TeamClass } from 'src/models/team'
import {
  GetTeamQuery,
  JoinAsGalleriesMutation,
  JoinAsGalleriesMutationVariables,
  RequestSubscriptionMutation,
  RequestSubscriptionMutationVariables
} from 'src/types/API'
import { parseSearchParams } from 'src/utils/UrlParser'

const JoinableClasses: ClassType[] = ['Angels', 'Prospects', 'Galleries']

const handleJoinResponnse = (
  teamId,
  joinAsGalleriesResponse?: MutationResult<JoinAsGalleriesMutation>
) => {
  if (!joinAsGalleriesResponse) {
    return
  }
  const { error, data } = joinAsGalleriesResponse
  if (error) {
    // TODO Modal
    return
  }
  if (data) {
    navigate(`/mypage?teamId=${teamId}`)
  }
}

interface JoinTeamContainerProps {
  teamId: string
}
const JoinTeamContainer: React.FC<JoinTeamContainerProps> = ({ teamId }) => {
  const params = parseSearchParams(window.location.search)
  const { user } = React.useContext(UserContext)
  const [request, subscriptionResponse] = useMutation<
    RequestSubscriptionMutation,
    RequestSubscriptionMutationVariables
  >(gql(requestSubscription))
  const [requestJoinAsGalleries, joinAsGalleriesResponse] = useMutation<
    JoinAsGalleriesMutation,
    JoinAsGalleriesMutationVariables
  >(gql(joinAsGalleries))
  const { loading, error, data } = useQuery<GetTeamQuery>(gql(getTeam), {
    variables: { id: teamId },
  })

  if (error) {
    // ダイアログで
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
  const currentMember = team?.members?.find((member) => member.userId === user.id)
  const teamClasses = team.classes || []
  const currentClass = teamClasses.find(
    (teamClass) => teamClass?.teamClassId === currentMember?.teamClassId
  )
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
  handleJoinResponnse(team.id, joinAsGalleriesResponse)
  return (
    <>
      <Loading loading={subscriptionResponse.loading || joinAsGalleriesResponse.loading} />
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
        currentClass={currentClass?.classType}
        hasPaymentCancelled={params['payment_status'] === 'cancel'}
        requestJoinAsGalleries={(teamClassId) =>
          requestJoinAsGalleries({ variables: { teamId, teamClassId } })
        }
      />
    </>
  )
}

export default withTheme(JoinTeamContainer, 'light')
