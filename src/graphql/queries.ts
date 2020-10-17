/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      subTitle
      introduction
      topImage
      tags
      system
      classes {
        teamClassId
        teamId
        classType
        priceId
        price {
          price
        }
        enabled
        benefits {
          description
        }
      }
      members {
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
        user {
          nameJp
          birthday
          page {
            id
          }
        }
      }
      page {
        id
        resourceId
        type
      }
    }
  }
`
export const getMyMemberInfo = /* GraphQL */ `
  query GetMyMemberInfo {
    getMyMemberInfo {
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
      title
      subTitle
      age
      link
      contact
      introduction
    }
  }
`
export const getTeamMembers = /* GraphQL */ `
  query GetTeamMembers($teamId: ID!) {
    getTeamMembers(teamId: $teamId) {
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
  }
`
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      topImage
      icon
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
        team {
          id
          name
          page {
            id
          }
        }
        class {
          classType
        }
      }
      page {
        id
        resourceId
        type
      }
    }
  }
`
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      resourceId
      type
    }
  }
`
