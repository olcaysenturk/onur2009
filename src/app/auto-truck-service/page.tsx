import { JsonLd } from "@/components/seo/json-ld";
import { pageImages } from "@/lib/pages";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";
import AutoTruckServiceView from "@/views/auto-truck-service/auto-truck-service-view";

export const metadata = createPageMetadata(
  "Auto & Truck Service",
  "Commercial vehicle service, diagnostics, preventative maintenance, and parts support for fleet uptime.",
  {
    path: "/auto-truck-service",
    keywords: [
      "auto truck service",
      "fleet maintenance",
      "truck repair",
      "vehicle diagnostics",
      "commercial vehicle service",
    ],
    image: pageImages.autoHero,
    imageAlt: "Auto and truck service division",
  },
);

export default function AutoTruckServicePage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Auto & Truck Service",
          description:
            "Commercial vehicle service, diagnostics, preventative maintenance, and parts support for fleet uptime.",
          path: "/auto-truck-service",
          image: pageImages.autoHero,
        })}
      />
      <AutoTruckServiceView />
    </>
  );
}
