import * as React from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { Link } from 'gatsby'
import styles from './TeamCoreMembers.module.scss'

interface TeamCoreMembersProps {
  coreMembers: { id: string, imageUrl: string }[]
}
export const TeamCoreMembers: React.FC<TeamCoreMembersProps> = ({ coreMembers }) => {
  return (
    <div className={styles.container}>
      <TwoStagedCaption sub='CORE' main='MEMBERS' />
      <div className={styles.members}>
        {coreMembers.map(member =>
          <Link key={member.id} to={`/${member.id}`} >
            <img src={member.imageUrl} className={styles.member} />
          </Link>
        )}
      </div>
    </div >
  )
}