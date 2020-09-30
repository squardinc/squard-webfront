import * as React from 'react'
import { Link } from 'gatsby'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import styles from './TeamCoreMembers.module.scss'

interface CoreMember {
  id: string
  imageUrl: string
  age: string
  title: string
  introduction: string
  name: string
  color: string
}
interface TeamCoreMembersProps {
  coreMembers: CoreMember[]
}
export const TeamCoreMembers: React.FC<TeamCoreMembersProps> = ({
  coreMembers,
}) => {
  function getImageTheme(key: string) {
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
        {coreMembers.map((member: any) => (
          <Link key={member.id} to={`/${member.id}`}>
            <div className="relative mt-3">
              <div
                style={{
                  background: `url("${member.imageUrl}") no-repeat center center `,
                  backgroundSize: 'cover',
                }}
                className={getImageTheme(member.color)}
              ></div>
              <TextDisplay className={styles.ageTag}>
                <div className={styles.ageTagContainer} >
                  <p className={`${styles.ageTitle} font-semibold text-white`}>
                    Age
                  </p>
                  <p className={`border-b border-dashed w-full border-yellow`}>
                  </p>
                  <p className="font-bold text-white">
                    {member.age}
                  </p>
                </div>
              </TextDisplay>
              <TextDisplay className={styles.designationText}>
                {member.title}
              </TextDisplay>
              <TextDisplay className={styles.titleSM}>
                {member.introduction}
              </TextDisplay>
              <TextDisplay className={styles.titleLG}>
                {member.name}
              </TextDisplay>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
