import * as React from 'react'
import { gql, useQuery } from '@apollo/client'
import { getTeam } from 'src/graphql/queries'
import { TeamTop } from './TeamTop'
import { TeamIntroduction } from './TeamIntroduction'
import { TeamCoreMembers } from './TeamContents/TeamCoreMembers'
import { TeamMembers } from './TeamContents/TeamMembers'
import { TeamProspects } from './TeamContents/TeamProspects'
import { TeamAngels } from './TeamContents/TeamAngels'
import { TeamVIP } from './TeamContents/TeamVIP'
import { GetTeamQuery } from 'src/types/API'
import { ContentFooter } from 'src/components/Footer/ContentFooter'
import { navigateTo } from 'gatsby'
import { ThemeContext, withTheme } from 'src/context/ThemeContext'
import shunpei from 'src/images/temp/team/shunpei.jpg'
import hiroki from 'src/images/temp/team/hiroki.jpg'
import akihiro from 'src/images/temp/team/akihiro.jpg'
import shoya from 'src/images/temp/team/shoya.jpg'

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

const Layout = () => {
  // const { loading, error, data } = useQuery<GetTeamQuery>(gql(getTeam), { variables: { id: 'squard' } })
  const data = {
    getTeam: {
      id: 'squard',
      tags: ['チームメイキング', '働き方3.0', 'TopDown', 'DAO', '離合集散'],
      leaderName: '小池駿平',
      system: 'トップダウン',
    },
  }
  return (
    <>
      <TeamTop />
      <TeamIntroduction
        teamId={data?.getTeam?.id}
        tags={data?.getTeam?.tags}
        leaderName={data?.getTeam?.leaderName}
        system={data?.getTeam?.system}
      />
      <TeamCoreMembers coreMembers={DUMMY_CORE_MEMBERS} />
      <TeamMembers members={[]} />
      <TeamProspects propspects={[]} />
      <TeamAngels angels={[]} numOfAngels={0} />
      <TeamVIP vips={[]} />
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
