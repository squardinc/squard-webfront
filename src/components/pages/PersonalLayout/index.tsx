import * as React from 'react'
import styled from 'styled-components'
import { IPersonal } from '../../../models/personal'
import * as colors from '../../../styles/colors'
import * as sizes from '../../../styles/sizes'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import ProfileImg from 'src/images/user.png'
import ProfileLink from 'src/assets/profile_link_icon.svg'
import { getSocialMediaIcon, getTeamIcon } from './utils'

type PersonalLayoutProps = {
  isLoading: boolean
  personal: IPersonal
}

type StyleCssProps = {
  profileImg?: string
  coverImg?: string
  isYoutubeIcon?: boolean
  backgroundColor?: string
  profileHeight?: number
  oppositeTopOffset?: number
  profileMarginLeft?: number
  profileBorderLeft?: number
}

const PersonalLayoutWrapper = styled.div`
  position: relative;
  background-color: ${(props: StyleCssProps) =>
    props.backgroundColor ? props.backgroundColor : colors.textWhite};
`

const ContentWrapper = styled.div`
  padding-bottom: 0;
`

const ProfileContainerWrapper = styled.div`
  position: relative;
  bottom: 150px;
  z-index: 1;
  background: #051026;
  opacity: 0.85;
  margin: 0px 20px 0px 20px;
  padding-bottom: 10px;
  border-radius: 10px;

  :before {
    content: '';
    position: absolute;
    margin-left: ${(props: StyleCssProps) =>
      props.profileMarginLeft ? props.profileMarginLeft : 20}px;
    top: ${(props: StyleCssProps) =>
      props.oppositeTopOffset ? props.oppositeTopOffset : 0}px;
    border-bottom: ${(props: StyleCssProps) =>
        props.profileHeight ? props.profileHeight : 0}px
      solid blue;
    border-left: ${(props: StyleCssProps) =>
        props.profileBorderLeft ? props.profileBorderLeft : 0}px
      solid transparent;
    border-right: 0px solid transparent;
  }
`

const UserCoverWrapper = styled.div`
  width: ${sizes.windowWidth};
  height: 500px;
  box-sizing: content-box;
  padding-top: 15px;
  position: relative;
  background: red;
  color: white;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  background: url(${(props: StyleCssProps) =>
      props.coverImg ? props.coverImg : ''})
    no-repeat center center;
  background-size: cover;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 100px solid #eee;
    border-left: ${sizes.windowWidth} solid transparent;
    border-right: 0px solid transparent;
  }
`

const ProfilerImageContainer = styled.div`
  position: absolute;
  top: -20px;
  height: 100px;
  width: 80px;
  margin: 0px 20px 20px 20px;
  background-image: linear-gradient(#edc74c, #bc4c49);
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const ProfileImage = styled.div`
  height: 94px;
  width: 74px;
  border-radius: 10px;
  margin: 3px 0px 0px 3px;
  background: url(${(props: StyleCssProps) =>
      props.profileImg ? props.profileImg : ''})
    no-repeat center center;
  background-size: cover;
`

const NameWrapper = styled.div``

const NameText = styled.div`
  letter-spacing: 0.1em;
  color: ${colors.textWhite};
  padding-left: 8rem;
  padding-top: 1.25rem;
  font-size: 1.5rem;
  font-weight: 500;
`

const NameSubText = styled.div`
  font-family: montserrat, sans-serif;
  letter-spacing: 0.1em;
  color: #fff;
  padding-left: 8rem;
  font-size: 1rem;
  font-weight: 200;
`

const NameDescription = styled.div`
  font-weight: 100;
  font-size: 0.875rem;
  padding: 1.5rem;
  text-align: justify;
  color: #fff;
  letter-spacing: 0.1em;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  justify-content: space-between;
  margin: auto;
`

const SocialMediaIcon = styled.div`
  margin-right: 1rem;
  height: 4rem;
  margin-top: ${(props: StyleCssProps) => (props.isYoutubeIcon ? 0.3 : 0)}rem;
  width: auto;
`

const TeamWrapper = styled.div``

const TeamItemWrapper = styled.div`
  font-family: montserrat, sans-serif;
  position: relative;
  bottom: 120px;
  height: 80px;
  margin: 0px 20px 20px 20px;
  background-image: linear-gradient(to right, #bc4c49, #edc74c);
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  margin-bottom: 65px;

  :last-child {
    margin-bottom: 0px;
  }
`
const TeamInfo = styled.div`
  display: flex;
  color: #fff;
  padding-left: 1.5rem;
  height: 100%;
  align-items: center;
`

const TeamIconWrapper = styled.div`
  height: 3rem;
  width: auto;
`

const TeamTextWrapper = styled.span`
  padding-left: 2rem;
  padding-top: 0.25rem;
  line-height: 1.5rem;
`

const TeamNameText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
const TeamPositionText = styled.div`
  line-height: 1.5rem;
`

const TeamLinkWrapper = styled.div`
  position: absolute;
  padding-top: 0.25rem;
  right: 0;
  padding-right: 0.5rem;
  height: 3rem;
`

const TeamRole = styled.div`
  position: relative;
  bottom: px;
  float: right;
  height: 35px;
  margin: 0px 30px 20px 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #051026;
`
const TeamRoleText = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  font-weight: 200;
`

const PersonalLayout = (props: PersonalLayoutProps) => {
  const { personal } = props
  const profileMarginLeft = 20
  const coverOffset = 100
  const profileContainerMargin = 20
  const windowWidth = window.innerWidth > 640 ? 640 : window.innerWidth
  const prfileContainerWidth = windowWidth - profileContainerMargin * 2

  const tanOffset = coverOffset / windowWidth
  const profileContainerOffset = windowWidth - profileContainerMargin
  const opposite =
    coverOffset - tanOffset * profileContainerOffset + coverOffset / 2
  const [profileHeight, setProfileHeight] = React.useState(0)

  React.useEffect(() => {
    if (document && document.getElementById('ProfileContainerWrapper')) {
      const elementId: Document = document.getElementById(
        'ProfileContainerWrapper'
      )
      const elHeight = elementId.clientHeight
      setProfileHeight(elHeight)
    }
  })

  return (
    <PersonalLayoutWrapper backgroundColor={'#ebebeb'}>
      <ContentWrapper>
        <UserCoverWrapper coverImg={ProfileImg} />
        <ProfileContainerWrapper
          id={'ProfileContainerWrapper'}
          profileHeight={profileHeight}
          oppositeTopOffset={opposite}
          profileMarginLeft={profileMarginLeft}
          profileBorderLeft={prfileContainerWidth - profileMarginLeft}
        >
          <ProfilerImageContainer>
            <ProfileImage profileImg={ProfileImg} />
          </ProfilerImageContainer>
          <NameWrapper>
            <NameText>{personal.name}</NameText>
            <NameSubText>{personal.subName}</NameSubText>
            <NameDescription>{personal.description}</NameDescription>
          </NameWrapper>
          <SocialMediaWrapper>
            {personal.socialMedia.map((sm, i) => {
              return (
                <SocialMediaIcon key={i} isYoutubeIcon={sm === 'youtube'}>
                  {getSocialMediaIcon(sm)}
                </SocialMediaIcon>
              )
            })}
          </SocialMediaWrapper>
        </ProfileContainerWrapper>
        <TeamWrapper>
          {personal.teams.map((team, i) => {
            return (
              <TeamItemWrapper key={i}>
                <TeamInfo>
                  <TeamIconWrapper>{getTeamIcon(team.type)}</TeamIconWrapper>
                  <TeamTextWrapper>
                    <TeamNameText>{team.name}</TeamNameText>
                    <TeamPositionText>{`-${team.position}`}</TeamPositionText>
                  </TeamTextWrapper>
                  <TeamLinkWrapper>
                    <ProfileLink />
                  </TeamLinkWrapper>
                </TeamInfo>
                <TeamRole>
                  <TeamRoleText>{team.role}</TeamRoleText>
                </TeamRole>
              </TeamItemWrapper>
            )
          })}
        </TeamWrapper>
      </ContentWrapper>
      <DefaultFooter />
    </PersonalLayoutWrapper>
  )
}

export default React.memo(PersonalLayout)
