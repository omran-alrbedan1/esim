import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
import { DeviceRequirements, DeviceSearchRegistry, DeviceSupportHero } from "@/components/device-support";
import { HomeFaq } from "@/components/home";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "deviceSupport", path: "/device-support" });
}

export default function DeviceSupportPage() {
  return (
    <main className="min-h-screen  px-4 pb-24  sm:px-6 lg:px-8">
      <DeviceSupportHero />
      <DeviceSearchRegistry />
      <DeviceRequirements />
      <HomeFaq/>
    </main>
  );
}
