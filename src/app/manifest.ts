import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.title,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f9f9fc",
    theme_color: "#273b78",
  };
}
