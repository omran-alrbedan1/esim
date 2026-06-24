'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { IMAGES } from '@/constants/images';

const navItems = [
  ['/', 'home'],
  ['/contact', 'contact'],
  ['/about', 'about'],
  ['/how-to-install-esim', 'install'],
] as const;

export default function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';
  const isHomeScrolled = isHome && scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  
  const linkClass = (href: string) =>
    `relative rounded-full px-2 py-1 text-[15px] font-bold transition ${
      isActive(href)
        ? isHome
          ? 'text-hero-highlight'
          : 'text-primary'
        : isHome
          ? 'text-white hover:text-hero-highlight'
          : 'text-text-primary hover:text-primary'
    }`;
  
  const mobileLinkClass = (href: string) =>
    `rounded-2xl px-4 py-3 text-sm font-bold transition ${
      isActive(href) ? 'bg-primary/10 text-primary' : 'text-primary-ink hover:bg-primary/8'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isHome && !isHomeScrolled ? 'px-4 pt-5 sm:px-6 lg:px-8' : 'px-0 pt-0'
      }`}
    >
      <div
        className={`mx-auto flex w-full items-center justify-between gap-4 px-3 transition-all duration-300 ${
          isHome && !isHomeScrolled ? 'max-w-[1180px]' : 'max-w-none'
        } ${
          isHome
            ? isHomeScrolled
              ? 'min-h-[66px] text-white   rounded-none border-b border-white/14 bg-hero-darker/88 py-2 shadow-[0_14px_34px_rgba(12,3,22,0.22)] backdrop-blur-xl sm:min-h-[78px] sm:px-8 lg:px-10'
              : 'min-h-[62px] text-white  rounded-full border border-white/22 bg-hero-darker/38 py-2 shadow-[0_18px_44px_rgba(12,3,22,0.22)] backdrop-blur-xl sm:min-h-[76px]'
            : scrolled
              ? 'min-h-[66px] rounded-none border-b border-primary-line bg-white/92 py-2 shadow-sm backdrop-blur-xl sm:min-h-[78px] sm:px-8 lg:px-10'
              : 'min-h-[72px] rounded-none border-0 bg-white/80 py-3 shadow-none backdrop-blur-sm sm:min-h-[104px]'
        }`}
      >
        <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="Net eSIM home">
          <Image
            src={isHome ? IMAGES.logo2 : IMAGES.logo1}
            alt="Net eSIM"
            width={160}
            height={58}
            className={`${isHome ? 'h-8 sm:h-11' : 'h-10 sm:h-14'} w-auto object-contain`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map(([href, key], index) => (
            <div className="flex items-center gap-5" key={href}>
              {index > 0 && <span className={isHome ? 'text-white/88' : 'text-text-primary'}>•</span>}
              <Link href={href} className={linkClass(href)}>
                {t(key)}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden min-[420px]:block">
            <LanguageSwitcher variant={isHome ? 'dark' : 'light'} />
          </div>
          <Link
            href="/packages"
            className={`hidden button button-dark min-h-11 items-center justify-center rounded-full px-4 text-sm font-extrabold text-white shadow-[0_8px_18px_rgba(45,13,67,0.25)] transition active:scale-[0.98] sm:inline-flex ${
              isHome
                ? 'bg-[linear-gradient(135deg,var(--primary-mid),var(--hero-accent))] hover:brightness-110'
                : 'bg-primary-deep hover:bg-primary-dark'
            }`}
          >
            {t('packages')}
          </Link>
          <button
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              isHome ? 'bg-white/12 text-white' : 'bg-primary/10 text-primary-deep'
            }`}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-3 flex w-[calc(100%-24px)] max-w-[1180px] flex-col gap-2 rounded-3xl border border-white/70 bg-white/95 p-4 shadow-[0_18px_36px_rgba(79,39,116,0.14)] backdrop-blur-xl lg:hidden">
          {navItems.map(([href, key]) => (
            <Link href={href} className={mobileLinkClass(href)} key={href} onClick={() => setOpen(false)}>
              {t(key)}
            </Link>
          ))}
          <Link
            href="/packages"
            className="mt-2 inline-flex min-h-10 items-center justify-center rounded-full bg-primary-deep px-4 text-sm font-bold text-white"
            onClick={() => setOpen(false)}
          >
            {t('packages')}
          </Link>
        </nav>
      )}
    </header>
  );
}