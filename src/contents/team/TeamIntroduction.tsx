import { navigate } from 'gatsby'
import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { HashTag } from 'src/components/HashTag'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import backgroundImage from 'src/images/background.png'
import styles from './TeamIntroduction.module.scss'

interface TeamIntroductionProps {
  name?: string
  introduction?: string
  subTitle?: string
  teamId: string
  tags?: string[]
  leaderName?: string
  system?: string
}

export const TeamIntroduction: React.FC<TeamIntroductionProps> = ({
  name = '',
  introduction = '',
  subTitle = '',
  teamId = 'squard',
  tags = [],
  leaderName = '',
  system = '',
}) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div id="introduction" className={styles.content}>
        <div className={styles.caption}>
          <TextDisplay className={styles.caption1}>{subTitle}</TextDisplay>
          <TextDisplay className={styles.caption2}>{name}</TextDisplay>
        </div>
        <TextDisplay className={styles.description}>{introduction}</TextDisplay>
        <div className={styles.hashTag}>
          {tags.map((tag, index) => (
            <HashTag key={index} text={tag} />
          ))}
        </div>
        <div className={`${styles.attributeContainer} tracking-wide`}>
          <TextDisplay className={styles.captionSystemLabel}>
            マネジメントシステム: <span className="text-yellow">{system}</span>
          </TextDisplay>
          <TextDisplay className={styles.captionSystemLabel}>
            チームリーダー: <span className="text-yellow">{leaderName}</span>
          </TextDisplay>
        </div>
        <DefaultButton
          text="このチームに参加してみる？"
          size="larger"
          onClick={() => navigate(`/${encodeURIComponent(teamId)}/join`)}
        />
      </div>
    </div>
  )
}
