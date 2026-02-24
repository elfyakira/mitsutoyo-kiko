import Image from "next/image";
import Link from "next/link";
import { company, locations, images } from "@/lib/site";

const navLinks = [
  { label: "製品情報", href: "/products" },
  { label: "設備紹介", href: "/equipment" },
  { label: "会社概要", href: "/company" },
  { label: "採用情報", href: "/recruit" },
];

const navLinks2 = [
  { label: "お問い合わせ", href: "/contact" },
];

export default function Footer() {
  const hq = locations.headquarters;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-container mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-8">
        {/* Logo and Company Info - Center aligned */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-10">
          {/* Logo */}
          <Link href="/">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "会社ロゴ"}
              width={160}
              height={40}
              className="brightness-0 invert"
            />
          </Link>

          {/* Company Info */}
          <div className="text-sm text-white/80 leading-relaxed text-center lg:text-left">
            <p className="font-medium text-white mb-1">{company.name}</p>
            {hq.zipCode && hq.address && (
              <p>〒{hq.zipCode} {hq.address}</p>
            )}
          </div>
        </div>

        {/* Navigation Links - Horizontal */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {navLinks2.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-white/50">
            © {currentYear} {company.name || "Company Name"}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
