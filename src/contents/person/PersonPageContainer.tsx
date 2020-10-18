import { gql, useMutation, useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import * as React from 'react'
import { UserContext } from 'src/context/UserContext'
import { leaveTeam, updateUser } from 'src/graphql/mutations'
import { getMyself, getUser } from 'src/graphql/queries'
import { Person } from 'src/models/person'
import {
  GetMyselfQuery,
  GetUserQuery,
  LeaveTeamMutation,
  LeaveTeamMutationVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables
} from 'src/types/API'
import { parseSearchParams } from 'src/utils/UrlParser'
import { PersonPageLayoutBlack, PersonPageLayoutGray } from './PersonPageLayout'

interface PersonPageContainerProps {
  id: string
}
export const PersonPageContainer: React.FC<PersonPageContainerProps> = ({ id }) => {
  const { user } = React.useContext(UserContext)
  const [isEditing, setEditing] = React.useState(false)
  const params = parseSearchParams(window.location.search)
  const { loading, error, data } = user.isMine(id)
    ? useQuery<GetMyselfQuery>(gql(getMyself))
    : useQuery<GetUserQuery>(gql(getUser), {
        variables: { id },
      })
  const [updateUserRequest, updateUserResponse] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(gql(updateUser))
  const [leaveTeamRequest, leaveTeamResponse] = useMutation<
    LeaveTeamMutation,
    LeaveTeamMutationVariables
  >(gql(leaveTeam))

  if (error) {
    navigate('/')
    return <></>
  }
  if (loading || !data) {
    return <></>
  }
  const personalData = Person.fromQueryResult(data)

  const PersonPageLayout = isEditing ? PersonPageLayoutBlack : PersonPageLayoutGray
  console.log(personalData)
  return (
    <PersonPageLayout
      isLoading={false}
      profileEditable={user.isMine(personalData.id)}
      isEditing={isEditing}
      hasPaymentComplete={params['payment_status'] === 'success'}
      joinSucceededTeamId={params.teamId}
      showLeaveTeamResult={!!leaveTeamResponse.data?.leaveTeam?.message}
      personal={personalData}
      update={(profile: UpdateUserInput) =>
        updateUserRequest({
          variables: {
            input: {
              nameJp: profile.nameJp,
              nameEn: profile.nameEn,
              links: profile.links,
              introduction: profile.introduction,
              displayTeamIds: profile.displayTeamIds,
              topImage: profile.topImage,
              icon: profile.icon,
            },
          },
        })
      }
      leaveTeam={(teamId: string, teamClassId: string) =>
        leaveTeamRequest({
          variables: {
            teamId,
            teamClassId,
          },
        })
      }
      onEditProfile={(editing: boolean) => {
        setEditing(editing)
      }}
    />
  )
}

export default PersonPageContainer
