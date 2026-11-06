import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/site-content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await siteUrl();

  return siteRoutes.map((route, index) => ({
    url: `${base}${route.href}`,
    changeFrequency: "monthly",
    priority: route.href === "/" ? 1 : index === siteRoutes.length - 1 ? 0.7 : 0.8,
  }));
}
