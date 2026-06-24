import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import ContactClient from './ContactClient';


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "contact", path: "/contact" });
}

export default function ContactPage() {
  return <ContactClient />;
}
