import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { GenericPolicy } from '@/components/site/NetSections';

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
    title: "Cookie Policy | Net eSIM",
    description: "Net eSIM cookie policy — how we use cookies and your choices to manage them.",
    alternates: {
      canonical: `https://netesim.com/${locale}/cookie`,
      languages: {
        'x-default': 'https://netesim.com/en/cookie',
        en: `https://netesim.com/en/cookie`,
        ar: `https://netesim.com/ar/cookie`,
      },
    },
  };
}

export default function CookiePolicyPage() {
  return (
    <GenericPolicy title="Cookie Policy">
      <h2>How we use cookies</h2>
      <p>We use essential cookies to keep the website working and analytics cookies to understand how visitors use Net eSIM.</p>
      <h2>Your choices</h2>
      <p>You can manage or delete cookies from your browser settings at any time.</p>
      <h2>Contact</h2>
      <p>For cookie questions, contact privacy@netesim.com.</p>
    </GenericPolicy>
  );
}
