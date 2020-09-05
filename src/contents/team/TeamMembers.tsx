import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import styles from './TeamMembers.module.scss'

interface TeamMembersProps {
  members: string[]
}
export const TeamMembers: React.FC<TeamMembersProps> = ({ members }) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text='MEMBERS' color='white' />
      <div className={styles.members}>
        {members.map(member =>
          <img src={member} className={styles.member} />
        )}
      </div>
    </div >
  )
}