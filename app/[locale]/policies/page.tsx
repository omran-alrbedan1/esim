import type { Metadata } from 'next';
import { getPoliciesPageMetadata } from '@/lib/metadata';
import { PoliciesHero, PoliciesContent } from '@/components/policies';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getPoliciesPageMetadata({ locale });
}

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <PoliciesHero />
      <PoliciesContent />
    </main>
  );
}
