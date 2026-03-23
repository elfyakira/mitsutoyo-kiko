export type SubCategory = {
  name: string;
  slug: string;
  images: string[];
};

export type ProductCategory = {
  name: string;
  nameEn: string;
  slug: string;
  /** メニュー直下の画像（サブカテゴリなしでクリック時に表示） */
  images: string[];
  /** 全サブカテゴリを1画面にまとめて表示 */
  showAllSubs?: boolean;
  subCategories: SubCategory[];
};

export const productCategories: ProductCategory[] = [
  {
    name: "パンチ＆ダイス",
    nameEn: "Punch & Dies",
    slug: "punch-dies",
    images: [
      "/images/products/punch-dies/punch-dies-2.png",
      "/images/products/punch-dies/punch-dies-1.png",
    ],
    subCategories: [],
  },
  {
    name: "ダブルヘックス割型シリーズ",
    nameEn: "Double Hex",
    slug: "double-hex",
    images: ["/images/products/double-hex/double-hex-group.png"],
    subCategories: [
      {
        name: "インサート",
        slug: "insert",
        images: ["/images/products/double-hex/insert/insert.png"],
      },
      {
        name: "ナットフォーミングダイス",
        slug: "nut-forming-dies",
        images: [
          "/images/products/double-hex/nut-forming-dies/nut-forming-dies.png",
        ],
      },
      {
        name: "フランジパンチ",
        slug: "flange-punch",
        images: [
          "/images/products/double-hex/flange-punch/flange-punch.png",
          "/images/products/double-hex/flange-punch/flange-punch-1.png",
          "/images/products/double-hex/flange-punch/flange-punch-2.png",
          "/images/products/double-hex/flange-punch/double-hex-series.png",
        ],
      },
    ],
  },
  {
    name: "ニブシリーズ＆リング",
    nameEn: "Nibs Series & Ring",
    slug: "nibs-ring",
    images: ["/images/products/nibs-ring/nibs-ring-group.png"],
    subCategories: [
      {
        name: "DN Nib",
        slug: "dn-nib",
        images: [
          "/images/products/nibs-ring/dn-nib/hex-upset-nib.png",
          "/images/products/nibs-ring/dn-nib/square-root-nib.png",
        ],
      },
      {
        name: "Hex Nib & Ring",
        slug: "hex-nib-ring",
        images: ["/images/products/nibs-ring/hex-nib-ring/hex-nib-ring.png"],
      },
    ],
  },
  {
    name: "ピン＆パンチニブ",
    nameEn: "Pin & Punch Nib",
    slug: "pin-punch-nib",
    images: [
      "/images/products/pin-punch-nib/punch-pin-dies-pin-group.png",
    ],
    subCategories: [
      {
        name: "Hex Pin",
        slug: "hex-pin",
        images: ["/images/products/pin-punch-nib/hex-pin/hex-pin.png"],
      },
      {
        name: "Punch Pin & Dies Pin",
        slug: "punch-pin-dies-pin",
        images: [
          "/images/products/pin-punch-nib/punch-pin-dies-pin/punch-pin-dies-pin.png",
        ],
      },
      {
        name: "Upset Punch Nib",
        slug: "upset-punch-nib",
        images: [
          "/images/products/pin-punch-nib/upset-punch-nib/upset-punch-nib.png",
        ],
      },
    ],
  },
  {
    name: "ナイフ＆フィンガー",
    nameEn: "Knife & Finger",
    slug: "knife-finger",
    images: [],
    showAllSubs: true,
    subCategories: [
      {
        name: "Cutter & Knife",
        slug: "cutter-knife",
        images: [
          "/images/products/knife-finger/cutter-knife/cutter-knife.png",
        ],
      },
      {
        name: "Finger",
        slug: "finger",
        images: ["/images/products/knife-finger/finger/finger.png"],
      },
    ],
  },
  {
    name: "スチールツール",
    nameEn: "Steel Tool",
    slug: "steel-tool",
    images: [],
    showAllSubs: true,
    subCategories: [
      {
        name: "スリーブ",
        slug: "sleeve",
        images: ["/images/products/steel-tool/sleeve/sleeve.png"],
      },
      {
        name: "ダイスケース",
        slug: "dies-case",
        images: ["/images/products/steel-tool/dies-case/dies-case.png"],
      },
      {
        name: "トリミングダイス",
        slug: "trimming-dies",
        images: [
          "/images/products/steel-tool/trimming-dies/trimming-dies.png",
        ],
      },
      {
        name: "パンチケース",
        slug: "punch-case",
        images: ["/images/products/steel-tool/punch-case/punch-case.png"],
      },
    ],
  },
  {
    name: "研究開発",
    nameEn: "Research & Development",
    slug: "rnd",
    images: [
      "/images/products/rnd/rnd-main.png",
    ],
    subCategories: [
      {
        name: "直彫加工品",
        slug: "direct-engraving",
        images: [
          "/images/products/rnd/latest-processing/direct-engraving/direct-engraving.png",
        ],
      },
      {
        name: "特殊金属圧造",
        slug: "special-metal-forging",
        images: [
          "/images/products/rnd/special-metal-forging/special-metal-forging.png",
        ],
      },
    ],
  },
];
