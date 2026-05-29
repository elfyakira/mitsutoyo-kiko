"use client";

import { useState, useRef } from "react";
import { productCategories, type ProductCategory, type SubCategory, type ProductImage } from "@/lib/products";

function getImageSrc(img: string | ProductImage): string {
  return typeof img === "string" ? img : img.src;
}
function getImageLabel(img: string | ProductImage): string | undefined {
  return typeof img === "string" ? undefined : img.label;
}

type Selection =
  | { type: "category"; category: ProductCategory }
  | { type: "sub"; category: ProductCategory; sub: SubCategory };

export default function ProductCatalog() {
  const [selection, setSelection] = useState<Selection>({
    type: "category",
    category: productCategories[0],
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredIndex(null), 200);
  };

  const handleSubMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleSubMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredIndex(null), 200);
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    // 集合画像が無く、サブカテゴリがある場合は最初のサブを表示
    if (cat.images.length === 0 && cat.subCategories.length > 0) {
      setSelection({ type: "sub", category: cat, sub: cat.subCategories[0] });
    } else {
      setSelection({ type: "category", category: cat });
    }
    setHoveredIndex(null);
  };

  const handleSubClick = (cat: ProductCategory, sub: SubCategory) => {
    if (cat.showAllSubs) {
      // showAllSubsの場合はカテゴリ選択のまま該当セクションにスクロール
      setSelection({ type: "category", category: cat });
      setHoveredIndex(null);
      setTimeout(() => {
        document.getElementById(`sub-${sub.slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      setSelection({ type: "sub", category: cat, sub });
      setHoveredIndex(null);
    }
  };

  // showAllSubsモードか
  const isShowAllSubs =
    selection.type === "category" && !!selection.category.showAllSubs;

  // 表示する画像
  const displayImages =
    selection.type === "sub" ? selection.sub.images : selection.category.images;

  // 表示タイトル
  const displayTitle =
    selection.type === "sub"
      ? `${selection.category.name} / ${selection.sub.name}`
      : selection.category.name;

  // 表示タイトル英語
  const displayTitleEn =
    selection.type === "sub"
      ? selection.sub.nameEn || null
      : selection.category.nameEn || null;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section Title */}
        <div className="mb-10 lg:mb-14">
          <h2
            className="text-[24px] md:text-[32px] lg:text-[42px] font-light text-navy tracking-[0.15em] leading-[1.3]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            製品カテゴリ
          </h2>
          <p
            className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-navy/40 tracking-[0.08em] leading-[1.3] mt-2"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Product Category
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 min-h-[600px]">
          {/* ===== Left Sidebar Menu ===== */}
          <nav className="w-full lg:w-[280px] xl:w-[320px] shrink-0 border-t border-l border-r lg:border-t-0 lg:border-l-0 lg:border-r border-gray-200">
            <ul className="grid grid-cols-2 lg:flex lg:flex-col gap-0">
              {productCategories.map((cat, index) => {
                const isActive =
                  selection.category.slug === cat.slug;
                const isHovered = hoveredIndex === index;
                const hasSubs = cat.subCategories.length > 0;

                return (
                  <li
                    key={cat.slug}
                    className="relative border-b border-gray-200 lg:border-b-gray-100 [&:nth-child(odd)]:border-r [&:nth-child(odd)]:border-gray-200 lg:[&:nth-child(odd)]:border-r-0"
                    onMouseEnter={() => handleMenuEnter(index)}
                    onMouseLeave={handleMenuLeave}
                  >
                    {/* Main menu item */}
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className={`
                        w-full h-full text-left px-4 lg:px-5 py-3 lg:py-4 text-[13px] lg:text-[14px] tracking-[0.1em]
                        transition-all duration-200
                        lg:whitespace-normal
                        flex items-center justify-between gap-2
                        ${
                          isActive
                            ? "bg-navy text-white font-medium"
                            : "text-gray-700 hover:bg-gray-50 hover:text-navy font-normal"
                        }
                      `}
                    >
                      <div className="flex flex-col items-start w-full">
                        <span className="block">
                          {cat.name === "ダブルヘックス割型シリーズ" ? (
                            <>ダブルヘックス<br className="lg:hidden" />割型シリーズ</>
                          ) : (
                            cat.name
                          )}
                        </span>
                        <span
                          className={`block w-full text-[10px] lg:text-[11px] tracking-[0.04em] mt-1 lg:mt-0.5 ${
                            isActive ? "text-white/60" : "text-gray-400"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {cat.nameEn}
                        </span>
                      </div>
                      {hasSubs && (
                        <svg
                          className={`w-3 h-3 shrink-0 transition-transform ${
                            isActive ? "text-white/70" : "text-gray-400"
                          } hidden lg:block`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </button>

                    {/* Submenu on hover (desktop only) */}
                    {hasSubs && isHovered && (
                      <div
                        className="hidden lg:block absolute left-full top-0 z-50 min-w-[220px]"
                        onMouseEnter={handleSubMenuEnter}
                        onMouseLeave={handleSubMenuLeave}
                      >
                        <div className="bg-white border border-gray-200 shadow-lg rounded-r-md overflow-hidden flex flex-row">
                          {cat.subCategories.map((sub) => {
                            const isSubActive =
                              selection.type === "sub" &&
                              selection.category.slug === cat.slug &&
                              selection.sub.slug === sub.slug;
                            return (
                              <button
                                key={sub.slug}
                                onClick={() => handleSubClick(cat, sub)}
                                className={`
                                  text-left px-6 py-4 text-[15px] tracking-[0.08em]
                                  transition-colors duration-150 border-r border-gray-100 last:border-r-0
                                  whitespace-nowrap
                                  ${
                                    isSubActive
                                      ? "bg-navy/10 text-navy font-medium"
                                      : "text-gray-600 hover:bg-navy/5 hover:text-navy"
                                  }
                                `}
                              >
                                <span>{sub.name}</span>
                                {sub.nameEn && (
                                  <span className="block text-[12px] tracking-[0.04em] opacity-60 mt-0.5"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                  >
                                    {sub.nameEn}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ===== Right Content Area ===== */}
          <div className="flex-1 pt-6 lg:pt-0">
            {/* Title + Sub-category buttons */}
            <div className="mb-6 lg:mb-8 pb-4 border-b border-gray-200 flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-3">
                <h3
                  className="text-[18px] lg:text-[22px] font-medium text-navy tracking-[0.12em] shrink-0"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {displayTitle}
                </h3>
                {displayTitleEn && (
                  <p
                    className="text-[12px] lg:text-[14px] font-bold text-navy/40 tracking-[0.06em]"
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
                  >
                    {displayTitleEn}
                  </p>
                )}
              </div>

              {selection.category.subCategories.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {selection.category.subCategories.map((sub) => {
                    const isCurrentSub =
                      selection.type === "sub" &&
                      selection.sub.slug === sub.slug;
                    return (
                      <button
                        key={sub.slug}
                        onClick={() =>
                          handleSubClick(selection.category, sub)
                        }
                        className={`
                          px-6 py-3 text-[14px] lg:text-[16px] tracking-[0.06em]
                          rounded-full font-medium
                          transition-all duration-200
                          ${
                            isCurrentSub
                              ? "bg-navy text-white shadow-sm"
                              : "bg-gray-100 text-gray-600 hover:bg-navy hover:text-white"
                          }
                        `}
                      >
                        {sub.name}
                        {sub.nameEn && (
                          <span className="ml-2 text-[12px] lg:text-[13px] opacity-70">
                            {sub.nameEn}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Images */}
            {isShowAllSubs ? (
              <div className="space-y-12">
                {selection.category.subCategories.map((sub) => (
                  <div key={sub.slug} id={`sub-${sub.slug}`} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="shrink-0">
                        <h4 className="text-[16px] lg:text-[18px] font-medium text-navy tracking-[0.1em]">
                          {sub.name}
                        </h4>
                        {sub.nameEn && (
                          <p
                            className="text-[11px] lg:text-[12px] font-bold text-navy/40 tracking-[0.04em] mt-0.5"
                            style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
                          >
                            {sub.nameEn}
                          </p>
                        )}
                      </div>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>
                    <div className="space-y-4">
                      {sub.images.map((img, i) => {
                        const src = getImageSrc(img);
                        const label = getImageLabel(img);
                        return (
                          <div key={`${sub.slug}-${i}`}>
                            {label && (
                              <div className="flex items-center gap-3 mb-4">
                                <h5 className="text-[14px] lg:text-[16px] font-medium text-navy tracking-[0.08em] shrink-0">
                                  {label}
                                </h5>
                                <div className="flex-1 h-px bg-gray-200" />
                              </div>
                            )}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={src}
                              alt={label || `${sub.name} ${i + 1}`}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : displayImages.length > 0 ? (
              <div className="space-y-4">
                {displayImages.map((img, i) => {
                  const src = getImageSrc(img);
                  const label = getImageLabel(img);
                  return (
                  <div key={`${selection.type === "sub" ? selection.sub.slug : selection.category.slug}-${i}`}>
                    {label && (
                      <div className="flex items-center gap-3 mb-4">
                        <h5 className="text-[14px] lg:text-[16px] font-medium text-navy tracking-[0.08em] shrink-0">
                          {label}
                        </h5>
                        <div className="flex-1 h-px bg-gray-200" />
                      </div>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={label || `${displayTitle} ${i + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-400 text-[14px] tracking-[0.1em]">
                  カテゴリを選択してください
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
