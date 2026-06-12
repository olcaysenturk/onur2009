import GalleryView from "@/views/gallery/gallery-view";
import { createPageMetadata } from "@/lib/seo";
import { galleryImages } from "@/lib/assets";

export const metadata = createPageMetadata(
  "Gallery",
  "Explore ONUR2009 operations across logistics, retail, service centers, and trade.",
  {
    path: "/gallery",
    keywords: [
      "ONUR2009 gallery",
      "operations portfolio",
      "logistics fleet",
      "retail stores",
      "service centers",
    ],
    image: galleryImages[0],
    imageAlt: "ONUR2009 operations gallery",
  },
);

export default function GalleryPage() {
  return <GalleryView />;
}
