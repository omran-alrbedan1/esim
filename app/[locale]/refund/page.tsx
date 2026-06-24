import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

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
    title: "Refund Policy | Net eSIM",
    description: "Net eSIM refund policy — eligibility criteria and how to request a refund for your eSIM purchase.",
    alternates: {
      canonical: `https://netesim.com/${locale}/refund`,
      languages: {
        'x-default': 'https://netesim.com/en/refund',
        en: `https://netesim.com/en/refund`,
        ar: `https://netesim.com/ar/refund`,
      },
    },
  };
}

export default function RefundPage() {
  return (
<div>
  
</div>
  );
}
