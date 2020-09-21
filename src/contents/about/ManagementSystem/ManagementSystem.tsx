import * as React from 'react'

import styles from './ManagementSystem.module.scss'

import TopDown from 'src/assets/management_system/topdown.svg'
import DAO from 'src/assets/management_system/dao.svg'

import { Heading2 } from 'src/components/Heading2/Heading2'
import { Description } from 'src/components/Description/Description'
import { GradientCard2 } from 'src/components/GradientCard2/GradientCard2'

interface ManagementSystemProps {}

export const ManagementSystem: React.FC<ManagementSystemProps> = (props) => {
  const managementSystems = [
    {
      name: { main: 'Topdown', sub: 'トップダウン・中央集権型' },
      logo: <TopDown></TopDown>,
      description:
        'チームのマネジメント方式に「Topdown」（トップダウン）を採用している場合、チームの全権はリーダーにあり、テキストを入力してください。テキストを入力してください。テキストを入力してください。',
    },
    {
      name: { main: 'DAO', sub: 'ダオ・自律分散型' },
      logo: <DAO></DAO>,
      description:
        'チームのマネジメント方式に「DAO」（ダオ）を採用している場合、チームの全権はリーダーにあり、テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。',
    },
  ]

  return (
    <div>
      <Heading2 main="MANAGEMENT SYSTEM" sub="マネジメントシステム" />
      <Description>
        Squardはチームのマネジメントシステムを2種類から選択することができます。
        <br />
        ひとつは中央集権型の「Topdown（トップダウン）」もうひとつは自律分散型の「DAO（ダオ）」です。このマネジメントシステムはプロジェクトの進行において大変重要な意味を持ち、チームの理念に基づいて選択する必要があります。
      </Description>
      <div>
        {managementSystems.map((el) => (
          <div className={styles.card}>
            <GradientCard2>
              <div className={styles.name}>
                <div className={styles.nameMain}>{el.name.main}</div>
                <div className={styles.nameSub}>（{el.name.sub}）</div>
              </div>
            </GradientCard2>
            <div className={styles.logo}>{el.logo}</div>
            <div className={styles.description}>{el.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
