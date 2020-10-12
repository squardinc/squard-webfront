import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { TwoStagedCaption } from 'src/components/Caption/Captions'

import styled from 'styled-components'
import { teamContentContainer, personIcon } from "./_team-mixins"

import { navigate } from 'gatsby'

const StyledComponents = styled.div`
  ${teamContentContainer("white")}
  .angels {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .angelContainer {
    position: relative;
  }
  .angel {
    ${personIcon("95px", "95px", "5px")}
    margin: 9.5px;
  }
`


interface AngelProps {
  angel: string
}
const Angel: React.FC<AngelProps> = ({ angel }) => {
  return (
    <div className="angelContainer">
      <img src={angel} className="angel" />
    </div>
  )
}

interface TeamAngelsProps {
  angels: string[]
  numOfAngels: number
}
export const TeamAngels: React.FC<TeamAngelsProps> = ({
  angels = [],
  numOfAngels,
}) => {
  return (
    <StyledComponents>
      <TwoStagedCaption
        sub="And we have"
        main={`${numOfAngels} Angels`}
        style="medium"
        subFontWeight=""
      />
      {angels.length ? (
        <div className="pt-6">
          <div className="angels">
            {angels.map((angel, index) => (
              <Angel key={index} angel={angel} />
            ))}
          </div>
        </div>
      ) : (
          ''
        )}
      <div className="pt-5">
        <DefaultButton
          size="small"
          text="Angelsとして参加する"
          onClick={() => {
            navigate('join#ANGELS')
          }}
        />
      </div>
    </StyledComponents>
  )
}
