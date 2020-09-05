import * as React from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import styles from './TeamCoreMembers.module.scss'

interface TeamCoreMembersProps {
  coreMembers: string[]
}
export const TeamCoreMembers: React.FC<TeamCoreMembersProps> = ({ coreMembers }) => {
  return (
    <div className={styles.container}>
      <TwoStagedCaption sub='CORE' main='MEMBERS' />
      <div className={styles.members}>
        {coreMembers.map(member =>
          <img src={member} className={styles.member} />
        )}
      </div>
    </div >
  )
}