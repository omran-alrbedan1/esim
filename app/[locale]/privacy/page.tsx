import type { Metadata } from "next";
import { locales } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { getLocale } from "next-intl/server";

export { default } from '../policies/page';
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return getPageMetadata({
    locale,
    path: "/privacy",
    title: "Privacy Policy | Net eSIM",
    description: "Net eSIM privacy policy - how we collect, use, and protect your personal information.",
  });
}
