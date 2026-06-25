import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
import { Link } from '@/i18n/routing';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "sitemap", path: "/sitemap" });
}

const links = [
  ['Home', '/'],
  ['Packages', '/packages'],
  ['How to install eSIM', '/how-to-install-esim'],
  ['Device support', '/device-support'],
  ['Become a partner', '/become-partner'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Privacy Policy', '/privacy'],
  ['Terms & Conditions', '/terms'],
  ['Refund Policy', '/refund'],
  ['Cookie Policy', '/cookie'],
] as const;

export default function SitemapPage() {
  return (
    <main className="page-main">
      <section className="policy-hero">
        <h1>Site Map</h1>
        <p>Browse all main Net eSIM pages from one place.</p>
      </section>
      <section className="policy-copy">
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map(([label, href]) => (
            <Link className="rounded-2xl bg-[#684086]/8 px-4 py-3 font-bold text-[#2c064c]" href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
