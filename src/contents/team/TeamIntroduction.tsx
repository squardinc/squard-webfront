import * as React from 'react'
import { HashTag } from 'src/components/HashTag'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import backgroundImage from 'src/images/background.png'
import styles from './TeamIntroduction.module.scss'

interface TeamIntroductionProps {
  tags?: string[]
  leaderName?: string
  system?: string
}

export const TeamIntroduction: React.FC<TeamIntroductionProps> = ({ tags = [], leaderName = '', system = '' }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div id='introduction' className={styles.content}>
        <div className={styles.caption}>
          <div className={styles.caption1}>
            個人でも会社でも実現できない
          </div>
          <div className={styles.caption2}>
            新しいチームを実現する
          </div>
        </div>
        <div className={styles.description}>
          チーム「Squard（スクアード）」はコラボレーションプラットフォーム「Squard」の企画/開発/運営を目的として集まったチームです。
        </div>
        <div>
          {tags.map(tag => <HashTag text={tag} />)}
        </div>
        <div className={styles.attributeContainer}>
          <div>
            <div>
              マネジメントシステム: {system}
            </div>
            <div>
              チームリーダー: {leaderName}
            </div>
          </div>
        </div>
        <DefaultButton text='Squardに参加してみる？' />
      </div>
    </div>
  )
}