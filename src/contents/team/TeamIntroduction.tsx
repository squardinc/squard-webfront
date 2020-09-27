import * as React from 'react'
import { HashTag } from 'src/components/HashTag'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import backgroundImage from 'src/images/background.png'
import styles from './TeamIntroduction.module.scss'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { navigate } from 'gatsby'

interface TeamIntroductionProps {
  teamId?: string
  tags?: string[]
  leaderName?: string
  system?: string
}

export const TeamIntroduction: React.FC<TeamIntroductionProps> = ({ teamId = 'squard', tags = [], leaderName = '', system = '' }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div id='introduction' className={styles.content}>
        <div className={styles.caption}>
          <TextDisplay className={styles.caption1} >
            未来のチームを定義する
          </TextDisplay>
          <TextDisplay className={styles.caption2}>
            Squard
          </TextDisplay>
        </div>
        <TextDisplay className={styles.description}>
          チーム「Squard（スクアード）」はコラボレーションプラットフォーム「Squard」の企画/開発/運営を目的として集まったチームです。
        </TextDisplay>
        <div>
          {tags.map((tag, index) => <HashTag key={index} text={tag} />)}
        </div>
        <div className={`${styles.attributeContainer} tracking-wide`}>
          <TextDisplay>
            マネジメントシステム: <span className="text-yellow">{system}</span>
          </TextDisplay>
          <TextDisplay>
            チームリーダー: <span className="text-yellow">{leaderName}</span>
          </TextDisplay>
        </div>
        <DefaultButton text='Squardに参加してみる？' onClick={() => navigate(`/${teamId}/join`)} />
      </div>
    </div>
  )
}