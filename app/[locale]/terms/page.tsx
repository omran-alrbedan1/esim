'use client';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FBF9FF] px-4 pb-24 pt-28 text-[#1A0B2E] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1140px]">
        {/* Top Hero Header Block */}
        <TermsHero />

        {/* Dynamic Sidebar + Legal Sections Container */}
        <TermsLayoutView />
      </div>
    </main>
  );
}

export function TermsHero() {
  return (
    <section className="w-full rounded-[40px] bg-gradient-to-br from-[#7d47a5] to-[#ad59dc] p-8 sm:p-12 text-center text-white shadow-[0_20px_50px_rgba(125,71,165,0.15)] relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Date Tag */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-[1px] w-4 bg-white/40" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            Last Updated: June 2026
          </span>
          <div className="h-[1px] w-4 bg-white/40" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-[42px] leading-tight">
          Terms & Conditions
        </h1>

        {/* Short Underline Accent */}
        <div className="my-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#FF4D80] to-[#FFA043]" />

        {/* Short Text */}
        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
          Please read these terms and conditions carefully before using the Sim Net website or application or purchasing any eSIM package.
        </p>

        {/* Floating Notice Banner */}
        <div className="mt-8 flex items-center gap-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 shadow-inner max-w-xl text-left">
          <div className="flex-shrink-0 grid h-6 w-6 place-items-center rounded-full bg-white text-[#7d47a5]">
            <Info size={13} strokeWidth={3} />
          </div>
          <p className="text-[11px] font-medium leading-normal text-white/95">
            By using Sim Net services, you agree to be bound by the terms and conditions outlined on this page.
          </p>
        </div>

      </div>
    </section>
  );
}

import { BookOpen, Globe2, Info } from 'lucide-react';

const sections = [
  { id: 'service-desc', label: 'Service Description' },
  { id: 'user-resp', label: 'User Responsibilities' },
  { id: 'service-avail', label: 'Service Availability' },
  { id: 'company-info', label: 'Company Information' },
  { id: 'refund-policy', label: 'Refund Policy' },
];

export function TermsLayoutView() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="mt-12 grid gap-8 lg:grid-cols-[0.35fr_0.65fr] items-start">
      
      {/* LEFT SIDEBAR CONTENTS PANEL */}
      <aside className="sticky top-28 rounded-[28px] bg-[#FAF4FF] border border-[#F1E7FC] p-6 shadow-[0_10px_35px_rgba(107,68,143,0.02)]">
        <div className="flex items-center gap-2 text-[#6A25A5] font-extrabold text-sm border-b border-[#EFE5FA] pb-4 mb-4">
          <BookOpen size={16} />
          <h2>Contents</h2>
        </div>
        <nav className="flex flex-col gap-1.5">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="text-left w-full rounded-xl px-4 py-3 text-xs font-semibold text-[#544665] hover:bg-[#EFE5FA] hover:text-[#1A0B2E] transition-all duration-150"
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* RIGHT SIDE DATA SECTIONS */}
      <div className="flex flex-col gap-6">
        
        {/* 1. Service Description */}
        <article 
          id="service-desc"
          className="relative rounded-[28px] bg-white border border-[#EFE5FA] p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] overflow-hidden"
        >
          <div className="absolute right-6 top-6 opacity-[0.06] text-[#1A0B2E]">
            <Globe2 size={40} />
          </div>
          <h3 className="text-base font-bold text-[#1A0B2E]">1. Service Description</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#544665]">
            Net Sim provides digital mobile connectivity services using eSIM technology. Users may purchase mobile data packages which can be installed on compatible devices through digital activation.
          </p>
        </article>

        {/* 2. User Responsibilities */}
        <article 
          id="user-resp"
          className="rounded-[28px] bg-white border-l-4 border-l-[#FFA043] border border-[#EFE5FA] p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)]"
        >
          <h3 className="text-base font-bold text-[#1A0B2E]">2. User Responsibilities</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#544665]">
            Users are responsible for ensuring that their devices support eSIM functionality before purchasing any services from Net Sim.
          </p>
        </article>

        {/* 3. Service Availability */}
        <article 
          id="service-avail"
          className="rounded-[28px] bg-white border border-[#EFE5FA] p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)]"
        >
          <h3 className="text-base font-bold text-[#1A0B2E]">3. Service Availability</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#544665]">
            NET NOVA GROUP LTD reserves the right to modify, update, or discontinue services at any time without prior notice.
          </p>
        </article>

        {/* 4. Company Information */}
        <article 
          id="company-info"
          className="rounded-[28px] bg-white border border-[#EFE5FA] p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)]"
        >
          <h3 className="text-base font-bold text-[#1A0B2E]">4. Company Information</h3>
          <div className="mt-4 text-sm leading-relaxed text-[#544665] space-y-1">
            <p className="font-bold text-[#1A0B2E]">NET NOVA GROUP LTD</p>
            <p>Office 17861</p>
            <p>182-184 High Street North</p>
            <p>East Ham</p>
            <p>London</p>
            <p>United Kingdom</p>
            <p>E6 2JA</p>
            <p className="pt-2">
              Email: <span className="text-[#9A42E4] font-medium">support@netesim.net</span>
            </p>
            <p>
              Phone: <span className="text-[#9A42E4] font-medium">+44 7537 186668</span>
            </p>
          </div>
        </article>

        {/* 5. Refund Policy */}
        <article 
          id="refund-policy"
          className="rounded-[28px] bg-gradient-to-r from-[#200A3B] to-[#391266] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md"
        >
          <div className="max-w-md">
            <h3 className="text-base font-bold">5. Refund Policy</h3>
            <p className="mt-2 text-xs text-white/80 leading-relaxed">
              Refunds are only issued in specific technical cases where it is proven that we were unable to provide the service.
            </p>
          </div>
          <button className="whitespace-nowrap self-start sm:self-center rounded-full bg-gradient-to-r from-[#9A42E4] to-[#FF4D80] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:opacity-95 transition-opacity">
            View Refund Policy
          </button>
        </article>

      </div>
    </section>
  );
}