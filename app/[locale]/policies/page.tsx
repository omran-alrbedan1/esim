import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    path: "/policies",
    title: "Privacy Policy | Net eSIM",
    description: "Net eSIM privacy policy - how we collect, use, and protect your personal information.",
  });
}

export default function PoliciesPage() {
  return <div />;
}
