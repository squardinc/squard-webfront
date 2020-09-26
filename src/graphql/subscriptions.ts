/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam(
    $id: ID
    $name: String
    $tags: [String]
    $system: String
    $leaderName: String
  ) {
    onCreateTeam(
      id: $id
      name: $name
      tags: $tags
      system: $system
      leaderName: $leaderName
    ) {
      id
      name
      tags
      system
      leaderName
      leaderId
      coreMembers
      members
      angels
      vips
    }
  }
`
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam(
    $id: ID
    $name: String
    $tags: [String]
    $system: String
    $leaderName: String
  ) {
    onUpdateTeam(
      id: $id
      name: $name
      tags: $tags
      system: $system
      leaderName: $leaderName
    ) {
      id
      name
      tags
      system
      leaderName
      leaderId
      coreMembers
      members
      angels
      vips
    }
  }
`
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam(
    $id: ID
    $name: String
    $tags: [String]
    $system: String
    $leaderName: String
  ) {
    onDeleteTeam(
      id: $id
      name: $name
      tags: $tags
      system: $system
      leaderName: $leaderName
    ) {
      id
      name
      tags
      system
      leaderName
      leaderId
      coreMembers
      members
      angels
      vips
    }
  }
`
