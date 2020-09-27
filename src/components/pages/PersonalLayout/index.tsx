import * as React from 'react'
import styled from 'styled-components'
import { IPersonal } from 'src/models/personal'
import * as colors from 'src/styles/colors'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import ProfileImg from 'src/images/user.png'
import ProfileLink from 'src/assets/profile_link_icon.svg'
import { getSocialMediaIcon, getTeamIcon } from './utils'
import { withTheme } from 'src/context/ThemeContext'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

type PersonalLayoutProps = {
  isLoading: boolean
  personal: IPersonal
}

type StyleCssProps = {
  profileImg?: string
  coverImg?: string
  isYoutubeIcon?: boolean
  width?: number
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
  top: -120px;
  background: #051026;
  opacity: 0.85;
  margin: 0px 20px -120px 20px;
  padding-bottom: 10px;
  border-radius: 10px;
  min-height: 10px;

  :before {
    content: '';
    position: absolute;
    left: 20px;
    right: 0;
    bottom: 0;
    top: 20px;
    background: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(255, 255, 255, 0.1) 50%
    );
  }
`

const UserCoverWrapper = styled.div`
  box-sizing: content-box;
  position: relative;
  color: white;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
`

const UserCover = styled.div`
  height: 500px;
  position: relative;
  background: url(${(props: StyleCssProps) =>
      props.coverImg ? props.coverImg : ''})
    no-repeat center center;
  background-size: cover;

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 20px;
    height: 100px;
    background: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0) 50%,
      ${(props: StyleCssProps) =>
        props.backgroundColor ? props.backgroundColor : colors.textWhite} 50%
    );
    transform: scale(1.1);
    display: block;
    transform-origin: left bottom;
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

const NameWrapper = styled.div`
  position: relative;
  text-align: left;
`

const NameText = styled.div`
  letter-spacing: 0.1em;
  color: ${colors.textWhite};
  padding-left: 8rem;
  padding-top: 1.25rem;
  font-size: 1.5rem;
  font-weight: 500;
`

const NameSubText = styled.div`
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
  position: relative;
  z-index: 100;
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

const TeamWrapper = styled.div`
  margin: 48px 0 38px 0;
`

const TeamItemWrapper = styled.div`
  position: relative;
  height: 80px;
  margin: 0px 20px 65px 20px;
  border-radius: 10px;

  :last-child {
    margin-bottom: 0px;
  }
`
const TeamInfo = styled.div`
  display: flex;
  background-image: linear-gradient(to right, #bc4c49, #edc74c);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  color: #fff;
  padding-left: 1.5rem;
  height: 100%;
  align-items: center;
  position: relative;
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
  display: inline-block;
  position: absolute;
  bottom: -35px;
  right: 16px;
  height: 35px;
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

  return (
    <PersonalLayoutWrapper backgroundColor={'#ebebeb'}>
      <ContentWrapper>
        <UserCoverWrapper>
          <UserCover coverImg={ProfileImg} backgroundColor={'#ebebeb'}></UserCover>
          <ProfileContainerWrapper>
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
        </UserCoverWrapper>
        <TeamWrapper>
          {personal.teams.map((team, i) => {
            return (
              <TeamItemWrapper key={i}>
                <TeamRole>
                  <TeamRoleText>
                    <TextDisplay>{team.role}</TextDisplay>
                  </TeamRoleText>
                </TeamRole>
                <TeamInfo>
                  <TeamIconWrapper>{getTeamIcon(team.type)}</TeamIconWrapper>
                  <TeamTextWrapper>
                    <TeamNameText>
                      <TextDisplay>{team.name}</TextDisplay>
                    </TeamNameText>
                    <TeamPositionText>
                      <TextDisplay>{`- ${team.position}`}</TextDisplay>
                    </TeamPositionText>
                  </TeamTextWrapper>
                  <TeamLinkWrapper>
                    <ProfileLink />
                  </TeamLinkWrapper>
                </TeamInfo>
              </TeamItemWrapper>
            )
          })}
        </TeamWrapper>
      </ContentWrapper>
      <DefaultFooter />
    </PersonalLayoutWrapper>
  )
}

export default React.memo(withTheme(PersonalLayout, 'gray'))
