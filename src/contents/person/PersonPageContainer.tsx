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
import PersonPageLayout from './PersonPageLayout'

interface PersonPageContainerProps {
  id: string
}
export const PersonPageContainer: React.FC<PersonPageContainerProps> = ({
  id,
}) => {
  const params = parseSearchParams(window.location.search)
  const { loading, error, data } = useQuery<GetUserQuery>(gql(getUser), {
    variables: { id },
  })
  const [requestUpdate, response] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(gql(updateUser))
  if (error) {
    navigate('/')
    return <></>
  }
  if (loading || !data) {
    return <></>
  }
  return (
    <>
      <PersonPageLayout
        isLoading={false}
        personal={Person.fromQueryResult(data)}
        update={(profile: UpdateUserInput) =>
          requestUpdate({
            variables: { input: profile },
          })
        }
        hasPaymentComplete={params['payment_status'] === 'success'}
        joinSucceededTeamId={params.teamId}
      />
    </>
  )
}

export default PersonPageContainer
