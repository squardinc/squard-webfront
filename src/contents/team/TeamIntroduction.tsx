import * as React from 'react'
import { StaticImageFluid } from 'src/components/Image'
import styles from './TeamIntroduction.module.scss'
import { HashTag } from 'src/components/HashTag'
import { DefaultButton } from 'src/components/Button/DefaultButton'

const TAGS = [
  'チームメイキング',
  '働き方3.0',
  'Topdown',
  'DAO',
  '離合集散',
]

export const TeamIntroduction = () => {
  return (
    <div className={styles.container}>
      <StaticImageFluid image='background' />
      <div className={styles.content}>
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
          {TAGS.map(tag => <HashTag text={tag} />)}
        </div>
        <div className={styles.attributeContainer}>
          <div>
            <div>
              マネジメントシステム: トップダウン
          </div>
            <div>
              チームリーダー: 小池駿平
          </div>
          </div>
        </div>
        <DefaultButton text='Squardに参加してみる？' />
      </div>
    </div>
  )
}