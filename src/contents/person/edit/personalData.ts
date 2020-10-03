import { IPersonal } from 'src/models/person'
import ShunpeiIcon from 'src/images/temp/person/shunpei_icon.jpg'
import ShunpeiTop from 'src/images/temp/person/shunpei_top.jpg'
import HirokiIcon from 'src/images/temp/person/hiroki_icon.png'
import HirokiTop from 'src/images/temp/person/hiroki_top.jpg'
import AkihiroIcon from 'src/images/temp/person/akihiro_icon.png'
import ShoyaIcon from 'src/images/temp/person/shoya_icon.png'

export const shunpei: IPersonal = {
  nameJp: '小池駿平',
  nameEn: 'Shunpei Koike',
  topImage: ShunpeiTop,
  icon: ShunpeiIcon,
  introduction:
    'プログラミングにのめり込み、研修時代ついたあだ名はJava(ジャバ)くん。英語力ゼロなのにラスベガスで恐れずスピーチ、金欠なのに世界各国で海外生活。多くの応援により香港科技大学で研究をはじめ、同時にSquard株式会社を設立。ブロックチェーンとバナナシェイクをこよなく愛する男。',
  socialMedia: [
    'https://twitter.com/shunpei42ba_',
    'https://www.facebook.com/shunpei.koike.9',
    'https://www.instagram.com/shunpeikoike/',
    'https://www.linkedin.com/in/shumpeikoike',
    'https://github.com/shunp',
    'https://www.youtube.com/channel/UCYtIq93DNJ2ReJoLbR6_oVg/',
    'shunpei.koike@squard.co.jp',
  ],
  teams: [
    {
      name: 'Squard',
      classType: 'Leader',
      role: 'CEO',
    },
  ],
}
