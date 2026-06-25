import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";

export { default } from '../policies/page';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "privacy", path: "/privacy" });
}
