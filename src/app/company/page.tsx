import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

// ============================================================
// Page Header
// ============================================================
function PageHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/company-header-bg.jpg"
          alt="事業内容"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[120px] lg:text-[200px] font-bold text-white/10 tracking-wider whitespace-nowrap">
          ABOUT US
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-wider">
          事業内容
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg className="w-6 h-6 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// ============================================================
// Intro Section with Wave Lines
// ============================================================
function IntroSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Wave Line Decorations */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,20 600,50 T1200,50"
            fill="none"
            stroke="#E65525"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M0,60 Q300,30 600,60 T1200,60"
            fill="none"
            stroke="#1A3A5C"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xl lg:text-2xl font-bold text-navy leading-relaxed mb-6">
          多品種少量生産を行うことにより、
          <br />
          お客様のニーズに合った生産を
        </h2>
        <p className="text-sm lg:text-base text-text-secondary leading-relaxed">
          5cm〜3mまでの5,000品目以上の商材の中から選択が可能であり、
          <br className="hidden lg:block" />
          さらに商品おひとつのみからの制作も可能
        </p>
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
    <section className="relative py-16 lg:py-24 bg-navy overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 overflow-hidden">
        <span className="text-[80px] lg:text-[140px] font-bold text-white/5 tracking-wider">
          FEATURES
        </span>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-white tracking-wider">
            三豊機工の特徴
          </h2>
        </div>

        {/* Feature Cards - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {features.slice(0, 3).map((feature) => (
            <div key={feature.number} className="bg-white">
              {/* Number Header */}
              <div className="bg-navy border-b border-navy py-3 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white/30">{feature.number}</span>
                  <span className="text-xs text-white/60 tracking-wider">Features</span>
                </div>
              </div>

              {/* Title */}
              <div className="p-4 min-h-[100px] flex items-center justify-center">
                <p className="text-sm lg:text-base text-navy text-center font-medium whitespace-pre-line leading-relaxed">
                  {feature.title}
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={feature.image}
                  alt={feature.title.replace(/\n/g, "")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards - Bottom Row (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {features.slice(3, 5).map((feature) => (
            <div key={feature.number} className="bg-white">
              {/* Number Header */}
              <div className="bg-navy border-b border-navy py-3 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white/30">{feature.number}</span>
                  <span className="text-xs text-white/60 tracking-wider">Features</span>
                </div>
              </div>

              {/* Title */}
              <div className="p-4 min-h-[100px] flex items-center justify-center">
                <p className="text-sm lg:text-base text-navy text-center font-medium whitespace-pre-line leading-relaxed">
                  {feature.title}
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={feature.image}
                  alt={feature.title.replace(/\n/g, "")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
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
      <IntroSection />
      <FeaturesSection />
      <FullWidthImage />
      <PerformanceSection />
      <ContactCTA />
    </>
  );
}
