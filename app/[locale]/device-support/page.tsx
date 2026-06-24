import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { DeviceRequirements, DeviceSearchRegistry, DeviceSupportHero } from "@/components/device-support";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Device Support | Net eSIM",
    description: "Check if your phone supports eSIM. Compatible devices list and requirements for eSIM activation.",
    alternates: {
      canonical: `https://netesim.com/${locale}/device-support`,
      languages: {
        'x-default': 'https://netesim.com/en/device-support',
        en: `https://netesim.com/en/device-support`,
        ar: `https://netesim.com/ar/device-support`,
      },
    },
  };
}

export default function DeviceSupportPage() {
  return (
    <main className="min-h-screen  px-4 pb-24  sm:px-6 lg:px-8">
      <DeviceSupportHero />
      
      <DeviceSearchRegistry />
      
      <DeviceRequirements />
    </main>
  );
}