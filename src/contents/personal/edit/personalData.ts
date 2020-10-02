import { IPersonal } from 'src/models/personal'
import ShunpeiIcon from 'src/images/temp/personal/shunpei_icon.jpg'
import ShunpeiTop from 'src/images/temp/personal/shunpei_top.jpg'
import HirokiIcon from 'src/images/temp/personal/hiroki_icon.png'
import HirokiTop from 'src/images/temp/personal/hiroki_top.jpg'
import AkihiroIcon from 'src/images/temp/personal/akihiro_icon.png'
import ShoyaIcon from 'src/images/temp/personal/shoya_icon.png'

export const shunpei: IPersonal = {
  nameJp: '小池駿平',
  nameEn: 'Shunpei Koike',
  topImage: ShunpeiTop,
  icon: ShunpeiIcon,
  description:
    'プログラミングにのめり込み、研修時代ついたあだ名はJava(ジャバ)くん。英語力ゼロなのにラスベガスで恐れずスピーチ、金欠なのに世界各国で海外生活。多くの応援により香港科技大学で研究をはじめ、同時にSquard株式会社を設立。ブロックチェーンとバナナシェイクをこよなく愛する男。',
  socialMedia: [
    {
      type: 'twitter',
      url: 'https://twitter.com/shunpei42ba_',
    },
    {
      type: 'facebook',
      url: 'https://www.facebook.com/shunpei.koike.9',
    },
    {
      type: 'instagram',
      url: 'https://www.instagram.com/shunpeikoike/',
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/shumpeikoike',
    },
    {
      type: 'github',
      url: 'https://github.com/shunp',
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/channel/UCYtIq93DNJ2ReJoLbR6_oVg/',
    },
    {
      type: 'email',
      url: 'shunpei.koike@squard.co.jp',
    },
  ],
  teams: [
    {
      name: 'Squard',
      classType: 'Leader',
      role: 'CEO',
    },
  ],
}
