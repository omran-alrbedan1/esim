'use client';

import { Globe2 } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isDark = variant === 'dark';

  return (
    <button
      className={`inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition ${
        isDark
          ? 'border-white/22 bg-white/12 text-white hover:bg-white/18'
          : 'border-[#6e3cad]/10 bg-[#6e3cad]/6 text-[#2c064c] hover:bg-[#6e3cad]/12'
      }`}
      onClick={() => router.replace(pathname, { locale: locale === 'en' ? 'ar' : 'en' })}
      aria-label="Change language"
    >
      <Globe2 size={14} />
      <span>{locale === 'en' ? 'English' : 'العربية'}</span>
    </button>
  );
}
