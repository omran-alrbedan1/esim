import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}: {requestLocale: Promise<string | undefined>}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const [
    common,
    navigation,
    home,
    about,
    contact,
    footer,
    layout,
    deviceSupport,
    terms,
  ] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/navigation.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/about.json`),
    import(`../messages/${locale}/contact.json`),
    import(`../messages/${locale}/footer.json`),
    import(`../messages/${locale}/layout.json`),
    import(`../messages/${locale}/deviceSupport.json`),
    import(`../messages/${locale}/terms.json`),
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      navigation: navigation.default,
      home: home.default,
      about: about.default,
      contact: contact.default,
      footer: footer.default,
      layout:layout.default,
      deviceSupport: deviceSupport.default,
      terms: terms.default,
    },
    timeZone: 'Asia/Amman'
  };
});
