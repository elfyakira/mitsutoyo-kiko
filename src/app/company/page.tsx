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
  const features = [
    {
      number: "01",
      title: "多品種少量生産に対応",
      image: "/images/feature-1.jpg",
    },
    {
      number: "02",
      title: "5cm〜3mまでの\n5,000品目以上の\n商材の中から選択可能",
      image: "/images/feature-2.jpg",
    },
    {
      number: "03",
      title: "商品おひとつのみの\n制作からでも受注可能",
      image: "/images/feature-3.jpg",
    },
    {
      number: "04",
      title: "トヨタホーム様の\n最重要部材として位置\nづけられている外壁の製造",
      image: "/images/feature-4.jpg",
    },
    {
      number: "05",
      title: "薄板、長尺の曲げ加工に\n精通した職人が多数在籍",
      image: "/images/feature-5.jpg",
    },
  ];

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
    <section className="relative h-[300px] lg:h-[400px]">
      <Image
        src="/images/factory-wide.jpg"
        alt="工場風景"
        fill
        className="object-cover"
      />
    </section>
  );
}

// ============================================================
// Performance Section
// ============================================================
function PerformanceSection() {
  const works = [
    { image: "/images/work-1.jpg", alt: "製作事例1" },
    { image: "/images/work-2.jpg", alt: "製作事例2" },
    { image: "/images/work-3.jpg", alt: "製作事例3" },
    { image: "/images/work-4.jpg", alt: "製作事例4" },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-[#F5F7F9] overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[60px] lg:text-[120px] font-bold text-gray-200 tracking-wider">
          PERFORMANCE
        </span>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-navy tracking-wider">
            製作事例
          </h2>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {works.map((work, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={work.image}
                alt={work.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
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
      <ContactCTA />
    </>
  );
}
