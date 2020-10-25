import { gql, useQuery } from '@apollo/client'
import * as React from 'react'
import { getTeam, getTeams } from 'src/graphql/queries'
import { Team } from 'src/models/team'
import { GetTeamQuery, GetTeamsQuery } from 'src/types/API'
import { TeamLayout } from './TeamLayout'

interface TeamContainerProps {
  id: string
}

const queryTeam = (id: string) => {
  const { loading, error, data } = useQuery<GetTeamQuery>(gql(getTeam), {
    variables: { id },
  })
  return data
}
const queryTeams = () => {
  const { loading, error, data } = useQuery<GetTeamsQuery>(gql(getTeams))
  return data
}
export const TeamContainer: React.FC<TeamContainerProps> = ({ id }) => {
  const teamResult = queryTeam(id)
  const teamsResult = queryTeams()
  if (!teamResult) {
    return <></>
  }
  const team = Team.fromQueryResult(teamResult)
  const teams = teamsResult?.getTeams?.length
    ? teamsResult?.getTeams.map((eachTeam) => Team.fromQueryResult({ getTeam: eachTeam }))
    : []
  return <TeamLayout team={team} recommendedTeams={teams} />
}

export default TeamContainer
