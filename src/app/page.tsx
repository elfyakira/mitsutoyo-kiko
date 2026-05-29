"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { company, contact, site } from "@/lib/site";
import ContactCTA from "@/components/ContactCTA";
import AnimatedLink from "@/components/animations/AnimatedLink";

// ============================================================
// Hero Section
// ============================================================
const HERO_VIDEOS_DESKTOP = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
  "/videos/hero-5.mp4",
  "/videos/hero-6.mp4",
];

const HERO_VIDEOS_MOBILE = [
  "/videos/hero-mobile-1.mp4",
  "/videos/hero-mobile-2.mp4",
  "/videos/hero-mobile-3.mp4",
  "/videos/hero-mobile-4.mp4",
  "/videos/hero-mobile-5.mp4",
  "/videos/hero-mobile-6.mp4",
];

const CROSSFADE_MS = 1000;
// 動画終了の手前でクロスフェードを開始して、停止する瞬間を隠す
const EARLY_CROSSFADE_SEC = CROSSFADE_MS / 1000;

function HeroAboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeProgress, setFadeProgress] = useState(0);
  const [contentScroll, setContentScroll] = useState(0);
  // viewport の判定。null = 未確定 (動画は描画しない)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const heroVideos = isDesktop === false ? HERO_VIDEOS_MOBILE : HERO_VIDEOS_DESKTOP;
  // ① はくっきり、②以降は少しだけブラー
  const videoBlurPx = (src: string) => (src === heroVideos[0] ? 0 : 3);
  // クロスフェード用の2スロット。最初の動画を slot A、次の動画(プリロード)を slot B
  const [slotASrc, setSlotASrc] = useState(HERO_VIDEOS_DESKTOP[0]);
  const [slotBSrc, setSlotBSrc] = useState(HERO_VIDEOS_DESKTOP[1]);
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const slotARef = useRef<HTMLVideoElement>(null);
  const slotBRef = useRef<HTMLVideoElement>(null);
  const isTransitioningRef = useRef(false);
  const [contentOverflow, setContentOverflow] = useState(0);

  // viewport を検出して動画セットを切替
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // viewport が変わったらスロットをリセット
  useEffect(() => {
    if (isDesktop === null) return;
    const list = isDesktop ? HERO_VIDEOS_DESKTOP : HERO_VIDEOS_MOBILE;
    setSlotASrc(list[0]);
    setSlotBSrc(list[1]);
    setActiveSlot("A");
    isTransitioningRef.current = false;
  }, [isDesktop]);

  const getNextSrc = useCallback(
    (src: string) => {
      const list = isDesktop ? HERO_VIDEOS_DESKTOP : HERO_VIDEOS_MOBILE;
      const idx = list.indexOf(src);
      return list[(idx + 1) % list.length];
    },
    [isDesktop],
  );

  const triggerCrossfade = useCallback(
    (endedSlot: "A" | "B") => {
      if (isTransitioningRef.current) return;
      if (endedSlot !== activeSlot) return;
      isTransitioningRef.current = true;
      const nextSlot = endedSlot === "A" ? "B" : "A";
      const nextRef = nextSlot === "A" ? slotARef : slotBRef;
      if (nextRef.current) {
        nextRef.current.currentTime = 0;
        nextRef.current.play().catch(() => {});
      }
      setActiveSlot(nextSlot);
      // クロスフェード完了後、非表示になった側に次々の動画を仕込む
      setTimeout(() => {
        const visibleSrc = nextSlot === "A" ? slotASrc : slotBSrc;
        const nextNextSrc = getNextSrc(visibleSrc);
        if (endedSlot === "A") {
          setSlotASrc(nextNextSrc);
        } else {
          setSlotBSrc(nextNextSrc);
        }
        isTransitioningRef.current = false;
      }, CROSSFADE_MS);
    },
    [activeSlot, slotASrc, slotBSrc, getNextSrc],
  );

  const handleTimeUpdate = useCallback(
    (slot: "A" | "B") => () => {
      if (slot !== activeSlot) return;
      const v = (slot === "A" ? slotARef : slotBRef).current;
      if (!v) return;
      const duration = v.duration;
      if (!duration || !isFinite(duration)) return;
      if (duration - v.currentTime <= EARLY_CROSSFADE_SEC) {
        triggerCrossfade(slot);
      }
    },
    [activeSlot, triggerCrossfade],
  );

  // フォールバック: timeupdate を取り逃した場合のための onEnded
  const handleEnded = useCallback(
    (slot: "A" | "B") => () => triggerCrossfade(slot),
    [triggerCrossfade],
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Measure how much the about content overflows beyond viewport
  useEffect(() => {
    if (contentRef.current) {
      const overflow = Math.max(contentRef.current.scrollHeight - window.innerHeight, 0);
      setContentOverflow(overflow);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const totalScroll = rect.height - window.innerHeight;
    if (totalScroll <= 0) return;

    const scrolled = -rect.top;
    // Phase 1: crossfade (first 300vh of scroll)
    const fadeZone = window.innerHeight * 3;
    const fade = Math.min(Math.max(scrolled / fadeZone, 0), 1);
    setFadeProgress(fade);

    // Phase 2: content scroll (remaining scroll after crossfade)
    const contentScrollAmount = Math.max(scrolled - fadeZone, 0);
    setContentScroll(contentScrollAmount);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      if (contentRef.current) {
        setContentOverflow(Math.max(contentRef.current.scrollHeight - window.innerHeight, 0));
      }
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Mirage effect: shimmer scale oscillation during transition
  const mirageIntensity = Math.sin(fadeProgress * Math.PI); // peaks at 50%
  const mirageScaleX = 1.05 + mirageIntensity * 0.02;
  const mirageScaleY = 1.05 + mirageIntensity * 0.04;
  const heroBlur = fadeProgress * 25 + mirageIntensity * 5;
  const heroOpacity = 1 - fadeProgress;
  const aboutBlur = (1 - fadeProgress) * 20 + mirageIntensity * 3;
  const aboutOpacity = fadeProgress;
  const heroBrightness = 1 + mirageIntensity * 0.15;
  const heroSaturate = 1 + mirageIntensity * 0.3;

  // Total height: 1 screen (initial) + 3 screens (crossfade) + content overflow (scroll)
  const totalHeight = `calc(400vh + ${contentOverflow}px)`;

  return (
    <div ref={wrapperRef} className="relative" style={{ height: totalHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Hero Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            filter: `blur(${heroBlur}px) brightness(${heroBrightness}) saturate(${heroSaturate})`,
            opacity: heroOpacity,
            transform: `scale(${mirageScaleX}, ${mirageScaleY})`,
          }}
        >
          {/* クロスフェード用 2 スロット。viewport 判定前は描画しない */}
          {isDesktop !== null && (
            <>
              <video
                ref={slotARef}
                key={`A-${slotASrc}`}
                autoPlay={activeSlot === "A"}
                muted
                playsInline
                preload="auto"
                onTimeUpdate={handleTimeUpdate("A")}
                onEnded={handleEnded("A")}
                className="absolute inset-0 w-full h-full object-cover transition-opacity"
                style={{
                  opacity: activeSlot === "A" ? 1 : 0,
                  transitionDuration: `${CROSSFADE_MS}ms`,
                  filter: `blur(${videoBlurPx(slotASrc)}px)`,
                  transform: "scale(1.03)",
                }}
                src={slotASrc}
              />
              <video
                ref={slotBRef}
                key={`B-${slotBSrc}`}
                autoPlay={activeSlot === "B"}
                muted
                playsInline
                preload="auto"
                onTimeUpdate={handleTimeUpdate("B")}
                onEnded={handleEnded("B")}
                className="absolute inset-0 w-full h-full object-cover transition-opacity"
                style={{
                  opacity: activeSlot === "B" ? 1 : 0,
                  transitionDuration: `${CROSSFADE_MS}ms`,
                  filter: `blur(${videoBlurPx(slotBSrc)}px)`,
                  transform: "scale(1.03)",
                }}
                src={slotBSrc}
              />
            </>
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div
          className="absolute inset-0 z-10"
          style={{
            filter: `blur(${heroBlur}px)`,
            opacity: heroOpacity,
            transform: `scaleY(${1 + mirageIntensity * 0.02})`,
          }}
        >
          {/* Mobile only: 縦書き日本語コピー (右上) */}
          <div
            className={`lg:hidden absolute top-48 right-10 transition-opacity duration-1000 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p
              className="text-[22px] md:text-[26px] font-light text-white/90 tracking-[0.25em] leading-relaxed"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 300,
                writingMode: "vertical-rl",
              }}
            >
              <span className="block">すべてを自社で。</span>
              <span className="block">すべては信頼のために。</span>
            </p>
          </div>

          {/* 英語タイトル: 左下に固定。日本語コピーは lg 以上のみ表示 */}
          <div className="absolute inset-x-0 bottom-0 flex items-end">
            <div className="text-left px-8 md:px-16 lg:px-24 pb-24 md:pb-32">
              <div
                className={`transition-opacity duration-1000 ease-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1
                  className="text-[32px] md:text-[52px] lg:text-[72px] font-bold text-white tracking-[0.08em] leading-[1.1] mb-4"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
                >
                  <span className="block">All in-house.</span>
                  <span className="block">All for Precision.</span>
                </h1>
                <p
                  className="hidden lg:block text-[15px] md:text-[20px] lg:text-[26px] font-light text-white/90 tracking-[0.25em] leading-relaxed"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                >
                  <span className="block lg:inline">すべてを自社で。</span>
                  <span className="block lg:inline">すべては信頼のために。</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Layer */}
        <div
          className="absolute inset-0 z-20"
          style={{ filter: `blur(${aboutBlur}px)`, opacity: aboutOpacity, transform: `translateY(-${contentScroll}px)` }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/solution-section-bg.jpg')", backgroundPosition: "center 80%", height: `calc(100% + ${contentScroll}px)`, top: 0 }}>
            <div className="absolute inset-0 bg-black/60" />
          </div>
          {/* Content */}
          <div
            ref={contentRef}
            className="relative"
          >
            <div className="pt-[35vh] pb-16 lg:pb-24 px-8 md:px-16 lg:px-24">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                {/* Left - Title */}
                <div className="lg:w-1/2">
                  <h2
                    className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-white tracking-[0.25em] leading-[1.3] whitespace-nowrap"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                  >
                    課題に寄り添い、<br className="lg:hidden" />解決へ導く。
                  </h2>
                  <p
                    className="text-[16px] md:text-[22px] lg:text-[30px] font-bold text-white/70 tracking-[0.08em] leading-[1.3] mt-4"
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
                  >
                    Close to your challenges.<br /> Closer to the solution.
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
                    className="btn-slide btn-slide-light inline-flex items-center justify-between mt-20 mb-24 bg-white border border-white px-8 py-5 min-w-[280px] text-navy tracking-[0.15em] text-[14px] lg:text-[16px]"
                  >
                    <span>私たちについて</span>
                    <svg className="w-5 h-5 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-white/70 animate-bounce"
          style={{ opacity: Math.max(1 - fadeProgress * 4, 0) }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
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
            技を磨き、<br className="md:hidden" />心を尽くす。
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
          <div className="lg:w-[40%] relative h-[300px] lg:h-[500px] mb-10 lg:mb-0 lg:self-start">
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
                className="text-[20px] lg:text-[22px] font-bold text-navy tracking-[0.1em] leading-[1.6] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <span className="text-navy/40 block md:inline md:mr-3 text-[40px] md:text-[20px] lg:text-[22px]" style={{ fontFamily: "'Inter', sans-serif" }}>01</span><span className="hidden md:inline">｜</span>一貫生産体制が生む、<br className="md:hidden" />ゆるぎない品質。
              </h3>
              <p className="text-text-secondary">
                各工程を自社内で完結することで、品質のばらつきを最小限に抑え、常に安定したクオリティをお届けします。
              </p>
            </div>

            {/* 02 */}
            <div className="pb-10 mb-10 border-b border-gray-200">
              <h3
                className="text-[20px] lg:text-[22px] font-bold text-navy tracking-[0.1em] leading-[1.6] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <span className="text-navy/40 block md:inline md:mr-3 text-[40px] md:text-[20px] lg:text-[22px]" style={{ fontFamily: "'Inter', sans-serif" }}>02</span><span className="hidden md:inline">｜</span>課題に向き合い、<br className="md:hidden" />最適解をともに探す。
              </h3>
              <p className="text-text-secondary">
                独自の製法「ダブルヘックス」をはじめ、蓄積された技術と知見をもとに、お客様の課題に真摯に向き合い、&ldquo;どうすればできるか&rdquo;をともに考えます。
              </p>
            </div>

            {/* 03 */}
            <div>
              <h3
                className="text-[20px] lg:text-[22px] font-bold text-navy tracking-[0.1em] leading-[1.6] mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <span className="text-navy/40 block md:inline md:mr-3 text-[40px] md:text-[20px] lg:text-[22px]" style={{ fontFamily: "'Inter', sans-serif" }}>03</span><span className="hidden md:inline">｜</span>一つひとつに、誠実に。
              </h3>
              <p className="text-text-secondary">
                どんな仕事にも、真摯に向き合う。私たちは&ldquo;造る&rdquo;だけでなく、&ldquo;応える&rdquo;ものづくりを大切にしています。
              </p>
            </div>

            <Link
              href="/company#our-strength"
              className="btn-slide inline-flex items-center justify-between mt-20 bg-navy border border-navy px-8 py-5 min-w-[280px] text-white tracking-[0.15em] text-[14px] lg:text-[16px]"
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

        <div className="flex flex-col gap-4 mt-12">
          <Link
            href="/products"
            className="btn-slide btn-slide-light inline-flex items-center justify-between bg-white border border-white px-8 py-5 min-w-[280px] text-navy tracking-[0.15em] text-[14px] lg:text-[16px]"
          >
            <span>製品情報</span>
            <svg className="w-5 h-5 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/equipment"
            className="btn-slide btn-slide-light inline-flex items-center justify-between bg-white border border-white px-8 py-5 min-w-[280px] text-navy tracking-[0.15em] text-[14px] lg:text-[16px]"
          >
            <span>設備紹介</span>
            <svg className="w-5 h-5 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right 2/3 - Two image columns (side-by-side on all sizes) */}
      <div className="lg:w-2/3 flex flex-row">
        <div className="w-1/2 relative min-h-[200px] sm:min-h-[350px] lg:min-h-[700px] overflow-hidden">
          <Image
            src="/images/products-section.jpg"
            alt="製品"
            fill
            className="object-cover"
            style={{ objectPosition: "center 0%", transform: "scale(1.1) translateY(8%)" }}
          />
        </div>
        <div className="w-1/2 relative min-h-[200px] sm:min-h-[350px] lg:min-h-[700px]">
          <Image
            src="/images/facilities-section.png"
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
          <div className="lg:w-[40%] relative h-[300px] lg:h-[500px] mb-10 lg:mb-0 lg:self-start">
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
              className="btn-slide inline-flex items-center justify-between mt-20 bg-navy border border-navy px-8 py-5 min-w-[280px] text-white tracking-[0.15em] text-[14px] lg:text-[16px]"
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
// Related Banners Section
// ============================================================
function RelatedBannersSection() {
  const banners = [
    {
      src: "/images/banners/mitsutoyo-hp.png",
      alt: "三豊機工",
      href: "http://mitsutoyogolf.com/",
    },
    {
      src: "/images/banners/satsuma-farm.png",
      alt: "薩摩農園",
      href: "https://satsuma-farm.jp/",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Title */}
        <div className="mb-12 lg:mb-16">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[50px] font-light text-navy tracking-[0.25em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            鹿児島の広大な大地とともに
          </h2>
          <p
            className="text-[16px] md:text-[22px] lg:text-[30px] font-bold text-navy/70 tracking-[0.08em] leading-[1.3] mt-4"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            With the Vast Land of Kagoshima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {banners.map((b) => (
            <a
              key={b.src}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full overflow-hidden block transition-opacity duration-200 hover:opacity-80"
              style={{ aspectRatio: "16 / 9" }}
            >
              <Image
                src={b.src}
                alt={b.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </a>
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
      <HeroAboutSection />
      <FacilitySection />
      <RecruitSection />
      <CompanySection />
      <RelatedBannersSection />
      <ContactCTA />
    </>
  );
}
