import React, { useState } from 'react'
import styled from 'styled-components'
import { IPersonal } from 'src/models/person'
import * as colors from 'src/styles/colors'
import { PersonalEditProfile } from './edit/component/index'
import { PersonPage } from './PersonPage'
import { withTheme } from 'src/context/ThemeContext'

type PersonPageProps = {
  isLoading: boolean
  personal: IPersonal
}

type StyleCssProps = {
  icon?: string
  topImage?: string
  width?: number
  backgroundColor?: string
  profileHeight?: number
  oppositeTopOffset?: number
  profileMarginLeft?: number
  profileBorderLeft?: number
}

const PersonPageWrapper = styled.div`
  position: relative;
  background-color: ${(props: StyleCssProps) =>
    props.backgroundColor ? props.backgroundColor : colors.textWhite};
`

const EditProfileWrapper = styled.div`
  width: 100%;
`

const PersonPageLayout = (props: PersonPageProps) => {
  const { personal } = props

  const [openEditProfile, setOpenEditProfile] = useState(false)

  return (
    <PersonPageWrapper backgroundColor={'#ebebeb'}>
      {!openEditProfile
        ? <PersonPage isLoading={false} personal={personal} editProfile={() => setOpenEditProfile(true)} />
        :
        <EditProfileWrapper>
          <PersonalEditProfile
            isLoading={false}
            personal={personal}
            close={() => setOpenEditProfile(false)}
          />
        </EditProfileWrapper>
      }
    </PersonPageWrapper>
  )
}

export default React.memo(withTheme(PersonPageLayout, 'gray'))
