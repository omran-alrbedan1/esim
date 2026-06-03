import type { Metadata } from 'next';
import { getAboutPageMetadata } from '@/lib/metadata';
import { AboutHero, AboutMission, AboutVision } from '@/components/about';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getAboutPageMetadata({ locale });
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <AboutHero />
      <AboutMission />
      <AboutVision />
    </main>
  );
}
