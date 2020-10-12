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
      birthday
      displayTeamIds
      displayTeamMembers {
        teamId
        teamMemberId
        userId
        user {
          id
          nameJp
          nameEn
          introduction
          links
          birthday
          displayTeamIds
          topImage
          icon
        }
        team {
          id
          name
          subTitle
          introduction
          topImage
          tags
          system
        }
        teamClassId
        class {
          teamClassId
          teamId
          classType
          priceId
          enabled
        }
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
      topImage
      icon
      teamMembers {
        teamId
        teamMemberId
        userId
        user {
          id
          nameJp
          nameEn
          introduction
          links
          birthday
          displayTeamIds
          topImage
          icon
        }
        team {
          id
          name
          subTitle
          introduction
          topImage
          tags
          system
        }
        teamClassId
        class {
          teamClassId
          teamId
          classType
          priceId
          enabled
        }
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
      page {
        id
        resourceId
        type
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
