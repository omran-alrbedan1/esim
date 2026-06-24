const BASE_URL = 'https://esim-wine.vercel.app';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Net eSIM',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
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
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Net eSIM',
  description: 'Travel eSIM packages, coverage information, and compatibility guidance.',
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: ['en', 'ar'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/en/packages?q={search_term_string}`,
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
