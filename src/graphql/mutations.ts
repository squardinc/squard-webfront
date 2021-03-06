/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const joinAsGalleries = /* GraphQL */ `
  mutation JoinAsGalleries($teamId: ID!, $teamClassId: ID!) {
    joinAsGalleries(teamId: $teamId, teamClassId: $teamClassId) {
      message
    }
  }
`
export const leaveTeam = /* GraphQL */ `
  mutation LeaveTeam($teamId: ID!, $teamMemberId: ID!) {
    leaveTeam(teamId: $teamId, teamMemberId: $teamMemberId) {
      message
    }
  }
`
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
`
export const requestSubscription = /* GraphQL */ `
  mutation RequestSubscription($teamId: ID!, $teamClassId: ID!, $origin: String!) {
    requestSubscription(teamId: $teamId, teamClassId: $teamClassId, origin: $origin) {
      sessionId
    }
  }
`
export const updatePage = /* GraphQL */ `
  mutation UpdatePage($pageId: ID!) {
    updatePage(pageId: $pageId)
  }
`
export const agreeTermsOfUse = /* GraphQL */ `
  mutation AgreeTermsOfUse($version: AWSDate!) {
    agreeTermsOfUse(version: $version) {
      message
    }
  }
`
