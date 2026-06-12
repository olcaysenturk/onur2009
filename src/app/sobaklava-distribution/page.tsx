import { JsonLd } from "@/components/seo/json-ld";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";
import SobaklavaDistributionView from "@/views/sobaklava-distribution/sobaklava-distribution-view";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "SoBaklava Distribution",
  "Premium baklava portfolio, retail assortments, and confectionery distribution for premium retail and hospitality networks.",
  {
    path: "/sobaklava-distribution",
    keywords: [
      "SoBaklava Distribution",
      "baklava",
      "confectionery distribution",
      "premium desserts",
      "retail assortments",
    ],
    image: pageImages.sobaklavaHero,
    imageAlt: "SoBaklava premium baklava distribution",
  },
);

export default function SobaklavaDistributionPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "SoBaklava Distribution",
          description:
            "Premium baklava portfolio, retail assortments, and confectionery distribution for premium retail and hospitality networks.",
          path: "/sobaklava-distribution",
          image: pageImages.sobaklavaHero,
        })}
      />
      <SobaklavaDistributionView />
    </>
  );
}
