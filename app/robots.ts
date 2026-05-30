import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://rovana-git-main-omran-alrbedan1s-projects.vercel.app/sitemap.xml",
  };
}
