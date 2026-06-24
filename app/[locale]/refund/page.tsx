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
    <GenericPolicy title="Refund Policy">
      <h2>Refund Eligibility</h2>
      <p>A refund may be available when an eSIM cannot be installed because of a verified technical issue with our service.</p>
      <h2>Non-Refundable Situations</h2>
      <p>Used data plans, incompatible or carrier-locked devices, and requests made after the validity period are generally not refundable.</p>
      <h2>Refund Requests</h2>
      <p>Contact support with your order number, device model, and screenshots so our team can investigate promptly.</p>
    </GenericPolicy>
  );
}
