/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: TableTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
