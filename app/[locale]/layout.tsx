import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import "./globals.css";
import { getRootLayoutMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { JsonLd } from "@/components/seo/JsonLd";
import { Cta } from "@/components/Cta";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getRootLayoutMetadata({ locale });
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Cta />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
