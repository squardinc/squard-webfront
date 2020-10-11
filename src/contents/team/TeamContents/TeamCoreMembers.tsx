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
    let style = styles.yellowImageContainer
    if (key === 'red') {
      style = styles.redImageContainer
    } else if (key === 'blue') {
      style = styles.blueImageContainer
    } else if (key === 'green') {
      style = styles.greenImageContainer
    } else {
      style = styles.yellowImageContainer
    }
    return style
  }
  return (
    <div className={styles.container}>
      <TwoStagedCaption sub="CORE" main="MEMBERS" />
      <div className={styles.members}>
        {coreMembers.map((member) => (
          <Link key={member.userId} to={`/${member.userId}`}>
            <div className="relative mt-3">
              <div
                style={{
                  background: `url("${member.image}") no-repeat center center `,
                  backgroundSize: 'cover',
                }}
                className={getImageTheme(member.imageColor)}
              ></div>
              <TextDisplay className={styles.ageTag}>
                <div className={styles.ageTagContainer}>
                  <p className={`${styles.ageTitle} font-semibold text-white`}>
                    Age
                  </p>
                  <p
                    className={`border-b border-dashed w-full border-yellow`}
                  ></p>
                  <p className="font-bold text-white">{member.age}</p>
                </div>
              </TextDisplay>
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
