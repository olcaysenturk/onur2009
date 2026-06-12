import ServicesView from "@/views/services/services-view";
import { createPageMetadata } from "@/lib/seo";
import { images } from "@/lib/site";

export const metadata = createPageMetadata(
  "Services",
  "Explore ONUR2009 business divisions across logistics, fresh produce, service, retail, confectionery, and consulting.",
  {
    path: "/services",
    keywords: [
      "ONUR2009 services",
      "business divisions",
      "logistics services",
      "fresh produce trade",
      "retail fashion",
      "consulting",
    ],
    image: images.hero,
    imageAlt: "ONUR2009 business divisions",
  },
);

export default function ServicesPage() {
  return <ServicesView />;
}
