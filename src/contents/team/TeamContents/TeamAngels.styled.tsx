import styled from 'styled-components'
import { teamContentContainer, personIcon } from "./_team-mixins"

export const StyledComponents = styled.div`
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
