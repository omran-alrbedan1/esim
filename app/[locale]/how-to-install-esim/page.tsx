import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { CheckCircle2, Download, QrCode, Settings, Smartphone, Wifi } from 'lucide-react';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    path: "/how-to-install-esim",
    title: "How to Install eSIM | Net eSIM",
    description: "Step-by-step guide to install and activate your eSIM. Quick setup instructions for iPhone and Android.",
  });
}

const steps = [
  ['Open Settings', 'Open your phone settings and go to Cellular or Mobile Data.', Settings],
  ['Select eSIM', 'Choose Add eSIM or Add Mobile Plan, depending on your device.', Smartphone],
  ['Scan QR code', 'Scan the QR code from your Net eSIM order email or app.', QrCode],
  ['Download the plan', 'Wait for the eSIM profile to download and install on your device.', Download],
  ['Choose the line', 'Name the line Net eSIM and keep your primary number for calls.', CheckCircle2],
  ['Activate roaming', 'Turn on data roaming for the Net eSIM line when you arrive.', Wifi],
] as const;

export default function HowToInstallEsimPage() {
  return (
    <main className="pt-28 text-[#1a052e]">
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] rounded-[30px] bg-[#f6effc] px-6 py-12 text-center shadow-[0_20px_48px_rgba(80,42,126,0.08)]">
        <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff6fae]">Installation guide</span>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">How to install eSIM</h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#6d5c86]">
          Follow these simple steps after purchasing your Net eSIM plan. Keep Wi-Fi connected until the eSIM finishes installing.
        </p>
        <div className="mt-7 inline-flex rounded-full bg-white p-1 shadow-sm">
          <button className="rounded-full bg-[#2c064c] px-8 py-2.5 text-sm font-bold text-white">iOS</button>
          <button className="rounded-full px-8 py-2.5 text-sm font-bold text-[#684086]">Android</button>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-5 py-14 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(([title, copy, Icon], index) => (
          <article className="rounded-[28px] border border-[#684086]/10 bg-white/82 p-5 shadow-[0_14px_34px_rgba(80,42,126,0.07)]" key={title}>
            <div className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#684086] text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <Icon size={22} className="text-[#684086]" />
            </div>
            <div className="mt-5 aspect-[9/14] rounded-2xl border border-[#e2d5ee] bg-[linear-gradient(180deg,#fbf7ff,#efe3f8)] p-4">
              <div className="mb-3 h-3 w-20 rounded-full bg-[#684086]/18" />
              <div className="space-y-2">
                <div className="h-8 rounded-xl bg-white" />
                <div className="h-8 rounded-xl bg-white" />
                <div className="h-8 rounded-xl bg-[#684086]/12" />
                <div className="h-8 rounded-xl bg-white" />
              </div>
            </div>
            <h2 className="mt-5 text-lg font-extrabold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#6d5c86]">{copy}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mb-16 w-[min(1180px,calc(100%-32px))] rounded-3xl border border-[#ff8b77]/30 bg-[#fff6f7] p-6">
        <h2 className="font-extrabold text-[#684086]">Important notes for iOS</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6d5c86]">
          <li>Install the eSIM before travel while connected to stable Wi-Fi.</li>
          <li>Keep your primary SIM active if you want to receive calls and SMS.</li>
          <li>Only turn on data roaming for the Net eSIM line when you want to use travel data.</li>
        </ul>
      </section>
    </main>
  );
}
