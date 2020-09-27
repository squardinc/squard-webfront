export type SocialMediaType =
  | 'facebook'
  | 'twitter'
  | 'phone'
  | 'email'
  | 'zoom'
  | 'link'
  | 'instagram'
  | 'youtube'

export type TeamType = 'squard' | 'cheerfully'

export type ITeam = {
  type: TeamType
  name: string
  position: string
  role: string
}

export type IPersonal = {
  coverImg?: string
  profileImg?: string
  name: string
  subName: string
  description: string
  socialMedia: SocialMediaType[]
  teams: ITeam[]
}
