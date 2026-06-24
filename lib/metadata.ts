import type { Metadata } from 'next';
import { getTranslations } from './getTranslations';
import { locales, type Locale } from './i18n';

const BASE_URL = 'https://esim-wine.vercel.app';

const PAGE_OG_IMAGES: Record<string, string> = {
  home: '/og-image.jpg',  
  about: '/og-image.jpg',
  contact: '/og-image.jpg',
};

export async function getRootLayoutMetadata({ locale }: { locale: Locale }): Promise<Metadata> {
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: 'Net eSIM',
      template: '%s | Net eSIM',
    },
    description: 'Instant travel eSIM packages, device support, and global connectivity before you fly.',
    authors: [{ name: 'Net eSIM' }],
    creator: 'Net eSIM',
    publisher: 'Net eSIM',
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'x-default': `${BASE_URL}/en`,
        en: `${BASE_URL}/en`,
        ar: `${BASE_URL}/ar`,
      },
    },
    robots: { index: true, follow: true },
    icons: { icon: '/favicon.ico' },
    openGraph: {
      type: 'website',
      siteName: 'Net eSIM',
      title: 'Net eSIM',
      description: 'Instant travel eSIM packages, device support, and global connectivity before you fly.',
      url: `${BASE_URL}/${locale}`,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Net eSIM',
      description: 'Instant travel eSIM packages, device support, and global connectivity before you fly.',
      images: [`${BASE_URL}/og-image.jpg`],
    },
  };
}

export async function getPageMetadata({
  locale,
  page,
  path,
}: {
  locale: string;
  page: string;
  path: string;
}): Promise<Metadata> {
  const t = await getTranslations(locale, page);
  const { seo } = t;

  const url = `${BASE_URL}/${locale}${path}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
      languages: {
        'x-default': `${BASE_URL}/en${path}`,
        ...Object.fromEntries(locales.map((l) => [l, `${BASE_URL}/${l}${path}`])),
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Net eSIM',
      title: seo.ogTitle,
      description: seo.ogDescription,
      url,
      images: [{ url: `${BASE_URL}${seo.ogImage || PAGE_OG_IMAGES[page] || '/og-image.jpg'}`, width: 1200, height: 630 }],
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle,
      description: seo.twitterDescription,
      images: [`${BASE_URL}${seo.ogImage || PAGE_OG_IMAGES[page] || '/og-image.jpg'}`],
    },
  };
}
