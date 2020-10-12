/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateUserInput = {
  nameJp?: string | null
  nameEn?: string | null
  introduction?: string | null
  links?: Array<string | null> | null
  birthday?: string | null
  displayTeamIds?: Array<string | null> | null
  topImage?: string | null
  icon?: string | null
}

export enum PageType {
  Static = 'Static',
  Team = 'Team',
  Person = 'Person',
}

export enum ClassType {
  Leader = 'Leader',
  CoreMembers = 'CoreMembers',
  Members = 'Members',
  Prospects = 'Prospects',
  Angels = 'Angels',
  Galleries = 'Galleries',
  VIP = 'VIP',
}

export type UpdateUserMutationVariables = {
  input: UpdateUserInput
}

export type UpdateUserMutation = {
  updateUser: {
    __typename: 'User'
    id: string
    nameJp: string | null
    nameEn: string | null
    introduction: string | null
    links: Array<string | null> | null
    birthday: string | null
    displayTeamIds: Array<string | null> | null
    displayTeamMembers: Array<{
      __typename: 'TeamMember'
      teamId: string
      teamMemberId: string
      userId: string
      teamClassId: string
      startAt: number | null
      endAt: number | null
      image: string | null
      imageColor: string | null
      nickname: string | null
      title: string | null
      subTitle: string | null
      age: string | null
      link: string | null
      contact: string | null
      introduction: string | null
    } | null> | null
    topImage: string | null
    icon: string | null
    teamMembers: Array<{
      __typename: 'TeamMember'
      teamId: string
      teamMemberId: string
      userId: string
      teamClassId: string
      startAt: number | null
      endAt: number | null
      image: string | null
      imageColor: string | null
      nickname: string | null
      title: string | null
      subTitle: string | null
      age: string | null
      link: string | null
      contact: string | null
      introduction: string | null
    } | null> | null
    page: {
      __typename: 'Page'
      id: string
      resourceId: string
      type: PageType | null
    } | null
  } | null
}

export type RequestSubscriptionMutationVariables = {
  teamId: string
  teamClassId: string
  origin: string
}

export type RequestSubscriptionMutation = {
  requestSubscription: {
    __typename: 'SubscriptionRequestSession'
    sessionId: string
  } | null
}

export type GetTeamQueryVariables = {
  id: string
}

export type GetTeamQuery = {
  getTeam: {
    __typename: 'Team'
    id: string
    name: string | null
    subTitle: string | null
    introduction: string | null
    topImage: string | null
    tags: Array<string> | null
    system: string | null
    classes: Array<{
      __typename: 'TeamClass'
      teamClassId: string
      teamId: string
      classType: ClassType
      priceId: string | null
      enabled: boolean | null
    } | null> | null
    members: Array<{
      __typename: 'TeamMember'
      teamId: string
      teamMemberId: string
      userId: string
      teamClassId: string
      startAt: number | null
      endAt: number | null
      image: string | null
      imageColor: string | null
      nickname: string | null
      title: string | null
      subTitle: string | null
      age: string | null
      link: string | null
      contact: string | null
      introduction: string | null
    } | null> | null
    page: {
      __typename: 'Page'
      id: string
      resourceId: string
      type: PageType | null
    } | null
  } | null
}

export type GetMyMemberInfoQuery = {
  getMyMemberInfo: Array<{
    __typename: 'MyTeamMember'
    teamId: string
    teamMemberId: string
    userId: string
    user: {
      __typename: 'User'
      id: string
      nameJp: string | null
      nameEn: string | null
      introduction: string | null
      links: Array<string | null> | null
      birthday: string | null
      displayTeamIds: Array<string | null> | null
      topImage: string | null
      icon: string | null
    } | null
    team: {
      __typename: 'Team'
      id: string
      name: string | null
      subTitle: string | null
      introduction: string | null
      topImage: string | null
      tags: Array<string> | null
      system: string | null
    } | null
    teamClassId: string
    class: {
      __typename: 'MyTeamClass'
      teamClassId: string
      teamId: string
      classType: ClassType
      priceId: string | null
      enabled: boolean | null
    } | null
    startAt: number | null
    endAt: number | null
    image: string | null
    title: string | null
    subTitle: string | null
    age: string | null
    link: string | null
    contact: string | null
    introduction: string | null
  } | null> | null
}

export type GetTeamMembersQueryVariables = {
  teamId: string
}

export type GetTeamMembersQuery = {
  getTeamMembers: Array<{
    __typename: 'TeamMember'
    teamId: string
    teamMemberId: string
    userId: string
    user: {
      __typename: 'User'
      id: string
      nameJp: string | null
      nameEn: string | null
      introduction: string | null
      links: Array<string | null> | null
      birthday: string | null
      displayTeamIds: Array<string | null> | null
      topImage: string | null
      icon: string | null
    }
    team: {
      __typename: 'Team'
      id: string
      name: string | null
      subTitle: string | null
      introduction: string | null
      topImage: string | null
      tags: Array<string> | null
      system: string | null
    }
    teamClassId: string
    class: {
      __typename: 'TeamClass'
      teamClassId: string
      teamId: string
      classType: ClassType
      priceId: string | null
      enabled: boolean | null
    }
    startAt: number | null
    endAt: number | null
    image: string | null
    imageColor: string | null
    nickname: string | null
    title: string | null
    subTitle: string | null
    age: string | null
    link: string | null
    contact: string | null
    introduction: string | null
  } | null> | null
}

export type GetUserQueryVariables = {
  id: string
}

export type GetUserQuery = {
  getUser: {
    __typename: 'User'
    id: string
    nameJp: string | null
    nameEn: string | null
    introduction: string | null
    links: Array<string | null> | null
    birthday: string | null
    displayTeamIds: Array<string | null> | null
    displayTeamMembers: Array<{
      __typename: 'TeamMember'
      teamId: string
      teamMemberId: string
      userId: string
      teamClassId: string
      startAt: number | null
      endAt: number | null
      image: string | null
      imageColor: string | null
      nickname: string | null
      title: string | null
      subTitle: string | null
      age: string | null
      link: string | null
      contact: string | null
      introduction: string | null
      team: {
        name: string
        page: {
          id: string
        } | null
      } | null
      class: {
        classType: ClassType
      }
    } | null> | null
    topImage: string | null
    icon: string | null
    teamMembers: Array<{
      __typename: 'TeamMember'
      teamId: string
      teamMemberId: string
      userId: string
      teamClassId: string
      startAt: number | null
      endAt: number | null
      image: string | null
      imageColor: string | null
      nickname: string | null
      title: string | null
      subTitle: string | null
      age: string | null
      link: string | null
      contact: string | null
      introduction: string | null
    } | null> | null
    page: {
      __typename: 'Page'
      id: string
      resourceId: string
      type: PageType | null
    } | null
  } | null
}

export type GetPageQueryVariables = {
  id: string
}

export type GetPageQuery = {
  getPage: {
    __typename: 'Page'
    id: string
    resourceId: string
    type: PageType | null
  } | null
}
