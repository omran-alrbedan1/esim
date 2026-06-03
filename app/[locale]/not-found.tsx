'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const locale = useLocale();

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fef6f0]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#f5d6b8]/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#e8c4a0]/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-9xl font-extrabold text-[#cc7a3a] mb-4">404</h1>

        <div className="w-20 h-1 bg-[#cc7a3a] rounded-full mx-auto mb-8" />

        <p className="text-2xl text-[#5a4a3a] mb-8 font-semibold">
          {locale === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </p>

        <p className="text-lg text-[#8a7a6a] mb-10 max-w-md">
          {locale === 'ar'
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : 'Sorry, the page you are looking for does not exist or has been moved.'}
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#cc7a3a] text-white font-semibold text-lg shadow-lg hover:bg-[#b86a2a] transition-colors"
        >
          {locale === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}
        </Link>
      </div>
    </div>
  );
}
