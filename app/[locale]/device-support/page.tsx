import type { Metadata } from "next";
import { locales } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { getLocale } from "next-intl/server";
import { DeviceRequirements, DeviceSearchRegistry, DeviceSupportHero } from "@/components/device-support";
import { HomeFaq } from "@/components/home";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
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
