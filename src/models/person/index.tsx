import dayjs from 'dayjs'
import { GetMyselfQuery, GetUserQuery } from 'src/types/API'

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
  'Galleries',
  'VIP',
] as const
export type ClassType = typeof CLASSES[number]
export const ClassTypeJp: { [key in ClassType]: string } = {
  Leader: 'リーダー',
  CoreMembers: 'コアメンバー',
  Members: 'メンバー',
  Prospects: 'プロスペクト',
  Angels: 'エンジェル',
  Galleries: 'ギャラリー',
  VIP: 'ビップ',
}

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
  displayTeamIds: string[]
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
  price?: number
}
class DisplayTeamMember {
  constructor(
    readonly pageId: string,
    readonly teamName: string,
    readonly classType: ClassType,
    readonly title: string,
    readonly price?: number
  ) {}

  static fromUserQueryResult = (displayTeamMember = {}) => {
    return {
      teamId: displayTeamMember.team?.id,
      pageId: displayTeamMember.team?.page?.id,
      teamName: displayTeamMember.team?.name,
      classType: displayTeamMember.class?.classType,
      title: displayTeamMember.title,
      price: displayTeamMember.price?.price,
    }
  }
}
export class Person implements IPersonal {
  constructor(
    readonly id: string,
    readonly nameJp: string,
    readonly nameEn: string = '',
    readonly topImage: string = '',
    readonly icon: string = '',
    readonly introduction: string = '',
    readonly birthday: string = '',
    readonly links: string[] = [],
    readonly displayTeamIds: string[],
    readonly teams: IDisplayTeamMember[] = []
  ) {}

  static fromQueryResult = (result: GetUserQuery | GetMyselfQuery) => {
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
    } = result?.getUser || result?.getMyself || {}
    return new Person(
      id || '',
      nameJp || '',
      nameEn || '',
      topImage || '',
      icon || '',
      introduction || '',
      birthday || '',
      links || [],
      displayTeamIds || [],
      (teamMembers || []).map((each) => DisplayTeamMember.fromUserQueryResult(each))
    )
  }

  get age() {
    return String(dayjs().diff(this.birthday, 'year'))
  }
}
