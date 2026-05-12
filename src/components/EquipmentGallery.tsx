"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

type Category = {
  name: string;
  nameEn: string;
  images: string[];
};

const categories: Category[] = [
  {
    name: "材料",
    nameEn: "Materials",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    name: "旋盤",
    nameEn: "Lathe",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    name: "マシニング",
    nameEn: "Machining",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    name: "熱処理",
    nameEn: "Heat Treatment",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  },
  {
    name: "研削",
    nameEn: "Grinding",
    images: [
      "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",
      "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg",
    ],
  },
  {
    name: "放電",
    nameEn: "EDM",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  },
  {
    name: "5軸マシニング",
    nameEn: "5-Axis Machining",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    name: "ラップ",
    nameEn: "Lapping",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    name: "コーティング",
    nameEn: "Coating",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    name: "金属3Dプリンター",
    nameEn: "Metal 3D Printer",
    images: ["1.jpg", "2.jpg"],
  },
  {
    name: "その他",
    nameEn: "Others",
    images: ["1.jpg", "2.jpg"],
  },
  {
    name: "検査",
    nameEn: "Inspection",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    name: "研究開発",
    nameEn: "R&D",
    images: ["1.jpg", "2.jpg"],
  },
];

function imagePath(category: string, file: string) {
  return `/images/equipment/${encodeURIComponent(category)}/${file}`;
}

type Tile =
  | { type: "label"; category: string; categoryEn: string }
  | { type: "image"; category: string; file: string };

function buildTiles(): Tile[] {
  const tiles: Tile[] = [];
  for (const cat of categories) {
    tiles.push({ type: "label", category: cat.name, categoryEn: cat.nameEn });
    for (const img of cat.images) {
      tiles.push({ type: "image", category: cat.name, file: img });
    }
  }
  return tiles;
}

const allTiles = buildTiles();

export default function EquipmentGallery() {
  const [selected, setSelected] = useState<{
    category: string;
    file: string;
  } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (category: string, file: string) => {
      setSelected({ category, file });
      setSelectedCategory(category);
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  const currentCategory = selected
    ? categories.find((c) => c.name === selected.category)
    : null;
  const currentIndex = currentCategory && selected
    ? currentCategory.images.indexOf(selected.file)
    : 0;

  const goPrev = useCallback(() => {
    if (!currentCategory) return;
    const idx =
      currentIndex > 0 ? currentIndex - 1 : currentCategory.images.length - 1;
    setSelected({ category: currentCategory.name, file: currentCategory.images[idx] });
  }, [currentCategory, currentIndex]);

  const goNext = useCallback(() => {
    if (!currentCategory) return;
    const idx =
      currentIndex < currentCategory.images.length - 1 ? currentIndex + 1 : 0;
    setSelected({ category: currentCategory.name, file: currentCategory.images[idx] });
  }, [currentCategory, currentIndex]);

  return (
    <section className="py-section-y-sp lg:py-section-y bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Main image viewer */}
        <div ref={mainRef} className="scroll-mt-24 mb-8 lg:mb-12">
          <div className="relative w-full aspect-[16/9] max-h-[600px] bg-black rounded-lg overflow-hidden shadow-card">
            {selected ? (
              <>
                <Image
                  key={`${selected.category}/${selected.file}`}
                  src={imagePath(selected.category, selected.file)}
                  alt={`${selected.category}の設備写真`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  priority
                />

                {/* Prev / Next arrows */}
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                  aria-label="前の画像"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                  aria-label="次の画像"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10">
                  <span className="text-white text-body-sm font-medium">
                    {selected.category}
                  </span>
                  {currentCategory && (
                    <span className="text-white/60 text-caption ml-3">
                      {currentIndex + 1} / {currentCategory.images.length}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <>
                <Image
                  src="/images/equipment-hero.jpg"
                  alt="工場上空からの全景"
                  fill
                  className="object-cover animate-slow-pan"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10">
                  <span className="text-white text-body-sm font-medium">
                    下のカテゴリまたは写真をクリックしてください
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Tile grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-1 md:gap-1.5">
          {allTiles.map((tile, i) => {
            if (tile.type === "label") {
              const isActive = selectedCategory === tile.category;
              return (
                <button
                  key={`label-${tile.category}`}
                  onClick={() => handleSelect(tile.category, categories.find((c) => c.name === tile.category)!.images[0])}
                  className={`aspect-square flex flex-col items-center justify-center p-2 text-center transition-colors cursor-pointer ${
                    isActive
                      ? "bg-navy text-white"
                      : "bg-gray-600 text-white hover:bg-gray-700"
                  }`}
                >
                  <span className="text-[11px] md:text-[13px] font-bold leading-tight break-words">
                    {tile.category}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-normal leading-tight opacity-70 mt-1">
                    {tile.categoryEn}
                  </span>
                </button>
              );
            }

            const isSelected =
              selected?.category === tile.category &&
              selected?.file === tile.file;

            return (
              <button
                key={`img-${tile.category}-${tile.file}`}
                onClick={() => handleSelect(tile.category, tile.file)}
                className={`relative aspect-square overflow-hidden group transition-all ${
                  isSelected
                    ? "ring-2 ring-accent ring-offset-1"
                    : "hover:opacity-80"
                }`}
              >
                <Image
                  src={imagePath(tile.category, tile.file)}
                  alt={`${tile.category}の設備`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 14vw"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
