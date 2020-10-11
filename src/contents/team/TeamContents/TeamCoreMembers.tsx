import * as React from 'react'
import { Link } from 'gatsby'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
// import styles from './TeamCoreMembers.module.scss'
import { StyledComponents } from "./TeamCoreMember.styled"

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
    let style = "yellowImageContainer"
    if (key === 'red') {
      style = "redImageContainer"
    } else if (key === 'blue') {
      style = "blueImageContainer"
    } else if (key === 'green') {
      style = "greenImageContainer"
    } else {
      style = "yellowImageContainer"
    }
    return style
  }
  return (
    <StyledComponents>
      {/* <div className={styles.container}> */}
      <TwoStagedCaption sub="CORE" main="MEMBERS" />
      <div className="members">
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
              <TextDisplay className="ageTag">
                <div className="ageTagContainer">
                  <p className={`ageTitle font-semibold text-white`}>
                    Age
                  </p>
                  <p
                    className={`border-b border-dashed w-full border-yellow`}
                  ></p>
                  <p className="font-bold text-white">{member.age}</p>
                </div>
              </TextDisplay>
              <TextDisplay className="designationText">
                {member.title}
              </TextDisplay>
              <TextDisplay className="titleSM">
                {member.introduction}
              </TextDisplay>
              <TextDisplay className="titleLG">
                {member.name}
              </TextDisplay>
            </div>
          </Link>
        ))}
      </div>
    </StyledComponents>
  )
}
