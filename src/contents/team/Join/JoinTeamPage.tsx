import * as React from 'react'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import { MessageModal } from 'src/components/Modal/MessageModal'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ITeamClass } from 'src/models/team'
import * as colors from 'src/styles/colors'
import { Heading3 } from 'src/vendor/heading3'
import styled from 'styled-components'
import JoinCard from './joinCard'

type JoinTeamProps = {
  requestSubscription: (teamClassId: string) => Promise<void>
  isLoading: boolean
  loggedIn: boolean
  teamData: ITeamClass[]
  hasPaymentCancelled?: boolean
}

const JoinTeamWrapper = styled.div`
  background: ${colors.textWhite};
  padding: 20px 10px;
`

const JoinTeamTitle = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
`

const JoinInfoWrapper = styled.div`
  padding: 20px 10px;
`

const TextJoinTeam = styled.div`
  font-size: 1.5rem;
  margin: 12px;
`

const TextTeamName = styled.span`
  text-decoration: underline;
  font-weight: 700;
  margin-right: 4px;
`

const TextDesciption = styled.div`
  margin: 20px 12px;
  line-height: 2;
`

const CardWrapper = styled.div`
  position: relative;
  margin: 24px auto;

  :not(:first-child) {
    margin-top: 60px;
  }
`

const JoinTeam: React.FC<JoinTeamProps> = ({
  requestSubscription,
  teamData,
  loggedIn,
  hasPaymentCancelled,
}) => {
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  const [showPaymentCancelledModal, setShowPaymentCancelledModal] = React.useState(hasPaymentCancelled)
  return (
    <>
      <JoinTeamWrapper>
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
            <TextDisplay>
              チームが設定した月々のサブスクリプション料金を支払いProspectsやAngelsとしてチームに参加することで、様々な特典を受け取ることができます。
            </TextDisplay>
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
        <DefaultFooter />
      </JoinTeamWrapper>
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
      {showPaymentCancelledModal && (
        <MessageModal
          closeModal={(e) => setShowPaymentCancelledModal(false)}
          message='チームへの参加をキャンセルしました。'
        />
      )}
    </>
  )
}

export default React.memo(JoinTeam)
