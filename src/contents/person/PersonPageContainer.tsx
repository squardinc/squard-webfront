import * as React from 'react'
import { IPersonal, Person } from 'src/models/person'
import { withTheme } from 'src/context/ThemeContext'
import { shunpei, hiroki, akihiro, shoya } from './personalData'
import { navigate } from 'gatsby'
import PersonPageLayout from './PersonPageLayout'
import { useQuery, gql } from '@apollo/client'
import { GetUserQuery } from 'src/types/API'
import { getUser } from 'src/graphql/queries'

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
  if (error) {
    // navigate('/')
    console.log(error)
    return <></>
  }
  if (loading || !data) {
    return <></>
  }
  return <PersonPageLayout isLoading={false} personal={Person.fromQueryResult(data)} />
}

export default PersonPageContainer
