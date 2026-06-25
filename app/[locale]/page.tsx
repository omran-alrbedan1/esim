import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
import { HomeDestinations, HomeFaq, HomeHero, HomeHow, HomeTimeline, HomeTrustedBrands } from "@/components/home";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
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
