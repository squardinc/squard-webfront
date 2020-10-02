import * as React from 'react'
import { withTheme } from 'src/context/ThemeContext'
import {PersonalEditProfile} from '../component/index'

export const PersonalEditProfileContainer = () => {
 
  return <PersonalEditProfile isLoading={false} />
}

export default withTheme(PersonalEditProfileContainer, 'dark')