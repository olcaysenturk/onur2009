import AboutView from "@/views/about/about-view";
import { createPageMetadata } from "@/lib/seo";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "About Us",
  "Learn about ONUR2009's global trade, logistics, retail, and advisory operations.",
  {
    path: "/about",
    keywords: [
      "ONUR2009 about",
      "corporate profile",
      "global operations",
      "trade group",
      "logistics and retail",
    ],
    image: pageImages.aboutHero,
    imageAlt: "ONUR2009 corporate profile",
  },
);

export default function AboutPage() {
  return <AboutView />;
}
