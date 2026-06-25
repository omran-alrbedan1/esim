import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";
import { AboutHero } from '@/components/about';
import { StorySection } from '@/components/about/StorySection';
import { VisionMissionSection } from '@/components/about/VisionMissionSection';
import { HomeTimeline } from "@/components/home";
import { getLocale } from "next-intl/server";
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
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