import { navigateTo } from 'gatsby'
import * as React from 'react'
import { ContentFooter } from 'src/components/Footer/ContentFooter'
import { withTheme } from 'src/context/ThemeContext'
import akihiro from 'src/images/temp/team/akihiro.jpg'
import hiroki from 'src/images/temp/team/hiroki.jpg'
import shoya from 'src/images/temp/team/shoya.jpg'
import shunpei from 'src/images/temp/team/shunpei.jpg'
import { Team } from 'src/models/team'
import { TeamAngels } from './TeamContents/TeamAngels'
import { TeamCoreMembers } from './TeamContents/TeamCoreMembers'
import { TeamMembers } from './TeamContents/TeamMembers'
import { TeamProspects } from './TeamContents/TeamProspects'
import { TeamVIP } from './TeamContents/TeamVIP'
import { TeamIntroduction } from './TeamIntroduction'
import { TeamTop } from './TeamTop'

const DUMMY_CORE_MEMBERS = [
  {
    id: 'shunpei_koike',
    title: 'CEO',
    age: 27,
    introduction: '鏡の国から導く技術者',
    name: '小池駿平',
    imageUrl: shunpei,
    color: 'red',
  },
  {
    id: 'hiroki_matsui',
    title: 'COO',
    age: 25,
    introduction: 'アートを論理で切り取る教祖',
    name: '松井大樹',
    imageUrl: hiroki,
    color: 'blue',
  },
  {
    id: 'akihiro_kimura',
    title: 'CFO',
    age: 29,
    introduction: 'ゴリラ界最強の頭脳',
    name: '木村明寛',
    imageUrl: akihiro,
    color: 'green',
  },
  {
    id: 'shoya_yanagisawa',
    title: 'CTO',
    age: 27,
    introduction: '時代を愛するエンジニア侍',
    name: '柳澤翔矢',
    imageUrl: shoya,
    color: 'yellow',
  },
]

interface TeamLayoutProps {
  team: Team
}
const Layout: React.FC<TeamLayoutProps> = ({ team }) => {
  return (
    <>
      <TeamTop />
      <TeamIntroduction
        teamId={team.id}
        tags={team.tags}
        leaderName={team.teamMembers.leader?.displayName}
        system={team.system}
      />
      <TeamCoreMembers coreMembers={team.teamMembers.leaderAndCoreMembers} />
      <TeamMembers topMember={team.teamMembers.members[0]} members={team.teamMembers.members} />
      <TeamProspects propspects={team.teamMembers.prospects} />
      <TeamAngels angels={team.teamMembers.angels} numOfAngels={team.teamMembers.angels.length} />
      <TeamVIP vips={team.teamMembers.vip} />
      <ContentFooter
        titleSub="What's the"
        titleMain="Squard?"
        text={
          <>
            Webサービス「Squard（スクアード）」は、新時代のチームメイキングソリューションを提供するコラボレーションプラットフォームです。
            <br />
            チームページから
            <span className="text-yellow">Prospects（プロスペクト）</span>または
            <span className="text-yellow">Angels（エンジェル）</span>
            としてチームに参加することで、コミュニケーションツールや限定コンテンツのアクセスなど
            <span className="text-yellow">Class（クラス）</span>
            ごとに定められた各種特典を受け取ることができます。
          </>
        }
        buttonSub="「Prospects」や「Angels」についてはこちら↓"
        buttonText="Class（クラス）ってなに？"
        onButtonClick={() => navigateTo('/about')}
      />
    </>
  )
}

export const TeamLayout = withTheme(Layout, 'dark')
