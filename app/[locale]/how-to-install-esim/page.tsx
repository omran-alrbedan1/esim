import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
import HowToInstallHero from "@/components/how-to-install/HowToInstallHero";
import { HomeTrustedBrands } from "@/components/home";
import { ESimSetupGuideSection, HowItWorksSection, PartnerApplicationSection, PartnerBenefitsSection, WhyPartnerSection } from "@/components/how-to-install";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "howToInstallEsim", path: "/how-to-install-esim" });
}
export default function HowToInstallEsimPage() {
  return (
    <main className="">
      <HowToInstallHero/>
      <HomeTrustedBrands/>
      <WhyPartnerSection/>
      <HowItWorksSection/>
      <PartnerBenefitsSection/>
      <PartnerApplicationSection/>
      <ESimSetupGuideSection/>
    </main>
  );
}
