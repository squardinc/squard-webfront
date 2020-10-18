import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigate } from 'gatsby'
import React, { Suspense } from 'react'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { ExternalLink } from 'src/components/Link/ExternalLink'
import { MODAL_Z_INDEX } from 'src/components/Modal/asModal'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { YesNoModal } from 'src/components/Modal/YesNoModal'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import Top from 'src/images/temp/team/top.jpg'
import { IDisplayTeamMember, IPersonal } from 'src/models/person'
import * as colors from 'src/styles/colors'
import * as Const from 'src/styles/const'
import { descriminate, toHref } from 'src/utils/SocialMediaDescriminator'
import styled from 'styled-components'
import { PersonImage } from '../team/TeamContents/PersonImage'
import { TeamModal } from './TeamModal'
import { getSocialMediaIcon, getTeamIcon } from './utils'

// FIXME
const teamReverseSort = (a, b) => {
  if (a.teamId > b.teamId) return -1
  if (a.teamId < b.teamId) return 1
  return 0
}

type PersonPageProps = {
  isLoading: boolean
  personal: IPersonal
  profileEditable: boolean
  joinSucceededTeamId?: string
  showLeaveTeamResult: boolean
  editProfile: VoidFunction
  showJoinSucceededModal: Boolean
  leaveTeam: (teamId: string, teamClassId: string) => void
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
interface TeamItemAnchorProps {
  joinSucceeded?: boolean
  index: number
}

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
  // text-transform: uppercase;
  width: 100%;
`

const UserCover = styled.div`
  position: relative;
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
          props.backgroundColor ? props.backgroundColor : colors.textWhite}
        50%
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const ProfileImage = styled.div`
  height: 94px;
  width: 74px;
  border-radius: 10px;
  margin: 3px 0px 0px 3px;
  background: url(${(props: StyleCssProps) => (props.icon ? props.icon : '')}) no-repeat center
    center;
  background-size: cover;
`

const NameWrapper = styled.div`
  position: relative;
  text-align: left;
`

const NameText = styled.div`
  color: ${colors.textWhite};
  padding-left: 7.125rem;
  padding-top: 1.25rem;
  padding-right: 20px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  font-weight: ${Const.fontWeight.regular};

  font-size: ${Const.fontSize.xl1};
`

const NameSubText = styled.div`
  color: #fff;
  padding-left: 7.125rem;
  padding-right: 20px;
  line-height: 1.285;
  letter-spacing: 0.05em;
  margin-top: 5px;
  font-weight: ${Const.fontWeight.dimlight};

  font-size: ${Const.fontSize.sm};
`

const NameDescription = styled.div`
  padding: 1.5rem;
  text-align: justify;
  color: #fff;
  line-height: 1.715;
  letter-spacing: 0.05em;
  white-space: pre-wrap;
  font-weight: ${Const.fontWeight.light};

  font-size: ${Const.fontSize.sm};
`

const SocialMediaWrapper = styled.div`
  position: relative;
  margin: 0px 10px;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const SocialMediaIcon = styled.div`
  margin: 0px 5px;
  height: 4rem;
  width: auto;
`

const TeamWrapper = styled.div`
  margin: 30px 0 50px 0;
`
const TeamItemAnchor = styled.div<TeamItemAnchorProps>`
  position: relative;
  ${({ joinSucceeded }) =>
    joinSucceeded &&
    `
      z-index: ${MODAL_Z_INDEX + 1};
    `}

  :last-child {
    margin-bottom: 0px;
  }
`
const TeamItemWrapper = styled.div`
  height: 80px;
  margin: 0px 20px 45px 20px;
  border-radius: 10px;
  cursor: pointer;
`
const TeamInfo = styled.div`
  display: flex;
  background-image: linear-gradient(to right, #bc4c49, #edc74c);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  color: #fff;
  padding-left: 16px;
  height: 100%;
  align-items: center;
  position: relative;
`

const TeamIconWrapper = styled.div`
  height: 3rem;
  width: auto;
`

const TeamTextWrapper = styled.span`
  margin-top: -4px;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  align-item: center;
`

const TeamNameText = styled.div`
  font-weight: ${Const.fontWeight.simbold};

  font-size: ${Const.fontSize.xl};
`
const TeamPositionText = styled.div`
  font-weight: ${Const.fontWeight.regular};

  font-size: ${Const.fontSize.sm};
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
  bottom: -27px;
  right: 32px;
  height: 30px;
  background-color: #efefef;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #051026;
`
const TeamRoleText = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  font-weight: ${Const.fontWeight.light};

  font-size: ${Const.fontSize.sm};
  color: #262626;
  opacity: 0.75;
`

const ButtonEditWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PersonPage: React.FC<PersonPageProps> = ({
  personal,
  editProfile,
  profileEditable = false,
  joinSucceededTeamId = '',
  showJoinSucceededModal,
  showLeaveTeamResult,
  leaveTeam,
}) => {
  const [selectedTeam, setSelectedTeam] = React.useState<IDisplayTeamMember | null>(null)
  const [showTeamLeaveModal, setShowTeamLeaveModal] = React.useState(false)
  return (
    <Suspense fallback={<></>}>
      <ContentWrapper>
        <UserCoverWrapper>
          <UserCover backgroundColor={'#ebebeb'}>
            <PersonImage src={personal.topImage} style={{ width: '100%', minHeight: '320px' }} />
            {profileEditable && (
              <ButtonEditWrapper onClick={editProfile}>
                <FontAwesomeIcon icon={faEdit} size="2x" />
              </ButtonEditWrapper>
            )}
          </UserCover>
          <ProfileContainerWrapper>
            <ProfilerImageContainer>
              <ProfileImage icon={personal.icon ? encodeURI(personal.icon) : Top} />
            </ProfilerImageContainer>
            <NameWrapper>
              <NameText>
                <TextDisplay style={{ overflowWrap: 'break-word' }}>{personal.nameJp}</TextDisplay>
              </NameText>
              <NameSubText>
                <TextDisplay style={{ overflowWrap: 'break-word' }}>{personal.nameEn}</TextDisplay>
              </NameSubText>
              <NameDescription>
                <TextDisplay>{personal.introduction}</TextDisplay>
              </NameDescription>
            </NameWrapper>
            <SocialMediaWrapper>
              {personal.links.map((url, index) => {
                const mediaType = descriminate(url)
                return mediaType ? (
                  <ExternalLink href={toHref(url, mediaType)} key={`${index}_${url}`}>
                    <SocialMediaIcon>{getSocialMediaIcon(mediaType)}</SocialMediaIcon>
                  </ExternalLink>
                ) : (
                  <></>
                )
              })}
            </SocialMediaWrapper>
          </ProfileContainerWrapper>
        </UserCoverWrapper>
        <TeamWrapper>
          {personal.teams.sort(teamReverseSort).map((team, index) => {
            return (
              <TeamItemAnchor
                id={`team-item_${team.teamId}`}
                key={team.teamId}
                joinSucceeded={showJoinSucceededModal && team.teamId === joinSucceededTeamId}
                index={index}
              >
                <TeamItemWrapper
                  onClick={() => {
                    if (profileEditable) {
                      setSelectedTeam(team)
                      return
                    }
                    navigate(`/${team.pageId}`)
                  }}
                >
                  {team.title && (
                    <TeamRole>
                      <TeamRoleText>
                        <TextDisplay>{team.title}</TextDisplay>
                      </TeamRoleText>
                    </TeamRole>
                  )}
                  <TeamInfo>
                    <TeamIconWrapper>{getTeamIcon(team.classType)}</TeamIconWrapper>
                    <TeamTextWrapper>
                      <TeamNameText>
                        <TextDisplay>{team.teamName}</TextDisplay>
                      </TeamNameText>
                      <TeamPositionText>
                        <TextDisplay>{`- ${team.classType}`}</TextDisplay>
                      </TeamPositionText>
                    </TeamTextWrapper>
                    <TeamLinkWrapper></TeamLinkWrapper>
                  </TeamInfo>
                </TeamItemWrapper>
              </TeamItemAnchor>
            )
          })}
        </TeamWrapper>
      </ContentWrapper>
      {selectedTeam && !showTeamLeaveModal && (
        <TeamModal
          team={selectedTeam}
          closeModal={() => setSelectedTeam(null)}
          onLeaveTeam={() => setShowTeamLeaveModal(true)}
        />
      )}
      {selectedTeam && showTeamLeaveModal && (
        <YesNoModal
          title={`${selectedTeam.teamName}\r\nから脱退する`}
          closeModal={() => setShowTeamLeaveModal(false)}
          onExecute={() => {
            leaveTeam(selectedTeam.teamId, selectedTeam.teamClassId)
          }}
          message="脱退すると有効期間の途中であっても直ちに権利を喪失し、返金は行われません。また、脱退後のキャンセルは行えません。"
          cancelButtonText="キャンセル"
          executeButtonText="上記内容を理解した上で脱退する"
        />
      )}
      {selectedTeam && showLeaveTeamResult && (
        <CompleteModal
          title={`${selectedTeam.teamName} から脱退しました。`}
          closeModal={(e) => window.location.reload()}
        />
      )}
      <DefaultFooter />
    </Suspense>
  )
}

export default PersonPage
