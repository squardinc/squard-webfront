import * as React from 'react'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import { MessageModal } from 'src/components/Modal/MessageModal'
import { YesNoModal } from 'src/components/Modal/YesNoModal'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ClassType } from 'src/models/person'
import { ITeamClass } from 'src/models/team'
import * as colors from 'src/styles/colors'
import * as Const from 'src/styles/const'
import { Heading3 } from 'src/vendor/heading3'
import styled from 'styled-components'
import JoinCard from './joinCard'

type JoinTeamProps = {
  requestSubscription: (teamClassId: string) => Promise<void>
  isLoading: boolean
  loggedIn: boolean
  teamName: string
  teamData: ITeamClass[]
  currentClass?: ClassType
  hasPaymentCancelled?: boolean
  requestJoinAsGalleries?: any
}

type CSSProps = {
  innerWidth: number
}

const JoinTeamWrapper = styled.div`
  background: ${colors.textWhite};
  padding: 0px;
  width: 100%;
  height: 100%;
`

const JoinTeamTopWrapper = styled.div`
  background: ${colors.textWhite};
  padding: 10px 50px;
`

const JoinTeamTitle = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  font-size: ${Const.fontSize.xxl1};
  font-style: normal;
  padding-left: 15px;
  padding-right: 15px;
`

const JoinInfoWrapper = styled.div`
  padding: 10px 10px;
  padding-bottom: 40px;
`

const TextJoinTeam = styled.div`
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
  font-weight: ${Const.fontWeight.regular};
  font-size: ${Const.fontSize.sm};
  font-style: normal;
  margin: 10px 0px;
  line-height: 1.78;
  letter-spacing: 0.025em;
`
const CardListWrapper = styled.div<CSSProps>`
  position: relative;
  width: 100%;
  padding-left: ${(props) => (props.innerWidth <= 370 ? '20px' : '40px')};
  padding-right: ${(props) => (props.innerWidth <= 370 ? '20px' : '40px')};
  margin-bottom: 40px;
`

const CardWrapper = styled.div`
  position: relative;
  :not(:first-child) {
    margin-top: 100px;
  }
`

const JoinTeam: React.FC<JoinTeamProps> = ({
  requestSubscription,
  teamName,
  teamData,
  loggedIn,
  currentClass,
  hasPaymentCancelled,
  requestJoinAsGalleries,
}) => {
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  const [isComfirmModal, setComfirmModal] = React.useState(false)
  const [teamSelected, setTeamSelected] = React.useState({} as ITeamClass)
  const [
    showPaymentCancelledModal,
    setShowPaymentCancelledModal,
  ] = React.useState(hasPaymentCancelled)
  return (
    <>
      <JoinTeamWrapper>
        <JoinTeamTopWrapper>
          <JoinTeamTitle>
            <Heading3>
              <TextDisplay>Join The Team</TextDisplay>
            </Heading3>
          </JoinTeamTitle>
          <JoinInfoWrapper>
            <TextJoinTeam>
              <TextTeamName>{teamName}</TextTeamName>に参加する
            </TextJoinTeam>
            <TextDesciption>
              <TextDisplay>
                チームが設定した月々のサブスクリプション料金を支払いProspectsやAngelsとしてチームに参加することで、様々な特典を受け取ることができます。
              </TextDisplay>
            </TextDesciption>
          </JoinInfoWrapper>
        </JoinTeamTopWrapper>
        <CardListWrapper innerWidth={window.innerWidth}>
          {teamData.map((team: ITeamClass, i) => {
            return (
              <CardWrapper key={i}>
                <JoinCard
                  key={i}
                  team={team}
                  currentClass={currentClass}
                  join={() => {
                    if (!loggedIn) {
                      setOpenModal('Login')
                      return
                    }

                    setComfirmModal(true)
                    setTeamSelected(team)
                  }}
                />
              </CardWrapper>
            )
          })}
        </CardListWrapper>
        <DefaultFooter />
      </JoinTeamWrapper>
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
      {showPaymentCancelledModal && (
        <MessageModal
          closeModal={(e) => setShowPaymentCancelledModal(false)}
          message="チームへの参加をキャンセルしました。"
        />
      )}
      {isComfirmModal && (
        <YesNoModal
          title={``}
          closeModal={() => setComfirmModal(false)}
          onExecute={() => {
            if (
              teamSelected.classType === 'Galleries' ||
              (teamSelected.teamId === 'fagends' && teamSelected.classType == 'Prospects')
            ) {
              requestJoinAsGalleries(teamSelected.teamClassId)
              return
            }
            requestSubscription(teamSelected.teamClassId)
          }}
          message={`本当に${teamSelected.classType}参加しすますか`}
          executeButtonText="参加する"
          cancelButtonText="キャンセル"
        />
      )}
    </>
  )
}

export default React.memo(JoinTeam)
