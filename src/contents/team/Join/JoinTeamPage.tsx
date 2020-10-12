import * as React from 'react'
import styled from 'styled-components'
import { Heading3 } from 'src/vendor/heading3'
import { ITeamClass } from 'src/models/team'
import JoinCard from './joinCard'
import * as colors from 'src/styles/colors'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import * as Const from '../../../styles/const'
type JoinTeamProps = {
  requestSubscription: (teamClassId: string) => Promise<void>
  isLoading: boolean
  loggedIn: boolean
  teamData: ITeamClass[]
}

const JoinTeamWrapper = styled.div`
  background: ${colors.textWhite};
  padding: 0px;
`

const JoinTeamContentWrapper = styled.div`
  background: ${colors.textWhite};
  padding: 20px 50px;
`

const JoinTeamTitle = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  font-family: ${Const.fontFamily.monster};
  font-size: ${Const.fontSize.xxl1};
  font-style: normal;
  padding-left:15px;
  padding-right:15px;
`

const JoinInfoWrapper = styled.div`
  padding: 20px 10px;
`

const TextJoinTeam = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.medium};
  font-size: ${Const.fontSize.xl};
  font-style: normal;
`

const TextTeamName = styled.span`
  text-decoration: underline;
  font-weight: 700;
  margin-right: 4px;
`

const TextDesciption = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.medium};
  font-size: ${Const.fontSize.sm};
  font-style: normal;
  margin: 10px 0px;
  line-height: 1.78;
  letter-spacing: 0.025em;
`

const CardWrapper = styled.div`
  position: relative;
  margin: 24px 0px;
  :not(:first-child) {
    margin-top: 60px;
  }
`

const JoinTeam: React.FC<JoinTeamProps> = ({
  requestSubscription,
  teamData,
  loggedIn,
}) => {
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  return (
    <>
      <JoinTeamWrapper>
        <JoinTeamContentWrapper>
          <JoinTeamTitle>
            <Heading3>
              <TextDisplay>Join The Team</TextDisplay>
            </Heading3>
          </JoinTeamTitle>
          <JoinInfoWrapper>
            <TextJoinTeam>
              <TextTeamName>Squard</TextTeamName>に参加する
            </TextJoinTeam>
            <TextDesciption>
              チームが設定した月々のサブスクリプション料金を支払いProspectsやAngelsとしてチームに参加することで、様々な特典を受け取ることができます。
            </TextDesciption>
          </JoinInfoWrapper>
          <div>
            {teamData.map((team: ITeamClass, i) => {
              return (
                <CardWrapper>
                  <JoinCard
                    key={i}
                    team={team}
                    join={() => {
                      if (!loggedIn) {
                        setOpenModal('Login')
                        return
                      }
                      if (team.classType === 'Galleries') {
                        //
                        return
                      }
                      requestSubscription(team.classId)
                    }}
                  />
                </CardWrapper>
              )
            })}
          </div>
        </JoinTeamContentWrapper>
        <DefaultFooter />
      </JoinTeamWrapper>
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export default React.memo(JoinTeam)
