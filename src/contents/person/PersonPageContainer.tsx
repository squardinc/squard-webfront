import * as React from 'react'
import { IPersonal, Person } from 'src/models/person'
import { shunpei, hiroki, akihiro, shoya } from './personalData'
import { navigate } from 'gatsby'
import PersonPageLayout from './PersonPageLayout'
import { useQuery, gql, useMutation } from '@apollo/client'
import { GetUserQuery, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserInput } from 'src/types/API'
import { getUser } from 'src/graphql/queries'
import { updateUser } from 'src/graphql/mutations'

interface PersonPageContainerProps {
  id: string
}
const getPersonData = (id: string): IPersonal | undefined => {
  if (id === 'shunpei_koike') return shunpei
  if (id === 'hiroki_matsui') return hiroki
  if (id === 'akihiro_kimura') return akihiro
  if (id === 'shoya_yanagisawa') return shoya
}
export const PersonPageContainer: React.FC<PersonPageContainerProps> = ({
  id,
}) => {
  const { loading, error, data } = useQuery<GetUserQuery>(gql(getUser), { variables: { id } })
  const [requestUpdate, response] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(gql(updateUser))
  if (error) {
    navigate('/')
    return <></>
  }
  if (loading || !data) {
    return <></>
  }
  return <PersonPageLayout
    isLoading={false}
    personal={Person.fromQueryResult(data)}
    update={(profile: UpdateUserInput) => requestUpdate({
      variables: {
        input: {
          nameJp: profile.nameJp,
          nameEn: profile.nameEn,
          links: profile.links,
          introduction: profile.introduction,
          displlayTeams: profile.displlayTeams,
          topImage: profile.topImage,
          icon: profile.icon,
        }
      }
    })}
  />
}

export default PersonPageContainer