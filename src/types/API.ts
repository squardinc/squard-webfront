/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {
  name?: string | null,
  tags?: Array< string | null > | null,
  system?: string | null,
  leaderName?: string | null,
  leaderId?: string | null,
  coreMembers?: string | null,
  members?: string | null,
  angels?: string | null,
  vips?: string | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  tags?: Array< string | null > | null,
  system?: string | null,
  leaderName?: string | null,
  leaderId?: string | null,
  coreMembers?: string | null,
  menbers?: string | null,
  angels?: string | null,
  vips?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type TableTeamFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  tags?: TableStringFilterInput | null,
  system?: TableStringFilterInput | null,
  leaderName?: TableStringFilterInput | null,
  leaderId?: TableStringFilterInput | null,
  angels?: TableStringFilterInput | null,
  vips?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
};

export type CreateTeamMutation = {
  createTeam:  {
    __typename: "Team",
    id: string,
    name: string | null,
    tags: Array< string | null > | null,
    system: string | null,
    leaderName: string | null,
    leaderId: string | null,
    coreMembers: string | null,
    members: string | null,
    angels: string | null,
    vips: string | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
};

export type UpdateTeamMutation = {
  updateTeam:  {
    __typename: "Team",
    id: string,
    name: string | null,
    tags: Array< string | null > | null,
    system: string | null,
    leaderName: string | null,
    leaderId: string | null,
    coreMembers: string | null,
    members: string | null,
    angels: string | null,
    vips: string | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
};

export type DeleteTeamMutation = {
  deleteTeam:  {
    __typename: "Team",
    id: string,
    name: string | null,
    tags: Array< string | null > | null,
    system: string | null,
    leaderName: string | null,
    leaderId: string | null,
    coreMembers: string | null,
    members: string | null,
    angels: string | null,
    vips: string | null,
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
    tags: Array< string | null > | null,
    system: string | null,
    leaderName: string | null,
    leaderId: string | null,
    coreMembers: string | null,
    members: string | null,
    angels: string | null,
    vips: string | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: TableTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams:  {
    __typename: "TeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string | null,
      tags: Array< string | null > | null,
      system: string | null,
      leaderName: string | null,
      leaderId: string | null,
      coreMembers: string | null,
      members: string | null,
      angels: string | null,
      vips: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  tags?: Array< string | null > | null,
  system?: string | null,
  leaderName?: string | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam:  {
    __typename: "Team",
    id: string,
    name: string | null,
    tags: Array< string | null > | null,
    system: string | null,
    leaderName: string | null,
    leaderId: string | null,
    coreMembers: string | null,
    members: string | null,
    angels: string | null,
    vips: string | null,
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  tags?: Array< string | null > | null,
  system?: string | null,
  leaderName?: string | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam:  {
    __typename: "Team",
    id: string,
    name: string | null,
    tags: Array< string | null > | null,
    system: string | null,
    leaderName: string | null,
    leaderId: string | null,
    coreMembers: string | null,
    members: string | null,
    angels: string | null,
    vips: string | null,
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  tags?: Array< string | null > | null,
  system?: string | null,
  leaderName?: string | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam:  {
    __typename: "Team",
    id: string,
    name: string | null,
    tags: Array< string | null > | null,
    system: string | null,
    leaderName: string | null,
    leaderId: string | null,
    coreMembers: string | null,
    members: string | null,
    angels: string | null,
    vips: string | null,
  } | null,
};
