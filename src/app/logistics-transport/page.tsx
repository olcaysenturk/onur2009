import { JsonLd } from "@/components/seo/json-ld";
import { Header } from "@/components/layout/header";
import { LogisticsTransportPageContent } from "@/components/pages/logistics-transport-page";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "Logistics & Transport",
  "Precision freight forwarding, road transport, customs clearance, and fleet operations for enterprise logistics.",
  {
    path: "/logistics-transport",
    keywords: [
      "logistics and transport",
      "freight forwarding",
      "customs clearance",
      "fleet operations",
      "road transport",
    ],
    image: pageImages.logisticsHero,
    imageAlt: "Logistics and transport operations",
  },
);

export default function LogisticsTransportPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Logistics & Transport",
          description:
            "Precision freight forwarding, road transport, customs clearance, and fleet operations for enterprise logistics.",
          path: "/logistics-transport",
          image: pageImages.logisticsHero,
        })}
      />
      <Header />
      <main className="pt-16 md:pt-20">
        <LogisticsTransportPageContent />
      </main>
    </>
  );
}
