import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import ComingSoon from 'src/images/ComingSoon.jpg'
import styles from './TeamMembers.module.scss'

interface MemberProps {
  member: string
  name: string
}
const Member: React.FC<MemberProps> = ({ member, name }) => {
  return (
    <div className="relative">
      <img src={member} className={styles.member} />
      <div className={styles.memberCaption}>
        <TextDisplay className={styles.memberName}>{name}</TextDisplay>
      </div>
    </div>
  )
}

type TopMemberProps = MemberProps & {
  title: string
}
const TopMember: React.FC<TopMemberProps> = ({ member, name, title }) => {
  return (
    <div className={styles.topMemberRow}>
      <div className={styles.topMemberContainer}>
        <img src={member || ComingSoon} className={styles.topMember} />
        {member ?
          <TextDisplay className={styles.topMemberCaption}>
            <div className={styles.topMemberName}>{name}</div>
            <div className={styles.topMemberTitle}> &nbsp;/ {title}</div>
          </TextDisplay>
          : ''
        }
      </div>
    </div>
  )
}

interface TeamMembersProps {
  topMember: string
  members: string[]
}
export const TeamMembers: React.FC<TeamMembersProps> = ({
  topMember,
  members,
}) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text="MEMBERS" color="white" />
      <TopMember
        member={topMember}
        name="小池駿平"
        title="Blockchain Engineer"
      />
      <div className={styles.members}>
        {members
          .filter((member) => member != topMember)
          .map((member, index) => (
            <Member key={index} member={member} name={`舎弟${index + 1}`} />
          ))}
      </div>
    </div>
  )
}
