import enAbout from '@/messages/en/about.json';
import enContact from '@/messages/en/contact.json';
import enDeviceSupport from '@/messages/en/deviceSupport.json';
import enHome from '@/messages/en/home.json';
import enTerms from '@/messages/en/terms.json';
import enLayout from '@/messages/en/layout.json';
import enNavigation from '@/messages/en/navigation.json';
import enCommon from '@/messages/en/common.json';
import enFooter from '@/messages/en/footer.json';
import arAbout from '@/messages/ar/about.json';
import arContact from '@/messages/ar/contact.json';
import arDeviceSupport from '@/messages/ar/deviceSupport.json';
import arHome from '@/messages/ar/home.json';
import arTerms from '@/messages/ar/terms.json';
import arLayout from '@/messages/ar/layout.json';
import arNavigation from '@/messages/ar/navigation.json';
import arCommon from '@/messages/ar/common.json';
import arFooter from '@/messages/ar/footer.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allTranslations: Record<string, Record<string, any>> = {
  'en/about': enAbout,
  'en/contact': enContact,
  'en/deviceSupport': enDeviceSupport,
  'en/home': enHome,
  'en/terms': enTerms,
  'en/layout': enLayout,
  'en/navigation': enNavigation,
  'en/common': enCommon,
  'en/footer': enFooter,
  'ar/about': arAbout,
  'ar/contact': arContact,
  'ar/deviceSupport': arDeviceSupport,
  'ar/home': arHome,
  'ar/terms': arTerms,
  'ar/layout': arLayout,
  'ar/navigation': arNavigation,
  'ar/common': arCommon,
  'ar/footer': arFooter,
};

export async function getTranslations(locale: string, page: string) {
  const key = `${locale}/${page}`;
  const messages = allTranslations[key];
  if (!messages) {
    throw new Error(`Translation not found for ${key}`);
  }
  return messages;
}
