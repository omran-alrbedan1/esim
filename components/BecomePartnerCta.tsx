import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { HOME_IMAGES } from '@/constants/images';

export default function BecomePartnerCta() {
  const t = useTranslations('home');
  const isRTL = useLocale() === 'ar';
  const Arrow = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section 
      className="absolute left-1/2 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 flex flex-col items-center gap-6 rounded-[32px] bg-gradient-to-br from-[#F6F0FC] to-[#EFE4FA] p-6 shadow-[0_12px_40px_rgba(122,57,179,0.06)] md:-top-1/3 md:w-full md:flex-row md:gap-12 md:p-12"
      aria-labelledby="partner-cta-title"
    >
      {/* 3D Avatars Image Container */}
      <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40 md:h-48 md:w-80" aria-hidden="true">
        <Image 
          src={HOME_IMAGES.becomePartner} 
          alt="" 
          fill 
          className="object-contain drop-shadow-[0_20px_30px_rgba(122,57,179,0.15)]"
          priority
        />
      </div>

      {/* Content Block */}
      <div className="flex flex-col gap-3 text-center md:text-left rtl:md:text-right">
        <h2 
          id="partner-cta-title" 
          className="text-xl font-bold tracking-tight text-[#11051E] sm:text-2xl md:text-[26px] md:leading-tight"
        >
          {t('becomePartner.title')}
        </h2>
        
        <p className="max-w-2xl text-sm leading-relaxed text-[#544665] sm:text-base">
          {t('becomePartner.description')}
        </p>

        {/* Unified Dual-Action Capsule Button (Matches image_7da448.png) */}
        <div className="mt-4 inline-flex items-center self-center rounded-full bg-white p-1 shadow-[0_8px_24px_rgba(57,11,89,0.06)] md:self-start">
          <Link 
            href="/become-partner" 
            className='button button-dark'
          >
            {t('becomePartner.primary')}
          </Link>
        </div>
      </div>
    </section>
  );
}