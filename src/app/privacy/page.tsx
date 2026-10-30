import { company, contact, locations } from "@/lib/site";
import { FadeInUp } from "@/components/animations";

// ============================================================
// 📝 コンテンツデータ
// ============================================================

const ESTABLISHED_DATE = "2026年10月30日";

const SECTIONS = [
  {
    title: "1. 個人情報の取得",
    body: [
      "当社は、お問い合わせ、お見積りのご依頼、採用応募などに際して、お名前、会社名、電話番号、メールアドレス、ご住所、お問い合わせ内容などの個人情報を、適法かつ公正な手段により取得いたします。",
    ],
  },
  {
    title: "2. 個人情報の利用目的",
    body: ["当社は、取得した個人情報を以下の目的の範囲内で利用いたします。"],
    list: [
      "お問い合わせ・ご相談への回答およびご連絡のため",
      "お見積り、製品・サービスのご提供およびそれに付随するご連絡のため",
      "採用応募者の選考、ご連絡および採用活動のため",
      "その他、上記の利用目的に付随する業務のため",
    ],
  },
  {
    title: "3. 個人情報の第三者提供",
    body: [
      "当社は、次のいずれかに該当する場合を除き、ご本人の同意なく個人情報を第三者に提供いたしません。",
    ],
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要であり、ご本人の同意を得ることが困難な場合",
      "国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに協力する必要がある場合",
    ],
  },
  {
    title: "4. 個人情報の取扱いの委託",
    body: [
      "当社は、利用目的の達成に必要な範囲で、個人情報の取扱いの全部または一部を外部の事業者（お問い合わせフォームの運用に利用するクラウドサービスを含みます）に委託する場合があります。この場合、当社は委託先に対して必要かつ適切な監督を行います。",
    ],
  },
  {
    title: "5. 個人情報の安全管理",
    body: [
      "当社は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じます。",
    ],
  },
  {
    title: "6. 個人情報の開示・訂正・利用停止等",
    body: [
      "ご本人から、ご自身の個人情報の開示、訂正、追加、削除、利用停止等のご請求があった場合は、ご本人であることを確認のうえ、法令に従い遅滞なく対応いたします。ご請求は下記のお問い合わせ窓口までご連絡ください。",
    ],
  },
  {
    title: "7. 法令・規範の遵守と見直し",
    body: [
      "当社は、個人情報の保護に関する法律その他の関係法令およびガイドラインを遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。改定した場合は、本ページにてお知らせいたします。",
    ],
  },
];

// ============================================================
// コンポーネント
// ============================================================

function PageHeader() {
  return (
    <section className="h-[150px] lg:h-[200px] flex items-center justify-center bg-navy">
      <div className="text-center">
        <FadeInUp>
          <p className="text-sm text-white/80 tracking-[0.1em] mb-3">Privacy Policy</p>
          <h1 className="text-[28px] lg:text-[40px] font-bold text-white">
            プライバシーポリシー
          </h1>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const hq = locations.headquarters;

  return (
    <>
      <PageHeader />
      <section className="py-10 lg:py-[60px] bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-text-primary">
          <p className="leading-relaxed mb-10 lg:mb-12">
            {company.name}（以下「当社」といいます）は、お客様および採用応募者の個人情報を適切に取り扱うことを社会的責務と考え、以下のとおりプライバシーポリシーを定め、個人情報の保護に努めます。
          </p>

          <div className="space-y-8 lg:space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg lg:text-xl font-bold mb-3 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                {section.body.map((text, i) => (
                  <p key={i} className="leading-relaxed">
                    {text}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 space-y-1.5 list-disc pl-6 leading-relaxed">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="text-lg lg:text-xl font-bold mb-3 pb-2 border-b border-gray-200">
                8. お問い合わせ窓口
              </h2>
              <p className="leading-relaxed mb-3">
                本ポリシーおよび個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="bg-bg-light p-5 lg:p-6 rounded leading-relaxed">
                <p className="font-semibold">{company.name}</p>
                <p>
                  〒{hq.zipCode} {hq.address}
                </p>
                <p>TEL：{contact.phoneFormatted}（{contact.hours}）</p>
                {contact.email && <p>E-mail：{contact.email}</p>}
              </div>
            </div>
          </div>

          <p className="mt-10 lg:mt-12 text-sm text-text-secondary text-right">
            制定日：{ESTABLISHED_DATE}
          </p>
        </div>
      </section>
    </>
  );
}
