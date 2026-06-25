import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/metadata";

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/packages", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/become-partner", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/device-support", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/how-to-install-esim", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms-of-use", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/refund", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/cookie", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/policies", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/sitemap", priority: 0.3, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      const url = `${SITE_URL}/${locale}${page.path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}${page.path}`])
          ),
        },
      });
    }
  }

  return entries;
}
