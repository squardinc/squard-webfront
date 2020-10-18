import { Link } from 'gatsby'
import * as React from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ITeamMember } from 'src/models/team/index'
import styles from './TeamCoreMembers.module.scss'

interface TeamCoreMembersProps {
  coreMembers: ITeamMember[]
}
export const TeamCoreMembers: React.FC<TeamCoreMembersProps> = ({
  coreMembers,
}) => {
  function getImageTheme(key?: string) {
    if (key === 'red') {
      return styles.redImageContainer
    }
    if (key === 'blue') {
      return styles.blueImageContainer
    }
    if (key === 'green') {
      return styles.greenImageContainer
    }
    if (key === 'yellow') {
      return styles.yellowImageContainer
    }
    return styles.imageContainer
  }
  return (
    <div className={styles.container}>
      <TwoStagedCaption sub="CORE" main="MEMBERS" />
      <div className={styles.members}>
        {coreMembers.map((member) => (
          <Link key={member.userId} to={`/${member.user.pageId}`}>
            <div className="relative mt-3">
                <div
                  style={{
                    background: `url("${member.image}") no-repeat center center `,
                    backgroundSize: 'cover',
                  }}
                  className={getImageTheme(member.imageColor)}
                ></div>

              {member.displayAge && (
                <TextDisplay className={styles.ageTag}>
                  <div className={styles.ageTagContainer}>
                    <p className={`${styles.ageTitle}`}>Age</p>
                    <p
                      className={`border-b border-dashed w-full border-yellow`}
                    ></p>
                    <p className={styles.ageValue}>{member.displayAge}</p>
                  </div>
                </TextDisplay>
              )}
              <TextDisplay className={styles.designationText}>
                {member.title}
              </TextDisplay>
              <TextDisplay className={styles.titleSM}>
                {member.subTitle}
              </TextDisplay>
              <TextDisplay className={styles.titleLG}>
                {member.displayName}
              </TextDisplay>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TeamCoreMembers
