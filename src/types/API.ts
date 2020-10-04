/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateUserInput = {
  nameJp?: string | null,
  nameEn?: string | null,
  introduction?: string | null,
  links?: Array< string | null > | null,
  birthDay?: string | null,
  displlayTeams?: Array< string | null > | null,
  topImage?: string | null,
  icon?: string | null,
};

export enum ClassType {
  Leader = "Leader",
  CoreMember = "CoreMember",
  Member = "Member",
  Prospect = "Prospect",
  Angel = "Angel",
  VIP = "VIP",
}


export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    nameJp: string | null,
    nameEn: string | null,
    introduction: string | null,
    links: Array< string | null > | null,
    birthDay: string | null,
    displayTeams:  Array< {
      __typename: "Team",
      id: string,
      name: string | null,
      tags: Array< string | null > | null,
      system: string | null,
    } | null > | null,
    topImage: string | null,
    icon: string | null,
  } | null,
};

export type RequestSubscriptionMutationVariables = {
  userId: string,
  teamId: string,
  teamClassId: string,
  origin: string,
};

export type RequestSubscriptionMutation = {
  requestSubscription:  {
    __typename: "SubscriptionRequestSession",
    sessionId: string,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam:  {
    __typename: "Team",
    id: string,
    name: string | null,
    title:  {
      __typename: "Title",
      title: string | null,
      subTitle: string | null,
      introduction: string | null,
    },
    tags: Array< string | null > | null,
    system: string | null,
    classes:  Array< {
      __typename: "TeamClass",
      teamId: string,
      classType: ClassType,
      priceId: string | null,
      enabled: boolean | null,
    } | null > | null,
    members:  Array< {
      __typename: "TeamMember",
      teamId: string,
      userId: string,
      createdAt: string | null,
    } | null > | null,
  } | null,
};

export type GetTeamMembersQueryVariables = {
  teamId: string,
};

export type GetTeamMembersQuery = {
  getTeamMembers:  Array< {
    __typename: "TeamMember",
    teamId: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      nameJp: string | null,
      nameEn: string | null,
      introduction: string | null,
      links: Array< string | null > | null,
      birthDay: string | null,
      topImage: string | null,
      icon: string | null,
    } | null,
    createdAt: string | null,
  } | null > | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    nameJp: string | null,
    nameEn: string | null,
    introduction: string | null,
    links: Array< string | null > | null,
    birthDay: string | null,
    displayTeams:  Array< {
      __typename: "Team",
      id: string,
      name: string | null,
      tags: Array< string | null > | null,
      system: string | null,
    } | null > | null,
    topImage: string | null,
    icon: string | null,
  } | null,
};
