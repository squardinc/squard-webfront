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
  id?: string
  topImage?: string
  icon?: string
  nameJp: string
  nameEn: string
  introduction: string
  socialMedia: string[]
  teams: ITeam[]
}
