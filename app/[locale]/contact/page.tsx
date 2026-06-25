import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import ContactClient from './ContactClient';
import { type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: "contact", path: "/contact" });
}

export default function ContactPage() {
  return <ContactClient />;
}
