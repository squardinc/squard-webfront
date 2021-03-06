import { Link } from 'gatsby'
import * as React from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { Team } from 'src/models/team'
import styles from './RecommendedTeams.module.scss'

const RECOMMENDED_ORDER = {
  squard: ['ayaka_artist', 'piepielielie', 'joyfully', 'fagends'],
}
const disabledTeams = ['piepielielie']

interface RecommendedTeamProps {
  team?: Team
}
const RecommendedTeam: React.FC<RecommendedTeamProps> = ({ team }) => {
  if (!team) return <></>
  return (
    <div className={styles.vipContainer}>
      <Link to={disabledTeams.includes(team.id) ? '#' : `/${encodeURIComponent(team.pageId)}`}>
        <div className="pl-0 pr-0" style={{ width: '250px', height: '520px' }}>
          <img src={team.topImage} className={styles.vip} />
          <div className={styles.vipCaptionContainer}>
            <div className={styles.vipCaption}>
              <div className={styles.vipCaptionTop}>
                <TextDisplay className={styles.subtitle}>{team.subTitle}</TextDisplay>
                <TextDisplay className={styles.vipName}>{team.name}</TextDisplay>
                <TextDisplay className={styles.vipIntroduction}>
                  {team.introduction}
                </TextDisplay>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
interface RecommendedTeamsProps {
  currentTeamId: string
  teams?: Team[]
}
export const RecommendedTeams: React.FC<RecommendedTeamsProps> = ({
  currentTeamId,
  teams = [],
}) => {
  if (!teams.length) return <></>
  return (
    <div className={styles.container}>
      <div className="pl-2 pr-2">
        <TwoStagedCaption sub="Recommended" main="Teams" style="medium" />
      </div>
      <div className="flex overflow-x-auto overflow-y-hidden pl-6 pr-6">
        {(RECOMMENDED_ORDER[currentTeamId] || ['squard']).map((teamId, index) => (
          <RecommendedTeam key={index} team={teams.find((team) => teamId === team.id)} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedTeams
