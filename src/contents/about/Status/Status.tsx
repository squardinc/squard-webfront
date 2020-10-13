import * as React from 'react'

import styles from './Status.module.scss'

import StatusExplain from 'src/assets/status/status.svg'
import Ready from 'src/assets/status/ready.svg'
import Drive from 'src/assets/status/drive.svg'
import Breakup from 'src/assets/status/breakup.svg'
import Complete from 'src/assets/status/complete.svg'
import styled from 'styled-components'
import { Heading2 } from 'src/components/Heading2/Heading2'
// import { Description } from 'src/components/Description/Description'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import * as Const from '../../../styles/const'

const HeaderWrapper = styled.div``

const Description = styled.div`
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.sm};
  letter-spacing: ${Const.letterSpacing.normal};
  line-height: 1.785;
  padding-left: 58px;
  padding-right: 58px;
  margin-bottom: 50px;
  margin-bottom: 50px;
  text-align: left;
`
const StatusDescription = styled(Description)`
  font-weight: ${Const.fontWeight.thin};
  margin-bottom: 30px;
  margin-bottom: 20px;
`

interface StatusProps {}

export const Status: React.FC<StatusProps> = (props) => {
  const statusList = [
    {
      logo: <Ready />,
      description:
        'チームを組成した時点でSTATUSは「Ready」となります。「Ready」の状態ではCore Membersの人員に不足がある場合があります。人員の構成が期待値を超えた場合、かつマイルストーンを始められる条件が整ったと発起人（Leader）が判断した場合、STATUSは「Drive」状態となります',
    },
    {
      logo: <Drive />,
      description:
        '「Drive」状態のチームにはサブスクリプション課金が発生し、設定したマイルストーンの達成が期待されます。マイルストーンとはそのチームにおける中間目標であり、達成までの期間をイベントとして登録することで、チームが前に進む原動力に繋がります。各マイルストーンの達成状況は「Success(サクセス)」「Failure(フェイリア)」としてカウントされ、活動状況が外部からも確認できます。',
    },
    {
      logo: <Breakup />,
      description:
        '「Complete」はプロジェクトが完遂したことを表します。チームは解散され、関与した全ての人員にはチームの成功に対する勲章が与えられます。',
    },
    {
      logo: <Complete />,
      description:
        '「Breakup」はプロジェクトが完遂することなくチームが解散したことを表します。挑戦は失敗に終わりましたが、挑戦したこと自体への勲章が与えられます。',
    },
  ]

  return (
    <div>
      <HeaderWrapper>
        <Heading2 main="STATUS" sub="ステータス" />
      </HeaderWrapper>

      <Description>
        <TextDisplay>
          Squardで管理される全てのチームには、STATUS（ステータス）が存在します。STATUSは現在のチームの状況を表し、チームページの表示項目や各種機能の開放及び制限はステータスに基づいて行われます。またSTATUSはチームの管理者が自由に設定することができます。
        </TextDisplay>
      </Description>
      <div className={styles.explain}>
        <StatusExplain></StatusExplain>
      </div>
      <Description>
        <TextDisplay>
          プロジェクトを開始した時点でSTATUSは「Ready」となり、設定したCore
          Membersの人員が集まった時点で自動的に「Drive」に変更され、チームが始動します。その後プロジェクトが完遂されれば「Complete」途中で解散すれば「Breakup」となります。
        </TextDisplay>
      </Description>
      <div className={styles.statusList}>
        {statusList.map((el, index) => (
          <div key={index} className={styles.status}>
            <div className={styles.logo}>{el.logo}</div>
            <StatusDescription>
              {' '}
              <TextDisplay>{el.description}</TextDisplay>
            </StatusDescription>
          </div>
        ))}
      </div>
    </div>
  )
}
