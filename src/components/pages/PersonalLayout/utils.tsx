import * as React from 'react'
import Facebook from 'src/assets/social_media/facebook.svg'
import Instagram from 'src/assets/social_media/instagram.svg'
import Twitter from 'src/assets/social_media/twitter.svg'
import Youtube from 'src/assets/social_media/youtube.svg'
import Email from 'src/assets/social_media/email.svg'
import Phone from 'src/assets/social_media/phone.svg'
import Link from 'src/assets/social_media/link.svg'
import Zoom from 'src/assets/social_media/zoom.svg'

import Leader from 'src/assets/classes/leader.svg'
import CoreMembers from 'src/assets/classes/core_members.svg'
import Members from 'src/assets/classes/members.svg'
import Prospects from 'src/assets/classes/prospects.svg'
import Angels from 'src/assets/classes/angels.svg'
import Galleries from 'src/assets/classes/galleries.svg'
import VIP from 'src/assets/classes/vip.svg'

import { SocialMediaType, ClassType } from 'src/models/personal'

export const getSocialMediaIcon = (name: SocialMediaType) => {
  if (name === 'email') {
    return <Email />
  } else if (name === 'facebook') {
    return <Facebook />
  } else if (name === 'instagram') {
    return <Instagram />
  } else if (name === 'twitter') {
    return <Twitter />
  } else if (name === 'youtube') {
    return <Youtube />
  } else if (name === 'phone') {
    return <Phone />
  } else if (name === 'zoom') {
    return <Zoom />
  }
  return <Link />
}

const teamIconProps = {
  width: '3rem',
  height: '3rem'
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
