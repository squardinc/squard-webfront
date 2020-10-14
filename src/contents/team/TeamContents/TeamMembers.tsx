import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import ComingSoon from 'src/images/ComingSoon.jpg'
import { ITeamMember } from 'src/models/team'
import styles from './TeamMembers.module.scss'

interface MemberProps {
  member: ITeamMember
}
const Member: React.FC<MemberProps> = ({ member }) => {
  return (
    <div className="relative">
      <img src={member.image} className={styles.member} />
      <div className={styles.memberCaption}>
        <TextDisplay className={styles.memberName}>
          {member.displayName}
        </TextDisplay>
      </div>
    </div>
  )
}

type TopMemberProps = MemberProps & {
  member?: ITeamMember
}
const TopMember: React.FC<TopMemberProps> = ({ member }) => {
  return (
    <div className={styles.topMemberRow}>
      <div className={styles.topMemberContainer}>
        <img src={member?.image || ComingSoon} className={styles.topMember} />
        {member && (
          <TextDisplay className={styles.topMemberCaption}>
            <div className={styles.topMemberName}>{member.displayName}</div>
            <div className={styles.topMemberTitle}> &nbsp;/ {member.title}</div>
          </TextDisplay>
        )}
      </div>
    </div>
  )
}

interface TeamMembersProps {
  topMember?: ITeamMember
  members?: ITeamMember[]
}
export const TeamMembers: React.FC<TeamMembersProps> = ({
  topMember,
  members = [],
}) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text="MEMBERS" color="white" />
      <TopMember member={topMember} />
      <div className={styles.members}>
        {members
          .filter((member) => member != topMember)
          .map((member) => (
            <Member key={member.teamMemberId} member={member} />
          ))}
      </div>
    </div>
  )
}
