import dayjs, { Dayjs } from 'dayjs'
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
  pageId: string
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

interface IBenefit {
  description: string
  link: string
}
export interface IDisplayTeamMember {
  teamId: string
  pageId: string
  teamName: string
  teamClassId: string
  classType: ClassType
  title: string
  price?: number
  expireAt?: Dayjs
  benefits: IBenefit[]
}
class DisplayTeamMember implements IDisplayTeamMember {
  constructor(
    readonly teamId: string,
    readonly pageId: string,
    readonly teamName: string,
    readonly teamClassId: string,
    readonly classType: ClassType,
    readonly title: string,
    readonly price?: number,
    readonly expireAt?: Dayjs,
    readonly benefits: IBenefit[] = []
  ) {}

  static fromUserQueryResult = (displayTeamMember = {}) => {
    return {
      teamId: displayTeamMember.team?.id,
      pageId: displayTeamMember.team?.page?.id,
      teamName: displayTeamMember.team?.name,
      teamClassId: displayTeamMember.teamClassId,
      classType: displayTeamMember.class?.classType,
      title: displayTeamMember.title,
      price: displayTeamMember.class?.price?.price,
      expireAt: displayTeamMember.subscription?.expireAt
        ? dayjs.unix(displayTeamMember.subscription?.expireAt)
        : undefined,
      benefits: displayTeamMember.class?.benefits,
    }
  }
}
export class Person implements IPersonal {
  constructor(
    readonly id: string,
    readonly _pageId: string,
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
      page,
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
      page.id || '',
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
    return this.birthday ? String(dayjs().diff(this.birthday, 'year')) : ''
  }

  get pageId() {
    return encodeURIComponent(this._pageId)
  }
}
