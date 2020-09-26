import * as React from 'react'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import styles from './privacypolicy.module.scss'
import { withTheme } from 'src/context/ThemeContext'

interface PolicySectionContent {
  section: string
  subsections?: string[]
}
interface PolicySectionProps {
  sections: string[]
}
interface PolicySectionWithSubSectionsProps {
  sections: PolicySectionContent[]
}
const PolicySection: React.FC<PolicySectionProps> = ({ sections }) => <>{sections.map(section => <div className='py-2'>{section}</div>)}</>
const PolicySectionWithSubSections: React.FC<PolicySectionWithSubSectionsProps> = ({ sections }) =>
  <>
    {sections.map(section => (
      <div className='py-2'>
        {section.section}
        {section.subsections ?
          <div className='px-4'>
            <PolicySection
              sections={section.subsections}
            />
          </div>
          : ''
        }
      </div>
    ))}
  </>

interface PolicyChapterProps {
  chapter: string
}
const PolicyChapter: React.FC<PolicyChapterProps> = ({ chapter, children }) => (
  <div className="pt-8 text-center text-white text-xl font-medium tracking-wider">
    <TextDisplay className='flex justify-center'>
      <div className={styles.underLiner}>
        {chapter}
      </div>
    </TextDisplay>
    <div className="pb-8">
      <TextDisplay className="pt-8 pl-16 pr-16 text-justify text-white text-sm font-thin tracking-widest text-opacity-75">
        {children}
      </TextDisplay>
    </div>
  </div>
)


const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="pt-8 text-center text-white text-3xl font-bold tracking-wider ">
        <TextDisplay className='flex justify-center'>
          <div className={styles.sharpUnderLiner}>
            Privacy Policy
          </div>
        </TextDisplay>
        <div className="pb-8">
          <TextDisplay className="pt-2 pl-16 pr-16 text-justify text-white text-sm font-thin tracking-widest text-opacity-75">
            スクアード株式会社（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
          </TextDisplay>
        </div>
      </div>
      <PolicyChapter chapter='第1条（個人情報）'>
        「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
      </PolicyChapter>
      <PolicyChapter chapter='第2条（収集方法）'>
        当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
      </PolicyChapter>
      <PolicyChapter chapter='第3条（収集・利用の目的）'>
        <PolicySection
          sections={[
            '当社が個人情報を収集・利用する目的は，以下のとおりです。',
            '1. 当社サービスの提供・運営のため',
            '2. ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）',
            '3. ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため',
            '4. メンテナンス，重要なお知らせなど必要に応じたご連絡のため',
            '5. 利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため',
            '6. ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため',
            '7. 有料サービスにおいて，ユーザーに利用料金を請求するため',
            '8. 上記の利用目的に付随する目的',
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter='第4条（利用目的の変更）'>
        当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。また、利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
      </PolicyChapter>
      <PolicyChapter chapter='第5条（第三者提供）'>
        <PolicySectionWithSubSections
          sections={[
            {
              section: '1. 当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。',
              subsections: [
                '1. 人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき',
                '2. 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき',
                '3. 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき',
                '4. 予め次の事項を告知あるいは公表し，かつ当社が個人情報保護委員会に届出をしたとき',
                '①利用目的に第三者への提供を含むこと',
                '②第三者に提供されるデータの項目',
                '③第三者への提供の手段または方法',
                '④本人の求めに応じて個人情報の第三者へ の提供を停止すること',
                '⑤本人の求めを受け付ける方法',
              ]
            },
            {
              section: '2. 前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。',
              subsections: [
                '1. 当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合',
                '2. 合併その他の事由による事業の承継に伴って個人情報が提供される場合',
                '3. 個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合',
              ]
            }
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter='第6条（開示）'>
        <PolicySectionWithSubSections
          sections={[
            {
              section: '1. 当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。なお，個人情報の開示に際しては，1件あたり1，000円の手数料を申し受けます。',
              subsections: [
                '①本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合',
                '②当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合',
                '③その他法令に違反することとなる場合',
              ]
            },
            {
              section: '2. 前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。'
            }
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter='第7条（訂正及び削除）'>
        <PolicySection
          sections={[
            '1. ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。',
            '2. 当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。',
            '3. 当社は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，これをユーザーに通知します。',
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter='第8条（利用停止等）'>
        <PolicySection
          sections={[
            '1. 当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。',
            '2. 前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。',
            '3. 当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。',
            '4. 前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。',
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter='第9条（当方針の変更）'>
        <PolicySection
          sections={[
            '1. 本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。',
            '2. 当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。',
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter='第10条（お問合せ窓口）'>
        <PolicySection sections={['本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。']} />
        <div className="pt-8 text-center text-white text-2xl underline font-medium tracking-widest">
          <a href='mailto:contact@squard.co.jp' >contact@squard.co.jp</a>
        </div>
      </PolicyChapter>
      <TextDisplay className="pb-8">
        <div className="pt-16 pl-16 pr-12 text-right text-white text-xl font-medium tracking-widest">
          以上
        </div>
        <div className="pt-24 text-center text-white text-xl font-medium tracking-widest text-opacity-75">
          2020年8月1日制定・施行
        </div>
      </TextDisplay>
    </div >
  )
}

export const PrivacyPolicyPage = withTheme(Page, 'dark')
