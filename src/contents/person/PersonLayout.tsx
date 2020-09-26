import * as React from 'react'
import styles from './PersonLayout.module.scss'
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
import ProfileLink from 'src/assets/profile_link_icon.svg'
import UserProfile from 'src/images/user.png'

import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ThemeContext } from 'src/context/ThemeContext'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'

export const PersonLayout = () => {
  React.useContext(ThemeContext).setTheme('gray')
  return (
    <div className={`${styles.container} bg-theme-bg-main`} >
      <div className="pb-0">
        <div  style={{
                background: `url(${UserProfile})`,
                backgroundSize: 'contain',
              }} className={styles.cover}>

        </div>
        <div className={styles.profileContainer}>
          <div className={styles.profilerImageContainer}>
            <div
              style={{
                background: `url(${UserProfile}) no-repeat center center `,
                backgroundSize: 'cover',
              }}
              className={styles.profilerImage}
            ></div>
          </div>
          <TextDisplay className="text-2xl font-medium text-white tracking-widest pl-32 pt-5">
            小池駿平
          </TextDisplay>
          <TextDisplay className="text-base font-thin text-white tracking-widest pl-32">
            Shunpei Koike
          </TextDisplay>
          <TextDisplay className="text-sm font-hairline text-white tracking-widest text-justify p-6">
            プログラミングにのめり込み、研修時代ついたあだ名はJava(ジャバ)くん。英語力ゼロなのにラスベガスで恐れずスピーチ、金欠なのに世界各国で海外生活。多くの応援により香港科技大学で研究をはじめ、同時にSquard株式会社を設立。ブロックチェーンとバナナシェイクをこよなく愛する男。
          </TextDisplay>
          <div className="pl-8 pr-16 inline-flex">
            <Facebook className="mr-4 h-16 w-auto" />
            <Instagram className="mr-4 h-16 w-auto" />
            <Twitter className="mr-4 h-16 w-auto" />
            <Youtube className="mr-4  mt-2 h-16 w-auto" />
          </div>
          <div className="pl-8 pr-16 inline-flex">
            <Email className="mr-4 h-16 w-auto" />
            <Phone className="mr-4 h-16 w-auto" />
            <Link className="mr-2 h-16 w-auto" />
            <Zoom className="mr-4 h-16 w-auto" />
          </div>
        </div>
        <div id="profile-link-squard">
          <div className={styles.profilerLink}>
            <div className="pl-6 flex items-center h-full">
              <SquardLeader className="h-12 w-auto" />
              <span className="pl-8 pt-1 text-white leading-6">
                <TextDisplay className="text-2xl font-semibold">Squard</TextDisplay>
                <TextDisplay>- Leader</TextDisplay>
              </span>
              <div className="absolute right-0 pt-1">
                <ProfileLink className="pr-2 h-12 w-auto" />
              </div>
            </div>
          </div>
          <div className={styles.profilerDesignation}>
            <TextDisplay className="text-black font-thin pl-5 pt-2 pr-5">
              iOS Engineer
            </TextDisplay>
          </div>
        </div>
        <div id="profile-link-member" className="pt-10">
          <div className={styles.profilerLink}>
            <div className="pl-6 flex items-center h-full">
              <CoreMembers className="h-12 w-auto" />
              <span className="pl-8 pt-1 text-white leading-6">
                <TextDisplay className="text-2xl font-semibold">Cheerfully</TextDisplay>
                <TextDisplay>- Core Members</TextDisplay>
              </span>
              <div className="absolute right-0 pt-1">
                <ProfileLink className="pr-2 h-12 w-auto" />
              </div>
            </div>
          </div>
          <div className={styles.profilerDesignation}>
            <TextDisplay className="text-black font-thin pl-5 pt-2 pr-5">Manager</TextDisplay>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}
