import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

export { default } from '../terms/page';

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
    title: "Terms of Use | Net eSIM",
    description: "Net eSIM terms of use — guidelines and conditions for using our eSIM services.",
    alternates: {
      canonical: `https://netesim.com/${locale}/terms-of-use`,
      languages: {
        'x-default': 'https://netesim.com/en/terms-of-use',
        en: 'https://netesim.com/en/terms-of-use',
        ar: 'https://netesim.com/ar/terms-of-use',
      },
    },
  };
}
