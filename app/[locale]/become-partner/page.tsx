import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { BadgeCheck, BarChart3, CircleDollarSign, MonitorSmartphone, Share2, Users } from 'lucide-react';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Become a Partner | Net eSIM",
    description: "Partner with Net eSIM and offer eSIM packages to your travel audience. Easy integration, competitive commissions.",
    alternates: {
      canonical: `https://netesim.com/${locale}/become-partner`,
      languages: {
        'x-default': 'https://netesim.com/en/become-partner',
        en: `https://netesim.com/en/become-partner`,
        ar: `https://netesim.com/ar/become-partner`,
      },
    },
  };
}
import { HomeTrustedBrands } from '@/components/home';
import { Link } from '@/i18n/routing';

const benefits = [
  ['Commission earnings', 'Earn recurring revenue when your audience buys eSIM packages through your partner link.'],
  ['Exclusive conversion tools', 'Use ready-made links, campaign assets, and support materials made for travel creators.'],
  ['Marketing support', 'Get campaign guidance and partner support from the Net eSIM team.'],
  ['Global reach', 'Promote data plans for popular destinations across the world.'],
] as const;

const steps = [
  ['Apply', 'Fill in a short partner request so we can learn about your audience.'],
  ['Get approved', 'Our team reviews your channel and sends your partner access.'],
  ['Promote', 'Share Net eSIM packages with your travelers, clients, or community.'],
  ['Earn and grow', 'Track your performance and receive partner payouts.'],
] as const;

export default function BecomePartnerPage() {
  return (
    <main className="pt-28 text-[#1a052e]">
      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 rounded-[30px] bg-[#f4ecfb] p-6 shadow-[0_20px_48px_rgba(80,42,126,0.08)] md:grid-cols-[1.05fr_0.95fr] md:p-10">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff6fae]">Partner Program</span>
          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[0.98] tracking-tight md:text-6xl">
            Turn travel content into recurring revenue
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6d5c86] md:text-base">
            Join Net eSIM as a partner and recommend reliable travel data plans to your audience, agency clients, or community.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#2c064c] px-5 py-3 text-sm font-bold text-white">
              Become a partner
            </Link>
            <Link href="/packages" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#2c064c]">
              View packages
            </Link>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#9c55d0] p-8">
          <div className="absolute right-8 top-8 rounded-2xl bg-white px-4 py-3 text-xs font-bold text-[#2c064c] shadow-xl">
            Partner dashboard
          </div>
          <div className="mx-auto mt-14 flex h-48 w-64 items-center justify-center rounded-3xl border-[10px] border-[#2c064c] bg-[#f8f1ff] shadow-[0_22px_40px_rgba(44,6,76,0.26)]">
            <MonitorSmartphone size={82} className="text-[#684086]" />
          </div>
          <div className="mx-auto mt-3 h-3 w-40 rounded-full bg-[#2c064c]" />
        </div>
      </section>

      <HomeTrustedBrands />

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Built for people who help others travel smarter</h2>
          <p className="mt-3 text-sm leading-7 text-[#6d5c86]">
            Whether you run a travel agency, creator page, blog, or community, Net eSIM gives you a simple way to recommend connectivity.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, copy], index) => {
            const icons = [CircleDollarSign, Share2, Users, BadgeCheck];
            const Icon = icons[index];
            return (
              <article className="rounded-3xl bg-white/80 p-5 shadow-[0_14px_34px_rgba(80,42,126,0.08)]" key={title}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#684086]/10 text-[#684086]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6d5c86]">{copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-[#684086]/20 bg-white/75 p-7">
          <BarChart3 size={36} className="text-[#684086]" />
          <h2 className="mt-5 text-3xl font-extrabold">Everything you need to grow with confidence</h2>
          <p className="mt-3 text-sm leading-7 text-[#6d5c86]">
            Track clicks, conversions, and campaign performance while our team helps you position the right plans for your audience.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map(([title, copy], index) => (
            <article className="rounded-3xl bg-[#f4ecfb] p-5" key={title}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#684086]">
                {index + 1}
              </span>
              <h3 className="mt-4 font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6d5c86]">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
