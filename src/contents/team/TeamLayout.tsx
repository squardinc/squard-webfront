import * as React from 'react'
import { TeamTop } from './TeamTop'
import { TeamIntroduction } from './TeamIntroduction'
import { TeamCoreMembers } from './TeamCoreMembers'
import { TeamMembers } from './TeamMembers'
import { TeamProspects } from './TeamProspects'
import { TeamAngels } from './TeamAngels'
import { TeamVIP } from './TeamVIP'

export const TeamLayout = () => {
  return (
    <>
      <TeamTop />
      <TeamIntroduction />
      <TeamCoreMembers />
      <TeamMembers />
      <TeamProspects />
      <TeamAngels />
      <TeamVIP />
    </>
  )
}