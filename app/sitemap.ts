import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];

  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/policies",
  ];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      routes.push({
        url: `${locale}${page === "/" ? "" : page}`,
        lastModified: new Date(),
        changeFrequency: page === "/" ? "weekly" : "monthly",
        priority: page === "/" ? 1 : 0.8,
      });
    }
  }

  return routes;
}
