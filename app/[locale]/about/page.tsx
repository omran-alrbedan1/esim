import type { Metadata } from 'next';
import { getAboutPageMetadata } from '@/lib/metadata';
import { AboutHero, AboutMission, AboutVision, AboutVideo } from '@/components/about';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getAboutPageMetadata({ locale });
}

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      <AboutHero />
      <AboutVideo />
      <AboutMission />
      <AboutVision />
    </main>
  );
}
