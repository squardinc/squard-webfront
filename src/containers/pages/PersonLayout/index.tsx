import * as React from 'react'
import PersonalLayout from '../../../components/pages/PersonalLayout'
import { IPersonal } from '../../../models/personal'

export const PersonalLayoutContainer = () => {
  const personal: IPersonal = {
    name: '小池駿平',
    subName: 'Shunpei Koike',
    description:
      'プログラミングにのめり込み、研修時代ついたあだ名はJava(ジャバ)くん。英語力ゼロなのにラスベガスで恐れずスピーチ、金欠なのに世界各国で海外生活。多くの応援により香港科技大学で研究をはじめ、同時にSquard株式会社を設立。ブロックチェーンとバナナシェイクをこよなく愛する男。',
    socialMedia: [
      'facebook',
      'twitter',
      'youtube',
      'email',
      'zoom',
      'link',
      'phone',
      'instagram',
    ],
    teams: [
      {
        type: 'squard',
        name: 'Squard',
        position: 'Leader',
        role: 'iOS Engineer',
      },
      {
        type: 'cheerfully',
        name: 'Cheerfully',
        position: 'Core Members',
        role: 'Manager',
      },
    ],
  }

  return <PersonalLayout isLoading={false} personal={personal} />
}

export default PersonalLayoutContainer
