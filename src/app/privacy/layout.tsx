import type { Metadata } from "next";
import { site, company } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "プライバシーポリシー | Privacy Policy",
  description: `${company.name}のプライバシーポリシー（個人情報保護方針）です。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `プライバシーポリシー | Privacy Policy${site.seo.titleSuffix}`,
    description: `${company.name}のプライバシーポリシー（個人情報保護方針）です。`,
    url: `${site.seo.siteUrl}/privacy`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
