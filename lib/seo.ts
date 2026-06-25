import type { Metadata } from 'next';
import { getTranslations } from './getTranslations';
import { locales, type Locale } from './i18n';

export const SITE_URL =  'https://esim-wine.vercel.app';

const DEFAULT_OG_IMAGE = '/og-image.jpg';
const DEFAULT_OG_WIDTH = 1200;
const DEFAULT_OG_HEIGHT = 630;
const SITE_NAME = 'Net eSIM';

function localizedPath(locale: string, path: string) {
  return `/${locale}${path}`;
}

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function localeCode(locale: string) {
  return locale === 'ar' ? 'ar_AE' : 'en_US';
}

function alternates(locale: string, path: string) {
  return {
    canonical: absoluteUrl(localizedPath(locale, path)),
    languages: {
      'x-default': absoluteUrl(localizedPath('en', path)),
      ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(localizedPath(l, path))])),
    },
  };
}

export function buildMetadata({
  title,
  description,
  path = '',
  locale = 'en',
  image,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: string;
  image?: string;
  keywords?: string | string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(localizedPath(locale, path));
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const imageUrl = absoluteUrl(ogImage);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: alternates(locale, path),
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: localeCode(locale),
      type: 'website',
      images: [{ url: imageUrl, width: DEFAULT_OG_WIDTH, height: DEFAULT_OG_HEIGHT, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function getRootLayoutMetadata({ locale }: { locale: Locale }): Promise<Metadata> {
  const t = await getTranslations(locale, 'layout');
  const meta = t.metadata;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: meta.template,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Net eSIM' }],
    creator: 'Net eSIM',
    publisher: 'Net eSIM',
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        'x-default': `${SITE_URL}/en`,
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
      },
    },
    robots: { index: true, follow: true },
    icons: { icon: '/favicon.ico' },
    openGraph: {
      type: 'website',
      siteName: meta.title,
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${locale}`,
      locale: localeCode(locale),
      alternateLocale: locales.filter((l) => l !== locale).map(localeCode),
      images: [{
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        secureUrl: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: DEFAULT_OG_WIDTH,
        height: DEFAULT_OG_HEIGHT,
        alt: `${SITE_NAME} travel eSIM connectivity`,
        type: 'image/jpeg',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
    },
  };
}

export async function getPageMetadata({
  locale,
  path,
  page,
  title,
  description,
  keywords,
  image,
}: {
  locale: string;
  path: string;
  page?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}): Promise<Metadata> {
  let resolvedTitle = title;
  let resolvedDescription = description;
  let resolvedKeywords = keywords;
  let resolvedImage = image;

  if (page) {
    const t = await getTranslations(locale, page);
    const { metadata } = t;
    console.log(metadata)
   metadata.title;
    resolvedDescription = resolvedDescription || metadata.description;
    resolvedKeywords = resolvedKeywords || metadata.keywords;
    resolvedImage = resolvedImage || metadata.ogImage || DEFAULT_OG_IMAGE;
  }

  resolvedImage = resolvedImage || DEFAULT_OG_IMAGE;

  return buildMetadata({
    title: resolvedTitle || '',
    description: resolvedDescription || '',
    path,
    locale,
    image: resolvedImage,
    keywords: resolvedKeywords,
  });
}
