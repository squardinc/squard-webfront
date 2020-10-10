import * as React from 'react'

import styles from './Classes.module.scss'
import styled from 'styled-components'
import Leader from 'src/assets/classes/leader.svg'
import CoreMembers from 'src/assets/classes/core_members.svg'
import Members from 'src/assets/classes/members.svg'
import Prospects from 'src/assets/classes/prospects.svg'
import Angels from 'src/assets/classes/angels.svg'
import Galleries from 'src/assets/classes/galleries.svg'
import VIP from 'src/assets/classes/vip.svg'

import { Heading2 } from 'src/components/Heading2/Heading2'
// import { Description } from 'src/components/Description/Description'
import { ClassCard } from 'src/components/ClassCard/ClassCard'
import * as Const from '../../../styles/const'

const Description = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.sm};
  letter-spacing: ${Const.letterSpacing.normal};
  line-height: 1.785em;
  padding-left: 58px;
  padding-right: 58px;
  margin-bottom: 40px;
  margin-top: 30px;
  text-align: left;
`

interface ClassesProps {}

export const Classes: React.FC<ClassesProps> = (props) => {
  const classes = [
    {
      logo: <Leader />,
      title: 'Leader',
      subTitle: '（リーダー）',
      description:
        '文字通りチームの代表者であり多くの場合発起人でもあるリーダーは、「Topdown方式」の場合はチームにおける意思決定の全権を持ちます。「DAO方式」の場合はチームの代表者ではあるものの、権限に関してはCore Members及びMembersの人員と同等となります。',
    },
    {
      logo: <CoreMembers />,
      title: 'Core Members',
      subTitle: '（コアメンバー）',
      description:
        'チームの根幹であり、責任と労働を伴うCore Membersは、プロジェクトの原動力となるモチベーションやスキル、生産性を要求される存在です。また「Topdown方式」の場合はLeaderの次に強い権限を持ちます。「DAO方式」のチームの場合はMembersと同様の権限となります。',
    },
    {
      logo: <Members />,
      title: 'Members',
      subTitle: '（メンバー）',
      description:
        '責任と労働を伴うMemberは、法人でいうところの「社員」にあたり、各人員種別の中で中間に位置する存在であります。Leader〜Memberまでに該当する人員は、個別に設定しない限り基本的にチームで共有されている全てのファイル及びトークルームへのアクセスが可能であり、労働の対価を享受する立場にあります。',
    },
    {
      logo: <Prospects />,
      title: 'Prospects',
      subTitle: '（プロスペクト）',
      description:
        '責任と労働を伴わないProspectsは、法人でいうところの「学生インターン（無給）」や「新卒研修/見習い」にあたり、指定された労働をこなす義務や行動への責任はありません。プロジェクトに参加したいがチームに貢献できるスキルや時間的リソースなどが不十分である場合に該当する人員種別です。基本的に月々のサブスクリプションが必須となります。',
    },
    {
      logo: <Angels />,
      title: 'Angels',
      subTitle: '（エンジェル）',
      description:
        '責任と労働を伴わないAngelsは、オンラインサロンでいうところのサロンメンバーにあたり、指定された労働をこなす義務や行動への責任はありません。プロジェクトに参加したいがプロジェクト内での作業に従事することができない、または従事する意思がない場合に該当する人員種別となります。基本的にプロスペクトよりも低価格な月々のサブスクリプションが必須となります。',
    },
    {
      logo: <Galleries />,
      title: 'Galleries',
      subTitle: '（ギャラリー）',
      description:
        'チームが取り組むプロジェクトを見守るGalleriesは、いわゆる「チームに対するフォロワー」のような存在で、経済的な支援や労働、責任などとは無縁の存在です。チームの進捗情報やキャリアサマリー更新などがリーチする他、チームがGalleriesへのファイル及びトークルームの閲覧許可を設定している場合はそれらへのアクセスが可能となります。',
    },
    {
      logo: <VIP />,
      title: 'V.I.P',
      subTitle: '（ビップ）',
      description:
        'チームの後援者であるV.I.P.は、チームに対して経済的な支援やリソース及びネットワークを提供することを目的とした特別枠の人員です。チーム内で設定された権限に応じてファイルやトークルームの閲覧が可能ですが、Vote機能における投票権は基本的に持ちません。月々のサブスクリプションを個別に設定できます。',
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
            subTitle={el.subTitle}
            description={el.description}
          />
        ))}
      </div>
    </div>
  )
}
