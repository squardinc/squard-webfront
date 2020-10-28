import { Link } from 'gatsby'
import React from 'react'
import NoImage from 'src/images/NoImage.jpg'
import { LoginUser } from 'src/services/AuthService/interfaces'
import styled from 'styled-components'

const Icon = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`
interface UserIconProps {
  user: LoginUser
}
export const UserIcon: React.FC<UserIconProps> = ({ user }) => {
  return (
    <>
      <Link to={`/${user.pageId}`}>
        <Icon image={user.icon || NoImage} />
      </Link>
    </>
  )
}
