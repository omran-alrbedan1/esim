import type { Metadata } from 'next';
import { getContactPageMetadata } from '@/lib/metadata';
import { ContactHero, ContactFormSection } from '@/components/contact';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getContactPageMetadata({ locale });
}

export default function ContactPage() {
  return (
    <main className="min-h-screen ">
      <ContactHero />
      <ContactFormSection />
    </main>
  );
}
