import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import ComingSoon from 'src/images/ComingSoon.jpg'

import styled from 'styled-components'
import colors from 'src/styles/colors'
import { teamContentContainer, personIcon } from "./_team-mixins"

const memberIconMarginLeft = "11px"

const StyledComponents = styled.div`
  ${teamContentContainer()}

  .members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .topMemberRow {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .topMemberContainer {
    position: relative;
    width: 330px;
  }

  .topMember {
    ${personIcon("100%", "204px", "5px")}
  }

  .topMemberCaption {
    position: absolute;
    color: white;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(24px);
    border-radius: 0 10px 10px 0;
    font-size: 12px;
    top: 143px;
    height: 43px;
    width: 235px;
  }


  .topMemberName {
    line-height: 3rem;
    font-size: 22px;
  }

  .topMemberTitle {
    color: ${colors.yellow};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 10px;
    font-size: 12px;
  }

  .member {
    ${personIcon("154px", "143px", "5px")}
    margin: 12.5px ${memberIconMarginLeft};
  }

  .memberCaption {
    position: absolute;
    color: white;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(24px);
    border-radius: 0 10px 10px 0;
    top: 100px;
    left: ${memberIconMarginLeft};
    height: 31px;
    width: 100px;
  }

  .memberName {
    font-size: 14px;
    line-height: 2rem;
  }

`


interface MemberProps {
  member: string
  name: string
}
const Member: React.FC<MemberProps> = ({ member, name }) => {
  return (
    <div className="relative">
      <img src={member} className="member" />
      <div className="memberCaption">
        <TextDisplay className="memberName">{name}</TextDisplay>
      </div>
    </div>
  )
}

type TopMemberProps = MemberProps & {
  title: string
}
const TopMember: React.FC<TopMemberProps> = ({ member, name, title }) => {
  return (
    <div className="topMemberRow">
      <div className="topMemberContainer">
        <img src={member || ComingSoon} className="topMember" />
        {member ? (
          <TextDisplay className="topMemberCaption">
            <div className="topMemberName">{name}</div>
            <div className="topMemberTitle"> &nbsp;/ {title}</div>
          </TextDisplay>
        ) : (
            ''
          )}
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
    <StyledComponents>
      <LeftBorderCaption text="MEMBERS" color="white" />
      <TopMember
        member={topMember}
        name="小池駿平"
        title="Blockchain Engineer"
      />
      <div className="members">
        {members
          .filter((member) => member != topMember)
          .map((member, index) => (
            <Member key={index} member={member} name={`舎弟${index + 1}`} />
          ))}
      </div>
    </StyledComponents>
  )
}
