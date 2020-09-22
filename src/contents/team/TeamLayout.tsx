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

const DUMMY_MEMBERS = [
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshunpei.png?alt=media&token=3e8b258d-fb7d-4437-ac86-298573471d81',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fmatsui.png?alt=media&token=6b84927f-4069-40ac-8a90-09099a7f71ab',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fkimura.png?alt=media&token=ce7a24bd-b92d-4c31-a803-90263e76d52a',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshoya.png?alt=media&token=50e1a69b-2f2c-4998-bba9-8fc3deb7d06d',
]

const DUMMY_MEMBERS_WITH_ID = [
  { id: 'shunpei_koike', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshunpei.png?alt=media&token=3e8b258d-fb7d-4437-ac86-298573471d81' },
  { id: 'hiroki_matsui', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fmatsui.png?alt=media&token=6b84927f-4069-40ac-8a90-09099a7f71ab' },
  { id: 'akihiro_kimura', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fkimura.png?alt=media&token=ce7a24bd-b92d-4c31-a803-90263e76d52a' },
  { id: 'shoya_yanagisawa', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshoya.png?alt=media&token=50e1a69b-2f2c-4998-bba9-8fc3deb7d06d' },
]

export const TeamLayout = () => {
  const { loading, error, data } = useQuery<GetTeamQuery>(gql(getTeam), { variables: { id: 'squard' } });
  return (
    <>
      <TeamTop />
      <TeamIntroduction tags={data?.getTeam?.tags} leaderName={data?.getTeam?.leaderName} system={data?.getTeam?.system} />
      <TeamCoreMembers coreMembers={DUMMY_MEMBERS_WITH_ID} />
      <TeamMembers topMember={DUMMY_MEMBERS[0]} members={DUMMY_MEMBERS} />
      <TeamProspects propspects={DUMMY_MEMBERS} />
      <TeamAngels angels={DUMMY_MEMBERS} numOfAngels={65535} />
      <TeamVIP vips={DUMMY_MEMBERS} />
    </>
  )
}