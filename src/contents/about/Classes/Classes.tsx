import * as React from 'react'

import styles from './Classes.module.scss'

import Leader from 'src/assets/classes/leader.svg'
import CoreMembers from 'src/assets/classes/core_members.svg'
import Members from 'src/assets/classes/members.svg'
import Prospects from 'src/assets/classes/prospects.svg'
import Angels from 'src/assets/classes/angels.svg'
import Galleries from 'src/assets/classes/galleries.svg'
import VIP from 'src/assets/classes/vip.svg'

import { Heading2 } from 'src/components/Heading2/Heading2'
import { Description } from 'src/components/Description/Description'
import { ClassCard } from 'src/components/ClassCard/ClassCard'

interface ClassesProps {}

export const Classes: React.FC<ClassesProps> = (props) => {
  const classes = [
    {
      logo: <Leader></Leader>,
      title: 'LEADER',
      description:
        'Leader（リーダー）はテキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(80文字程度)',
    },
    {
      logo: <CoreMembers></CoreMembers>,
      title: 'CORE MEMBERS',
      description:
        'Core Members（コアメンバー）はテキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力して(80文字程度)',
    },
    {
      logo: <Members></Members>,
      title: 'MEMBERS',
      description:
        'Members（メンバー）はテキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(80文字程度)',
    },
    {
      logo: <Prospects></Prospects>,
      title: 'PROSPECTS',
      description:
        'Prospect（プロスペクト）はテキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してくださ(80文字程度)',
    },
    {
      logo: <Angels></Angels>,
      title: 'ANGELS',
      description:
        'Angels（エンジェル）はテキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(80文字程度)',
    },
    {
      logo: <Galleries></Galleries>,
      title: 'GALLERIES',
      description:
        'Galleries（ギャラリー）はテキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(80文字程度)',
    },
    {
      logo: <VIP></VIP>,
      title: 'V.I.P.',
      description:
        'V.I.P.（ビップ）はテキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください。テキストを入力してください(80文字程度)',
    },
  ]

  return (
    <div>
      <Heading2 main="CLASS" sub="クラス" />
      <Description>
        SquardにはCLASS（クラス）という概念が存在します。このCLASSによってチーム内で誰がどのような立場なのか、どのような視点でチームに参画しているのかを可視化することができます。
        CLASSにはLeader、Core
        Members、Members、Prospects、Angels、Galleries、V.I.P.の7種類があります。
      </Description>
      <div>
        {classes.map((el, index) => (
          <ClassCard
            key={index}
            logo={el.logo}
            title={el.title}
            description={el.description}
          />
        ))}
      </div>
    </div>
  )
}
