import * as React from 'react'
import Facebook from 'src/assets/facebook_icon.svg'
import Instagram from 'src/assets/instagram_icon.svg'
import Twitter from 'src/assets/twitter_icon.svg'
import Youtube from 'src/assets/youtube_icon.svg'
import Email from 'src/assets/email_icon.svg'
import Phone from 'src/assets/phone_icon.svg'
import Link from 'src/assets/link_icon.svg'
import Zoom from 'src/assets/zoom_icon.svg'

import SquardLeader from 'src/assets/squard_leader.svg'
import CoreMembers from 'src/assets/core_members.svg'

import { SocialMediaType, TeamType } from '../../../models/personal'

export function getSocialMediaIcon(name: SocialMediaType) {
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
  } else if (name === 'link') {
    return <Link />
  }
}

export function getTeamIcon(name: TeamType) {
  if (name === 'squard') {
    return <SquardLeader width="3rem" height="3rem" />
  } else if (name === 'cheerfully') {
    return <CoreMembers width="3rem" height="3rem" />
  }
}
