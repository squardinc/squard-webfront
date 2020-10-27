import { gql, useQuery } from '@apollo/client'
import { Link } from 'gatsby'
import React from 'react'
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
  const { data } = useQuery<GetMyselfQuery>(gql(getMyself))
  return (
    <Link to="/mypage">
      <Icon image={data?.getMyself?.icon || Top} />
    </Link>
  )
}
