import { gql, useMutation, useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import * as React from 'react'
import { updateUser } from 'src/graphql/mutations'
import { getUser } from 'src/graphql/queries'
import { Person } from 'src/models/person'
import {
  GetUserQuery,
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
  const [isEditing, setEditing] = React.useState(false)
  const params = parseSearchParams(window.location.search)
  const { loading, error, data } = useQuery<GetUserQuery>(gql(getUser), {
    variables: { id },
  })
  const [requestUpdate, response] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    gql(updateUser)
  )

  if (error) {
    navigate('/')
    return <></>
  }
  if (loading || !data) {
    return <></>
  }

  const PersonPageLayout = isEditing ? PersonPageLayoutBlack : PersonPageLayoutGray

  return (
    <PersonPageLayout
      isLoading={false}
      isEditing={isEditing}
      hasPaymentComplete={params['payment_status'] === 'success'}
      joinSucceededTeamId={params.teamId}
      personal={Person.fromQueryResult(data)}
      update={(profile: UpdateUserInput) =>
        requestUpdate({
          variables: {
            input: {
              nameJp: profile.nameJp,
              nameEn: profile.nameEn,
              links: profile.links,
              introduction: profile.introduction,
              displlayTeams: profile.displlayTeams,
              topImage: profile.topImage,
              icon: profile.icon,
            },
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
