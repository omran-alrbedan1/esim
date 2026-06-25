import type { Metadata } from "next";
import { locales } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { getLocale } from "next-intl/server";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
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
