import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/ar/policies", "/en/policies"],
      },
    ],
    sitemap: "https://beyond-gluten.vercel.app/sitemap.xml",
  };
}
