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
import DummyImage from 'src/images/raw.jpg'
import { ContentFooter } from 'src/components/Footer/ContentFooter'
import { navigateTo } from 'gatsby'
import { ThemeContext, withTheme } from 'src/context/ThemeContext'

const DUMMY_MEMBERS = [
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshunpei.png?alt=media&token=3e8b258d-fb7d-4437-ac86-298573471d81',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fmatsui.png?alt=media&token=6b84927f-4069-40ac-8a90-09099a7f71ab',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fkimura.png?alt=media&token=ce7a24bd-b92d-4c31-a803-90263e76d52a',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshoya.png?alt=media&token=50e1a69b-2f2c-4998-bba9-8fc3deb7d06d',
]

const DUMMY_CORE_MEMBERS = [
  { id: 'shunpei_koike', title: 'CEO', age: 27, introduction: '鏡の国から導く技術者', name: '小池駿平', imageUrl: DummyImage, color: 'red' },
  { id: 'hiroki_matsui', title: 'COO', age: 25, introduction: 'アートを論理で切り取る教祖', name: '松井大樹', imageUrl: DummyImage, color: 'blue' },
  { id: 'akihiro_kimura', title: 'CFO', age: 29, introduction: 'ゴリラ界最強の頭脳', name: '木村明寛', imageUrl: DummyImage, color: 'green' },
  { id: 'shoya_yanagisawa', title: 'CTO', age: 27, introduction: '時代を愛するエンジニア侍', name: '柳澤翔矢', imageUrl: DummyImage, color: 'yellow' },
]

const Layout = () => {
  const { loading, error, data } = useQuery<GetTeamQuery>(gql(getTeam), { variables: { id: 'squard' } });
  return (
    <>
      <TeamTop />
      <TeamIntroduction teamId={data?.getTeam?.id} tags={data?.getTeam?.tags} leaderName={data?.getTeam?.leaderName} system={data?.getTeam?.system} />
      <TeamCoreMembers coreMembers={DUMMY_CORE_MEMBERS} />
      <TeamMembers topMember={DUMMY_MEMBERS[0]} members={DUMMY_MEMBERS} />
      <TeamProspects propspects={DUMMY_MEMBERS} />
      <TeamAngels angels={DUMMY_MEMBERS} numOfAngels={65535} />
      <TeamVIP vips={DUMMY_MEMBERS} />
      <ContentFooter
        titleSub="What's the"
        titleMain="Squard?"
        text={
          <>
            Webサービス「Squard（スクアード）」は、新時代のチームメイキングソリューションを提供するコラボレーションプラットフォームです。
            <br />
            チームページから<span className='text-yellow'>Prospects（プロスペクト）</span>または<span className='text-yellow'>Angels（エンジェル）</span>としてチームに参加することで、コミュニケーションツールや限定コンテンツのアクセスなど<span className='text-yellow'>Class（クラス）</span>ごとに定められた各種特典を受け取ることができます。
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
