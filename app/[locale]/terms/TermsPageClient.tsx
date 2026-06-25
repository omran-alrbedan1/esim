'use client';
import { BookOpen, Globe2, Info } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function TermsPageClient() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('terms');
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'service-desc', label: t('sections.service-desc.label') },
    { id: 'user-resp', label: t('sections.user-resp.label') },
    { id: 'service-avail', label: t('sections.service-avail.label') },
    { id: 'company-info', label: t('sections.company-info.label') },
    { id: 'refund-policy', label: t('sections.refund-policy.label') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const yOffset = -headerHeight - 20;

      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <main className={`min-h-screen px-3 pb-16 pt-20 sm:px-6 lg:px-8 ${isRTL ? 'text-right' : ''}`}>
      <div className="mx-auto max-w-[1140px]">
        <section className="w-full rounded-[28px] sm:rounded-[40px] hero-bg p-5 sm:p-8 md:p-12 text-center text-white shadow-[0_20px_50px_rgba(125,71,165,0.15)] relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[1px] w-3 sm:w-4 bg-white/40" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80">
                {t('hero.date')}
              </span>
              <div className="h-[1px] w-3 sm:w-4 bg-white/40" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold tracking-tight leading-tight break-words">
              {t('hero.title')}
            </h1>

            <div className="my-3 sm:my-4 h-[3px] w-10 sm:w-12 rounded-full bg-gradient-to-r from-hero-accent to-brand-mid" />

            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-2xl px-2 break-words">
              {t('hero.description')}
            </p>

            <div className="mt-6 sm:mt-8 flex items-start gap-2 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md px-3 sm:px-5 py-2.5 sm:py-3 shadow-inner w-full">
              <div className="flex-shrink-0 mt-0.5 grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full bg-white text-primary">
                <Info size={isRTL ? 11 : 13} strokeWidth={3} />
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium leading-normal text-white/95 text-left">
                {t('hero.notice')}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-[0.35fr_0.65fr] items-start">
          <aside className="sticky hidden md:block top-20 sm:top-28 rounded-[20px] sm:rounded-[28px] bg-primary-surface border border-primary-border p-4 sm:p-6 shadow-[0_10px_35px_rgba(107,68,143,0.02)] lg:sticky lg:top-28 z-10">
            <div className="flex items-center gap-2 text-primary font-extrabold text-xs sm:text-sm border-b border-primary-line pb-3 sm:pb-4 mb-3 sm:mb-4">
              <BookOpen size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <h2>{t('contents')}</h2>
            </div>
            <nav className="flex flex-col gap-1 sm:gap-1.5">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`
                    rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 
                    text-[11px] sm:text-xs font-semibold 
                    transition-all duration-150 
                    touch-manipulation w-full text-left
                    ${activeSection === sec.id 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'text-text-muted hover:bg-primary-line hover:text-primary-dark'
                    }
                  `}
                  style={{ textAlign: isRTL ? 'right' : 'left' }}
                >
                  {sec.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="flex flex-col gap-4 sm:gap-6">
            <article 
              id="service-desc"
              className="relative rounded-[20px] sm:rounded-[28px] bg-surface p-5 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
            >
              <div className={`absolute top-4 sm:top-6 opacity-[0.06] text-primary-dark ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'}`}>
                <Globe2 size={28} className="sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-primary-dark break-words">{t('sections.service-desc.title')}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-text-muted break-words">
                {t('sections.service-desc.body')}
              </p>
            </article>

            <article 
              id="user-resp"
              className="rounded-[20px] sm:rounded-[28px] bg-surface ring-1 ring-brand-mid border border-primary-line p-5 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] scroll-mt-24 sm:scroll-mt-28"
            >
              <h3 className="text-sm sm:text-base font-bold text-primary-dark break-words">{t('sections.user-resp.title')}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-text-muted break-words">
                {t('sections.user-resp.body')}
              </p>
            </article>

            <article 
              id="service-avail"
              className="rounded-[20px] sm:rounded-[28px] bg-surface border border-primary-line p-5 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] scroll-mt-24 sm:scroll-mt-28"
            >
              <h3 className="text-sm sm:text-base font-bold text-primary-dark break-words">{t('sections.service-avail.title')}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-text-muted break-words">
                {t('sections.service-avail.body')}
              </p>
            </article>

            <article 
              id="company-info"
              className="rounded-[20px] sm:rounded-[28px] bg-surface border border-primary-line p-5 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] scroll-mt-24 sm:scroll-mt-28"
            >
              <h3 className="text-sm sm:text-base font-bold text-primary-dark break-words">{t('sections.company-info.title')}</h3>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-text-muted space-y-1">
                <p className="font-bold text-primary-dark">NET NOVA GROUP LTD</p>
                <p>Office 17861</p>
                <p>182-184 High Street North</p>
                <p>East Ham</p>
                <p>London</p>
                <p>United Kingdom</p>
                <p>E6 2JA</p>
                <p className="pt-1 sm:pt-2 break-all">
                  {t('sections.company-info.email')}: <span className="text-primary font-medium">support@netesim.net</span>
                </p>
                <p className="break-words">
                  {t('sections.company-info.phone')}: <span className="text-primary font-medium whitespace-nowrap">+44 7537 186668</span>
                </p>
              </div>
            </article>

            <article 
              id="refund-policy"
              className="rounded-[20px] sm:rounded-[28px] bg-gradient-to-r from-hero-dark to-primary-dark p-5 sm:p-6 md:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 shadow-md scroll-mt-24 sm:scroll-mt-28"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold break-words">{t('sections.refund-policy.title')}</h3>
                <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-white/80 leading-relaxed break-words">
                  {t('sections.refund-policy.body')}
                </p>
              </div>
              <button className="whitespace-nowrap rounded-full bg-gradient-to-r from-primary-mid to-hero-accent px-5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-sm hover:opacity-95 transition-opacity w-full sm:w-auto touch-manipulation">
                {t('sections.refund-policy.cta')}
              </button>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
