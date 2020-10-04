import * as React from 'react'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import styles from './sctl.module.scss'
import { withTheme } from 'src/context/ThemeContext'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'

interface PolicySectionContent {
  section?: string | JSX.Element
  subsections?: string[] | JSX.Element[]
}
interface PolicySectionProps {
  sections: string[]
}
interface PolicySectionWithSubSectionsProps {
  sections: PolicySectionContent[]
}
const PolicySection: React.FC<PolicySectionProps> = ({ sections }) => (
  <>
    {sections.map((section, index) => (
      <div className="py-2" key={index}>
        {section}
      </div>
    ))}
  </>
)
const PolicySectionWithSubSections: React.FC<PolicySectionWithSubSectionsProps> = ({
  sections,
}) => (
    <>
      {sections.map((section, index) => (
        <div className="py-2 text-justify" key={index}>
          {section.section}
          {section.subsections ? (
            <div className="px-4">
              <PolicySection sections={section.subsections} />
            </div>
          ) : (
              ''
            )}
        </div>
      ))}
    </>
  )

interface PolicyChapterProps {
  chapter: string
}
const PolicyChapter: React.FC<PolicyChapterProps> = ({ chapter, children }) => (
  <div className="pt-8 text-center text-white text-xl font-medium tracking-wider">
    <TextDisplay className="flex justify-center whitespace-pre-wrap">
      <div className={styles.underLiner}>{chapter}</div>
    </TextDisplay>
    <div className="pb-8">
      <TextDisplay className="pt-8 pl-16 pr-16 text-white text-sm font-thin tracking-widest text-opacity-75">
        {children}
      </TextDisplay>
    </div>
  </div>
)

const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="pt-8 text-center text-white text-2xl font-bold tracking-wider ">
        <TextDisplay className="flex justify-center">
          <div className={styles.sharpUnderLiner}>特定商取引法に基づく表記</div>
        </TextDisplay>
      </div>
      <PolicyChapter chapter="事業者">スクアード株式会社</PolicyChapter>
      <PolicyChapter chapter="運営責任者">小池駿平</PolicyChapter>
      <PolicyChapter chapter="所在地">〒135-0064 東京都江東区青海2-7-4 the SOHO 1310</PolicyChapter>
      <PolicyChapter chapter="電話番号">03-5962-4062<br />受付時間：土日祝日年末年始を除く平日</PolicyChapter>
      <PolicyChapter chapter="お問い合わせ">
        <a href="https://www.squard.co.jp" className='underline'>お問い合わせ</a><br />
        チームオーナーへのお問い合わせは、各チームによって定められた方法によって行ってください。
      </PolicyChapter>
      <PolicyChapter chapter="役務の対価">
        <PolicySectionWithSubSections
          sections={[{
            subsections: [
              'チームオーナーの支払う対価',
              '各チームに支援するPROSPECTS、ANGELS、V.I.Pなど、それぞれのメンバーから受けた支援金に下記の手数料を掛けたものが当社の手数料となります。',
              'PROSPECTS: 手数料 10%',
              'ANGELS: 手数料 10%',
              'V.I.P: 手数料 10%',
            ]
          }, {
            section:
              '金額は各チームごとに異なるため、支援の際には各チームページ上に記載された内容をご確認ください。なお、支援金の支払いは、リターンの対価としてチームオーナーへ支払われるものであり、当社は代理受領者として支援金を授受するにすぎません。詳しくは利用規約をご参照ください。'
          }]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="支払方法">
        <PolicySection
          sections={[
            'チームオーナーの支払い方法',
            '手数料の支払いは、総支援金額から手数料相当額を差し引くことにより行われます。なお、銀行への振込手数料等その他の費用は弊社が負担します。',
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="支払い時期">
        <PolicySection
          sections={[
            '支援者から受けた支援金は毎月月末を締め日とし、締め日翌月の16日以降に「支援金明細」を発行し、弊社の手数料相当額を支援金額から差し引いた金額を、締め日翌月の16日以降にお支払いいたします。',
            '入金時期の例：1月分（1/1~1/31）は2/16以降に入金',
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="役務の内容およびその提供時">
        <PolicySection
          sections={[
            '当社は、会員同士がチームを結成する為のマッチングの場を提供し、結成したチームに対し、他の会員が支援者となり、そのチームへ金銭的な支援をする両者のマッチングの場を提供しています。したがって、当社からチームオーナーへの役務の提供時期は、各チームの結成から各チームの解散までとなります。',
            'なお、当社が支援者に直接提供するリターンおよび役務はありません。リターンの提供はあくまで各チームオーナーから支援者に直接行われるものですので、各チームの記載に準じます。',
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="返金・キャンセル">
        <PolicySection
          sections={[
            '本サービスに結成され、支援金の支払いが可能になったチームは原則、当社の承諾なくチームの解散やメンバー変更、クラスに応じた支援金の設定変更やリターン内容の変更が可能です。各チームの変更内容についてのご質問は、各チームへお問い合わせください。',
            '定期購読の解除は定期購読解除のページから行ってください。定期購読解除日以降の決済がキャンセルされます。',
            'なお、一度決済された各チームへの支援金の返金・キャンセルの受付は、一切お断りさせていただきます。',
          ]}
        />
      </PolicyChapter>

      <div className="pt-8 text-center text-white text-2xl font-bold tracking-wider ">
        <TextDisplay className="flex justify-center">
          <div className={styles.sharpUnderLiner}>チームにおけるリターンの<br />販売に関する共通事項</div>
        </TextDisplay>
      </div>
      <div className="pb-8">
        <TextDisplay className="pt-2 pl-16 pr-16 text-justify text-white text-sm font-thin tracking-widest text-opacity-75">
          各チームにおけるリターンの販売者はチームオーナーであり、当社ではありません。以下の事項および、各チームページの記載をご確認ください。
      </TextDisplay>
      </div>
      <PolicyChapter chapter="チームの名称">各チームページの記載に準じる。</PolicyChapter>
      <PolicyChapter chapter={<div>代表者または通信販売に関する業務の<br />責任者の氏名（個人の場合は記載不要）</div>}>各チームページの記載に準じる。</PolicyChapter>
      <PolicyChapter chapter="お問い合わせ先">各チームページの記載に準じる。</PolicyChapter>
      <PolicyChapter chapter="メールアドレス（電子メールで広告を行う場合）">各チームページの記載に準じる。</PolicyChapter>
      <PolicyChapter chapter="商品の販売価格・役務の対価">各チームページの記載に準じる。</PolicyChapter>
      <PolicyChapter chapter="対価以外に必要となる費用">各チームページの記載に準じる。</PolicyChapter>
      <PolicyChapter chapter="代金の支払時期">
        各チームへの支援金はチーム加入時の決済画面で手続きを済ませ、決済完了画面が表示された時点で初回の決済が行われます。
        初回決済以降は決済後1ヶ月経過毎に設定した支払い方法で決済されます。
        クレジットカードの決済：決済画面より支払いが完了した時点で決済が行われます。
      </PolicyChapter>
      <PolicyChapter chapter="購読期間">決済毎の購読期間は決済日を起点に1ヶ月間となり、購読期間終了日に自動更新されます。</PolicyChapter>
      <PolicyChapter chapter="支払方法">クレジットカード払い<br />(Visa/Mastercard/JCB/Diners Club/American Express)</PolicyChapter>

      <DefaultFooter />
    </div>
  )
}

export const SctlPage = withTheme(Page, 'dark')
