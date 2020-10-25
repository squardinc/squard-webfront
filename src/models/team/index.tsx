import { ClassType, ClassTypeJp, IPersonal, Person } from 'src/models/person'
import { GetTeamQuery } from 'src/types/API'

export type ITeam = {
  main: string
  sub: string
  monthlyPrice: number
  entitlements: string[]
}
interface ITeamBenefits {
  description: string
  link?: string
}
export type ITeamClass = {
  teamId: string
  classType: ClassType
  teamClassId: string
  price: number
  classTypeJp: string
  benefits: ITeamBenefits[]
}

export class TeamClass implements ITeamClass {
  constructor(
    readonly teamId: string,
    readonly teamClassId: string,
    readonly classType: ClassType,
    readonly benefits: ITeamBenefits[],
    readonly price: number
  ) {}

  static fromTeamQueryResult = (teamClass) => {
    return new TeamClass(
      teamClass.teamId,
      teamClass.teamClassId,
      teamClass.classType,
      teamClass.benefits,
      teamClass.price.price
    )
  }

  get classTypeJp() {
    return ClassTypeJp[this.classType]
  }
}

export interface ITeamMember {
  teamId: string
  teamMemberId: string
  userId: string
  teamClassId: string
  startAt?: number
  endAt?: number
  image?: string
  nickname?: string
  title?: string
  subTitle?: string
  age?: string
  link?: string
  contact?: string
  introduction?: string
  user: IPersonal
  displayName: string
  imageColor?: string
  displayAge: string
}
class TeamMember implements ITeamMember {
  constructor(
    readonly teamId: string,
    readonly teamMemberId: string,
    readonly userId: string,
    readonly teamClassId: string,
    readonly user: IPersonal,
    readonly startAt?: number,
    readonly endAt?: number,
    readonly image?: string,
    readonly nickname?: string,
    readonly title?: string,
    readonly subTitle?: string,
    readonly age?: string,
    readonly link?: string,
    readonly contact?: string,
    readonly introduction?: string,
    readonly imageColor?: string
  ) {}

  static fromQueryResult = (member: any = {}) => {
    return new TeamMember(
      member.teamId || '',
      member.teamMemberId || '',
      member.userId || '',
      member.teamClassId || '',
      Person.fromQueryResult({ getUser: { ...member.user } }),
      member.startAt || 0,
      member.endAt || 0,
      member.image || '',
      member.nickname || '',
      member.title || '',
      member.subTitle || '',
      member.age || '',
      member.link || '',
      member.contact || '',
      member.introduction || '',
      member.imageColor || ''
    )
  }

  get displayName() {
    return this.nickname || this.user?.nameJp || ''
  }

  get displayAge() {
    return this.age || this.user?.age || ''
  }
}

class TeamMembers {
  leader: ITeamMember
  coreMembers: ITeamMember[] = []
  members: ITeamMember[] = []
  prospects: ITeamMember[] = []
  angels: ITeamMember[] = []
  galleries: ITeamMember[] = []
  vip: ITeamMember[] = []

  constructor(members: ITeamMember[], classes: ITeamClass[]) {
    members.forEach((member) => {
      const teamClass = classes.find((each) => each.teamClassId === member.teamClassId)
      if (!teamClass) {
        throw new Error('TBA')
      }
      this.addMember(TeamMember.fromQueryResult(member), teamClass.classType)
      return
    })
  }

  get leaderAndCoreMembers() {
    return [this.leader].concat(this.coreMembers)
  }

  addMember = (member: ITeamMember, classType: ClassType) => {
    switch (classType) {
      case 'Leader':
        this.leader = member
        break
      case 'CoreMembers':
        this.coreMembers.push(member)
        break
      case 'Members':
        this.members.push(member)
        break
      case 'Prospects':
        this.prospects.push(member)
        break
      case 'Angels':
        this.angels.push(member)
        break
      case 'Galleries':
        this.galleries.push(member)
        break
      case 'VIP':
        this.vip.push(member)
        break
    }
  }
}

export class Team {
  readonly teamMembers: TeamMembers
  private constructor(
    readonly id: string,
    readonly pageId: string,
    readonly name: string,
    readonly subTitle: string,
    readonly introduction: string,
    readonly topImage: string,
    readonly tags: string[],
    readonly system: string,
    readonly classes: ITeamClass[],
    readonly members: ITeamMember[]
  ) {
    this.teamMembers = new TeamMembers(members, classes)
  }

  static fromQueryResult = (result: GetTeamQuery) => {
    const { id, name, subTitle, introduction, topImage, tags, system, classes, members, page } =
      result?.getTeam || {}
    return new Team(
      id || '',
      page?.id || '',
      name || '',
      subTitle || '',
      introduction || '',
      topImage || '',
      tags || [],
      system || '',
      classes || [],
      members || []
    )
  }
}
