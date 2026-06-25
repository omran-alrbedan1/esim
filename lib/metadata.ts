import type { Metadata } from 'next';
import { getTranslations } from './getTranslations';
import { locales, type Locale } from './i18n';

export const SITE_URL ="https://esim-wine.vercel.app"

const DEFAULT_OG_IMAGE = '/og-image.jpg';
const DEFAULT_OG_WIDTH = 1200;
const DEFAULT_OG_HEIGHT = 630;
const SITE_NAME = 'Net eSIM';

const PAGE_OG_IMAGES: Record<string, string> = {
  home: DEFAULT_OG_IMAGE,
  about: DEFAULT_OG_IMAGE,
  contact: DEFAULT_OG_IMAGE,
  deviceSupport: DEFAULT_OG_IMAGE,
};

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
}export async function getRootLayoutMetadata({ locale }: { locale: Locale }): Promise<Metadata> {
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
    const { seo } = t;
    resolvedTitle = resolvedTitle || seo.title;
    resolvedDescription = resolvedDescription || seo.description;
    resolvedKeywords = resolvedKeywords || seo.keywords;
    resolvedImage = resolvedImage || seo.ogImage || PAGE_OG_IMAGES[page] || DEFAULT_OG_IMAGE;
  }

  resolvedImage = resolvedImage || DEFAULT_OG_IMAGE;

  const url = absoluteUrl(localizedPath(locale, path));
  const imageUrl = absoluteUrl(resolvedImage);
  const imageAlt = `${SITE_NAME} travel eSIM connectivity`;

  return {
    metadataBase: new URL(SITE_URL),
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: resolvedKeywords,
    alternates: alternates(locale, path),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      locale: localeCode(locale),
      alternateLocale: locales.filter((l) => l !== locale).map(localeCode),
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: DEFAULT_OG_WIDTH,
          height: DEFAULT_OG_HEIGHT,
          alt: imageAlt,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}
