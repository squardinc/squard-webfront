import * as React from 'react'
import { TeamTop } from './TeamTop'
import { TeamIntroduction } from './TeamIntroduction'
import { TeamCoreMembers } from './TeamCoreMembers'

export const TeamLayout = () => {
  return (
    <>
      <TeamTop />
      <TeamIntroduction />
      <TeamCoreMembers />
    </>
  )
}