import { navigate } from 'gatsby'
import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import Top from 'src/images/temp/team/top.jpg'
import { ITeamMember } from 'src/models/team'
import styles from './TeamProspects.module.scss'

interface ProspectProps {
  prospect: ITeamMember
}
const Prospect: React.FC<ProspectProps> = ({ prospect }) => {
  return (
    <div className={styles.prospectContainer}>
      <div className="pl-1 pr-2 w-40">
        <img
          src={prospect?.image ? encodeURI(prospect.image) : Top}
          className={styles.prospect}
        />
      </div>
    </div>
  )
}

interface TeamPropspectsProps {
  propspects: ITeamMember[]
}
export const TeamProspects: React.FC<TeamPropspectsProps> = ({
  propspects,
}) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text="PROSPECTS" color="white" />
      <div className="flex overflow-x-auto">
        {propspects.map((prospect) => (
          <Prospect key={prospect.teamMemberId} prospect={prospect} />
        ))}
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
