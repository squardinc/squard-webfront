import * as React from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { Team } from 'src/models/team'
import styles from './RecommendedTeams.module.scss'

const trim = (text: string, length: number) =>
  text.length > length ? `${text.substring(0, length)}...` : text
interface RecommendedTeamProps {
  team: Team
}
const RecommendedTeam: React.FC<RecommendedTeamProps> = ({ team }) => {
  return (
    <div className={styles.vipContainer}>
      <div className="pl-0 pr-0" style={{ width: '300px', height: '520px' }}>
        <img src={team.topImage} className={styles.vip} />
        <div className={styles.vipCaptionContainer}>
          <div className={styles.vipCaption}>
            <div className={styles.vipCaptionTop}>
              <TextDisplay className={styles.subtitle}>{team.subTitle}</TextDisplay>
              <TextDisplay className={styles.vipName}>{team.name}</TextDisplay>
              <TextDisplay className={styles.vipIntroduction}>
                {trim(team.introduction, 75)}
              </TextDisplay>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
interface RecommendedTeamsProps {
  teams?: Team[]
}
export const RecommendedTeams: React.FC<RecommendedTeamsProps> = ({ teams = [] }) => {
  return (
    <div className={styles.container}>
      <div className="pl-2 pr-2">
        <TwoStagedCaption sub="Recommended" main="Teams" style="medium" />
      </div>
      <div className="flex overflow-x-auto overflow-y-hidden pl-6 pr-6">
        {teams.map((team, index) => (
          <RecommendedTeam key={index} team={team} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedTeams
