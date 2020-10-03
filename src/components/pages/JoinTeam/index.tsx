import * as React from 'react'
import styled from 'styled-components'
import { Heading3 } from 'src/vendor/heading3'
import { ITeam } from 'src/models/team'
import JoinCard from './joinCard'
import * as colors from 'src/styles/colors'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

type JoinTeamProps = {
  isLoading: boolean
  teamData: ITeam[]
}

const JoinTeamWrapper = styled.div`
  background: ${colors.textWhite};
  padding: 80px 10px 20px;
`


const JoinTeamTitle = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
`

const JoinInfoWrapper = styled.div`
  padding: 20px 30px;
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
`

const JoinTeam = (props: JoinTeamProps) => {
  return (
    <JoinTeamWrapper>
      <JoinTeamTitle>
        <Heading3><TextDisplay>Join The Team</TextDisplay></Heading3>
      </JoinTeamTitle>
      <JoinInfoWrapper>
        <TextJoinTeam>
          <TextTeamName>Squard</TextTeamName>に参加する
        </TextJoinTeam>
        <TextDesciption>
          チームが設定した月々のサブスクリプション料金を支払いProspectsやAngelsとしてチームに参加することで、様々な特典を受け取ることができます。
        </TextDesciption>
      </JoinInfoWrapper>
      <CardWrapper>
        {props.teamData.map((team: ITeam, i) => {
          return <JoinCard key={i} team={team} />
        })}
      </CardWrapper>
      <DefaultFooter />
    </JoinTeamWrapper>
  )
}

export default React.memo(JoinTeam)
