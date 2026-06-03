const BASE_URL = 'https://beyond-gluten.vercel.app';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Beyond Gluten',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description: 'أول منصة متكاملة لمنتجات وخدمات الخالي من الجلوتين في العالم العربي',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+962780185759',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'English'],
    areaServed: 'JO'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amman',
    addressCountry: 'JO'
  },
  sameAs: [
    'https://facebook.com/beyondgluten',
    'https://instagram.com/beyondgluten',
    'https://twitter.com/beyondgluten',
    'https://linkedin.com/company/beyondgluten',
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Beyond Gluten',
  description: 'Beyond Gluten is the first platform in the Arab world for Gluten-Free products and services.',
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: ['en', 'ar'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` },
    { '@type': 'ListItem', position: 3, name: 'Contact Us', item: `${BASE_URL}/contact` },
    { '@type': 'ListItem', position: 4, name: 'Privacy Policy', item: `${BASE_URL}/policies` },
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': `${BASE_URL}/#business`,
  name: 'Beyond Gluten',
  image: `${BASE_URL}/og-image.jpg`,
  servesCuisine: 'Gluten-Free',
  priceRange: '$$',
  description: 'Gluten-Free products and services platform.',
  areaServed: ['JO', 'AE', 'SA', 'EG'],
  availableLanguage: ['English', 'Arabic'],
};

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Beyond Gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beyond Gluten is the first integrated platform in the Arab world for gluten-free products and services, offering safe shopping, a supportive community, and medically approved content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can benefit from Beyond Gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'People with celiac disease, gluten sensitivity, wheat allergy, or anyone choosing a gluten-free lifestyle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Beyond Gluten available in Arabic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Beyond Gluten is fully available in both English and Arabic, making it accessible across the Arab world.',
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
