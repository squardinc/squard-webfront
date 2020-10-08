import { GetUserQuery } from "src/types/API"

const SOCIAL_MEDIA = [
  'facebook',
  'twitter',
  'youtube',
  'email',
  'zoom',
  'link',
  'phone',
  'instagram',
  'linkedin',
  'github',
] as const

export type SocialMediaType = typeof SOCIAL_MEDIA[number]

const CLASSES = [
  'Leader',
  'CoreMembers',
  'Members',
  'Prospects',
  'Angels',
  'VIP',
]
export type ClassType = typeof CLASSES[number]

export type ITeam = {
  name: string
  classType: ClassType
  role: string
  monthlyPrice?: number
  entitlements?: string[]
}

export type IPersonal = {
  id?: string
  topImage?: string
  icon?: string
  nameJp: string
  nameEn: string
  introduction: string
  links: string[]
  teams: ITeam[]
}

interface S3Object {
  bucket: string
  region: string
  key: string
}

export class Person {
  constructor(
    readonly id: string,
    readonly nameJp: string,
    readonly nameEn: string = '',
    readonly topImage: string = '',
    readonly icon: string = '',
    readonly introduction: string = '',
    readonly links: string[] = [],
    readonly teams: ITeam[] = [],
  ) { }

  static fromQueryResult = (result: GetUserQuery) => {
    const { id, nameJp, nameEn, introduction, links, topImage, icon, displayTeams } = result.getUser
    return new Person(id, nameJp || '', nameEn || '', topImage || '', icon || '', introduction || '', links || [], displayTeams || [])
  }
}