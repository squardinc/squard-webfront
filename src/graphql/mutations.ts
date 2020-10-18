/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const joinAsGalleries = /* GraphQL */ `
  mutation JoinAsGalleries($teamId: ID!, $teamClassId: ID!) {
    joinAsGalleries(teamId: $teamId, teamClassId: $teamClassId) {
      message
    }
  }
`;
export const leaveTeam = /* GraphQL */ `
  mutation LeaveTeam($teamId: ID!, $teamClassId: ID!) {
    leaveTeam(teamId: $teamId, teamClassId: $teamClassId) {
      message
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      nameJp
      nameEn
      introduction
      links
      birthday
      displayTeamIds
      topImage
      icon
      page {
        id
        resourceId
        type
      }
      teamMembers {
        teamId
        teamMemberId
        userId
        teamClassId
        startAt
        endAt
        image
        imageColor
        nickname
        title
        subTitle
        age
        link
        contact
        introduction
      }
    }
  }
`;
export const requestSubscription = /* GraphQL */ `
  mutation RequestSubscription(
    $teamId: ID!
    $teamClassId: ID!
    $origin: String!
  ) {
    requestSubscription(
      teamId: $teamId
      teamClassId: $teamClassId
      origin: $origin
    ) {
      sessionId
    }
  }
`;
