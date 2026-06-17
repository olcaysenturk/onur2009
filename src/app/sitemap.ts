import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services",
  "/gallery",
  "/contact",
  "/logistics-transport",
  "/fresh-produce-trade",
  "/auto-truck-service",
  "/retail-fashion",
  "/sobaklava-distribution",
  "/bulgatex-consulting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
