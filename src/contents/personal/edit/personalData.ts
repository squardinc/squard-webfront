import { IPersonal } from "src/models/personal"
import ShunpeiIcon from 'src/images/temp/personal/shunpei_icon.jpg'
import ShunpeiTop from 'src/images/temp/personal/shunpei_top.jpg'
import HirokiIcon from 'src/images/temp/personal/hiroki_icon.png'
import HirokiTop from 'src/images/temp/personal/hiroki_top.jpg'
import AkihiroIcon from 'src/images/temp/personal/akihiro_icon.png'
import ShoyaIcon from 'src/images/temp/personal/shoya_icon.png'

export const hiroki: IPersonal = {
    id:'hiroki',
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
            classType: 'Leader',
            role: 'CEO',
        },
        {
            name: 'Cheerfully',
            classType: 'Core Memmbers',
            role: 'CEO',
        },
    ],
}
