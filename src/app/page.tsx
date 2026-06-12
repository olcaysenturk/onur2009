import HomeView from "@/views/home/home-view";
import { createPageMetadata, siteConfig } from "@/lib/seo";
import { images } from "@/lib/site";

export const metadata = createPageMetadata(siteConfig.title, siteConfig.description, {
  path: "/",
  keywords: [
    "ONUR2009",
    "global trade",
    "logistics",
    "fresh produce",
    "retail distribution",
    "consulting",
  ],
  image: images.hero,
  imageAlt: "ONUR2009 global operations",
});

export default function HomePage() {
  return <HomeView />;
}
