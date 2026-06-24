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
    title: "Privacy Policy | Net eSIM",
    description: "Net eSIM privacy policy — how we collect, use, and protect your personal information.",
    alternates: {
      canonical: `https://netesim.com/${locale}/policies`,
      languages: {
        'x-default': 'https://netesim.com/en/policies',
        en: `https://netesim.com/en/policies`,
        ar: `https://netesim.com/ar/policies`,
      },
    },
  };
}

export default function PoliciesPage() {
  return (
    <GenericPolicy title="Privacy Policy">
      <h2>Information We Collect</h2>
      <p>We collect account, purchase, device, and support information needed to provide and improve the Net eSIM service.</p>
      <h2>How We Use Information</h2>
      <p>Your information is used to deliver plans, process transactions, provide support, prevent fraud, and communicate important service updates.</p>
      <h2>Data Protection</h2>
      <p>We use appropriate technical and organizational safeguards and only retain information for as long as it is required.</p>
      <h2>Contact</h2>
      <p>For privacy requests, contact privacy@netesim.com.</p>
    </GenericPolicy>
  );
}
