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
interface SocialMediaLink {
  type: SocialMediaType
  url: string
}

const CLASSES = [
  'Leader',
  'Core Members',
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
  topImage?: string
  icon?: string
  nameJp: string
  nameEn: string
  description: string
  socialMedia: SocialMediaLink[]
  teams: ITeam[]
}
