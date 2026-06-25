import enAbout from '@/messages/en/about.json';
import enBecomePartner from '@/messages/en/becomePartner.json';
import enCommon from '@/messages/en/common.json';
import enContact from '@/messages/en/contact.json';
import enDeviceSupport from '@/messages/en/deviceSupport.json';
import enFooter from '@/messages/en/footer.json';
import enHome from '@/messages/en/home.json';
import enHowToInstallEsim from '@/messages/en/howToInstallEsim.json';
import enLayout from '@/messages/en/layout.json';
import enNavigation from '@/messages/en/navigation.json';
import enPackages from '@/messages/en/packages.json';
import enPolicies from '@/messages/en/policies.json';
import enPrivacy from '@/messages/en/privacy.json';
import enRefund from '@/messages/en/refund.json';
import enSitemap from '@/messages/en/sitemap.json';
import enTerms from '@/messages/en/terms.json';
import arAbout from '@/messages/ar/about.json';
import arBecomePartner from '@/messages/ar/becomePartner.json';
import arCommon from '@/messages/ar/common.json';
import arContact from '@/messages/ar/contact.json';
import arDeviceSupport from '@/messages/ar/deviceSupport.json';
import arFooter from '@/messages/ar/footer.json';
import arHome from '@/messages/ar/home.json';
import arHowToInstallEsim from '@/messages/ar/howToInstallEsim.json';
import arLayout from '@/messages/ar/layout.json';
import arNavigation from '@/messages/ar/navigation.json';
import arPackages from '@/messages/ar/packages.json';
import arPolicies from '@/messages/ar/policies.json';
import arPrivacy from '@/messages/ar/privacy.json';
import arRefund from '@/messages/ar/refund.json';
import arSitemap from '@/messages/ar/sitemap.json';
import arTerms from '@/messages/ar/terms.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allTranslations: Record<string, Record<string, any>> = {
  'en/about': enAbout,
  'en/becomePartner': enBecomePartner,
  'en/common': enCommon,
  'en/contact': enContact,
  'en/deviceSupport': enDeviceSupport,
  'en/footer': enFooter,
  'en/home': enHome,
  'en/howToInstallEsim': enHowToInstallEsim,
  'en/layout': enLayout,
  'en/navigation': enNavigation,
  'en/packages': enPackages,
  'en/policies': enPolicies,
  'en/privacy': enPrivacy,
  'en/refund': enRefund,
  'en/sitemap': enSitemap,
  'en/terms': enTerms,
  'ar/about': arAbout,
  'ar/becomePartner': arBecomePartner,
  'ar/common': arCommon,
  'ar/contact': arContact,
  'ar/deviceSupport': arDeviceSupport,
  'ar/footer': arFooter,
  'ar/home': arHome,
  'ar/howToInstallEsim': arHowToInstallEsim,
  'ar/layout': arLayout,
  'ar/navigation': arNavigation,
  'ar/packages': arPackages,
  'ar/policies': arPolicies,
  'ar/privacy': arPrivacy,
  'ar/refund': arRefund,
  'ar/sitemap': arSitemap,
  'ar/terms': arTerms,
};

export async function getTranslations(locale: string, page: string) {
  const key = `${locale}/${page}`;
  const messages = allTranslations[key];
  if (!messages) {
    throw new Error(`Translation not found for ${key}`);
  }
  return messages;
}
