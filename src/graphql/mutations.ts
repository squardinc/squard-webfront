/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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
export const requestSubscription = /* GraphQL */ `
  mutation RequestSubscription(
    $userId: ID!
    $teamId: ID!
    $teamClassId: ID!
    $origin: String!
  ) {
    requestSubscription(
      userId: $userId
      teamId: $teamId
      teamClassId: $teamClassId
      origin: $origin
    ) {
      sessionId
    }
  }
`;
