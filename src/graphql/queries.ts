/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      title {
        title
        subTitle
        introduction
      }
      tags
      system
      classes {
        teamId
        classType
        priceId
        enabled
      }
      members {
        teamId
        userId
        createdAt
        teamClassId
      }
    }
  }
`;
export const getTeamMembers = /* GraphQL */ `
  query GetTeamMembers($teamId: ID!) {
    getTeamMembers(teamId: $teamId) {
      teamId
      userId
      user {
        id
        nameJp
        nameEn
        introduction
        links
        birthDay
      }
      createdAt
      teamClassId
      class {
        teamId
        classType
        priceId
        enabled
      }
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      nameJp
      nameEn
      introduction
      links
      birthDay
      displayTeams {
        id
        name
        tags
        system
      }
      topImage {
        bucket
        region
        key
      }
      icon {
        bucket
        region
        key
      }
    }
  }
`;
