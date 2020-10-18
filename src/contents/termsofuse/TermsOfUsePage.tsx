import * as React from 'react'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { withTheme } from 'src/context/ThemeContext'
import styled from 'styled-components'
import * as Const from '../../styles/const'
import styles from './termsofuse.module.scss'

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

const EndPoliccyWrapper = styled.div`
  font-weight: ${Const.fontWeight.regular};
  font-size: ${Const.fontSize.lg};
  width: 100%;
  margin-top: 60px;
  padding-left: 58px;
  padding-right: 58px;
  display: flex;
  justify-content: flex-end;
`

const DateWrapper = styled.div`
  font-weight: ${Const.fontWeight.dimlight};
  font-size: ${Const.fontSize.base};
  letter-spacing: 0.075;
  line-height: 5;
  text-align: center;
  margin-top: 60px;
`
const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="pt-8 text-center text-white text-2xl font-bold tracking-wider ">
        <TextDisplay className="flex justify-center">
          <div className={styles.sharpUnderLiner}>利用規約</div>
        </TextDisplay>
      </div>
      <div className="mx-8">
        スクアード株式会社（以下「弊社」といいます。）が提供するサービス名称「Squard」（以下「本サービス」といい、理由の如何を問わず、当社のウェブサイトの名称、ドメインまたは内容が変更された場合は、当該変更後のサービス・ドメインを含みます。）についての利用規約（以下「本規約」といいます。）をここに定めます。本規約は、本サービスを利用するための当事者間の契約の内容になるものであり、弊社とユーザー（第1条第2号で定義します。）は、本規約が本サービスを利用するための契約の内容になることに合意するものとします。
      </div>
      <PolicyChapter chapter="">
        <PolicySectionWithSubSections
          sections={[
            {
              section: '第1条（定義）',
              subsections: [
                '本規約において用いる用語の定義は、次の通りとします。',
                '（1）「会員」本規約を承認の上、弊社が定める方法により、本サービス利用のために入会を申し込み、会員登録された者',
                '（2）「ユーザー」 会員およびゲストユーザーを含む本サービスを利用するすべてのユーザー',
                '（3）「ゲストユーザー」 会員登録せずに本サービスの一部を利用するユーザー',
                '（4）「チーム」本サービス上でユーザー同士によって結成されたチーム ',
                '（5）「クラス」チーム毎に定められた会員の種類を指す名称 ',
                '（6）「チーム会員」チームへの会員登録が完了し、チームに所属しているユーザー ',
                '（7）「チームマスター」チームの企画、管理、運営等の実行者およびチームの代表者 ',
                '（8）「有料クラス」チーム毎に定められたクラスの中でも月額会費を支払うことで参加できるクラス',
                '（9）「会員契約」チームへの会員登録が完了した場合に、チーム会員とチームマスターとの間で成立する契約',
                '（10）「会員特典」各チームのクラス毎に定められた、チーム会員が毎月享受できることを約束されたもの',
                '（11）「特別特典」各チームが都度定めた、特別特典発生時期までに、該当チームに参加している全員が享受できる可能性があるもの',
                '（12）「外部SNSサービス」Facebook、その他の他の事業者が提供しているスクアード所定のソーシャル・ネットワーキング・サービスで、会員の認証、友人関係の開示、当該外部ソーシャル・ネットワーク内へのコンテンツの公開などの機能を持ち、本サービスの実施に利用されるサービス',
              ],
            },
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="第1章　会員登録等">
        <PolicySectionWithSubSections
          sections={[
            {
              section: '第2条（会員申込）',
              subsections: [
                '1項　弊社の会員となるには、本規約および本サービスプライバシーポリシーの内容をお読みいただき、これらを遵守することに同意のうえ、弊社の提供する入力フォームにて所定の情報を提供する方法による会員登録への申込み手続きが必要です。入力に際しては、真正な情報を提供していただく必要があります。同一人が複数の会員登録をすることはできません。',
                '2項　前項の申込に対して弊社が承諾をした場合、承諾をした時点をもって会員登録手続は完了し、申込者は、この時点から会員としての地位を取得します。なお、弊社は、次の場合には申込に対する承諾を行いません。',
                '（1）申込の際に弊社に提供された情報（以下「登録情報」といいます。）の全部または一部につき虚偽、誤記または記載漏れがあった場合',
                '（2）過去に会員資格を停止された、または停止事由に該当したことが判明した場合',
                '（3）第25条第1項に定める確約事項に違反するおそれが認められる場合',
                '（4）第26条に定める事由が認められる場合 （5）その他、弊社が登録を適当でないと判断した場合',
                '3項　弊社は、前項の承諾をしない場合において、申込者にその理由を開示する義務を負いません。',
              ],
            },
            {
              section: '第3条（会員IDおよびパスワードの管理）',
              subsections: [
                '1項　会員は、弊社が会員に付与する会員ID、パスワード等の管理および保管を行う責任を負うものとします。会員は、設定したパスワードを定期的に変更して不正利用の防止に努めなければなりません。',
                '2項　会員は、会員IDおよびパスワード等を第三者に利用させ、または譲渡もしくは担保設定その他の処分をすることはできません。',
                '3項　会員IDおよびパスワード等の管理不十分、使用上の過誤、第三者の使用等による損害の責任は会員が負うものとし、弊社は一切の責任を負いません。',
                '4項　会員は、会員IDまたはパスワードが第三者に漏えいした場合、あるいは会員IDまたはパスワードが第三者に使用されている疑いのある場合には、直ちに弊社にその旨を連絡するとともに、弊社の指示がある場合にはこれに従うにものとします。この場合、弊社はその会員IDやパスワード等を不正アカウントとして停止することができるものとします。',
              ],
            },
            {
              section: '第4条（届出事項の変更等）',
              subsections: [
                '1項　会員は、入会申込の際に弊社に提供した登録情報に変更があった場合は、遅滞なく弊社に当該変更事項にかかる情報を提供するものとします。',
                '2項　会員は、弊社から本人確認書類その他会員資格に関する情報の開示を求められた場合は、これに応じなければなりません。',
              ],
            },
            {
              section: '第5条（退会）',
              subsections: [
                '1項　会員は、所定の手続きにより弊社の会員登録を抹消（退会）することができます。',
                '2項　会員が死亡した場合その他本人の会員資格の利用が不可能となる事由があったときは、弊社は、当該会員がその時点で退会したものとみなし、会員IDおよびパスワードの利用を停止します。',
              ],
            },
            {
              section: '第6条（会員資格の停止、抹消）',
              subsections: [
                '1項　弊社は、以下の事由がある場合、会員に何ら事前の通知または催告をすることなく、会員資格を一時停止し、または会員登録を抹消することができるものとします。',
                '（1）会員IDまたはパスワードおよび本サービスを不正に使用しまたは使用させた場合',
                '（2）弊社に提供された登録情報の全部または一部につき虚偽、誤記または記載漏れがあった場合',
                '（3）弊社、他のユーザー、外部SNS事業者その他の第三者に損害を生じさせるおそれのある目的または方法で本サービスを利用した、または利用しようとした場合',
                '（4）手段の如何を問わず、本サービスの運営を妨害した場合',
                '（5）支払債務（支援金を含む）を期限までに履行しなかった場合',
                '（6）会員に対し、差押、仮差押、仮処分、強制執行、破産、民事再生、会社更生、特別清算の申し立てがなされた場合、または、会員が自ら破産、民事再生、会社更生、特別清算の申し立てをした場合',
                '（7）禁固以上の法定刑が定められた罪を犯した疑いがあるとき',
                '（8）弊社の定める回数以上のパスワードの入力ミスがある場合',
                '（9）弊社の定める期間内に本サービスの利用がなかった場合',
                '（10）登録したメールアドレスや電話番号が不通となり、弊社からの連絡が不可能となった場合',
                '（11）会員が本規約の条項に違反した場合',
                '（12）ユーザーが登録した金融機関の口座に関し違法、不適切その他の問題があることが当該金融機関による指摘等により判明した場合',
                '（13）第25条第1項に定める確約事項に違反するおそれが認められる場合',
                '（14）第26条に定める事由が認められる場合',
                '（15）その他、会員として不適格であると弊社が判断した場合',
                '2項　会員が前項の各号に該当することが判明した場合、弊社は、(ⅰ)会員がチーム会員の場合は、チームからの脱退および、会員権利を抹消させ、(ⅱ)チームマスターの場合は、会員権利を抹消し、チームから直ちに脱退および、当該者がチームマスターとなっていたチームを解散させることができます。',
                '3項　弊社は、第1項各号に該当する合理的な疑いが生じた場合において、事実確認が完了するまで当該会員のサービスの利用を一時的に停止することができます。',
                '4項　弊社は、本条に基づき弊社が行った行為により会員に生じた損害について弊社に故意または重大な過失がない限り一切の責任を負いません。',
              ],
            },
            {
              section: '第7条（会員登録をしないサービス利用について）',
              subsections: [
                '1項　ユーザーは、弊社が認める場合に限り、ゲストユーザーとして会員登録をせずに本サービスの一部を利用することができます。ゲストユーザーは、本規約および弊社プライバシーポリシーの内容をよく読み、これらを遵守することに同意した場合に限り本サービスを利用することができます。',
                '2項　第2条2項各号に定める事由が認められる場合、弊社は、ゲストユーザーによる本サービスの利用を承認しないことができます。その場合に弊社は、不承認の理由を開示する義務を負いません。',
                '3項　ゲストユーザーが弊社に登録したメールアドレスは、第3条におけるIDおよびパスワードに準じて取り扱われるものとします。',
                '4項　第6条1項に定める事由が認められる場合、弊社は直ちにゲストユーザーの本サービスの利用を停止することができるものとします。この場合の取扱いは第6条2項～4項に準じます。',
                '5項　弊社は、ゲストユーザーが利用した本サービスの内容、利用日時および回数、本サービス利用時のゲストユーザーのオンライン行動等、ゲストユーザーによる本サービスの利用・閲覧に関連する情報（これには、リファラ、ADID／IDFAその他の識別子、Cookie情報、アクセスログ等の利用状況に関する情報、利用端末情報、位置情報、IPアドレス、ブラウザ情報、ブラウザ言語等を含むゲストユーザーの通信に関する情報を含み、これらに限りません）を取得し、本サービスの利便性等の向上を目的として活用させていただきますので予めご了承ください。',
              ],
            },
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="第2章　弊社の提供するサービス">
        <PolicySectionWithSubSections
          sections={[
            {
              section: '第8条（本サービスの内容）',
              subsections: [
                '1項　本サービスは、会員が結成したチームに対し、不特定多数の他のユーザーがチーム会員となり、そのチームへ支援をするためのプラットフォームです。',
                '2項　本サービスにおいてチーム会員が享受し得る会員特典は、チーム会員が継続的に毎月享受できるものであり、チーム会員は月額課金の方式により、当社の指定する期限までに所定の方法で毎月会員費を支払うものとします。',
              ],
            },
            {
              section: '第9条（契約当事者）',
              subsections: [
                '1項　チームへの会員登録が完了した場合、チームマスターとチーム会員との間において会員契約が成立します。プラットフォームの提供者である弊社は会員契約の当事者ではありません。',
                '2項　弊社は、チームマスターによる会員特典の不履行等について一切の責任を負うことはありません。',
              ],
            },
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="第3章　チームマスターに関するルール">
        <PolicySectionWithSubSections
          sections={[
            {
              section: '第10条（利用資格）',
              subsections: [
                '1項　チームマスターとしてチーム会員から会費を募集するには以下の条件を満たす必要があります。',
                '（1）弊社の会員であること',
                '（2）20歳以上であること（未成年者である場合、法定代理人の個別の同意が確認できれば可）',
                '（3）日本国内に住所を有し、電話番号（携帯電話番号を含む）、本人名義の銀行口座および公的機関が発行している身分証（免許証、パスポート、健康保険証等）もしくは学生証を持っていること。ただし、弊社が個別に認めた場合に限り、日本国内に住所を有しないユーザーもチームマスターとなることができます。',
                '2項　チームマスターとなったユーザーは、弊社が必要と判断する場合、上記の証明書類または弊社が必要と認める情報や書類を提供しなければなりません。',
              ],
            },
            {
              section: '第11条（チームマスターの義務）',
              subsections: [
                '1項　チームマスターは、チームの活動および会員特典の提供を行うにあたり、特定商取引に関する法律、不当景品類および不当表示防止法、その他関係法令を自らの責任において遵守しなければなりません。特定商取引に関する法律に基づく「販売業者」に該当する場合は、特定商取引に関する法律に基づく表記を、チームページおよび／またはチームマスターとなる者のプロフィールページ等のチームページからリンクで遷移できるページに掲載する必要があります。',
                '2項　以下に該当する会員特典を設定する場合は、チームページおよび／またはチームマスターのプロフィールページ等の、チームページからリンクで遷移できるページに許認可番号、管理責任者名等のそれぞれの許認可等においてウェブサイトへの表示が法令上義務付けられている事項を記載してください。',
                '（1）中古品：古物商許可証 （2）酒類：通信販売酒類小売業免許',
                '（3）食品：食品衛生法上に基づく営業許可',
                '（4）その他、法令諸規則において利用資格等が必要である場合',
                '3項　チームマスターは、結成したチームを、自らが主体として遂行し、特典の実行が確実であることが求められます。実行が不確実な特典の掲載はできません。',
                '4項　チームマスターは、いかなる理由においても他者（個人・法人を含む）へのなりすましをしてはいけません。',
                'チームマスターは、チーム結成および会員特典の掲載において個人・団体の名称を含む事実関係のすべてについて真実の記載をしなければなりません。',
              ],
            },
            {
              section: '第12条（禁則事項）',
              subsections: [
                'チームの活動または会員特典の内容が下記に該当する場合にはチームの結成を禁止します。',
                '（1）チームの活動または会員特典の内容が、法律・政省令等（ガイドライン等を含み、これに限りません。以下「法令等」といいます。）を遵守していないまたはそのおそれがある場合。',
                '（これらの例示） 著作権を含む一切の知的財産権を侵害する行為',
                '食品衛生法、食品表示法上の義務に反する態様での食品の取扱い',
                '酒税法上の義務違反する態様での酒類の取扱い 電波法上の規制に則らない通信機器の販売',
                '・医薬品、医療機器等の品質、有効性および安全性の確保等に関する法律の定める規制に反する化粧品、医療品等の取扱い',
                '医薬品医療機器等法に反する医薬品、医療機器等の取扱い',
                '動物取扱業に関する規制に違反する対応での動物の取扱い',
                '旅行業法、道路運送法等の規制に反する観光サービスの提供や取扱い',
                '※以上はあくまでも例示にすぎません。法的規制の有無およびその履行については会員契約の当事者であるチームマスターがその責任において実施しなければならず、弊社はその責任を負いません。',
                '（2）チームの活動または会員特典の内容において取り扱う商品やサービスが、法令等に違反またはそのおそれのある場合。',
                '（これらの例示） 凶器、銃器類 覚せい剤、麻薬、向精神薬、毒物、劇物等 タバコ、ニコチン含有液体',
                '火薬類 象牙等、種の保存法で禁止される製品 売春もしくは性道徳に反する行為',
                '賭博、富くじの売買やこれに関係する行為',
                '※以上はあくまでも例示にすぎません。法的規制の有無およびその履行については会員契約の当事者であるチームマスターがその責任において実施しなければならず、弊社はその責任を負いません。',
                '（3）チームの活動または特典の内容について、金融商品取引法が適用されるまたはそのおそれのある場合。また、資金決済法に定める前払式支払手段（ただし、弊社が個別の事情を勘案して掲載を妥当と判断した場合において、資金決済法等の法令等に照らして問題が無いことが確認されたときを除く）もしくは暗号資産に該当するまたはそのおそれがある場合。',
                '（4）チームの活動または特典の内容に関して、犯罪を助長するおそれあるいは道徳上の観点から弊社が定める次の商品やそれに関するサービスの提供。',
                'エアガン、スタンガン、催涙スプレー 開運、魔よけ、健康上の効能を標榜する高額商品',
                '無限連鎖講、マルチ商法に該当またはそのおそれのあるもの 著しく高価な宝石等の商品',
                '金券、商品券、クーポン券等で流通性の認められる商品 著しく射幸心をあおると認められるもの',
                'わいせつ性が強く性風俗に抵触すると認められるもの その他弊社が不適切と判断するもの',
                '（5）チームの活動または特典の内容の内容が、肖像権、プライバシー権、人格権、等々、あらゆる他人の権利を害し、またはそのおそれのある場合',
                '（6）チームの活動または特典の内容が、国籍、民族、人種、社会的身分、性別、思想、信教、病歴、教育、年齢などによる差別的表現行為に該当、またはその虞のある内容を含む場合',
                '（7）チームの活動または特典の内容が、青少年の保護・育成の観点から不適切な物やサービスの提供や表現であると認められる場合。',
                '（8）第三者への寄附を目的とする場合（ただし、弊社が個別に認める場合を除く）',
                '（9）一般に市販されているもしくは定価がある商品やサービスのうち、自らが製造者や販売者ではないものを取り扱う場合',
                '（10）自ら定価を設定している商品であり、当該定価とリターンの価格との間に著しい差がある場合',
                '（11）チームの活動やリターンが、本サービスそのものや弊社の掲げる理念等と相容れないと認められる場合',
                '（12）その他、弊社がチームの活動やリターンの内容を不適切であると判断する場合',
              ],
            },
            {
              section: '第13条（チームの結成）',
              subsections: [
                '1項　チームマスターとしてチーム会員から会費を募集するには、弊社が定める事項を入力フォームに入力してチームの結成をするものとします。また、弊社からの個別の求めがある場合には、別途必要な情報や書類の提出をしなければなりません。',
                '2項　チームが結成された後において次の事情が判明した場合には、弊社は当該チームを解散することがあります。',
                '（1）第10条の利用資格を有することが確認できない場合',
                '（2）申込時に申請した情報に事実に反する内容が含まれている場合',
                '（3）チームの活動または会員特典の内容が前条に定める禁則事項に抵触する場合',
                '（4）第6条1項に定める会員資格の停止事由のあることが判明した場合',
                '（5）その他、弊社がチームの活動が不適当であると判断した場合',
                '3項　チームが結成された後において、第2項の各号記載の事情が合理的に疑われる場合、弊社は、事実関係の確認に必要な間、チームページの掲載を一時中止することがあります。チームマスターは、弊社の事実関係の確認に必要な協力をしなければなりません。',
                '4項　弊社は、第2項から第4項に定める事情により、チームの解散またはチームページの掲載を中止した場合において、その理由を開示する義務を負いません。',
                '5項　弊社は、本条に基づき弊社が行った行為により会員に生じた損害について一切の責任を負いません。',
              ],
            },
            {
              section: '第14条（クラス）',
              subsections: [
                '各チームにはそれぞれに独自のクラスが存在しており、クラスの月額会員費や会員特典はチーム毎に異なります。チーム会員はチームへの会員登録をする際に選択したクラスに応じた会員費を支払うことで当該クラスの会員特典を享受することが出来ます。',
              ],
            },
            {
              section: '第15条（チームマスターに発生する手数料）',
              subsections: [
                '1項　チームの会員費の決済が完了した場合、チームマスターは、弊社に対して、手数料として支援総額の一定割合に相当する金額を支払う義務を負うものとします。',
                '2項　本サービスの手数料は毎月月末時点においてチームに集まった支援総額の10％（税別）とします。ただし、弊社とチームマスターとの間に手数料の料率について別途合意がある場合は、当該合意の内容が優先されるものとします。',
                '3項　本サービスには、決済手数料（税別）は発生しません。',
                '4項　手数料の支払時期は、第19条5項に定める会員費の支払日と同日とします。',
              ],
            },
            {
              section: '第16条（特典の提供）',
              subsections: [
                '1項　チームマスターは、月額課金方式での会員費に相応して継続的に毎月提供する会員特典を設定することができます。',
                '2項　チームマスターは、チームへの会員費の決済が完了した場合、あらかじめ設定した会員特典をチーム会員に対して提供します。',
                '3項　チームマスターは、チームの会員費の決済が成立した場合、各クラスの会員特典毎の履行（発送）時期を本サービス上に明示した上で、会員特典の履行（発送）を行うものとします。諸般の事情により遅延・遅配が生じる場合は、チームマスター自らが該当するチーム会員へ連絡を行うものとし、弊社はかかる遅延、遅配について一切責任を負わないものとします。',
                '4項　チームマスターは、会員特典についての問い合わせ等があった場合には、当該問い合わせに対し、自らの責任で誠実に回答するものとします。',
                '5項　チームマスターは、やむを得ない事情により会員特典の内容やクラス毎の会員費の変更等が必要である場合には、自己の責任で事前にチーム会員へ個別に告知することで会員特典の内容やクラス毎の会員費の変更を行うものとします。',
                '6項　チームマスターは、会員特典の提供のためにチーム会員の個人情報（住所、電話番号、メールアドレス等）が必要となる場合、弊社の定める方法により当該情報を取得するものとします。この場合、チーム会員の個人情報は会員特典の履行に必要な範囲でのみ利用できます。チームマスターが、会員特典の履行以外の目的でチーム会員の個人情報を利用するためには、自らの責任においてチーム会員から個別の同意を取得しなければなりません。また、取得した個人情報の管理はチームマスターが責任を持って行うものとし、弊社は情報の漏えい等のトラブルにより生じる損害については一切責任を負いません。',
              ],
            },
            {
              section: '第17条（チームの解散）',
              subsections: [
                '本サービスに結成されたチームは、やむを得ない理由でチームの継続ができない場合や、プロジェクト達成後など、チームマスターが必要と判断した場合には、チームマスターの責任でチームを解散することができます。なお、この場合、チームマスターはチームの定める方法でチーム会員に解散を事前に告知した上、チーム会員からの個々の問い合わせについて責任をもって対応することとします。',
              ],
            },
            {
              section: '第18条（チームに関するトラブル）',
              subsections: [
                '1項　チーム活動中に発生する会員契約当事者間でのトラブル、返金要求その他の紛争については、会員契約の当事者であるチームマスターとチーム会員との間で解決すべき問題であり、弊社はこれに関して一切責任を負いません。',
                '2項　弊社は、当サービスの健全性を確保する見地から、会員契約の当事者に事実関係の確認をする場合があり、ユーザーは弊社の事実確認に協力しなければなりません。',
              ],
            },
            {
              section: '第19条（会員費の支払い）',
              subsections: [
                '1項　チームマスターは、弊社に対して、チーム会員および、会員登録申込者から支払われる会員費をチームマスターに代わって受領するための代理受領権限を付与するものとします。弊社が、会員契約に基づきチーム会員および、会員登録申込者より支払われる会員費を、チームマスターに代わって受領した時点で、チーム会員および、会員登録申込者の会員費支払義務の履行が完了したものとします。',
                '2項　チームマスターは、チームへの会員費の決済が完了した場合、弊社は所定の方法にてチームマスターに代わって受領した会員費を支払います。この場合の振込手数料はチームマスターが負担します。',
                '3項　弊社は、チームマスターへの会員費の支払に際して、チームマスターが弊社に支払うべき手数料その他の一切のチームマスターが弊社に対して負う債務を控除したうえで支払うものとします。',
                '4項　弊社は、毎月月末時点においてチームに集まった会員費を集計し、翌月16日以降同月末日限り、集計した会員費をチームマスターに支払います。この際、弊社の手数料相当額を支援金額から控除したうえで支払うものとします。',
                '5項　チームマスターは、特定のクレジットカードブランド（JCB/DinersClub/Discover）で決済された会員費のみ、システムの都合上、上記支払期限を過ぎる場合があることを予め承諾します。',
              ],
            },
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="第4章　チーム会員に関するルール">
        <PolicySectionWithSubSections
          sections={[
            {
              section: '第20条（利用資格について）',
              subsections: [
                '1項　チーム会員になるためには、原則として日本国内に住所を有している（住民票があることを意味します。）必要があります。チームマスターがクラスまたは会員特典毎に海外に住所を有するユーザーによるチーム会員登録に対して別段の定めを設けていない場合に限り、日本国内に住所を有しないユーザーもチーム会員となることができます。',
                '2項　チーム会員となるユーザーは、弊社が必要と判断する場合、住民票の写しまたは弊社が必要と認める書類を提供しなければなりません。',
              ],
            },
            {
              section: '第21条（チームへの会員登録）',
              subsections: [
                '1項　ユーザーは、弊社の定める方法によりチームへの会員登録を申し込むことができます。会員登録が完了した時点で、会員特典を対価とする会員契約が成立します。',
                '2項　ユーザーは、チームへの会員登録の申込みをするにあたり、対象のチーム毎に本サービス上で表示される利用条件を理解のうえ同意する必要があり、会員登録の申込みをしたユーザーはこれに同意したものとみなされます。',
              ],
            },
            {
              section: '第22条（チーム会員のキャンセル）',
              subsections: [
                '1項　チーム会員は、チーム会員登録後、弊社所定の手続きにより会員契約を任意に解約することができます。',
                '2項　チーム会員が解約手続きを取った場合、会員契約は、当該手続きをした時点からその効力を失います。',
                '3項　弊社において次の事実を認める場合には、その会員登録はキャンセルされます。',
                '（1）毎月の会員費の支払期日から30日を越えても弊社所定の方法による会員費の決済手続きが完了しない場合',
                '（2）チーム会員に対する会員特典の履行が不可能若しくは著しく困難である場合',
                '4項　会員費の決済が成立した後に、チームが解散となった場合や会員特典の履行遅延・履行不可能となった場合など、いかなる理由を問わず弊社は会員費を返金する義務を負いません。',
              ],
            },
            {
              section: '第23条（会員特典の取得）',
              subsections: [
                '1項　チームへの会員費の決済が成立した場合、当該チーム会員となったユーザーは、チームマスターに対し、各クラスにおいて定められた会員特典を得る権利を有するものとします。',
                '2項　ユーザーは、1つのチームで1つのクラスに所属することができます。',
                '3項　チーム会員は選択したクラス以外のクラスへ変更することは可能です。ただし、チーム会員から脱退し、再度チーム会員登録をすることでのみ、変更が可能です。また、変更前に支払った会員費について返金要求はできません。',
                '4項　会員特典の履行は、チームマスターが会員契約に基づいて履行の責任を負うものであり、弊社は、会員特典の履行、および特典の不履行による一切の責任を負いません。',
              ],
            },
            {
              section: '第24条（会員費の支払方法、手数料）',
              subsections: [
                '1項　チーム会員は弊社の定める方法により会員費の支払いをします。会員費は、チームマスターに代わり弊社が受領します。チーム会員が、弊社に対して該当チームの会員費を支払った時点をもってチーム会員の会員費の支払は完了します。',
                '2項　本サービスの会員費の支払いには、システム利用料は発生しません。',
              ],
            },
          ]}
        />
      </PolicyChapter>
      <PolicyChapter chapter="第5章　全てのユーザーについてのルール">
        <PolicySectionWithSubSections
          sections={[
            {
              section: '第25条（反社会的勢力等の排除）',
              subsections: [
                '1項　ユーザーは、暴力団、暴力団員および暴力団員でなくなったときから5年を経過しない者、暴力団準構成員、暴力団関係企業に属する者、総会屋等、社会運動等標ぼうゴロ、特殊知能暴力集団等、テロリスト等、日本政府または外国政府が経済制裁の対象として指定する者（以下上記の9者を総称して「暴力団員等」といいます。）、暴力団員等の共生者、その他これらに準ずる者（以下上記のすべてを総称して「反社会的勢力等」といいます。）のいずれかにも該当しないこと、かつ将来にわたっても該当しないこと、および自らまたは第三者を利用して、暴力的な要求行為、法的な責任を超えた不当な要求行為、取引に関して、脅迫的な言動をし、または暴力を用いる行為、風説を流布し、偽計を用いまたは威力を用いてスクアードの信用を毀損し、またはスクアードの業務を妨害する行為、その他これらに準ずる行為（以下総称して「不当な要求行為など」といいます。）を行わないことを確約することとします。',
                '2項　前項に定める「暴力団員等の共生者」とは、以下のいずれかに該当するものをいいます。',
                '（1）暴力団員等が、経営を支配していると認められる関係を有する者',
                '（2）暴力団員等が、経営に実質的に関与していると認められる関係を有する者',
                '（3）自己もしくは第三者の不正の利益を図る目的、または第三者に損害を加える目的をもってするなど、不当に暴力団員等を利用していると認められる関係を有する者',
                '（4）暴力団員等に対して資金等を提供し、または便宜を供与するなどの関与をしていると認められる関係を有する者',
                '（5）暴力団員等と社会的に非難されるべき関係を有する者',
                '（6）その他暴力団員等の資金獲得活動に乗じ、または暴力団員等の威力、情報力、資金力等を利用することによって自ら利益拡大を図る者',
                '3項　ユーザーが1項の確約事項に違反する場合、スクアードは、当該ユーザーに対して、直ちに本サービスの提供を停止するものとします。この場合、ユーザーに損害等が生じた場合でも、当該損害等について、スクアードおよび決済代行事業者、提携カード会社その他の第三者に一切の賠償請求をすることはできません。',
              ],
            },
            {
              section: '第26条（禁止行為）',
              subsections: [
                '1項　ユーザーは、本サービスの利用にあたって、以下各号のいずれかに該当する行為、あるいはそのおそれがある行為を行ってはならないものとします。',
                '（1）本サービスを不正の目的をもって利用する行為',
                '（2）弊社、他のユーザー、その他の第三者の知的財産権、肖像権、パブリシティ権その他の権利を侵害する行為',
                '（3）弊社、他のユーザー、その他の第三者の名誉もしくは信用を毀損し、またはプライバシーを侵害する行為',
                '（4）詐欺等の犯罪に結びつく行為',
                '（5）コンピュータウイルスなど有害なプログラム等を送信もしくは提供する行為、または推奨する行為',
                '（6）弊社、他のユーザー、その他の第三者の情報を改ざん、消去する行為',
                '（7）弊社、他のユーザー、その他の第三者の設備を不正に利用し、またはその運営に支障を与える行為',
                '（8）法令、本規約もしくは公序良俗に違反する行為',
                '（9）本サービスの運営を妨害する行為',
                '（10）その他弊社が不適当と判断する行為',
                '2項　ユーザーが前項各号のいずれかに該当する行為を行ったことにより、弊社が何らかの損害を被った場合、弊社は当該ユーザーに対して損害賠償の請求ができるものとします。',
              ],
            },
            {
              section: '第27条（個人情報の取扱い）',
              subsections: [
                '1項　弊社は、ユーザーから提供された個人情報を本サービスの提供に必要な範囲および弊社プライバシーポリシーで定められた目的の範囲で使用することができるものとし、ユーザーは、このプライバシーポリシーに従って弊社がユーザーから提供された個人情報を取扱うことについて同意します。',
                '2項　チーム会員は、本サービス上で会員契約が成立した場合、チームマスターに対して、特典の提供を利用目的として、チーム会員の氏名、住所、会員費額、選択した会員特典の内容、チームマスター宛のメッセージ、その他、特典の履行に必要な情報を提供することに同意するものとします。',
              ],
            },
            {
              section: '第28条（機密保持）',
              subsections: [
                '1項　本規約において「秘密情報」とは、利用規約または本サービスに関連して、ユーザーが、弊社より書面、口頭若しくは記録媒体等により提供若しくは開示されたか、または知り得た、弊社の技術、営業、業務、財務、組織、その他の事項に関する全ての情報を意味します。ただし、以下のものについては、秘密情報から除外するものとします。',
                '(1)　弊社から提供若しくは開示がなされたとき又または知得したときに、既に一般に公知となっていた、または既に知得していたもの',
                '(2)　弊社から提供若しくは開示または知得した後、自己の責めに帰せざる事由により刊行物その他により公知となったもの',
                '(3)　提供または開示の権限のある第三者から秘密保持義務を負わされることなく適法に取得したもの',
                '(4)　秘密情報によることなく単独で開発したもの',
                '(5)　弊社から秘密保持の必要なき旨書面で確認されたもの',
                '2項　ユーザーは、秘密情報を本サービスの利用の目的のみに利用するとともに事前の書面による承諾なしに第三者に弊社の秘密情報を提供、開示または漏洩しないものとします。',
                '3項　前項の定めに拘わらず、ユーザーは、法律、裁判所または政府機関の命令、要求または要請に基づき、法的根拠のある範囲内にて秘密情報を開示することができます。ただし、ユーザーは、当該命令、要求または要請があった場合、速やかにその旨を弊社に通知しなければなりません。',
                '4項　ユーザーは、秘密情報を記載した文書または磁気記録媒体等を複製する場合には、事前に弊社の書面による承諾を得ることとし、複製物の管理については第2項に準じて厳重に行うものとします。',
                '5項　ユーザーは、弊社から求められた場合にはいつでも、遅滞なく、弊社の指示に従い、秘密情報並びに秘密情報を記載または包含した書面その他の記録媒体物およびその全ての複製物を返却または廃棄しなければなりません。',
              ],
            },
            {
              section: '第29条（連絡/通知）',
              subsections: [
                'ユーザーは、本サービスに関する案内、システムメンテナンスに関する告知、その他弊社からユーザーに対する連絡または通知は、Eメール等弊社の定める方法で配信することを了承するものとします。弊社からユーザーに対する連絡または通知は、ユーザーが弊社に申請した連絡先に発信することにより、ユーザーに通常到達すべきときに到達したとみなされるものとします。',
              ],
            },
            {
              section: '第30条（本サービスの変更、追加または廃止）',
              subsections: [
                '1項　弊社は、いつでも本サービスの内容を変更、追加（以下「変更等」といいます。）または廃止することができるものとします。本サービスの変更等がユーザーに重大な影響を及ぼす場合は、弊社ウェブサイトに当該変更等の内容を掲載してお知らせします。また、本サービスの廃止は、弊社所定の方法により事前にユーザーに通知するものとします。',
                '2項　弊社は、本条に基づき弊社が行った措置によりユーザーに生じた損害には一切責任を負いません。',
              ],
            },
            {
              section: '第31条（本サービスの停止）',
              subsections: [
                '弊社は、次の各号のいずれかに該当する場合には、ユーザーに事前に通知することなく、本サービスの一部または全部を停止または中断することができるものとし、当該停止または中断によりユーザーに生じた損害には一切責任を負いません。',
                '（1）本サービスの提供のための装置、システムの保守または点検を行う場合',
                '（2）火災、停電、地震、天災、システム障害等により、本サービスの運営が困難な場合',
                '（3）外部SNSサービスに、トラブル、サービス提供の中断または停止、本サービスとの連携の停止、仕様変更等が生じた場合',
                '（4）その他、弊社が停止または中断をやむをえないと判断した場合',
              ],
            },
            {
              section: '第32条（免責）',
              subsections: [
                '1項　本サービスは、ユーザーが、チームマスターまたはチーム会員として取引を行う場を提供するものであり、ユーザーに対して、チームの運営が予定通り実行されることを保証するものではありません。',
                '2項　本サービスに関連して、チームマスターとチーム会員の間を含む、ユーザー同士の間で生じたトラブルに関しては、ユーザーの責任において処理および解決するものとし、弊社はかかる事項について一切責任を負わないものとします。',
                '3項　本サービスは、外部SNSサービスと連携することがありますが、かかる連携を保証するものではなく、本サービスにおいて外部SNSサービスと連携できなかった場合でも、弊社は一切の責任を負いません。本サービスが外部SNSサービスと連携している場合において、ユーザーは外部SNSサービスの利用規約を自己の費用と責任で遵守するものとし、ユーザーと当該外部SNSサービスを運営する外部SNS事業者との間で紛争等が生じた場合でも、弊社は当該紛争等について一切の責任を負いません。',
                '4項　弊社は、ユーザーが本サービスを利用する際に、コンピュータウイルスなど有害なプログラム等による損害を受けないことを保証しないものとします。',
                '5項　弊社は、ユーザーが本サービスを利用する際に使用するいかなる機器、ソフトウェアについても、その動作保証を一切しないものとします。',
                '6項　弊社は、ユーザーが本サービスを利用する際に発生する通信費用について、一切負担しないものとします。',
                '7項　弊社は、弊社の故意または重過失がある場合を除き、ユーザーの逸失利益、間接損害、特別損害、拡大損害、弁護士費用等を賠償しないものとし、何らかの理由により弊社が責任を負う場合でも、弊社はユーザーの損害に対して、ユーザーが弊社に本サービスの対価として支払った総額を限度額として、それ以上の賠償する責任を負わないものとします。',
                '8項　本サービスの基準時間は、弊社のサーバー、システムで管理する時間とし、実際の時間や本サービスで表示する時間とは一致しないもしくは動作しない場合があります。ユーザーはあらかじめこれを了解の上で本サービスを利用するものとします。',
                '9項　ユーザーは、本サービスの利用に関連して課税が生じることがあることを認識して本サービスを利用するものとします。弊社は、当該課税に関し一切関与しないものとし、課税の有無や課税額等については、ユーザー自らが、自らの責任で確認および対応するものとします。',
              ],
            },
            {
              section: '第33条（権利帰属）',
              subsections: [
                '1項　弊社ウェブサイトおよび本サービスに関する所有権および知的財産権は全て弊社または弊社にライセンスを許諾している者に帰属しており、本規約に定める登録に基づく本サービスの利用許諾は、弊社ウェブサイトまたは本サービスに関する弊社または弊社にライセンスを許諾している者の知的財産権の使用許諾を意味するものではありません。ユーザーは、いかなる理由によっても弊社または弊社にライセンスを許諾している者の知的財産権を侵害するおそれのある行為（逆アセンブル、逆コンパイル、リバースエンジニアリングを含みますが、これに限定されません。）をしないものとします。ただし、チームの活動についてチームマスターが提供した写真等の素材やチームの活動の対象となる商品またはサービスについての権利は、チームマスターまたはチームマスターにライセンスを許諾している者に留保されるものとします。',
                '2項　弊社ウェブサイトまたは本サービスにおいて、ユーザーが投稿その他送信を行った文章、画像、動画その他のデータ（前項但書に定めるものも含む）については、弊社において、無償で自由に利用（複製、複写、改変、第三者への再許諾その他のあらゆる利用を含みます。）することができるものとします。',
                '3項　ユーザーは、チームについて、弊社、チームマスターその他の第三者の名誉その他の権利ないし利益を侵害するものでない限り、弊社の定めるプロジェクトのURLおよび埋め込みコード、チーム名、チーム概要のテキストおよび画像、チームマスターのプロフィールをインターネットおよび外部SNSサービス上で転載することができるものとします。また、これら以外の紙面媒体等への転載については、弊社の承諾を得るものとします。',
              ],
            },
            {
              section: '第34条（本規約の変更）',
              subsections: [
                '弊社は、本規約を変更することができるものとします。弊社は、本規約を変更した場合には、弊社所定の方法によりユーザーに当該変更内容を通知または弊社ウェブサイトにて公表するものとしとします。但し、法令上ユーザーの同意が必要となるような内容の変更の場合は、弊社所定の方法によりユーザーの同意を得るものとします。',
              ],
            },
            {
              section: '第35条（地位の譲渡等）',
              subsections: [
                '1項　ユーザーは、チームオーナーの変更手続等弊社が別途定める手続きをした場合を除き、弊社の書面による事前の承諾なく、利用規約上の地位または本規約に基づく権利若しくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。',
                '2項　弊社は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用規約上の地位、本規約に基づく権利および義務並びにユーザーの登録情報その他の情報を当該事業譲渡の譲受人に譲渡することができるものとし、ユーザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。',
              ],
            },
            {
              section: '第36条（一部無効等）',
              subsections: [
                '1項　本規約の一部の規定の全部または一部が法令に基づいて無効と判断された場合であっても、当該規定は元の意思にできる限り沿うように解釈されるものとし、当該規定の無効部分以外の部分および本規約のその他の規定は有効とします。',
                '2項　本規約の規定の一部があるユーザーとの関係で無効とされ、または取り消された場合でも、本規約はその他のユーザーとの関係では有効とします。',
              ],
            },
            {
              section: '第37条（準拠法および合意管轄）',
              subsections: [
                '1項　本規約の準拠法は日本法とします。',
                '2項　本規約に関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。',
              ],
            },
          ]}
        />
      </PolicyChapter>
      <EndPoliccyWrapper>
        <TextDisplay>以上</TextDisplay>
      </EndPoliccyWrapper>
      <DateWrapper>
        <TextDisplay>2020年10月18日制定・施行</TextDisplay>
      </DateWrapper>
      <DefaultFooter backgroundColor={Const.darkBlue} />
    </div>
  )
}

export const TermsOfUsePage = withTheme(Page, 'dark')