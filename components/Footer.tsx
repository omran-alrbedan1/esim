import { useTranslations, useLocale } from 'next-intl';
import { Globe2, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import BecomePartnerCta from './BecomePartnerCta';
import { IMAGES } from '@/constants/images';

const socialLinks = [
  { href: 'https://facebook.com/netesim', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://instagram.com/netesim', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://twitter.com/netesim', icon: FaXTwitter, label: 'X' },
  { href: 'https://linkedin.com/company/netesim', icon: FaLinkedin, label: 'LinkedIn' },
];

export default function Footer() {
  const t = useTranslations('layout');
  const isRTL = useLocale() === 'ar';
  return (
    <footer className="relative mt-32 rounded-t-[34px] bg-[linear-gradient(180deg,var(--footer-start)_0%,var(--hero-darker)_100%)] px-0 pb-6 pt-9 text-white/85">
      <BecomePartnerCta/>
      <div className={`mx-auto  flex w-[min(1180px,calc(100%-36px))] flex-col gap-8 pt-28 sm:pt-40 md:flex-row md:flex-wrap md:justify-between md:gap-6 text-center mt-96 md:mt-0 ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
        <div className="flex w-full flex-col gap-3 md:flex-1 md:basis-[240px] items-center md:items-start">
          <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-white" aria-label="Net eSIM home">
            <Image
              src={IMAGES.logo2}
              alt='logo'
              width={162}
              height={132}
            />
          </Link>
          <p className="max-w-[310px] leading-7 text-white/72">
            {t('footer.tagline')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/25"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-2.5 md:flex-1 md:basis-[180px] items-center md:items-start">
          <h4 className="mb-1 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-base font-bold text-white">{t('footer.company')}</h4>
          <Link href="/about">{t('footer.about')}</Link>
          <Link href="/become-partner">{t('footer.becomePartner')}</Link>
          <Link href="/packages">{t('footer.plans')}</Link>
          <Link href="/contact">{t('footer.support')}</Link>
        </div>

        <div className="flex w-full flex-col gap-2.5 md:flex-1 md:basis-[180px] items-center md:items-start">
          <h4 className="mb-1 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-base font-bold text-white">{t('footer.legal')}</h4>
          <Link href="/privacy">{t('footer.privacy')}</Link>
          <Link href="/terms">{t('footer.terms')}</Link>
          <Link href="/refund">{t('footer.refund')}</Link>
        </div>

        <div className="flex w-full flex-col gap-2.5 md:flex-1 md:basis-[180px] items-center md:items-start">
          <h4 className="mb-1 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-base font-bold text-white">{t('footer.contact')}</h4>
          <span className="inline-flex items-center gap-2.5">
            <Phone size={14} /> +971 50 123 4567
          </span>
          <span className="inline-flex items-center gap-2.5">
            <Mail size={14} /> hello@netesim.com
          </span>
        </div>
      </div>

      <div className={`mx-auto mt-6 flex w-[min(1180px,calc(100%-36px))] flex-col items-center gap-4 border-t border-white/12 pt-5 text-center text-white/60 sm:flex-row sm:justify-between ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
        <span>{t('footer.copyright')}</span>
        <div className="inline-flex flex-wrap items-center justify-center gap-2">
          <span>{t('footer.poweredBy')}</span>
          <Link href={'https://futxtech.com/en/home'}>
            <Image
              src='/images/futurex-logo.svg'
              alt='future x logo'
              priority
              width={113}
              height={32}
              className='h-8'
            />
          </Link> 
        </div>
      </div>
    </footer>
  );
}