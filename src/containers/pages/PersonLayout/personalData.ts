import { IPersonal } from "src/models/personal"
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
      url: 'https://twitter.com/shunpei42ba_'
    },
    {
      type: 'facebook',
      url: 'https://www.facebook.com/shunpei.koike.9'
    },
    {
      type: 'instagram',
      url: 'https://www.instagram.com/shunpeikoike/'
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/shumpeikoike'
    },
    {
      type: 'github',
      url: 'https://github.com/shunp'
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/channel/UCYtIq93DNJ2ReJoLbR6_oVg/'
    },
    {
      type: 'email',
      url: 'shunpei.koike@squard.co.jp'
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
export const hiroki: IPersonal = {
  nameJp: '松井大樹',
  nameEn: 'Hiroki Matsui',
  topImage: HirokiTop,
  icon: HirokiIcon,
  description:
    ' Squard, Inc.のCOOをやっています。そのほかMONSTER MUSIC Inc.という音楽テック企業の取締役をやっていたり、Boxx inc.というクリエイティブエージェンシーでも活動していたりします。白黒写真とグラベルロードが好き。',
  socialMedia: [
    {
      type: 'facebook',
      url: 'https://www.facebook.com/hirokimatsui0429'
    },
    {
      type: 'instagram',
      url: 'https://www.instagram.com/_hirokimatsui/'
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/hiroki-matsui-36075a1b4/'
    },
    {
      type: 'email',
      url: 'matsui@squard.co.jp'
    },
  ],
  teams: [
    {
      name: 'Squard',
      classType: 'Core Members',
      role: 'COO',
    },
  ],
}

export const akihiro: IPersonal = {
  nameJp: '木村明寛',
  nameEn: 'Kimura Akihiro',
  topImage: HirokiTop,
  icon: AkihiroIcon,
  description:
    'Squard, Inc. CFO\r\n182cm130kgの巨体で愛称はゴリラ。外見に反して心理学を専攻。ロックバンドのドラマーとして4年間活動、その後株式会社MONSTER MUSICを立ち上げ営業部門を牽引。1ヶ月前の出来事を事細かに思い出せる超記憶力を持つ。頭がちょっとでかい。',
  socialMedia: [
    {
      type: 'facebook',
      url: 'https://www.facebook.com/akihiro.kimura.18062'
    },
    {
      type: 'twitter',
      url: 'https://twitter.com/golizou3'
    },
    {
      type: 'email',
      url: 'akihiro.kimura@squard.jp'
    },
  ],
  teams: [
    {
      name: 'Squard',
      classType: 'Core Members',
      role: 'CFO',
    },
  ],
}

export const shoya: IPersonal = {
  nameJp: '柳澤翔矢',
  nameEn: 'Shoya Yanagisawa',
  topImage: HirokiTop,
  icon: ShoyaIcon,
  description:
    'Squard, Inc. CTO\r\n在学時代は日本酒とビールを片手に言語哲学をめくり、今ではウイスキーとブランデーを傍らに加えて鍵盤を叩いています。',
  socialMedia: [
    {
      type: 'facebook',
      url: 'https://www.facebook.com/shoya.yanagisawa.1'
    },
    {
      type: 'github',
      url: 'https://github.com/Shoya-Y'
    },
    {
      type: 'email',
      url: 'shoya.yanagisawa@squard.jp'
    },
  ],
  teams: [
    {
      name: 'Squard',
      classType: 'Core Members',
      role: 'CTO',
    },
  ],
}
