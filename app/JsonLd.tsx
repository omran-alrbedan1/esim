import { SITE_URL } from '@/lib/metadata';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Net eSIM',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: 'Digital travel eSIM packages for global mobile connectivity.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971501234567',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'English'],
    areaServed: 'Worldwide',
  },
  sameAs: [
    'https://facebook.com/netesim',
    'https://instagram.com/netesim',
    'https://twitter.com/netesim',
    'https://linkedin.com/company/netesim',
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Net eSIM',
  description: 'Travel eSIM packages, coverage information, and compatibility guidance.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: ['en', 'ar'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/en/packages?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
