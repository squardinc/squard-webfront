import { ClassType } from 'src/models/person'

export type ITeam = {
  main: string
  sub: string
  monthlyPrice: number
  entitlements: string[]
}
export type ITeamClass = {
  main: string
  sub: string
  monthlyPrice: number
  benefits: string[]
  classType: ClassType
  classId: string
}
