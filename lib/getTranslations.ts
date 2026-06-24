import type { Locale } from "./i18n";

export async function getTranslations(locale: string, page: string) {
  const messages = await import(`@/messages/${locale}/${page}.json`);
  return messages.default;
}
