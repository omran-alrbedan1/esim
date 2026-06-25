import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { AboutHero } from '@/components/about';
import { StorySection } from '@/components/about/StorySection';
import { VisionMissionSection } from '@/components/about/VisionMissionSection';
import { HomeTimeline } from "@/components/home";
import { type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "about", path: "/about" });
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <StorySection />
      <VisionMissionSection />
      <HomeTimeline />  
    </main>
  );
}