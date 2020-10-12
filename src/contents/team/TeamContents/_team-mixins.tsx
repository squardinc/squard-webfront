import { css } from 'styled-components'
import colors from 'src/styles/colors'

export const teamMixins = {}

export const teamContentContainer = (
  bgColor = colors.black,
  textColor = colors.black
) => css`
  padding: 11.5px;
  background-color: ${bgColor};
  color: ${textColor};
`

export const personIconDisplayWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

// type errorで使えない→現地でコピペしてます
export const personIconDisplayScroll = css`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const personIcon = ({
  maxWidth = "120px",
  height = "120px",
  radius = "20px",
  width = "100%",
  minWidth = "100%",
}) => css`
  margin: 5px 0px;
  max-width: ${maxWidth};
  height: ${height};
  width: ${width};
  min-width: ${minWidth};
  border-radius: ${radius};
  object-fit: cover;
  object-position: 50% 0%;
`
