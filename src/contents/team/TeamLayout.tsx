import { navigateTo } from 'gatsby'
import React, { lazy, Suspense } from 'react'
import { withTheme } from 'src/context/ThemeContext'
import { Team } from 'src/models/team'
const TeamTop = lazy(() => import('./TeamTop'))
const TeamCoreMembers = lazy(() => import('./TeamContents/TeamCoreMembers'))
const TeamIntroduction = lazy(() => import('./TeamIntroduction'))
const TeamMembers = lazy(() => import('./TeamContents/TeamMembers'))
const TeamProspects = lazy(() => import('./TeamContents/TeamProspects'))
const TeamVIP = lazy(() => import('./TeamContents/TeamVIP'))
const TeamAngels = lazy(() => import('./TeamContents/TeamAngels'))
const ContentFooter = lazy(() => import('src/components/Footer/ContentFooter'))

interface TeamLayoutProps {
  team: Team
}

const renderLoader = () => <p>Loading</p>

const Layout: React.FC<TeamLayoutProps> = ({ team }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <TeamTop image={team.topImage} />
      <TeamIntroduction
        name={team.name}
        introduction={team.introduction}
        subTitle={team.subTitle}
        teamId={team.id}
        tags={team.tags}
        leaderName={team.teamMembers.leader?.displayName}
        system={team.system}
      />
      <TeamCoreMembers coreMembers={team.teamMembers.leaderAndCoreMembers} />
      <TeamMembers
        topMember={team.teamMembers.members[0]}
        members={team.teamMembers.members}
      />
      <TeamProspects propspects={team.teamMembers.prospects} />
      <TeamAngels
        angels={team.teamMembers.angels}
        numOfAngels={team.teamMembers.angels.length}
      />
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
            としてチームに参加することで、コミュニケーションツールや限定コンテンツへのアクセスなど
            <span className="text-yellow"> Class（クラス）</span>
            ごとに定められた各種特典を受け取ることができます。
          </>
        }
        buttonSub="「Prospects」や「Angels」についてはこちら↓"
        buttonText="Class（クラス）ってなに？"
        onButtonClick={() => navigateTo('/about')}
      />
    </Suspense>
  )
}

export const TeamLayout = withTheme(Layout, 'dark')
export default withTheme(Layout, 'dark')
