import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyInfo from "@/components/privacy/PrivacyInfo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "privacy", path: "/privacy" });
}

const PrivacyPage = () => {
  return (
    <main className="mt-32" >
        <PrivacyHero />
        <PrivacyInfo />
    </main>
  );
};

export default PrivacyPage;