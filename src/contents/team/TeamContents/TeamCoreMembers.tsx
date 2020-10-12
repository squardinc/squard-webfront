import * as React from 'react'
import { Link } from 'gatsby'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

import styled, { css } from 'styled-components'
import colors from 'src/styles/colors'
import { teamContentContainer } from "./_team-mixins"

const member = css`
  width: 164px;
  height: 344px;
  border: 0px;
  border-radius: 10px;
  margin: 6.5px 5px;
`

const StyledComponents = styled.div`
  ${teamContentContainer("white")}
  .members {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .redImageContainer {
    ${member}
    -webkit-filter: invert(40%) grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-70deg) saturate(400%) contrast(0.8);
    filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-70deg) saturate(500%) contrast(0.8);
  }

  .blueImageContainer {
    ${member}
    -webkit-filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-210deg) saturate(1000%) contrast(0.7);
    filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-205deg) saturate(1000%) contrast(0.7);
  }

  .greenImageContainer {
    ${member}
    -webkit-filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(120deg) saturate(1000%) contrast(0.8);
    filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(120deg) saturate(1000%) contrast(0.8);
  }

  .yellowImageContainer {
    ${member}
    -webkit-filter: grayscale(90%) brightness(80%) sepia(90%) hue-rotate(5deg) saturate(500%) contrast(0.8);
    filter: grayscale(90%) brightness(80%) sepia(90%) hue-rotate(5deg) saturate(500%) contrast(0.8);
  }

  .designationText {
    position: absolute;
    top: 15px;
    left: 20px;
    color: white;
    font-size: 1rem;
    font-weight: bolder;
    font-style: italic;
  }

  .ageTag {
    position: absolute;
    top: 0px;
    right: 15px;
    background-color: ${colors.black};
    height: 67px;
    width: 40px;
    font-size: 18px;
    border-radius: 0 0 10px 10px;
    text-align: center;
  }
  .ageTagContainer {
    margin: 0px 6.5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }
  .ageTitle {
    font-size: 10px;
  }
  .titleSM {
    position: absolute;
    bottom: 45px;
    left: 10px;
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
  }

  .titleLG {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-size: 1.4rem;
    font-weight: bolder;
  }
`

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
