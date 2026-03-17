import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Blue rounded card */}
        <div className="bg-navy rounded-[24px] px-8 md:px-16 lg:px-20 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            {/* Left side - Text */}
            <div>
              <h2
                className="text-[36px] md:text-[48px] lg:text-[56px] font-light text-white tracking-[0.05em] leading-[1.2]"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
              >
                Contact
              </h2>
              <p
                className="text-[14px] lg:text-[16px] text-white/70 tracking-[0.2em] mt-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
              >
                お問い合わせ
              </p>
              <div
                className="text-[13px] lg:text-[14px] text-white/70 leading-[2] tracking-[0.15em] mt-8"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
              >
                <p>「こんな資材があれば...」「相談にのって欲しい」</p>
                <p>どのようなお問い合わせでも構いません。</p>
                <p>あなたの抱えている思いをどうぞお聞かせください。</p>
              </div>
            </div>

            {/* Right side - Large Button */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group flex items-center justify-between bg-white/20 hover:bg-white/30 transition-colors rounded-full px-12 md:px-16 py-8 md:py-10 min-w-[320px] md:min-w-[400px]"
              >
                <div className="text-left">
                  <span
                    className="block text-[20px] md:text-[24px] font-bold text-white tracking-[0.08em]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Contact form
                  </span>
                  <span
                    className="block text-[12px] md:text-[14px] text-white/70 tracking-[0.15em] mt-1"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
                  >
                    お問い合わせフォーム
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center ml-8 group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
