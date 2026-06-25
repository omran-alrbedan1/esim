import type { Metadata } from "next";
import { locales } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { HomeDestinations, HomeFaq, HomeHero, HomeHow, HomeTimeline, HomeTrustedBrands } from "@/components/home";
import { getLocale } from "next-intl/server";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return getPageMetadata({ locale, page: "home", path: "" });
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HomeHero />
      <HomeDestinations />
      <HomeTrustedBrands />
      <HomeHow />
      <HomeTimeline />
      <HomeFaq />
    </main>
  );
}
