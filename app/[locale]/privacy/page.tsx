import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import PoliciesPage from '../policies/page';

export { default } from '../policies/page';

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
    title: "Privacy Policy | Net eSIM",
    description: "Net eSIM privacy policy — how we collect, use, and protect your personal information.",
    alternates: {
      canonical: `https://netesim.com/${locale}/privacy`,
      languages: {
        'x-default': 'https://netesim.com/en/privacy',
        en: 'https://netesim.com/en/privacy',
        ar: 'https://netesim.com/ar/privacy',
      },
    },
  };
}
