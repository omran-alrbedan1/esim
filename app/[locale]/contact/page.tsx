import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";
import ContactClient from './ContactClient';
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return getPageMetadata({ locale, page: "contact", path: "/contact" });
}

export default function ContactPage() {
  return <ContactClient />;
}
