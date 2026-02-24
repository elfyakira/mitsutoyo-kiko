"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact, site } from "@/lib/site";
import ContactCTA from "@/components/ContactCTA";

// ============================================================
// Page Header
// ============================================================
function PageHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Images - Split */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/2 relative">
          <Image
            src="/images/recruit-header-1.jpg"
            alt="採用情報"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/recruit-header-2.jpg"
            alt="採用情報"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      {/* Background Text - Company Name */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 overflow-hidden">
        <span
          className={`text-[80px] lg:text-[180px] font-bold text-white/10 tracking-wider transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          MITSUTOYO
        </span>
      </div>

      {/* Background Text - RECRUIT */}
      <div className="absolute inset-0 flex items-end justify-center pb-20 overflow-hidden">
        <span
          className={`text-[60px] lg:text-[140px] font-bold text-white/10 tracking-wider transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          RECRUIT
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4">
        <h1
          className={`text-2xl lg:text-3xl font-bold text-white tracking-wider transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          採用情報
        </h1>
      </div>
    </section>
  );
}

// ============================================================
// Message Section
// ============================================================
function MessageSection() {
  return (
    <section className="relative py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row">
        {/* Left - Message Box */}
        <div className="lg:w-1/2 bg-white py-12 lg:py-20 px-8 lg:px-16">
          <h2 className="text-xl lg:text-2xl font-bold text-navy leading-relaxed mb-6">
            成長しあえる職場で、
            <br />
            想いの込もったモノづくりを。
          </h2>
          <p className="text-sm lg:text-base text-text-secondary leading-[2]">
            私たちはトヨタホーム様の最重要部材として位置づけられている外壁を主に製造しております。
            単にモノづくりをするだけでなく、多様化するお客様のニーズに最も合った形で生産を行い、
            製品を通じて人々の暮らしに安全、安心を作る会社です。
          </p>
        </div>

        {/* Right - Image */}
        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
          <Image
            src="/images/recruit-message.jpg"
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
// Flow Section
// ============================================================
function FlowSection() {
  const steps = [
    {
      step: "STEP01",
      title: "エントリー",
      image: "/images/flow-entry.png",
    },
    {
      step: "STEP02",
      title: "書類選考",
      image: "/images/flow-document.png",
    },
    {
      step: "STEP03",
      title: "面接",
      image: "/images/flow-interview.png",
    },
    {
      step: "STEP04",
      title: "内定",
      image: "/images/flow-offer.png",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[80px] lg:text-[160px] font-bold text-gray-100 tracking-wider">
          FLOW
        </span>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-navy tracking-wider">
            採用の流れ
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          {steps.map((item, index) => (
            <div key={item.step} className="flex items-center">
              {/* Step Card */}
              <div className="text-center">
                {/* Step Badge */}
                <div className="inline-block bg-navy text-white text-xs font-bold px-4 py-1 tracking-wider mb-4">
                  {item.step}
                </div>

                {/* Title */}
                <p className="text-sm font-medium text-navy mb-4 tracking-wider">
                  {item.title}
                </p>

                {/* Icon/Image */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto relative border-2 border-navy rounded-lg p-4 bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block mx-4">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Requirements Section
// ============================================================
function RequirementsSection() {
  const requirements = [
    { label: "職種", value: "製造" },
    { label: "勤務地", value: "〒444-0007 愛知県岡崎市大平町字榎田53番地1" },
    { label: "就業時間", value: "8:00〜17:00（1時間休憩あり）" },
    { label: "諸手当", value: "精勤手当・交通費支給" },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-[#F5F7F9] overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[60px] lg:text-[120px] font-bold text-gray-200 tracking-wider">
          RECRUIT
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-navy tracking-wider">
            募集要項
          </h2>
        </div>

        {/* Tab */}
        <div className="mb-8">
          <div className="inline-block bg-navy text-white text-sm font-bold px-8 py-3 tracking-wider">
            正社員
          </div>
        </div>

        {/* Table */}
        <div className="bg-white">
          {requirements.map((item, index) => (
            <div
              key={index}
              className="flex border-b border-gray-200 last:border-b-0"
            >
              <div className="w-28 lg:w-40 flex-shrink-0 px-4 lg:px-6 py-4 lg:py-5 text-sm font-bold text-navy bg-gray-50">
                {item.label}
              </div>
              <div className="flex-1 px-4 lg:px-6 py-4 lg:py-5 text-sm text-text-primary">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA Section
// ============================================================
function RecruitCTASection() {
  return (
    <section className="relative py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/recruit-cta-bg.jpg"
          alt="採用CTA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg lg:text-xl text-white mb-2">
          あなたの応募を待っています。
        </p>
        <p className="text-sm lg:text-base text-white/80 mb-10">
          成長しあえる職場で、想いの込もったモノづくりを一緒にしましょう！
        </p>

        {/* Phone and Entry Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          {/* Phone Box */}
          <div className="bg-white rounded px-8 py-6 text-center">
            <p className="text-xs text-text-secondary mb-2">
              お電話での採用受付はこちら
            </p>
            <a
              href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
              className="flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-2xl lg:text-3xl font-bold text-navy">
                {contact.phoneFormatted || contact.phone}
              </span>
            </a>
            <p className="text-xs text-text-secondary mt-2">
              受付時間／{contact.hours}
            </p>
          </div>

          {/* Entry Button */}
          <div className="text-center">
            <p className="text-xs text-white/80 mb-3">
              エントリーフォームはこちら
            </p>
            <Link
              href="/contact?type=recruit"
              className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 font-semibold transition-colors hover:bg-accent-dark"
            >
              エントリー
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
export default function RecruitPage() {
  return (
    <>
      <PageHeader />
      <MessageSection />
      <FlowSection />
      <RequirementsSection />
      <RecruitCTASection />
      <ContactCTA />
    </>
  );
}
