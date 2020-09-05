import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import styles from './TeamMembers.module.scss'

interface MemberProps {
  member: string
  name: string
}
const Member: React.FC<MemberProps> = ({ member, name}) => {
  return (
    <div className={styles.memberContainer} >
      <img src={member} className={styles.member} />
      <div className={styles.memberCaption}>
        <div　className={styles.memberName}>{name}</div>
      </div>
    </div>
  )
}

type TopMemberProps = MemberProps & {
  title: string
}
const TopMember: React.FC<TopMemberProps> = ({ member, name, title }) => {
  return (
    <div className={styles.memberContainer} >
      <img src={member} className={styles.topMember} />
      <div className={styles.memberCaption}>
        <div　className={styles.topMemberName}>{name}</div>
        <div　className={styles.topMemberTitle}> / {title}</div>
      </div>
    </div>
  )
}

interface TeamMembersProps {
  topMember: string
  members: string[]
}
export const TeamMembers: React.FC<TeamMembersProps> = ({ topMember, members }) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text='MEMBERS' color='white' />
      <TopMember member={topMember} name='小池駿平' title='Blockchain × xR Engineer' />
      <div className={styles.members}>
        {members.filter(member => member != topMember).map((member, index) =>
          <Member member={member} name={`舎弟${index+1}`} />
        )}
      </div>
    </div >
  )
}