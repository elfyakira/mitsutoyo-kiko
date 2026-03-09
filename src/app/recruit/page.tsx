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
  return (
    <section className="relative h-[50vh] min-h-[400px] lg:min-h-[500px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/recruit-header-1.jpg"
          alt="採用情報"
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
          採用情報
        </h1>
        <p
          className="text-[40px] md:text-[70px] lg:text-[100px] font-bold text-white tracking-[0.08em] leading-[1.1] mt-2"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          Recruit
        </p>
        <div className="mt-6 flex items-center gap-2 text-[12px] lg:text-[13px] text-white/60 tracking-[0.1em]">
          <a href="/" className="hover:text-white/90 transition-colors">ホーム</a>
          <span>＞</span>
          <span className="text-white/90">採用情報</span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Numbers Section - 数字で見る三豊機工
// ============================================================
function NumbersSection() {
  const ageData = [
    { label: "10代・20代", value: 20 },
    { label: "30代", value: 25 },
    { label: "40代", value: 25 },
    { label: "50代", value: 20 },
    { label: "60代", value: 10 },
  ];

  const numberCards = [
    { label: "取引社数", number: "200", unit: "社" },
    { label: "年間出荷数", number: "12", unit: "万個" },
    { label: "創業年数", number: "60", unit: "年" },
    { label: "海外取引国数", number: "10", unit: "カ国" },
    { label: "連続黒字年数", number: "58", unit: "年" },
    { label: "内製比率", number: "92", unit: "%" },
    { label: "平均勤続年数", number: "18.8", unit: "年" },
    { label: "離職率", number: "5", unit: "%" },
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
            数字で見る三豊機工
          </h2>
          <p
            className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-3"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            NUMBERS
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {numberCards.map((card) => (
            <div key={card.label} className="bg-white p-6 lg:p-8 text-center">
              <p
                className="text-[12px] lg:text-[14px] font-bold text-navy/50 tracking-[0.15em] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {card.label}
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[40px] lg:text-[56px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {card.number}
                </span>
                <span
                  className="text-[16px] lg:text-[20px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {card.unit}
                </span>
              </div>
            </div>
          ))}

          {/* 年齢比率分布 - wider card */}
          <div className="bg-white p-6 lg:p-8 col-span-2 text-center">
            <p
              className="text-[12px] lg:text-[14px] font-bold text-navy/50 tracking-[0.15em] mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              年齢比率分布
            </p>
            <div className="max-w-md mx-auto space-y-3">
              {ageData.map((age) => (
                <div key={age.label} className="flex items-center gap-3">
                  <span className="text-[12px] lg:text-[13px] text-navy font-bold w-[80px] text-right shrink-0 tracking-[0.05em]">
                    {age.label}
                  </span>
                  <div className="flex-1 h-5 bg-[#F5F7F9] rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-navy rounded-sm"
                      style={{ width: `${age.value}%` }}
                    />
                  </div>
                  <span
                    className="text-[13px] lg:text-[14px] font-bold text-navy w-[36px] text-right"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {age.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <p className="text-text-secondary">
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
  const jobs = [
    {
      title: "製造スタッフ",
      items: [
        { label: "職種", value: "製造" },
        { label: "雇用形態", value: "正社員" },
        { label: "勤務地", value: "鹿児島工場（鹿児島県南九州市川辺町清水1542番1）" },
        { label: "就業時間", value: "8:00〜17:00（休憩60分）" },
        { label: "休日", value: "土日祝日、年末年始、GW、夏季休暇" },
        { label: "給与", value: "当社規定による（経験・能力を考慮の上決定）" },
        { label: "諸手当", value: "精勤手当・交通費支給・残業手当" },
        { label: "福利厚生", value: "各種社会保険完備、退職金制度" },
      ],
    },
    {
      title: "技術職（金型設計・加工）",
      items: [
        { label: "職種", value: "技術職" },
        { label: "雇用形態", value: "正社員" },
        { label: "勤務地", value: "鹿児島工場（鹿児島県南九州市川辺町清水1542番1）" },
        { label: "就業時間", value: "8:00〜17:00（休憩60分）" },
        { label: "休日", value: "土日祝日、年末年始、GW、夏季休暇" },
        { label: "給与", value: "当社規定による（経験・能力を考慮の上決定）" },
        { label: "諸手当", value: "精勤手当・交通費支給・残業手当" },
        { label: "福利厚生", value: "各種社会保険完備、退職金制度" },
      ],
    },
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
            募集要項
          </h2>
          <p
            className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-3"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            REQUIREMENTS
          </p>
        </div>

        {/* Job Cards - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {jobs.map((job, jobIndex) => (
            <div key={jobIndex} className="border border-navy/15">
              {/* Job Title Header */}
              <div className="bg-navy px-6 lg:px-8 py-5">
                <h3
                  className="text-[18px] lg:text-[22px] font-bold text-white tracking-[0.1em]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {job.title}
                </h3>
              </div>

              {/* Job Details Table */}
              <div>
                {job.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex border-b border-navy/10 last:border-b-0"
                  >
                    <div className="w-[100px] lg:w-[130px] flex-shrink-0 px-4 lg:px-6 py-4 lg:py-5 text-[13px] lg:text-[14px] font-bold text-navy bg-[#F5F7F9] tracking-[0.1em]">
                      {item.label}
                    </div>
                    <div className="flex-1 px-4 lg:px-6 py-4 lg:py-5 text-[13px] lg:text-[14px] text-text-secondary">
                      {item.value}
                    </div>
                  </div>
                ))}
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
      <RequirementsSection />
      <NumbersSection />
      <MessageSection />
      <FlowSection />
      <RecruitCTASection />
      <ContactCTA />
    </>
  );
}
