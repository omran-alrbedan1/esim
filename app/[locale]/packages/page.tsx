import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";
import { getLocale } from "next-intl/server";
import { Check, ChevronRight, Search, Smartphone } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return getPageMetadata({
    locale,
    path: "/packages",
    title: "eSIM Packages | Net eSIM",
    description: "Browse Net eSIM data packages for travel destinations, with clear durations, data amounts, and quick digital activation.",
  });
}

const amounts = ['1GB', '5GB', '10GB', '20GB', 'Unlimited'];
const durations = [
  { label: '1 Day', price: '4€' },
  { label: '3 Day', price: '5€' },
  { label: '7 Day', price: '8€' },
  { label: '30 Day', price: '20€' },
  { label: '15 Day', price: '12€' },
  { label: 'Custom', price: null }
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#FDF9FF] px-4 pb-24 pt-20 text-[#1A0B2E] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1040px]">
        
        {/* Search Bar Block with Gradient Arrow Wings */}
        <div className="mx-auto flex max-w-[820px] items-center justify-center gap-4 pt-8">
          <div className="hidden items-center gap-0.5 md:flex" aria-hidden="true">
            <ChevronRight size={24} className="rotate-180 text-[#FF8E7A]" />
            <ChevronRight size={24} className="rotate-180 text-[#FFB2A3] -ml-3" />
            <ChevronRight size={24} className="rotate-180 text-[#E0C3FC] -ml-3" />
            <ChevronRight size={24} className="rotate-180 text-[#D6B4FC] -ml-3" />
          </div>
          
          <div className="flex h-14 flex-1 items-center gap-3 rounded-full border border-[#EBE1F5] bg-white px-6 shadow-[0_10px_30px_rgba(107,68,143,0.04)]">
            <Search size={20} className="text-[#1A0B2E]/60" />
            <input 
              type="text" 
              placeholder="Where do you need eSIM?" 
              className="w-full text-sm font-medium text-[#1A0B2E] outline-none placeholder:text-[#1A0B2E]/50"
            />
          </div>

          <div className="hidden items-center gap-0.5 md:flex" aria-hidden="true">
            <ChevronRight size={24} className="text-[#D6B4FC]" />
            <ChevronRight size={24} className="text-[#E0C3FC] -ml-3" />
            <ChevronRight size={24} className="text-[#FFB2A3] -ml-3" />
            <ChevronRight size={24} className="text-[#FF8E7A] -ml-3" />
          </div>
        </div>

        {/* Header Breadcrumbs */}
        <div className="mt-14">
          <h1 className="text-2xl font-bold tracking-tight text-[#1A0B2E] sm:text-3xl">United States eSIMs</h1>
          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs font-medium text-[#8A79A5]">
            <span>Home</span>
            <ChevronRight size={12} className="text-[#8A79A5]/70" />
            <span>Local eSIM</span>
            <ChevronRight size={12} className="text-[#8A79A5]/70" />
            <span className="text-[#1A0B2E]">United States</span>
          </div>
        </div>

        {/* Region Profile Segment */}
        <section className="relative mt-6 overflow-hidden rounded-[32px] border border-[#EFE5FA] bg-white p-6 shadow-[0_16px_40px_rgba(107,68,143,0.03)] sm:p-8">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇺🇸</span>
              <h2 className="text-lg font-bold text-[#1A0B2E]">United States</h2>
            </div>
            
            <div className="mt-4 h-px bg-[#F4EDFC]" />
            
            <div className="mt-4 flex items-center gap-2">
              <div className="inline-flex items-center gap-1 rounded-md border border-[#EFE5FA] bg-[#FDF9FF] px-2 py-1 text-xs font-semibold text-[#4A1E75]">
                <Smartphone size={14} />
                <span>T-Mobile</span>
              </div>
              <span className="rounded bg-[#F4EDFC] px-1.5 py-0.5 text-[9px] font-bold text-[#6A3F98]">5G</span>
            </div>

            {/* Combined Action Capsule Element */}
            <div className="mt-5 inline-flex items-center overflow-hidden rounded-full border border-[#EFE5FA] bg-white p-1 shadow-sm">
              <button className="rounded-full bg-[#36095A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#250341]">
                Check if your device supports eSIM
              </button>
              <button className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold text-[#1A0B2E] transition hover:opacity-70">
                <span>Learn More</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="mt-5 space-y-2 text-xs font-medium text-[#736291]">
              <p className="flex items-center gap-2">
                <Check size={14} className="text-[#6A3F98] stroke-[3]" /> If you face running slow, you can always top up.
              </p>
              <p className="flex items-center gap-2">
                <Check size={14} className="text-[#6A3F98] stroke-[3]" /> The package starts when you connect to a supported network.
              </p>
            </div>
          </div>
        </section>

        {/* Configurator Grid Layout */}
        <section className="mt-5 grid gap-6 rounded-[32px] border border-[#EFE5FA] bg-[#FAF4FF]/60 p-6 shadow-[0_16px_40px_rgba(107,68,143,0.02)] sm:p-8 lg:grid-cols-[1fr_300px]">
          <div>
            <h2 className="text-base font-bold text-[#1A0B2E]">Explore our package offerings and find what suits your needs</h2>
            
            {/* Package Size Matrix */}
            <div className="mt-6">
              <p className="mb-2.5 text-xs font-semibold text-[#8A79A5]">Package amount</p>
              <div className="flex flex-wrap gap-2">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    className={`rounded-xl border px-4 py-2.5 text-xs font-bold transition-all ${
                      amount === '10GB'
                        ? 'border-[#36095A] bg-[#36095A] text-white shadow-sm'
                        : 'border-[#EFE5FA] bg-white text-[#736291] hover:border-[#D6B4FC]'
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Horizons Selection */}
            <div className="mt-6">
              <p className="mb-2.5 text-xs font-semibold text-[#8A79A5]">Duration</p>
              <div className="flex flex-wrap gap-2">
                {durations.map((d) => (
                  <button
                    key={d.label}
                    className={`rounded-xl border px-4 py-2.5 text-xs font-bold transition-all ${
                      d.label === '15 Day'
                        ? 'border-[#36095A] bg-[#36095A] text-white shadow-sm'
                        : 'border-[#EFE5FA] bg-white text-[#736291] hover:border-[#D6B4FC]'
                    }`}
                  >
                    <span>{d.label}</span>
                    {d.price && (
                      <span className={`ml-1 font-medium ${d.label === '15 Day' ? 'text-white/80' : 'text-[#A855F7]'}`}>
                        Price: {d.price}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Digital SIM Card Component */}
          <aside className="flex flex-col items-center justify-between rounded-3xl border border-[#EFE5FA] bg-[#F5ECFE] p-4 text-center">
            <p className="text-[11px] font-semibold text-[#9D83C6]">✨ This is your final package.</p>
            
            {/* Skeuomorphic Chip Shape */}
            <div className="relative mt-3 w-full max-w-[210px] overflow-hidden rounded-2xl rounded-tr-[44px] bg-[#6A25A5] p-5 text-left text-white shadow-md">
              <div className="flex items-center justify-between">
                <div className="rounded bg-white/20 p-1">
                  <Smartphone size={14} className="text-white" />
                </div>
                <span className="rounded-full bg-[#FF4D80] px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-white">
                  71% Discount
                </span>
              </div>

              <div className="mt-6">
                <div className="text-3xl font-black tracking-tight">10 <span className="text-sm font-bold opacity-90">GB</span></div>
                <p className="text-[10px] text-white/70">Valid for 15 days</p>
              </div>

              <div className="mt-5 h-px bg-white/10" />

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-black">€ 8.99</span>
                <span className="text-[9px] font-medium opacity-60">5G • Etisalat</span>
              </div>
            </div>

            {/* Context Summary Tag line */}
            <div className="mt-4">
              <div className="text-sm font-bold text-[#1A0B2E]">10 GB • 15 Days</div>
              <div className="text-[10px] font-medium text-[#8A79A5]">United States • 5G</div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
