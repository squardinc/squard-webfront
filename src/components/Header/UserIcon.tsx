import { gql, useQuery } from '@apollo/client'
import { Link } from 'gatsby'
import React from 'react'
import { ErrorMessageModal } from 'src/components/Modal/ErrorMessageModal'
import { UserContext } from 'src/context/UserContext'
import { getMyself } from 'src/graphql/queries'
import Top from 'src/images/temp/team/top.jpg'
import { GetMyselfQuery } from 'src/types/API'
import styled from 'styled-components'

const Icon = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`
export const UserIcon = () => {
  const { refreshTrigger } = React.useContext(UserContext)
  const { data, error, refetch } = useQuery<GetMyselfQuery>(gql(getMyself))
  // FIXME
  React.useEffect(() => {
    refetch()
  }, [refreshTrigger])
  return (
    <>
      <Link to="/mypage">
        <Icon image={data?.getMyself?.icon || Top} />
      </Link>
      {error && (
        <ErrorMessageModal closeModal={() => {}} errorType={error?.graphQLErrors[0]?.errorType} />
      )}
    </>
  )
}
