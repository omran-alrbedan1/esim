import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";
import { getLocale } from "next-intl/server";

export { default } from '../terms/page';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return getPageMetadata({
    locale,
    path: "/terms-of-use",
    title: "Terms of Use | Net eSIM",
    description: "Net eSIM terms of use - guidelines and conditions for using our eSIM services.",
  });
}
