import * as React from 'react'

import styles from './ManagementSystem.module.scss'

import TopDown from 'src/assets/management_system/topdown.svg'
import DAO from 'src/assets/management_system/dao.svg'
import styled from 'styled-components'
import { Heading2 } from 'src/components/Heading2/Heading2'
// import { Description } from 'src/components/Description/Description'
import { GradientCard2 } from 'src/components/GradientCard2/GradientCard2'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import * as Const from '../../../styles/const'

const HeaderWrapper = styled.div`
  display: block;
  margin-top: 100px;
  &::after {
    margin-top: 10px;
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(
      to right,
      $gradient-yellow 0%,
      $gradient-red 100%
    );
  }
`

const Description = styled.div`
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.sm};
  letter-spacing: ${Const.letterSpacing.normal};
  line-height: 1.785em;
  padding-left: 58px;
  padding-right: 58px;
  margin-bottom: 50px;
  margin-top: 35px;
  text-align: left;
`
const MainName = styled.div`
  font-weight: ${Const.fontWeight.bold};
  font-size: ${Const.fontSize.xl1};
`
const SubMainName = styled.div`
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.sm};
  margin-bottom: 10px;
`

const ManagerCard = styled.div``

interface ManagementSystemProps {}

export const ManagementSystem: React.FC<ManagementSystemProps> = (props) => {
  const managementSystems = [
    {
      name: { main: 'Topdown', sub: 'トップダウン・中央集権型' },
      logo: <TopDown></TopDown>,
      description:
        'Leaderが全権を持つ一般的な組織の形です。選択や決定の権利が全てLeaderもしくはCore Memberに集中するため管理コストが低くスピーディな意思決定が行われやすくなります。一方で意思決定が不透明であるとチームへの不信感が表れる可能性が高まり、リーダーやコアメンバーは各人員への配慮が求められます。Leaderが権限を付与することで、Leader以外の人員に各種決定権を振り分けることが可能であり、またLeaderがLeader権限を他の人員に付与することでLeaderを交代することもできます。',
    },
    {
      name: { main: 'DAO', sub: '自律分散型' },
      logo: <DAO></DAO>,
      description:
        '非中央集権的な組織の形であり、直接民主主義に則った合意形成を行うことが可能です。Leaderはあくまでも代表者となり、Members以上の人員全てが投票権を持ちます。チームの重要な意思決定や選択は透明性が保たれ、一方で意思決定のスピードが遅くなることや議論が分裂してしまうリスクがあります。LeaderやCore MembersはDAOによる合意決定のもと変更される可能性があり、人員の変更がTopdownの場合よりも頻繁に発生する場合があります。',
    },
  ]

  return (
    <div>
      <HeaderWrapper>
        <Heading2
          main="MANAGEMENT SYSTEM"
          sub="マネジメントシステム"
          size="24px"
        />
      </HeaderWrapper>

      <Description>
        <TextDisplay>
          Squardはチームのマネジメントシステムを2種類から選択することができます。
          <br />
          ひとつは中央集権型の「Topdown（トップダウン）」もうひとつは自律分散型の「DAO（ダオ）」です。このマネジメントシステムはプロジェクトの進行において大変重要な意味を持ち、チームの理念に基づいて選択する必要があります。
        </TextDisplay>
      </Description>
      <div>
        {managementSystems.map((el, index) => (
          <div key={index} className={styles.card}>
            <GradientCard2>
              <div className={styles.name}>
                <MainName>
                  <TextDisplay>{el.name.main}</TextDisplay>
                </MainName>
                <SubMainName>
                  <TextDisplay>（{el.name.sub}）</TextDisplay>
                </SubMainName>
              </div>
            </GradientCard2>
            <div className={styles.logo}>{el.logo}</div>
            <Description>
              <TextDisplay>{el.description}</TextDisplay>
            </Description>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManagementSystem
