import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/site-content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await siteUrl();

  // The About page follows the home page, as it does in the menu.
  const routes = siteRoutes.flatMap((route) =>
    route.href === "/" ? [route, { href: "/about", label: "אודות" }] : [route],
  );

  return routes.map((route, index) => ({
    url: `${base}${route.href}`,
    changeFrequency: "monthly",
    priority: route.href === "/" ? 1 : index === routes.length - 1 ? 0.7 : 0.8,
  }));
}
