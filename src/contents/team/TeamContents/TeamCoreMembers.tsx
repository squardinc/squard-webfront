import * as React from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { Link } from 'gatsby'
import styles from './TeamCoreMembers.module.scss'
import DummyImage from 'src/images/raw.jpg'

interface CoreMember {
  id: string
  imageUrl: string
  age: string
  title: string
  introduction: string
  name:string
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
          <Link key={member.id} to={`/${member.id}`} >
            <div className="relative mt-4">
              <div
                style={{
                  background: `url("${member.imageUrl}") no-repeat center center `,
                  backgroundSize: 'cover',
                }}
                className={getImageTheme(member.color)}
              ></div>
              <div className={styles.ageTag}>
                <p className="ml-2 mr-2 pl-1 leading-9 text-sm font-semibold text-white border-b border-dashed">
                  Age
              </p>
                <p className="pl-3 text-2xl font-bold text-white">{member.age}</p>
              </div>
              <div className={styles.designationText}>{member.title}</div>
              <div className={styles.titleSM}>{member.introduction}</div>
              <div className={styles.titleLG}>{member.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
