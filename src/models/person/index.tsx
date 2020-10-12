import dayjs from 'dayjs'
import { GetUserQuery } from 'src/types/API'

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

const CLASSES = ['Leader', 'CoreMembers', 'Members', 'Prospects', 'Angels', 'VIP']
export type ClassType = typeof CLASSES[number]

export type ITeam = {
  id: string
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
  teams: IDisplayTeamMember[]
  age: string
}

interface S3Object {
  bucket: string
  region: string
  key: string
}
interface IDisplayTeamMember {
  teamId: string
  pageId: string
  teamName: string
  classType: ClassType
  title: string
}
class DisplayTeamMember {
  constructor(
    readonly pageId: string,
    readonly teamName: string,
    readonly classType: ClassType,
    readonly title: string
  ) {}

  static fromUserQueryResult = (displayTeamMember = {}) => {
    return {
      teamId: displayTeamMember.team?.id,
      pageId: displayTeamMember.team?.page?.id,
      teamName: displayTeamMember.team?.name,
      classType: displayTeamMember.class?.classType,
      title: displayTeamMember.title,
    }
  }
}
export class Person {
  constructor(
    readonly id: string,
    readonly nameJp: string,
    readonly nameEn: string = '',
    readonly topImage: string = '',
    readonly icon: string = '',
    readonly introduction: string = '',
    readonly birthday: string = '',
    readonly links: string[] = [],
    readonly teams: IDisplayTeamMember[] = [],
    readonly displayTeamIds: string[]
  ) {}

  static fromQueryResult = (result: GetUserQuery) => {
    const {
      id,
      nameJp,
      nameEn,
      topImage,
      icon,
      introduction,
      birthday,
      links,
      teamMembers,
      displayTeamIds,
    } = result?.getUser || {}
    return new Person(
      id || '',
      nameJp || '',
      nameEn || '',
      topImage || '',
      icon || '',
      introduction || '',
      birthday || '',
      links || [],
      (teamMembers || []).map((each) => DisplayTeamMember.fromUserQueryResult(each)),
      displayTeamIds
    )
  }
  get age() {
    return dayjs().diff(this.birthday, 'year')
  }
}
