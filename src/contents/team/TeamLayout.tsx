import { navigateTo } from 'gatsby'
import React, { Suspense } from 'react'
import { ContentFooter } from 'src/components/Footer/ContentFooter'
import { withTheme } from 'src/context/ThemeContext'
import { Team } from 'src/models/team'
import { TeamAngels } from './TeamContents/TeamAngels'
import { TeamCoreMembers } from './TeamContents/TeamCoreMembers'
import { TeamMembers } from './TeamContents/TeamMembers'
import { TeamProspects } from './TeamContents/TeamProspects'
import { TeamVIP } from './TeamContents/TeamVIP'
import { TeamIntroduction } from './TeamIntroduction'
import { TeamTop } from './TeamTop'

interface TeamLayoutProps {
  team: Team
}

const Layout: React.FC<TeamLayoutProps> = ({ team }) => {
  return (
    <Suspense fallback={<></>}>
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
