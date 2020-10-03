import * as React from 'react'
import Facebook from 'src/assets/social_media/facebook.svg'
import Instagram from 'src/assets/social_media/instagram.svg'
import Twitter from 'src/assets/social_media/twitter.svg'
import Youtube from 'src/assets/social_media/youtube.svg'
import Email from 'src/assets/social_media/email.svg'
import Phone from 'src/assets/social_media/phone.svg'
import Link from 'src/assets/social_media/link.svg'
import Zoom from 'src/assets/social_media/zoom.svg'
import Linkedin from 'src/assets/social_media/linkedin.svg'
import GitHub from 'src/assets/social_media/github.svg'

import Leader from 'src/assets/classes/leader.svg'
import CoreMembers from 'src/assets/classes/core_members.svg'
import Members from 'src/assets/classes/members.svg'
import Prospects from 'src/assets/classes/prospects.svg'
import Angels from 'src/assets/classes/angels.svg'
import Galleries from 'src/assets/classes/galleries.svg'
import VIP from 'src/assets/classes/vip.svg'

import { SocialMediaType, ClassType } from 'src/models/person'

const MEDIA_MAP: { [key in SocialMediaType]: JSX.Element } = {
  email: Email,
  phone: Phone,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  zoom: Zoom,
  github: GitHub,
  link: Link,
}

export const getSocialMediaIcon = (type: SocialMediaType) => {
  const MediaIcon = MEDIA_MAP[type]
  return <MediaIcon width="64px" height="64px" />
}

const teamIconProps = {
  width: '3rem',
  height: '3rem',
}
export const getTeamIcon = (classType: ClassType) => {
  switch (classType) {
    case 'Leader':
      return <Leader {...teamIconProps} />
    case 'Core Members':
      return <CoreMembers {...teamIconProps} />
    case 'Members':
      return <Members {...teamIconProps} />
    case 'Prospects':
      return <Prospects {...teamIconProps} />
    case 'Angels':
      return <Angels {...teamIconProps} />
    case 'VIP':
      return <VIP {...teamIconProps} />
    default:
      return <Galleries {...teamIconProps} />
  }
}
