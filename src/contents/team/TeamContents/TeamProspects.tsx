import { Link, navigate } from 'gatsby'
import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import ComingSoon from 'src/images/ComingSoon.jpg'
import NoImage from 'src/images/NoImage.jpg'
import { ITeamMember } from 'src/models/team'
import { PersonImage } from './PersonImage'
import styles from './TeamProspects.module.scss'

const ProspectComingSoon: React.FC = () => {
  return (
    <div className={styles.prospectContainer}>
      <div className="pl-1 pr-2 w-40">
        <PersonImage src={ComingSoon} className={styles.prospect} />
      </div>
    </div>
  )
}
interface ProspectProps {
  prospect: ITeamMember
}
const Prospect: React.FC<ProspectProps> = ({ prospect }) => {
  return (
    <Link to={`/${prospect.user.pageId}`}>
      <div className={styles.prospectContainer}>
        <div className="pl-1 pr-2 w-40">
          <PersonImage src={prospect?.image || prospect?.user?.icon || NoImage} className={styles.prospect} />
        </div>
      </div>
    </Link>
  )
}

interface TeamPropspectsProps {
  propspects: ITeamMember[]
}
export const TeamProspects: React.FC<TeamPropspectsProps> = ({ propspects }) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text="PROSPECTS" color="white" />
      <div className="flex overflow-x-auto">
        {propspects.map((prospect) => (
          <Prospect key={prospect.teamMemberId} prospect={prospect} />
        ))}
        {!propspects.length && <ProspectComingSoon />}
      </div>
      <div className="py-5">
        <DefaultButton
          size="small"
          text="Prospectsとして参加する"
          onClick={() => {
            navigate('join/#PROSPECTS')
          }}
        />
      </div>
    </div>
  )
}

export default TeamProspects
