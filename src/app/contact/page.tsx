import ContactView from "@/views/contact/contact-view";
import { createPageMetadata } from "@/lib/seo";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "Contact",
  "Contact ONUR2009 for logistics, trade, retail, and corporate service inquiries.",
  {
    path: "/contact",
    keywords: [
      "contact ONUR2009",
      "corporate contact",
      "logistics inquiry",
      "trade partnership",
      "business inquiry",
    ],
    image: pageImages.contactMap,
    imageAlt: "ONUR2009 contact and headquarters map",
  },
);

export default function ContactPage() {
  return <ContactView />;
}
