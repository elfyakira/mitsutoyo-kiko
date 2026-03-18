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
          src="/images/recruit-hero.jpg"
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

        {/* === 会社の実績 === */}
        <div className="max-w-5xl mx-auto mb-16 lg:mb-24">
          <h3
            className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.15em] mb-6 lg:mb-8"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            会社の実績
          </h3>
          {/* 3cols × 3rows = 9 cells → perfect rectangle */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

            {/* 内製比率 - Large featured (2×2) */}
            <div className="bg-white py-4 px-6 lg:py-6 lg:px-8 text-center col-span-2 lg:row-span-2 flex flex-col items-center justify-center">
              <p
                className="text-[13px] lg:text-[16px] font-bold text-navy/50 tracking-[0.15em] mb-3"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                内製比率
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[80px] lg:text-[120px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  92
                </span>
                <span
                  className="text-[24px] lg:text-[32px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  %
                </span>
              </div>
            </div>

            {/* 取引社数 */}
            <div className="bg-white py-3 px-4 lg:py-4 lg:px-5 text-center flex flex-col items-center justify-center">
              <p
                className="text-[11px] lg:text-[13px] font-bold text-navy/50 tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                取引社数
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[38px] lg:text-[52px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  200
                </span>
                <span
                  className="text-[14px] lg:text-[16px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  社
                </span>
              </div>
            </div>

            {/* 年間出荷数 */}
            <div className="bg-white py-3 px-4 lg:py-4 lg:px-5 text-center flex flex-col items-center justify-center">
              <p
                className="text-[11px] lg:text-[13px] font-bold text-navy/50 tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                年間出荷数
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[38px] lg:text-[52px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  12
                </span>
                <span
                  className="text-[14px] lg:text-[16px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  万個
                </span>
              </div>
            </div>

            {/* 創業年数 */}
            <div className="bg-white py-3 px-4 lg:py-4 lg:px-5 text-center flex flex-col items-center justify-center">
              <p
                className="text-[11px] lg:text-[13px] font-bold text-navy/50 tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                創業年数
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[38px] lg:text-[52px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  60
                </span>
                <span
                  className="text-[14px] lg:text-[16px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  年
                </span>
              </div>
            </div>

            {/* 連続黒字年数 */}
            <div className="bg-white py-3 px-4 lg:py-4 lg:px-5 text-center flex flex-col items-center justify-center">
              <p
                className="text-[11px] lg:text-[13px] font-bold text-navy/50 tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                連続黒字年数
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[38px] lg:text-[52px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  58
                </span>
                <span
                  className="text-[14px] lg:text-[16px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  年
                </span>
              </div>
            </div>

            {/* 海外取引国数 */}
            <div className="bg-white py-3 px-4 lg:py-4 lg:px-5 text-center flex flex-col items-center justify-center">
              <p
                className="text-[11px] lg:text-[13px] font-bold text-navy/50 tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                海外取引国数
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[38px] lg:text-[52px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  10
                </span>
                <span
                  className="text-[14px] lg:text-[16px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  カ国
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* === 働く環境 === */}
        <div className="max-w-5xl mx-auto">
          <h3
            className="text-[18px] lg:text-[22px] font-bold text-navy tracking-[0.15em] mb-6 lg:mb-8"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            働く環境
          </h3>
          {/* 3cols × 2rows = 6 cells → perfect rectangle */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

            {/* 平均勤続年数 - Large featured (2×2) */}
            <div className="bg-white py-4 px-6 lg:py-6 lg:px-8 text-center col-span-2 lg:row-span-2 flex flex-col items-center justify-center">
              <p
                className="text-[13px] lg:text-[16px] font-bold text-navy/50 tracking-[0.15em] mb-3"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                平均勤続年数
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[80px] lg:text-[120px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  18.8
                </span>
                <span
                  className="text-[24px] lg:text-[32px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  年
                </span>
              </div>
            </div>

            {/* 離職率 */}
            <div className="bg-white py-3 px-4 lg:py-4 lg:px-5 text-center flex flex-col items-center justify-center">
              <p
                className="text-[11px] lg:text-[13px] font-bold text-navy/50 tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                離職率
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-[38px] lg:text-[52px] font-bold text-navy leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  5
                </span>
                <span
                  className="text-[14px] lg:text-[16px] font-bold text-navy"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  %
                </span>
              </div>
            </div>

            {/* 年齢比率分布 */}
            <div className="bg-white py-3 px-4 lg:py-4 lg:px-6 flex flex-col items-center justify-center">
              <p
                className="text-[11px] lg:text-[13px] font-bold text-navy/50 tracking-[0.15em] mb-3"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                年齢比率分布
              </p>
              <div className="w-full space-y-2">
                {ageData.map((age) => (
                  <div key={age.label} className="flex items-center gap-2">
                    <span className="text-[10px] lg:text-[11px] text-navy font-bold w-[60px] text-right shrink-0 tracking-[0.05em]">
                      {age.label}
                    </span>
                    <div className="flex-1 h-4 bg-[#F5F7F9] rounded-sm overflow-hidden">
                      <div
                        className="h-full bg-navy rounded-sm"
                        style={{ width: `${age.value}%` }}
                      />
                    </div>
                    <span
                      className="text-[11px] lg:text-[12px] font-bold text-navy w-[30px] text-right"
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
      </div>
    </section>
  );
}

// ============================================================
// Message Section
// ============================================================
function MessageSection() {
  const workImages = Array.from({ length: 25 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return { src: `/images/work/work-${num}.jpg`, alt: `作業風景 ${num}` };
  });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="text-center px-8 md:px-16 lg:px-24 mb-12 lg:mb-16">
        <h2
          className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          人の手が、精度を生む。
        </h2>
        <p
          className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-3"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >
          CRAFTSMANSHIP
        </p>
      </div>

      {/* Scrolling gallery - two rows */}
      <div className="space-y-8 overflow-hidden">
        {/* Row 1 - images 1-13 */}
        <div className="flex animate-[scrollLeft_80s_linear_infinite] gap-8 w-max">
          {[...workImages.slice(0, 13), ...workImages.slice(0, 13)].map((img, i) => (
            <div key={`row1-${i}`} className="relative w-[280px] lg:w-[360px] aspect-[3/2] shrink-0 overflow-hidden rounded">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* Row 2 - images 14-25 */}
        <div className="flex animate-[scrollLeft_70s_linear_infinite] gap-8 w-max">
          {[...workImages.slice(13), ...workImages.slice(13)].map((img, i) => (
            <div key={`row2-${i}`} className="relative w-[280px] lg:w-[360px] aspect-[3/2] shrink-0 overflow-hidden rounded">
              <Image
                src={img.src}
                alt={img.alt}
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
// Requirements Section
// ============================================================
function RequirementsSection() {
  const jobs = [
    {
      title: "設計（金型の製図・設計・開発）",
      items: [
        { label: "職種", value: "設計（金型の製図・設計・開発）" },
        { label: "雇用形態", value: "正社員" },
        { label: "勤務地", value: "愛知県春日井市東野新町一丁目4番地" },
        { label: "就業時間", value: "8:00～17:00（実働：7.66h）\n\n休憩時間（合計80分）\n10:00～10:10\n12:00～13:00\n15:00～15:10" },
        { label: "休日", value: "週休2日制（土日休み）\n長期休暇あり（GW・夏季休暇・年末年始休暇）" },
        { label: "給与", value: "【経験者】月給227,000円～260,000円\n【未経験】月給220,000円～246,000円\n※半年後以降 技術手当(19,000～23,000)を支給\n賞与あり" },
        { label: "福利厚生", value: "雇用保険・労災保険・厚生年金・健康保険\n住宅手当(独身者のみ)\n財形貯蓄\n敷地内駐車場\n慶弔見舞金制度\n産休/育休制度\n改善提案報奨金\n研修制度(OJT研修・鹿児島工場研修)" },
      ],
    },
    {
      title: "営業職（既存客先向け営業）",
      items: [
        { label: "職種", value: "営業職（既存客先向け営業）" },
        { label: "雇用形態", value: "正社員" },
        { label: "勤務地", value: "愛知県春日井市東野新町一丁目4番地" },
        { label: "就業時間", value: "8:00～17:00（実働：7.66h）\n\n休憩時間（合計80分）\n10:00～10:10\n12:00～13:00\n15:00～15:10" },
        { label: "休日", value: "週休2日制（土日休み）\n長期休暇あり（GW・夏季休暇・年末年始休暇）" },
        { label: "給与", value: "【未経験】220,000円～238,000円（想定年収 360～390万円）\n【経験者】227,000円～250,000円（想定年収 370～400万円）\n※入社半年後以降に営業手当（19,000～22,000円）を支給\n賞与あり" },
        { label: "福利厚生", value: "雇用保険・労災保険・厚生年金・健康保険\n住宅手当(独身者のみ)\n財形貯蓄\n敷地内駐車場\n慶弔見舞金制度\n産休/育休制度\n改善提案報奨金\n研修制度(OJT研修・鹿児島工場研修)" },
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
              <table className="w-full border-collapse">
                <tbody>
                  {job.items.map((item, index) => (
                    <tr key={index} className="border-b border-navy/10 last:border-b-0">
                      <th className="w-[100px] lg:w-[130px] px-4 lg:px-6 py-4 lg:py-5 text-[13px] lg:text-[14px] font-bold text-navy bg-[#F5F7F9] tracking-[0.1em] text-left align-top">
                        {item.label}
                      </th>
                      <td className="px-4 lg:px-6 py-4 lg:py-5 text-[13px] lg:text-[14px] text-text-secondary whitespace-pre-line">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

      <RecruitCTASection />
      <ContactCTA />
    </>
  );
}
