import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'

import { DefaultButton } from 'src/components/Button/DefaultButton'
import { navigate } from 'gatsby'

import styled from 'styled-components'
import { teamContentContainer, personIcon } from "./_team-mixins"

const StyledComponents = styled.div`
  .container {
    ${teamContentContainer()}
  }

  .prospectContainer {
    position: relative;
    margin: 5px;
  }
  .prospects {
    /* personIconDisplayScroll() */
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .prospect {
    ${personIcon("144px", "144px", "5px")}
    margin: 0px 9px;
  }
`

interface ProspectProps {
  prospect: string
}
const Prospect: React.FC<ProspectProps> = ({ prospect }) => {
  return (
    <div className="prospectContainer">
      <div className="pl-1 pr-2 w-40">
        <img src={prospect} className="prospect" />
      </div>
    </div>
  )
}

interface TeamPropspectsProps {
  propspects: string[]
}
export const TeamProspects: React.FC<TeamPropspectsProps> = ({
  propspects,
}) => {
  return (
    <StyledComponents>
      <LeftBorderCaption text="PROSPECTS" color="white" />
      <div className="flex overflow-x-auto">
        {propspects.map((prospect, index) => (
          <Prospect key={index} prospect={prospect} />
        ))}
      </div>
      <div className="py-5">
        <DefaultButton
          size="small"
          text="Prospectsとして参加する"
          onClick={() => {
            navigate('join/#PROSPECTS')
          }}
        />
      </div>
    </StyledComponents>
  )
}
