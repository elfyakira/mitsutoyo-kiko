import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";
import EquipmentGallery from "@/components/EquipmentGallery";

// ============================================================
// Page Header
// ============================================================
function PageHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] lg:min-h-[500px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/facilities-section.jpg"
          alt="設備情報"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      {/* Content - Left-aligned, bottom */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-12 lg:pb-16 w-full">
        <h1
          className="text-[18px] md:text-[26px] lg:text-[36px] font-light text-white/90 tracking-[0.25em] leading-relaxed"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          設備情報
        </h1>
        <p
          className="text-[40px] md:text-[70px] lg:text-[100px] font-bold text-white tracking-[0.08em] leading-[1.1] mt-2"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          Facilities
        </p>
        <div className="mt-6 flex items-center gap-2 text-[12px] lg:text-[13px] text-white/60 tracking-[0.1em]">
          <a href="/" className="hover:text-white/90 transition-colors">ホーム</a>
          <span>＞</span>
          <span className="text-white/90">設備情報</span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Factory Overview
// ============================================================
function FactoryOverview() {
  const buildings = [
    { name: "第 1 棟", area: "825" },
    { name: "第 2 棟", area: "907" },
    { name: "第 3 棟", area: "927" },
    { name: "第 4 棟", area: "831" },
    { name: "第 5 棟", area: "933" },
    { name: "第 6 棟", area: "912" },
    { name: "第 7 棟", area: "912" },
    { name: "第 8 棟", area: "803" },
    { name: "第 9 棟", area: "783" },
    { name: "第10棟", area: "1,516" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            鹿児島工場 概要
          </h2>
          <p
            className="text-[16px] md:text-[22px] lg:text-[30px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-4"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Kagoshima Factory
          </p>
        </div>

        {/* Factory Image + All Info */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Image - tall */}
          <div className="relative w-full lg:w-[45%] aspect-[3/4] lg:aspect-auto lg:min-h-[600px] overflow-hidden">
            <Image
              src="/images/kagoshima-factory.jpg"
              alt="鹿児島工場全景"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Right: All Info */}
          <div className="lg:w-[55%] flex flex-col gap-10">
            {/* Address & Contact */}
            <div>
              <h3
                className="text-[20px] lg:text-[24px] font-bold text-text-primary tracking-[0.15em] mb-6"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                鹿児島工場
              </h3>
              <p className="text-[14px] lg:text-[16px] text-text-secondary leading-[2.2] tracking-[0.1em]">
                〒897-0202<br />
                鹿児島県南九州市川辺町清水1542番1
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-[14px] lg:text-[16px] text-text-secondary tracking-[0.1em]">
                  <span className="text-navy font-bold">TEL</span>&emsp;（0993）56-5511（代）
                </p>
                <p className="text-[14px] lg:text-[16px] text-text-secondary tracking-[0.1em]">
                  <span className="text-navy font-bold">FAX</span>&emsp;（0993）56-5058
                </p>
              </div>
            </div>

            {/* 面積 */}
            <div>
              <h3 className="text-[15px] lg:text-[17px] font-bold text-white bg-navy/80 py-3 px-6 tracking-[0.15em]">
                面積
              </h3>
              <div className="border border-gray-200 border-t-0 p-6 md:p-8">
                <p className="text-[14px] lg:text-[16px] text-text-primary font-bold mb-4 tracking-[0.1em]">
                  敷地面積 24,339㎡
                </p>
                <p className="text-[14px] lg:text-[16px] text-text-primary font-bold mb-3 tracking-[0.1em]">建物面積</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-2">
                  {buildings.map((b) => (
                    <p key={b.name} className="text-[13px] lg:text-[15px] text-text-secondary tracking-[0.05em]">
                      {b.name} <span className="font-medium">{b.area}㎡</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* 厚生施設 */}
            <div>
              <h3 className="text-[15px] lg:text-[17px] font-bold text-white bg-navy/80 py-3 px-6 tracking-[0.15em]">
                厚生施設
              </h3>
              <div className="border border-gray-200 border-t-0 p-6 md:p-8">
                <p className="text-[14px] lg:text-[16px] text-text-primary font-bold mb-3 tracking-[0.1em]">社員寮</p>
                <ul className="space-y-2 text-[13px] lg:text-[15px] text-text-secondary leading-[2] tracking-[0.05em]">
                  <li>・鹿児島県南九州市川辺町清水花園<span className="hidden md:inline"> </span><br className="md:hidden" /><span className="md:ml-0 ml-3">木造2階建 476.98㎡（12室）</span></li>
                  <li>・鹿児島県南九州市川辺町神殿楠久保<span className="hidden md:inline"> </span><br className="md:hidden" /><span className="md:ml-0 ml-3">木造1階建 228.00㎡（6室）</span></li>
                </ul>
              </div>
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
export default function EquipmentPage() {
  return (
    <>
      <PageHeader />
      <EquipmentGallery />
      <FactoryOverview />
      <ContactCTA />
    </>
  );
}
