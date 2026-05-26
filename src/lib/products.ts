export type ProductImage = {
  src: string;
  label?: string;
};

export type SubCategory = {
  name: string;
  nameEn?: string;
  slug: string;
  images: (string | ProductImage)[];
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
    name: "ダブルヘックス割型シリーズ",
    nameEn: "Double Hex",
    slug: "double-hex",
    images: ["/images/products/double-hex/double-hex-group.png"],
    subCategories: [
      {
        name: "DH《フランジパンチ》",
        nameEn: "DH Flange Punches",
        slug: "flange-punch",
        images: [
          "/images/products/double-hex/flange-punch/flange-punch.png",
          "/images/products/double-hex/flange-punch/flange-punch-1.png",
          "/images/products/double-hex/flange-punch/flange-punch-2.png",
          "/images/products/double-hex/flange-punch/double-hex-series.png",
        ],
      },
      {
        name: "DH《ナットフォーミングダイス》",
        nameEn: "DH Nut Forming Dies",
        slug: "nut-forming-dies",
        images: [
          "/images/products/double-hex/nut-forming-dies/nut-forming-dies.png",
        ],
      },
      {
        name: "DH《インサート》",
        nameEn: "DH Insert",
        slug: "insert",
        images: ["/images/products/double-hex/insert/insert.png"],
      },
    ],
  },
  {
    name: "ニブシリーズ",
    nameEn: "Nibs Series",
    slug: "nibs-ring",
    images: ["/images/products/nibs-ring/nibs-ring-group.png"],
    subCategories: [
      {
        name: "割型ニブシリーズ",
        nameEn: "Segmented Nibs",
        slug: "dn-nib",
        images: [
          { src: "/images/products/nibs-ring/dn-nib/hex-upset-nib.png", label: "DN《六角アップセットニブ》" },
          { src: "/images/products/nibs-ring/dn-nib/square-root-nib.png", label: "DS《根角ニブ》" },
        ],
      },
    ],
  },
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
    name: "スチールツール",
    nameEn: "Steel Tool",
    slug: "steel-tool",
    images: [],
    subCategories: [
      {
        name: "ダイスケース",
        nameEn: "Dies Case",
        slug: "dies-case",
        images: ["/images/products/steel-tool/dies-case/dies-case.png"],
      },
      {
        name: "パンチケース",
        nameEn: "Punch Case",
        slug: "punch-case",
        images: ["/images/products/steel-tool/punch-case/punch-case.png"],
      },
      {
        name: "スリーブ",
        nameEn: "Sleeve",
        slug: "sleeve",
        images: ["/images/products/steel-tool/sleeve/sleeve.png"],
      },
      {
        name: "リング",
        nameEn: "Ring",
        slug: "ring",
        images: ["/images/products/nibs-ring/hex-nib-ring/hex-nib-ring.png"],
      },
      {
        name: "トリミングダイス",
        nameEn: "Trimming Dies",
        slug: "trimming-dies",
        images: [
          "/images/products/steel-tool/trimming-dies/trimming-dies.png",
        ],
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
        name: "パンチ & ダイスピン",
        nameEn: "Punch Pin & Dies Pin",
        slug: "punch-pin-dies-pin",
        images: [
          "/images/products/pin-punch-nib/punch-pin-dies-pin/punch-pin-dies-pin.jpg",
        ],
      },
      {
        name: "Hex Pin",
        nameEn: "Hex Pin",
        slug: "hex-pin",
        images: ["/images/products/pin-punch-nib/hex-pin/hex-pin.png"],
      },
      {
        name: "パンチニブ",
        nameEn: "Upset Punch Nib",
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
        name: "カッター&ナイフ",
        nameEn: "Cutter & Knife",
        slug: "cutter-knife",
        images: [
          "/images/products/knife-finger/cutter-knife/cutter-knife.png",
        ],
      },
      {
        name: "フィンガー",
        nameEn: "Finger",
        slug: "finger",
        images: ["/images/products/knife-finger/finger/finger.png"],
      },
    ],
  },
  {
    name: "金属3Dプリンタ製品",
    nameEn: "Metal 3D Printed Products",
    slug: "metal-3d-printed",
    images: [
      "/images/products/metal-3d-printed/metal-3d-printed-1.jpg",
      "/images/products/metal-3d-printed/metal-3d-printed-2.jpg",
    ],
    subCategories: [],
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
        name: "高合金鋼圧造",
        nameEn: "Special Metal Forging",
        slug: "special-metal-forging",
        images: [
          "/images/products/rnd/special-metal-forging/special-metal-forging.png",
        ],
      },
    ],
  },
];
