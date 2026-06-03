import type { Metadata } from 'next';
import { getContactPageMetadata } from '@/lib/metadata';
import { ContactHero, ContactFormSection } from '@/components/contact';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getContactPageMetadata({ locale });
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <ContactHero />
      <ContactFormSection />
    </main>
  );
}
