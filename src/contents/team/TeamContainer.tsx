import { gql, useQuery } from '@apollo/client'
import * as React from 'react'
import { getTeam } from 'src/graphql/queries'
import { Team } from 'src/models/team'
import { GetTeamQuery } from 'src/types/API'
import { TeamLayout } from './TeamLayout'

interface TeamContainerProps {
  id: string
}
export const TeamContainer: React.FC<TeamContainerProps> = ({ id }) => {
  const { loading, error, data } = useQuery<GetTeamQuery>(gql(getTeam), {
    variables: { id },
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
  const team = Team.fromQueryResult(data)
  return <TeamLayout team={team} />
}

export default TeamContainer
