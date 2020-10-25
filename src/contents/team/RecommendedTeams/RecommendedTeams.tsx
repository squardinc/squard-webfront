import { Link } from 'gatsby'
import * as React from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { Team } from 'src/models/team'
import styles from './RecommendedTeams.module.scss'

const RECOMMENDED_ORDER = [
  // 'ayaka_artist', //
  // 'piepielielie', //
  // 'joyfully', //
  'fagends',
  'squard',
]

const trim = (text: string, length: number) =>
  text.length > length ? `${text.substring(0, length)}...` : text
interface RecommendedTeamProps {
  team?: Team
}
const RecommendedTeam: React.FC<RecommendedTeamProps> = ({ team }) => {
  if (!team) return <></>
  return (
    <div className={styles.vipContainer}>
      <Link to={`/${encodeURIComponent(team.pageId)}`}>
        <div className="pl-0 pr-0" style={{ width: '300px', height: '520px' }}>
          <img src={team.topImage} className={styles.vip} />
          <div className={styles.vipCaptionContainer}>
            <div className={styles.vipCaption}>
              <div className={styles.vipCaptionTop}>
                <TextDisplay className={styles.subtitle}>{trim(team.subTitle, 18)}</TextDisplay>
                <TextDisplay className={styles.vipName}>{team.name}</TextDisplay>
                <TextDisplay className={styles.vipIntroduction}>
                  {trim(team.introduction, 80)}
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
        {RECOMMENDED_ORDER.filter((teamId) => teamId !== currentTeamId).map((teamId, index) => (
          <RecommendedTeam key={index} team={teams.find((team) => teamId === team.id)} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedTeams
