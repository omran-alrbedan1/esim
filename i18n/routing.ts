import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/contact': '/contact',
    '/policies': '/policies',
    '/privacy': '/privacy',
    '/packages': '/packages',
    '/device-support': '/device-support',
    '/how-to-install-esim': '/how-to-install-esim',
    '/become-partner': '/become-partner',
    '/terms': '/terms',
    '/terms-of-use': '/terms-of-use',
    '/refund': '/refund',
    '/cookie': '/cookie',
    '/sitemap': '/sitemap',
  }
});

export const {Link, redirect, usePathname, useRouter, getPathname} = 
  createNavigation(routing);
