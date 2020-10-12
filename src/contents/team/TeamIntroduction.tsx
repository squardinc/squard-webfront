import * as React from 'react'
import { HashTag } from 'src/components/HashTag'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import backgroundImage from 'src/images/background.png'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { navigate } from 'gatsby'

import styled from 'styled-components'
import colors from 'src/styles/colors'

const StyledComponents = styled.div`
  background-image: url(${backgroundImage});
  
  .content {
    color: white;
    margin: 0px 40px;
    padding: 40px 0px;
  }

  .caption {
    margin: 0px 0px;
  }

  .caption1 {
    color: ${colors.yellow};
    font-size: small;
  }

  .caption2 {
    font-weight: bold;
    font-size: xx-large;
  }

  .description {
    margin: 20px 0px;
    font-size: small;
    letter-spacing: 0.025em;
    font-weight: 200;
  }

  .attributeContainer {
    margin: 20px 0px;
    font-size: 14px;
  }
`

interface TeamIntroductionProps {
  teamId?: string
  tags?: string[]
  leaderName?: string
  system?: string
}

export const TeamIntroduction: React.FC<TeamIntroductionProps> = ({
  teamId = 'squard',
  tags = [],
  leaderName = '',
  system = '',
}) => {
  return (
    <StyledComponents>
      <div id="introduction" className="content">
        <div className="caption">
          <TextDisplay className="caption1">
            未来のチームを定義する
          </TextDisplay>
          <TextDisplay className="caption2">Squard</TextDisplay>
        </div>
        <TextDisplay className="description">
          チーム「Squard（スクアード）」はコラボレーションプラットフォーム「Squard」の企画/開発/運営を目的として集まったチームです。
        </TextDisplay>
        <div>
          {tags.map((tag, index) => (
            <HashTag key={index} text={tag} />
          ))}
        </div>
        <div className={`attributeContainer tracking-wide`}>
          <TextDisplay>
            マネジメントシステム: <span className="text-yellow">{system}</span>
          </TextDisplay>
          <TextDisplay>
            チームリーダー: <span className="text-yellow">{leaderName}</span>
          </TextDisplay>
        </div>
        <DefaultButton
          text="Squardに参加してみる？"
          onClick={() => navigate(`/${teamId}/join`)}
        />
      </div>
    </StyledComponents>
  )
}
