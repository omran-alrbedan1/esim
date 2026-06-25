import type { Metadata } from "next";
import {  type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "refund", path: "/refund" });
}

export default function RefundPage() {
  return <div />;
}
