"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { company, contact, site } from "@/lib/site";
import ContactCTA from "@/components/ContactCTA";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="メインビジュアル"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Left-aligned, bottom-left */}
      <div className="relative z-10 text-left px-8 md:px-16 lg:px-24 pb-24 md:pb-32">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* English Tagline */}
          <h1
            className="text-[40px] md:text-[70px] lg:text-[100px] font-bold text-white tracking-[0.08em] leading-[1.1] mb-4"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            <span className="block">All in-house.</span>
            <span className="block">All for Precision.</span>
          </h1>
          {/* Japanese Tagline */}
          <p
            className="text-[18px] md:text-[26px] lg:text-[36px] font-light text-white/90 tracking-[0.25em] leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            <span className="block">すべてを自社で。すべては信頼のために。</span>
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// ============================================================
// About Section
// ============================================================
function AboutSection() {
  return (
    <section className="relative">
      {/* Top Part - Title and Description */}
      <div className="bg-navy py-16 lg:py-24 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left - Title */}
          <div className="lg:w-1/2">
            <h2
              className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-white tracking-[0.25em] leading-[1.3]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              課題に寄り添い、解決へ導く。
            </h2>
            <p
              className="text-[16px] md:text-[22px] lg:text-[30px] font-bold text-white/70 tracking-[0.08em] leading-[1.3] mt-4"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
            >
              Close to your challenges. Closer to the solution.
            </p>
          </div>

          {/* Right - Description */}
          <div className="lg:w-1/2 mt-10 lg:mt-[200px]">
            <div
              className="text-[14px] lg:text-[16px] text-white/85 leading-[2.2] tracking-[0.2em]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
            >
              <p>
                私たちは、冷間圧造工具の設計から製造、仕上げまでを100％自社内で完結する体制を築いています。それは、ただ効率を求めた結果ではありません。
              </p>
              <p className="mt-6">
                どんなご依頼にも、そこにあるのは&ldquo;解決したい課題&rdquo;。
                <br />
                すべての工程を自社で担うのは「どの工程でどんな工夫が必要か」
                <br />
                を正確に把握し、最善の答えにたどりつくためです。
              </p>
              <p className="mt-6">
                そしてこの一貫体制は、
                <br />
                品質を安定させ、納期を守り、どんなご要望にも柔軟に応える─
                <br />
                その積み重ねによって信頼を築くための、確かな基盤にもなっています。
              </p>
              <p className="mt-6">
                高度な加工技術や独自のノウハウは、
                <br />
                &ldquo;どうしたら課題を解決できるか&rdquo;
                <br />
                に真摯に向き合うための力です。
              </p>
              <p className="mt-6">
                まずは、どんなことでもご相談ください。
              </p>
            </div>
            <Link
              href="/company"
              className="btn-slide inline-flex items-center justify-between mt-20 mb-24 border border-white/60 px-8 py-5 min-w-[280px] text-white tracking-[0.15em] text-[14px] lg:text-[16px]"
            >
              <span>私たちについて</span>
              <svg className="w-5 h-5 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Facility Section
// ============================================================
function FacilitySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Title */}
        <div className="mb-12 lg:mb-16">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            技を磨き、心を尽くす。
          </h2>
          <p
            className="text-[16px] md:text-[22px] lg:text-[30px] font-bold text-navy/70 tracking-[0.08em] leading-[1.3] mt-4"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Refined Skills. Dedicated Heart.
          </p>
        </div>

        <div className="mb-16 lg:mb-24" />

        {/* Content - Left Image + Right Features */}
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left - Image */}
          <div className="lg:w-1/3 relative h-[250px] lg:h-[400px] mb-10 lg:mb-0 lg:self-start">
            <Image
              src="/images/skill-section.jpg"
              alt="技を磨き、心を尽くす"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Features */}
          <div className="lg:w-1/2 lg:pt-[200px]">
            {/* 01 */}
            <div className="pb-10 mb-10 border-b border-gray-200">
              <h3
                className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] leading-[1.6] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <span className="text-navy/40 mr-3" style={{ fontFamily: "'Inter', sans-serif" }}>01</span>｜一貫生産体制が生む、ゆるぎない品質。
              </h3>
              <p className="text-text-secondary">
                各工程を自社内で完結することで、品質のばらつきを最小限に抑え、常に安定したクオリティをお届けします。
              </p>
            </div>

            {/* 02 */}
            <div className="pb-10 mb-10 border-b border-gray-200">
              <h3
                className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] leading-[1.6] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <span className="text-navy/40 mr-3" style={{ fontFamily: "'Inter', sans-serif" }}>02</span>｜課題に向き合い、最適解をともに探す。
              </h3>
              <p className="text-text-secondary">
                独自の製法「ダブルヘックス」をはじめ、蓄積された技術と知見をもとに、お客様の課題に真摯に向き合い、&ldquo;どうすればできるか&rdquo;をともに考えます。
              </p>
            </div>

            {/* 03 */}
            <div>
              <h3
                className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.1em] leading-[1.6] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <span className="text-navy/40 mr-3" style={{ fontFamily: "'Inter', sans-serif" }}>03</span>｜一つひとつに、誠実に。
              </h3>
              <p className="text-text-secondary">
                どんな仕事にも、真摯に向き合う。私たちは&ldquo;造る&rdquo;だけでなく、&ldquo;応える&rdquo;ものづくりを大切にしています。
              </p>
            </div>

            <Link
              href="/company#our-strength"
              className="btn-slide btn-slide-light inline-flex items-center justify-between mt-20 border border-navy/30 px-8 py-5 min-w-[280px] text-navy tracking-[0.15em] text-[14px] lg:text-[16px]"
            >
              <span>詳しく見る</span>
              <svg className="w-5 h-5 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================================
// Recruit Section
// ============================================================
function RecruitSection() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Left 1/3 - Navy Background with Title */}
      <div className="lg:w-1/3 bg-navy py-16 lg:py-24 px-8 md:px-16 lg:px-24">
        <h2
          className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-white tracking-[0.25em] leading-[1.3]"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          製品/設備
        </h2>
        <p
          className="text-[16px] md:text-[22px] lg:text-[30px] font-bold text-white/70 tracking-[0.08em] leading-[1.3] mt-4"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          Products/Facilities
        </p>
      </div>

      {/* Right 2/3 - Two image columns */}
      <div className="lg:w-2/3 flex flex-col sm:flex-row">
        <div className="sm:w-1/2 relative min-h-[350px] lg:min-h-[700px]">
          <Image
            src="/images/products-section.jpg"
            alt="製品"
            fill
            className="object-cover"
          />
        </div>
        <div className="sm:w-1/2 relative min-h-[350px] lg:min-h-[700px]">
          <Image
            src="/images/facilities-section.jpg"
            alt="設備"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Company Section
// ============================================================
function CompanySection() {
  const cards = [
    {
      title: "会社情報",
      image: "/images/company-card-1.jpg",
      href: "/company",
    },
    {
      title: "企業理念",
      image: "/images/company-card-2.jpg",
      href: "/company#philosophy",
    },
    {
      title: "沿革",
      subtitle: "（準備中）",
      image: "/images/company-card-3.jpg",
      href: "/company#history",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Title */}
        <div className="mb-12 lg:mb-16">
          <span
            className="text-[13px] lg:text-[15px] font-bold text-navy/40 tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            RECRUIT
          </span>
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            誇れるものづくりを、あなたと。
          </h2>
          <p
            className="text-[16px] md:text-[22px] lg:text-[30px] font-bold text-navy/70 tracking-[0.08em] leading-[1.3] mt-4"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Refined Skills. Dedicated Heart.
          </p>
        </div>

        <div className="mb-16 lg:mb-24" />

        {/* Content - Left Image + Right Text */}
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left - Image */}
          <div className="lg:w-1/3 relative h-[250px] lg:h-[400px] mb-10 lg:mb-0 lg:self-start">
            <Image
              src="/images/recruit-section.jpg"
              alt="誇れるものづくりを、あなたと"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Description */}
          <div className="lg:w-1/2 lg:pt-[200px]">
            <div className="text-text-secondary">
              <p>
                金型の設計から製造・仕上げまで、すべてを自社で手掛けるからこそ、人の技術や判断力が品質を左右します。
              </p>
              <p className="mt-6">
                だからこそ、私たちは「人」を何よりも大切にしています。確かな技術を学び、自分の手で&ldquo;精度&rdquo;を生み出すやりがいを感じられる場所。
              </p>
              <p className="mt-6">
                ここで、あなたの力を活かしてみませんか？
              </p>
            </div>

            <Link
              href="/recruit"
              className="btn-slide btn-slide-light inline-flex items-center justify-between mt-20 border border-navy/30 px-8 py-5 min-w-[280px] text-navy tracking-[0.15em] text-[14px] lg:text-[16px]"
            >
              <span>採用情報を見る</span>
              <svg className="w-5 h-5 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


// ============================================================
// Main Page
// ============================================================
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FacilitySection />
      <RecruitSection />
      <CompanySection />
      <ContactCTA />
    </>
  );
}
