import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

// ============================================================
// Page Header
// ============================================================
function PageHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] lg:min-h-[500px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/company-header-bg.jpg"
          alt="事業内容"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      {/* Content - Left-aligned, bottom */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-12 lg:pb-16 w-full">
        {/* Label - Japanese */}
        <h1
          className="text-[18px] md:text-[26px] lg:text-[36px] font-light text-white/90 tracking-[0.25em] leading-relaxed"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          私たちについて
        </h1>
        {/* Title - English */}
        <p
          className="text-[40px] md:text-[70px] lg:text-[100px] font-bold text-white tracking-[0.08em] leading-[1.1] mt-2"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          About Us
        </p>
        {/* Breadcrumb */}
        <div className="mt-6 flex items-center gap-2 text-[12px] lg:text-[13px] text-white/60 tracking-[0.1em]">
          <a href="/" className="hover:text-white/90 transition-colors">ホーム</a>
          <span>＞</span>
          <span className="text-white/90">私たちについて</span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Message Section - 代表挨拶
// ============================================================
function MessageSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            代表挨拶
          </h2>
          <p
            className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-3"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            MESSAGE
          </p>
        </div>

        {/* Content - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left - Photo */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative w-full aspect-[3/4] max-w-[500px]">
              <Image
                src="/images/company-header-bg.jpg"
                alt="代表取締役"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Message Text */}
          <div className="lg:w-1/2 text-text-secondary">
            <p>
              弊社は、冷間圧造工具の専門メーカーとして、設計・製造・仕上げまでの全工程を自社内で一貫して行う体制を築いてまいりました。
            </p>
            <p className="mt-6">
              創業以来、私たちが大切にしてきたのは「お客様の課題に、誠実に向き合うこと」です。どんなご依頼にも、その背景にある課題を理解し、最善の答えをともに探す─その姿勢が、今日の信頼につながっていると考えています。
            </p>
            <p className="mt-6">
              すべての工程を自社で担うことで、品質のばらつきを抑え、納期を守り、柔軟な対応を可能にしています。この一貫体制こそが、私たちのものづくりの基盤です。
            </p>
            <p className="mt-6">
              これからも、技術を磨き、人を育て、お客様にとって「なくてはならない存在」であり続けることを目指してまいります。
            </p>
            <p className="mt-6">
              どうぞよろしくお願いいたします。
            </p>

            {/* Name */}
            <div className="mt-12 text-text-primary">
              <p className="text-[13px] tracking-[0.15em]">株式会社三豊機工</p>
              <p className="text-[13px] tracking-[0.15em] mt-1">
                代表取締役社長
                <span className="text-[20px] lg:text-[24px] font-bold tracking-[0.2em] ml-4">
                  （氏名）
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Features Section
// ============================================================
function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-navy overflow-hidden">
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-white tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            企業理念
          </h2>
          <p
            className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-white/40 tracking-[0.08em] leading-[1.3] mt-3"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            PHILOSOPHY
          </p>
        </div>

        {/* Philosophy Text */}
        <div className="text-center max-w-4xl mx-auto">
          <p
            className="text-[20px] md:text-[26px] lg:text-[32px] text-white/90 tracking-[0.15em] leading-[2]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
          >
            他社との差別化ができる競争力のある製品を造り続け、&ldquo;戦わずして世界から選ばれる&rdquo;経営戦略を展開。
            <br />
            冷間圧造工具の総合メーカーとして「他社がやらない事をやる！・他社ができない事をやる！」をテーマに掲げ、オンリーワン企業を目指しています。
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Full Width Image
// ============================================================
function FullWidthImage() {
  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="px-8 md:px-16 lg:px-24 text-center">
        <h2
          className="text-[40px] md:text-[60px] lg:text-[80px] font-bold text-navy tracking-[0.08em] leading-[1.1]"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          Our Strength
        </h2>
        <p
          className="text-[18px] md:text-[24px] lg:text-[32px] font-light text-navy/70 tracking-[0.25em] leading-[1.4] mt-4"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          技を磨き、心を尽くす。
        </p>
        <p
          className="text-[13px] md:text-[16px] lg:text-[20px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-2"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          Refined Skills. Dedicated Heart.
        </p>
      </div>
    </section>
  );
}

// ============================================================
// Performance Section
// ============================================================
function PerformanceSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="px-16 md:px-32 lg:px-[384px]">
        <span
          className="text-[13px] lg:text-[15px] font-bold text-navy/40 tracking-[0.2em] uppercase mb-4 block"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          01
        </span>
        <h2
          className="text-[28px] md:text-[36px] lg:text-[46px] font-light text-navy tracking-[0.2em] leading-[1.4]"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          一貫体制が生む、ゆるぎない品質。
        </h2>

        {/* Description */}
        <div className="mt-16">
          <h3
            className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            一貫生産体制がもたらす「精度と安定」
          </h3>
          <p className="text-text-secondary">
            設計から製造、仕上げまでのすべてを自社内で行うこと。それは、単なる効率化ではなく、「品質を守るための仕組み」です。各工程の担当者が常に情報を共有し、仕様変更や改善を即時に反映。試作から量産までの流れをスムーズにコントロールできます。
          </p>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] mt-16 w-1/2">
          <Image
            src="/images/strength-01b.jpg"
            alt="製造工程"
            fill
            className="object-cover"
          />
        </div>

        {/* Merit Box */}
        <div className="mt-16 border border-navy/20 p-8 lg:p-10">
          <h4
            className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            メリット
          </h4>
          <ul className="space-y-4 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">&#9670;</span>
              <span>不具合発生時も社内で迅速に原因追及・対策</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">&#9670;</span>
              <span>長期的に同品質を維持できる安定体制</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">&#9670;</span>
              <span>フィードバック体制により改良サイクルを高速化</span>
            </li>
          </ul>
        </div>

        {/* Closing Text */}
        <div className="mt-16">
          <h3
            className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            結果として生まれる「信頼」
          </h3>
          <div className="text-text-secondary">
            <p>
              こうした一貫生産体制とフィードバックの仕組みにより、私たちは長年にわたり、国内外のメーカーから&ldquo;安定供給ができるパートナー&rdquo;として選ばれ続けています。
            </p>
            <p className="mt-6">
              品質への揺るぎない姿勢こそ、私たちの最大の競争力です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Strength 02 Section
// ============================================================
function Strength02Section() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="px-16 md:px-32 lg:px-[384px]">
        <span
          className="text-[13px] lg:text-[15px] font-bold text-navy/40 tracking-[0.2em] uppercase mb-4 block"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          02
        </span>
        <h2
          className="text-[28px] md:text-[36px] lg:text-[46px] font-light text-navy tracking-[0.2em] leading-[1.4]"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          課題に向き合い、最適解をともに探す。
        </h2>

        {/* Description */}
        <div className="mt-16">
          <h3
            className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            &ldquo;どう実現するか&rdquo;を考え抜く
          </h3>
          <div className="text-text-secondary">
            <p>
              私たちが大切にしているのは、&ldquo;できない理由&rdquo;ではなく&ldquo;できる方法&rdquo;を探すことです。課題の本質に向き合い、最適解へと組み立て直す――。
            </p>
            <p className="mt-6">
              そのプロセスこそが価値となり、信頼につながると考えています。
            </p>
          </div>
        </div>

        {/* Double Hex */}
        <div className="mt-16">
          <h3
            className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            課題に向き合う姿勢から生まれた、<br />三豊機工オリジナルのダブルヘックス
          </h3>
          <div className="text-text-secondary">
            <p>
              六角・四角をはじめ多角形金型は、角部に応力が集中し、早期破損による機械停止や段取り替えが避けられないという課題を抱えていました。
            </p>
            <p className="mt-6">
              「割れるなら、はじめから分割すればいい。」
            </p>
            <p className="mt-6">
              そんな発想から誕生したのが、分割した6ピースの部材を組み合わせて作ったダブルヘックスです。
            </p>
            <p className="mt-6">
              この6分割構造によって応力が均等に分散。衝撃も「応力吸収孔」で吸収し、早期破損を防ぎます。
            </p>
            <p className="mt-6">
              &ldquo;どうすれば解決できるか&rdquo;を真剣に考える姿勢から生まれた、三豊機工ならではのオリジナル金型技術です。
            </p>
          </div>
        </div>

        {/* Double Hex Features */}
        <div className="mt-24">
          <h3
            className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            ダブルヘックス金型3つの特徴
          </h3>
          <div className="text-text-secondary">
            <p>
              ダブルヘックスは、1981年に日本・米国・欧州で世界特許を取得した、三豊機工独自のオリジナル技術です。特許自体はすでに切れているものの、製法には当社ならではのノウハウが数多く蓄積されており、高い精度と耐久性がユーザーに評価されている製品です。
            </p>
            <p className="mt-6">
              その結果、ダブルヘックスは圧造メーカーの生産効率化やコスト低減に大きく貢献し、圧倒的なシェアを誇っています。
            </p>
            <p className="mt-6">
              開発当初は六角形のみでしたが、現在では四角・長方形など多様な形状へと応用が広がり、特に角部に応力がかかる製品については、お客様と綿密な相談を重ねながら最適な金型を作り込んでいます。
            </p>
            <p className="mt-6">
              半世紀にわたりロングセラーとして信頼を重ね、「ダブルヘックス＝三豊」と業界に広く認知される、まさにオンリーワンの技術です。
            </p>
          </div>
        </div>

        {/* Feature 01 */}
        <div className="mt-20 border-t border-navy/10 pt-12">
          <span
            className="text-[13px] lg:text-[15px] font-bold text-accent tracking-[0.2em] mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            01
          </span>
          <h4
            className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            高精度を&ldquo;安定して&rdquo;実現する
          </h4>
          <div className="text-text-secondary">
            <p>
              各ピースは組立前に鏡面仕上げまで加工されるため、従来必要だった内面のハンドラップ作業が不要になります。
            </p>
            <p className="mt-6">その結果、</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">&#9670;</span>
                <span>仕上がり精度が安定</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">&#9670;</span>
                <span>作業者によるばらつきゼロ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">&#9670;</span>
                <span>高精度の量産に強い金型を実現</span>
              </li>
            </ul>
            <p className="mt-6">
              精度要求の高い製品でも、安心して量産ラインへ導入いただけます。
            </p>
          </div>
        </div>

        {/* Feature 02 */}
        <div className="mt-20 border-t border-navy/10 pt-12">
          <span
            className="text-[13px] lg:text-[15px] font-bold text-accent tracking-[0.2em] mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            02
          </span>
          <h4
            className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            生産性を劇的に高める耐久・安定性
          </h4>
          <div className="text-text-secondary">
            <p>
              ダブルヘックスがもつ高い耐久性と精度安定により、機械停止が減り、長時間の連続稼働が可能になります。
            </p>
            <p className="mt-6">これにより、</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">&#9670;</span>
                <span>生産計画の立案が容易</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">&#9670;</span>
                <span>段取り替えロスの大幅削減</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">&#9670;</span>
                <span>不良率低減による品質安定</span>
              </li>
            </ul>
            <p className="mt-6">
              結果として、生産効率向上とトータルコスト低減に直結します。
            </p>
          </div>
        </div>

        {/* Feature 03 */}
        <div className="mt-20 border-t border-navy/10 pt-12">
          <span
            className="text-[13px] lg:text-[15px] font-bold text-accent tracking-[0.2em] mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            03
          </span>
          <h4
            className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            三豊機工にしか作れないオンリーワンの金型技術
          </h4>
          <div className="text-text-secondary">
            <p>
              ダブルヘックスは、1981年に日本・米国・欧州で世界特許を取得した、三豊機工独自のオリジナル技術です。特許自体はすでに切れているものの、製法には当社ならではのノウハウが数多く蓄積されており、高い精度と耐久性がユーザーに評価されている製品です。
            </p>
            <p className="mt-6">
              その結果、ダブルヘックスは圧造メーカーの生産効率化やコスト低減に大きく貢献し、圧倒的なシェアを誇っています。
            </p>
            <p className="mt-6">
              開発当初は六角形のみでしたが、現在では四角・長方形など多様な形状へと応用が広がり、特に角部に応力がかかる製品については、お客様と綿密な相談を重ねながら最適な金型を作り込んでいます。
            </p>
            <p className="mt-6">
              半世紀にわたりロングセラーとして信頼を重ね、「ダブルヘックス＝三豊」と業界に広く認知される、まさにオンリーワンの技術です。
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-24">
          <h3
            className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-navy tracking-[0.1em] leading-[1.5] mb-10"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            従来品との比較
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[14px] lg:text-[16px] tracking-[0.1em]">
              <thead>
                <tr>
                  <th className="border border-navy/20 bg-[#F5F7F9] p-4 lg:p-6 w-1/4"></th>
                  <th className="border border-navy/20 bg-navy text-white p-4 lg:p-6 w-[37.5%] font-bold text-[16px] lg:text-[18px]">ダブルヘックス</th>
                  <th className="border border-navy/20 bg-[#F5F7F9] p-4 lg:p-6 w-[37.5%] font-bold text-navy text-[16px] lg:text-[18px]">従来金型</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy/20 bg-[#F5F7F9] p-4 lg:p-6 font-bold text-navy">耐久性</td>
                  <td className="border border-navy/20 p-4 lg:p-6 text-text-primary">応力分散で長寿命化<br />連続稼働が可能</td>
                  <td className="border border-navy/20 p-4 lg:p-6 text-text-secondary">角部が割れやすい<br />機械停止が多い</td>
                </tr>
                <tr>
                  <td className="border border-navy/20 bg-[#F5F7F9] p-4 lg:p-6 font-bold text-navy">コスト</td>
                  <td className="border border-navy/20 p-4 lg:p-6 text-text-primary">トータルコスト低減</td>
                  <td className="border border-navy/20 p-4 lg:p-6 text-text-secondary">段取り・交換頻繁</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Strength 03 Section
// ============================================================
function Strength03Section() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="px-16 md:px-32 lg:px-[384px]">
        <span
          className="text-[13px] lg:text-[15px] font-bold text-navy/40 tracking-[0.2em] uppercase mb-4 block"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          03
        </span>
        <h2
          className="text-[28px] md:text-[36px] lg:text-[46px] font-light text-navy tracking-[0.2em] leading-[1.4]"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          一つひとつに、誠実に。
        </h2>

        {/* Japanese Text */}
        <div className="mt-16 text-text-secondary">
          <p>
            製造の現場には、決して「小さな仕事」はありません。
          </p>
          <p className="mt-6">
            どんな金型にも使う人がいて、どんな図面にも想いがあります。私たちは、その一つひとつに誠実に向き合い、&ldquo;造る&rdquo;ことを通して&ldquo;応える&rdquo;ものづくりを続けています。
          </p>
          <p className="mt-6">
            高精度な加工や独自の製法も、すべてはお客様の信頼に応えるための手段です。人と人の信頼があるからこそ、技術は生きる。
          </p>
          <p className="mt-6">
            その信念が、私たちの原動力です。
          </p>
        </div>

        {/* English Translation */}
        <div
          className="mt-16 text-navy/50 text-[13px] lg:text-[15px] leading-[2.2] tracking-[0.06em]"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          <p>There&apos;s no such thing as a &quot;small job&quot; in manufacturing.</p>
          <p>Every mold is made for someone who relies on it,</p>
          <p>and every drawing carries someone&apos;s intent.</p>
          <p>We approach each one with sincerity—</p>
          <p>creating not just products, but responses.</p>
          <p className="mt-4">Our precision and original methods</p>
          <p>are all means to uphold our clients&apos; trust.</p>
          <p>Technology thrives only where human trust exists.</p>
          <p>That belief drives everything we do.</p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// History Section
// ============================================================
function HistorySection() {
  const history = [
    { year: "1965", text: "名古屋市中区正木町3-73において舟橋宜孝が創業" },
    { year: "1972", text: "春日井市東野新町1-4に本社並びに工場建設" },
    { year: "1979", text: "本社第1工場移転建設" },
    { year: "1981", text: "ダブルヘックス開発、世界特許取得" },
    { year: "1982", text: "本社ビル建設" },
    { year: "1988", text: "本社第2工場建設" },
    { year: "1991", text: "鹿児島工場（A棟）建設、操業開始" },
    { year: "1992", text: "埼玉県春日部市に三豊機工春日部を設立" },
    { year: "1994", text: "鹿児島工場（B棟）建設" },
    { year: "1996", text: "鹿児島工場（C棟）建設" },
    { year: "1998", text: "鹿児島工場（D棟）建設" },
    { year: "2003", text: "鹿児島工場（E, F, G棟）建設" },
    { year: "2005", text: "鹿児島工場（H, I棟）建設" },
    { year: "2005", text: "ものづくりブランドNAGOYA顕彰企業に選出される" },
    { year: "2006", text: "春日井商工会議所より産業功労賞受賞" },
    { year: "2007", text: "経済産業省より「元気なモノ作り中小企業300社」に選出される" },
    { year: "2009", text: "生産拠点を鹿児島工場に集約" },
    { year: "2011", text: "舟橋佳孝が代表取締役に就任" },
    { year: "2014", text: "創立50周年" },
    { year: "2017", text: "鹿児島工場（J棟）建設" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            沿革
          </h2>
          <p
            className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-3"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            HISTORY
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {history.map((item, index) => (
            <div
              key={index}
              className="flex gap-8 lg:gap-16 py-5 border-b border-navy/10"
            >
              <span
                className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] shrink-0 w-[80px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.year}
              </span>
              <span className="text-text-secondary">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Company Info Section
// ============================================================
function CompanyInfoSection() {
  const info = [
    { label: "商号", value: "三豊機工株式会社" },
    { label: "英文商号", value: "MITSUTOYO-KIKO CO.,LTD." },
    { label: "設立", value: "昭和40年6月" },
    { label: "資本金", value: "3,840万円" },
    { label: "事業内容", value: "冷間圧造工具の製造及び販売" },
    { label: "年商", value: "26.5億円" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F5F7F9]">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            会社概要
          </h2>
          <p
            className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-3"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            COMPANY
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Basic Info */}
          {info.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-2 lg:gap-16 py-5 border-b border-navy/10"
            >
              <span className="text-navy font-bold tracking-[0.15em] shrink-0 lg:w-[160px]">
                {item.label}
              </span>
              <span className="text-text-secondary">{item.value}</span>
            </div>
          ))}

          {/* 役員 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 py-5 border-b border-navy/10">
            <span className="text-navy font-bold tracking-[0.15em] shrink-0 lg:w-[160px]">
              役員
            </span>
            <div className="text-text-secondary">
              <p>取締役会長　舟橋　宜孝</p>
              <p className="mt-1">代表取締役　舟橋　佳孝</p>
              <p className="mt-1">執行役員　落合　広喜</p>
              <p className="mt-1">執行役員　奥山　洋嗣</p>
            </div>
          </div>

          {/* 従業員数 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 py-5 border-b border-navy/10">
            <span className="text-navy font-bold tracking-[0.15em] shrink-0 lg:w-[160px]">
              従業員数
            </span>
            <div className="text-text-secondary">
              <p>182名（男子160名　女子22名）</p>
              <p className="mt-1">本社　23名（男子14名　女子9名）</p>
              <p className="mt-1">鹿児島工場　159名（男子146名　女子13名）</p>
            </div>
          </div>

          {/* 所在地 - 本社 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 py-5 border-b border-navy/10">
            <span className="text-navy font-bold tracking-[0.15em] shrink-0 lg:w-[160px]">
              所在地
            </span>
            <div className="text-text-secondary">
              <p className="font-bold text-navy">●本社</p>
              <p className="mt-1">〒486-0816　愛知県春日井市東野新町一丁目4番地</p>
              <p className="mt-1">TEL　0568-81-4111（代）</p>
              <p className="mt-1">FAX　0568-84-8777</p>
              <p className="mt-1">E-mail: office@mitsutoyo.co.jp</p>
              <p className="mt-1">URL: https://www.mitsutoyo.co.jp</p>
              <p className="mt-1">敷地面積 1,364㎡</p>
              <p className="mt-1">建物 鉄筋コンクリート4階建　床面積 755㎡</p>
            </div>
          </div>

          {/* 営業所 - 春日部 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 py-5 border-b border-navy/10">
            <span className="text-navy font-bold tracking-[0.15em] shrink-0 lg:w-[160px]">
              営業所
            </span>
            <div className="text-text-secondary">
              <p className="font-bold text-navy">●三豊機工春日部</p>
              <p className="mt-1">〒344-0064　埼玉県春日部市南四丁目2-3</p>
              <p className="mt-1">TEL　048-734-9453（代）</p>
              <p className="mt-1">FAX　048-734-9454</p>
            </div>
          </div>

          {/* 鹿児島工場 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 py-5 border-b border-navy/10">
            <span className="text-navy font-bold tracking-[0.15em] shrink-0 lg:w-[160px]">
              工場
            </span>
            <div className="text-text-secondary">
              <p className="font-bold text-navy">●鹿児島工場</p>
              <p className="mt-1">〒897-0202　鹿児島県南九州市川辺町清水1542番1</p>
              <p className="mt-1">TEL　0993-56-5511（代）</p>
              <p className="mt-1">FAX　0993-56-5058</p>
              <p className="mt-1">敷地面積 24,339㎡</p>
              <p className="mt-3 font-bold text-navy text-[14px]">建物</p>
              <div className="mt-1 grid grid-cols-2 gap-x-8 gap-y-1">
                <span>第1棟　825㎡</span>
                <span>第2棟　907㎡</span>
                <span>第3棟　927㎡</span>
                <span>第4棟　831㎡</span>
                <span>第5棟　933㎡</span>
                <span>第6棟　912㎡</span>
                <span>第7棟　912㎡</span>
                <span>第8棟　803㎡</span>
                <span>第9棟　783㎡</span>
                <span>第10棟　1,516㎡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Access */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-16">
            <h3
              className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              アクセス
            </h3>
            <p
              className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-3"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
            >
              ACCESS
            </p>
          </div>

          {/* Map - Honsha */}
          <div className="mb-16">
            <h4 className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] mb-4">
              本社
            </h4>
            <p className="text-text-secondary mb-4">〒486-0816　愛知県春日井市東野新町一丁目4番地</p>
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.8!2d136.955!3d35.255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037b5c5c5c5c5d%3A0x0!2z5oSb55-l55yM5pil5pel5LqV5biC5p2x6YeO5paw55S6!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="本社マップ"
              />
            </div>
          </div>

          {/* Map - Kasukabe */}
          <div className="mb-16">
            <h4 className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] mb-4">
              三豊機工春日部
            </h4>
            <p className="text-text-secondary mb-4">〒344-0064　埼玉県春日部市南四丁目2-3</p>
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.5!2d139.752!3d35.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018930000000001%3A0x0!2z5Z-8546J55yM5pil5pel6YOo5biC5Y2X!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="春日部マップ"
              />
            </div>
          </div>

          {/* Map - Kagoshima */}
          <div>
            <h4 className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] mb-4">
              鹿児島工場
            </h4>
            <p className="text-text-secondary mb-4">〒897-0202　鹿児島県南九州市川辺町清水1542番1</p>
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5!2d130.378!3d31.383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e6a0000000001%3A0x0!2z6bm_5YWQ5bO255yM5Y2X5Lmd5bee5biC5bed6L665bKh!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="鹿児島工場マップ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Main Page
// ============================================================
export default function CompanyPage() {
  return (
    <>
      <PageHeader />
      <MessageSection />
      <FeaturesSection />
      <FullWidthImage />
      <PerformanceSection />
      <Strength02Section />
      <Strength03Section />
      <HistorySection />
      <CompanyInfoSection />
      <ContactCTA />
    </>
  );
}
