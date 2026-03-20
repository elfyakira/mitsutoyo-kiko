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
    name: "マシニング&フライス",
    nameEn: "Machining & Milling",
    images: [
      "56a75fa1-e9cd-4e2c-9168-0f49c74a158f.jpg",
      "68af4049-8c4b-47d0-9371-5333680803a3.jpg",
      "dd5ffdea-8ba5-49f4-a319-5a6bd719bf71.jpg",
      "ea3f776d-76fb-4cad-8b04-4a3e9f9f09a9.jpg",
    ],
  },
  {
    name: "旋盤",
    nameEn: "Lathe",
    images: [
      "ac09553e-293d-4817-827c-cc8cf1441fac.jpg",
      "e88f24be-a402-4fd3-a324-9dfa7324c59f.jpg",
    ],
  },
  {
    name: "研削",
    nameEn: "Grinding",
    images: [
      "4292850c-ec51-4726-b36d-4e66b7581cdd.jpg",
      "4459d3ea-d988-4355-a336-6078b927cf04.jpg",
      "5ce38678-98c6-4abe-9e0b-827e1ef0b6eb.jpg",
      "64883984-bcec-4623-9780-f5df43a69b96.jpg",
      "87d43ed1-5a60-498f-b207-8ed629b922bb.jpg",
      "8c382478-d841-456b-9903-5bb147dc97dc.jpg",
      "aa41e333-3e6e-4f4e-b0c9-3c7e518df237.jpg",
      "c8742354-970b-4906-b718-ae5040ae0eff.jpg",
      "caf13738-167d-4b7b-afac-cddfc6851c79.jpg",
      "eaa246d2-14fe-4945-97ed-6d4c9950b917.jpg",
      "f0b3d137-3056-469c-9231-211c769ef0ba.jpg",
      "ffead560-618e-4110-954a-b4b0d006cc5e.jpg",
    ],
  },
  {
    name: "放電",
    nameEn: "EDM",
    images: [
      "32b78e92-9956-48c5-a187-f14fd2c4f39b.jpg",
      "79ab5f1c-221b-43d4-b412-28dac5843b7e.jpg",
      "7a3f82bd-0aab-439b-bde3-c4e03d1a7e35.jpg",
      "879af888-3ef9-4e58-a7a2-4287d11725fe.jpg",
    ],
  },
  {
    name: "ホーニング盤",
    nameEn: "Honing",
    images: [
      "099ae189-764c-4c30-9b42-bdc986a4ec2f.jpg",
    ],
  },
  {
    name: "自動化設備",
    nameEn: "Automation",
    images: [
      "7714dfc0-9618-4ea1-b8c7-424e088e230c.jpg",
      "90699cce-7464-4064-811d-0021ad87acfe.jpg",
      "dd2c735c-ea58-4617-9d71-7faa4f9997a9.jpg",
      "f7008fd7-80bd-49e1-ba6e-f87cab0c82ac.jpg",
    ],
  },
  {
    name: "パレットチェンジャー付き自動化システム",
    nameEn: "Pallet Changer System",
    images: [
      "160519d4-8c6f-4139-a2f1-c15cefdf2b96.jpg",
      "669daa3f-6641-4473-a155-af8a4c4e8c33.jpg",
    ],
  },
  {
    name: "金属３D プリンター",
    nameEn: "Metal 3D Printer",
    images: [
      "4c076ea4-f935-47d3-ad98-9479a0e1de40.jpg",
      "710eac93-d790-477a-939a-1fc110b052c5.jpg",
      "b7ae3e6a-6149-4d77-a260-ecbc3076a63e.jpg",
    ],
  },
  {
    name: "熱処理",
    nameEn: "Heat Treatment",
    images: [
      "9c0078c0-5f67-4b7d-aa8a-f1e330d06792.jpg",
    ],
  },
  {
    name: "コーティング",
    nameEn: "Coating",
    images: [
      "0a4024a8-db09-404d-8d16-c6b7629f3171.jpg",
      "58963cf4-97d3-4920-9c94-6f69559eb2f2.jpg",
    ],
  },
  {
    name: "材料",
    nameEn: "Materials",
    images: [
      "78ad752e-5806-4d39-bec9-d1ac3917dba9.jpg",
    ],
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
  const firstImage = categories[0];
  const [selected, setSelected] = useState({
    category: firstImage.name,
    file: firstImage.images[0],
  });
  const [selectedCategory, setSelectedCategory] = useState(firstImage.name);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (category: string, file: string) => {
      setSelected({ category, file });
      setSelectedCategory(category);
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  const currentCategory = categories.find((c) => c.name === selected.category);
  const currentIndex = currentCategory
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
              selected.category === tile.category &&
              selected.file === tile.file;

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
