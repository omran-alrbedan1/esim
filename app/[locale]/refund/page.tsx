import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
import RefundHero from "@/components/refund/RefundHero";
import RefundInfo from "@/components/refund/RefundInfo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "refund", path: "/refund" });
}

const RefundPage = () => {
  return (
    <main style={{ paddingTop: 110 }}>
      <div
      >
        <RefundHero />
        <RefundInfo />
      </div>
    </main>
  );
};

export default RefundPage;