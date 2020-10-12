import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import { faPaperPlane, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

import styled from 'styled-components'
import colors from 'src/styles/colors'
import { teamContentContainer, personIcon } from "./_team-mixins"

const StyledComponents = styled.div`
  ${teamContentContainer("white")}

  .vips {
    /* personIconDisplayScroll() */
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .vipContainer {
    position: relative;
    position: relative;
    margin: 0px 25px 10px 5px;
  }

  .vip {
    ${personIcon("300px", "300px", "10px")}
  }

  $content-size: 40%;

  .vipCaptionContainer {
    position: relative;
    width: 300px;
    height: 200px;
    bottom: 25px;
    color: white;
    background-color: ${colors.black};
    margin: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .vipCaption {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5% 5%;
  }

  .vipName {
    padding: 10px;
    font-size: x-large;
    font-weight: 800;
  }
  .vipIntroduction {
    padding: 10px;
    font-size: small;
    font-weight: 100;
  }
  .vipLinks {
    display: flex;
    justify-content: flex-start;
    margin: 5px 0px;
  }
`

const trim = (text: string, length: number) => `${text.substring(0, length)}...`
interface VIPProps {
  vip: string
  name: string
  introduction: string
}
const VIP: React.FC<VIPProps> = ({ vip, name, introduction }) => {
  return (
    <div className="vipContainer">
      <div className="pl-0 pr-0" style={{ width: '300px', height: '520px' }}>
        <img src={vip} className="vip" />
        <div className="vipCaptionContainer">
          <div className="vipCaption">
            <div className="vipCaptionTop">
              <TextDisplay className="vipName">{name}</TextDisplay>
              <TextDisplay className="vipIntroduction">
                {introduction}
              </TextDisplay>
            </div>
            <div className="vipLinks">
              <div className="bg-yellow text-black rounded-full h-12 w-12 flex items-center justify-center mr-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="1x"
                  cursor="pointer"
                />
              </div>
              <div className="bg-yellow text-black rounded-full h-12 w-12 flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faLink} size="1x" cursor="pointer" />
              </div>
              <div className="bg-yellow text-black rounded-full h-12 w-40 flex items-center justify-center mr-2">
                <TextDisplay>
                  <span className="font-bold text-lg">Read More</span>
                </TextDisplay>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
interface TeamVIPProps {
  vips: string[]
}
export const TeamVIP: React.FC<TeamVIPProps> = ({ vips }) => {
  return (
    <StyledComponents>
      {/* <div className="pl-2 pr-2">
        <LeftBorderCaption text="V.I.P." />
      </div>
      <div className="flex overflow-x-auto overflow-y-hidden pl-6 pr-6">
        {vips.map((vip, index) => (
          <VIP
            key={index}
            vip={vip}
            name="Shunpei Koike"
            introduction={trim(
              '起業家。2017年にブルームバーグ社の「世界に一番影響力を与えた人物50人」のうちの1人に選ばれ、2018年にはフォーブス誌の「30アンダー30」に選ばれる。',
              50
            )}
          />
        ))}
      </div> */}
    </StyledComponents>
  )
}
