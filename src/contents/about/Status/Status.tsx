import * as React from 'react'

import styles from './Status.module.scss'

import StatusExplain from 'src/assets/status/status.svg'
import Ready from 'src/assets/status/ready.svg'
import Drive from 'src/assets/status/drive.svg'
import Breakup from 'src/assets/status/breakup.svg'
import Complete from 'src/assets/status/complete.svg'

import { Heading2 } from 'src/components/Heading2/Heading2'
import { Description } from 'src/components/Description/Description'

interface StatusProps {}

export const Status: React.FC<StatusProps> = (props) => {
  const statusList = [
    {
      logo: <Ready></Ready>,
      description:
        'Ready（レディー）はプロジェクトが準備段階であることを表します。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(120文字程度)',
    },
    {
      logo: <Drive></Drive>,
      description:
        'Drive（ドライブ）はプロジェクトが進行中であることを表します。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(120文字程度)',
    },
    {
      logo: <Breakup></Breakup>,
      description:
        'Breakup（ブレイクアップ）はプロジェクトが完遂することなく解散したことを表します。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(120文字程度)',
    },
    {
      logo: <Complete></Complete>,
      description:
        'Complete（コンプリート）はチームがプロジェクトを完遂したことを表します。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(120文字程度)',
    },
  ]

  return (
    <div>
      <Heading2 main="STATUS" sub="ステータス" />
      <Description>
        Squardで管理される全てのチームには、STATUS（ステータス）が存在します。STATUSは現在のチームの状況を表し、チームページの表示項目や各種機能の開放及び制限はステータスに基づいて行われます。またSTATUSはチームの管理者が自由に設定することができます。
      </Description>
      <div className={styles.explain}>
        <StatusExplain></StatusExplain>
      </div>
      <Description>
        プロジェクトを開始した時点でSTATUSは「Ready」となり、設定したCore
        Membersの人員が集まった時点で自動的に「Drive」に変更され、チームが始動します。その後プロジェクトが完遂されれば「Complete」途中で解散すれば「Breakup」となります。
      </Description>
      <div className={styles.statusList}>
        {statusList.map((el, index) => (
          <div key={index} className={styles.status}>
            <div className={styles.logo}>{el.logo}</div>
            <div className={styles.description}>{el.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
