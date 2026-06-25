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
    path: "/refund",
    title: "Refund Policy | Net eSIM",
    description: "Net eSIM refund policy - eligibility criteria and how to request a refund for your eSIM purchase.",
  });
}

export default function RefundPage() {
  return <div />;
}
