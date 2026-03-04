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
          src="/images/facility-2.jpg"
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
// Main Page
// ============================================================
export default function EquipmentPage() {
  return (
    <>
      <PageHeader />
      <ContactCTA />
    </>
  );
}
