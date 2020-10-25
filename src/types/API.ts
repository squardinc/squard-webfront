/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateUserInput = {
  nameJp?: string | null
  nameEn?: string | null
  introduction?: string | null
  links?: Array<string> | null
  birthday?: string | null
  displayTeamIds?: Array<string> | null
  topImage?: string | null
  icon?: string | null
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

export enum PageType {
  Static = 'Static',
  Team = 'Team',
  Person = 'Person',
}

export type JoinAsGalleriesMutationVariables = {
  teamId: string
  teamClassId: string
}

export type JoinAsGalleriesMutation = {
  joinAsGalleries: {
    __typename: 'Response'
    message: string | null
  } | null
}

export type LeaveTeamMutationVariables = {
  teamId: string
  teamClassId: string
}

export type LeaveTeamMutation = {
  leaveTeam: {
    __typename: 'Response'
    message: string | null
  } | null
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
    links: Array<string> | null
    birthday: string | null
    displayTeamIds: Array<string> | null
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
    }> | null
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
export type UpdatePageMutationVariables = {
  pageId: string
}

export type UpdatePageMutation = {
  updatePage: string | null
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
    }> | null
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
      user: {
        nameJp: string | null
        birthday: string | null
        icon: string | null
        page: {
          id: string | null
        } | null
      } | null
    }> | null
    page: {
      __typename: 'Page'
      id: string
      resourceId: string
      type: PageType | null
    } | null
  } | null
}
export type GetTeamsQuery = {
  getTeams:  Array< {
    __typename: "Team",
    id: string,
    name: string | null,
    subTitle: string | null,
    introduction: string | null,
    topImage: string | null,
    tags: Array< string > | null,
    page:  {
      __typename: "Page",
      id: string,
      resourceId: string,
    } | null,
  } > | null,
};

export type GetMyMemberInfoQuery = {
  getMyMemberInfo: Array<{
    __typename: 'MyTeamMember'
    teamId: string
    teamMemberId: string
    userId: string
    user: {
      __typename: 'User'
      id: string
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
  }> | null
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
  }> | null
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
    links: Array<string> | null
    birthday: string | null
    displayTeamIds: Array<string> | null
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
      team: {
        id: string | null
        name: string | null
        page: {
          id: string | null
        } | null
        class: {
          classType: ClassType | null
        } | null
      }
    }> | null
  }
}

export type GetMyselfQuery = {
  getMyself: {
    __typename: 'Myself'
    id: string
    nameJp: string | null
    nameEn: string | null
    introduction: string | null
    links: Array<string> | null
    birthday: string | null
    displayTeamIds: Array<string> | null
    topImage: string | null
    icon: string | null
    teamMembers: Array<{
      __typename: 'MyTeamMember'
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
      class: {
        classType: string
        price: {
          price: number | null
        } | null
        benefits:
          | {
              description: string
              links: string | null
            }[]
          | null
      }
    }> | null
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
