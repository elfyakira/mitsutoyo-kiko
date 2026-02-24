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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
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

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Company Name - Large */}
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-white tracking-[0.2em] mb-4">
            MITSUTOYO
          </h1>
          {/* Catchphrase */}
          <p className="text-lg md:text-xl lg:text-2xl text-white tracking-[0.1em]">
            {company.catchphrase || "「なくてはならない」であり続けたい"}
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
      {/* Top Part - Navy Block with Catchphrase */}
      <div className="flex flex-col lg:flex-row">
        {/* Left - Title */}
        <div className="lg:w-1/3 py-12 lg:py-20 px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-[0.2em] text-navy">
            ABOUT US
          </h2>
        </div>

        {/* Right - Navy Block */}
        <div className="lg:w-2/3 bg-navy py-12 lg:py-16 px-8 lg:px-16">
          <p className="text-xl lg:text-2xl font-bold text-white leading-relaxed">
            求めるカタチを実現、
            <br />
            冷間圧造工具の
            <br />
            専門メーカー
          </p>
        </div>
      </div>

      {/* Bottom Part - Description and Image */}
      <div className="flex flex-col lg:flex-row">
        {/* Left - Gray Box with Text */}
        <div className="lg:w-1/2 bg-[#F5F7F9] py-12 lg:py-16 px-8 lg:px-16">
          <p className="text-sm lg:text-base text-text-primary leading-[2] mb-8">
            「お客様のさまざまなニーズに柔軟に対応したい」その想いから、弊社では多品種少量生産を行っております。
            高品質な冷間圧造工具の製造により、さらに商品おひとつのみからの制作も可能です。
          </p>
          <Link
            href="/company"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary border border-text-primary px-6 py-3 hover:bg-text-primary hover:text-white transition-colors"
          >
            事業内容を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right - Image */}
        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
          <Image
            src="/images/about-image.jpg"
            alt="作業風景"
            fill
            className="object-cover"
          />
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
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-[0.2em] text-navy mb-4">
            FACILITY
          </h2>
          <p className="text-sm text-text-secondary">
            鉄部材の加工に関する相談窓口として長年に渡り、信頼を深めながら仕事を進めてまいりました。
            <br className="hidden lg:block" />
            こちらでは、こうした当社の工場・設備をご紹介します。
          </p>
        </div>

        {/* Photo Collage */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {/* Large Image */}
          <div className="col-span-1 row-span-2 relative aspect-[3/4] lg:aspect-auto">
            <Image
              src="/images/facility-1.jpg"
              alt="工場風景"
              fill
              className="object-cover"
            />
          </div>

          {/* Medium Images */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/facility-2.jpg"
              alt="設備"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/facility-3.jpg"
              alt="製品"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/facility-4.jpg"
              alt="工場内部"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Images */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/facility-5.jpg"
              alt="フォークリフト"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/facility-6.jpg"
              alt="機械"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/facility-7.jpg"
              alt="工場設備"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8 lg:mt-12">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary border border-text-primary px-6 py-3 hover:bg-text-primary hover:text-white transition-colors"
          >
            工場・設備を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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
    <section className="relative h-[500px] lg:h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/recruit-bg.jpg"
          alt="採用"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 lg:px-20 max-w-3xl">
        <p className="text-sm lg:text-base text-white/90 mb-2">
          成長しあえる職場で、
        </p>
        <p className="text-sm lg:text-base text-white/90 mb-2">
          想いの込もった
        </p>
        <p className="text-sm lg:text-base text-white/90 mb-6">
          モノづくりを。
        </p>

        <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-[0.15em] mb-8">
          RECRUIT
        </h2>

        <Link
          href="/recruit"
          className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white px-6 py-3 hover:bg-white hover:text-navy transition-colors"
        >
          採用情報を見る
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
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
    <section className="relative py-16 lg:py-24">
      {/* Background with faded building image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/company-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-[0.2em] text-navy">
            COMPANY
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/60 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg lg:text-xl font-bold text-white tracking-wider">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-sm text-white/80 mt-1">{card.subtitle}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
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
