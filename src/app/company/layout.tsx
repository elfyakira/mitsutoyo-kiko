import type { Metadata } from "next";
import { seo, company } from "@/lib/site";

export const metadata: Metadata = {
  title: `事業内容${seo.titleSuffix}`,
  description: `${company.name}の事業内容をご紹介します。冷間圧造工具の製造及び販売を行っております。`,
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
