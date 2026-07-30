import { JsonLd } from "@/components/seo/json-ld";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";
import SobaklavaDistributionView from "@/views/sobaklava-distribution/sobaklava-distribution-view";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "SO BAKLAVA",
  "SO BAKLAVA brings traditional Turkish desserts and bakery products to Bulgaria and Europe through Onur 2009's supply, import, logistics, retail, and distribution operations.",
  {
    path: "/sobaklava-distribution",
    keywords: [
      "SO BAKLAVA",
      "baklava",
      "Turkish desserts",
      "Seydioğlu Baklava",
      "Aslı Börek",
      "confectionery distribution",
      "premium desserts",
      "retail assortments",
    ],
    image: pageImages.sobaklavaHero,
    imageAlt: "SO BAKLAVA Turkish desserts in Europe",
  },
);

export default function SobaklavaDistributionPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "SO BAKLAVA",
          description:
            "SO BAKLAVA brings traditional Turkish desserts and bakery products to Bulgaria and Europe through Onur 2009's supply, import, logistics, retail, and distribution operations.",
          path: "/sobaklava-distribution",
          image: pageImages.sobaklavaHero,
        })}
      />
      <SobaklavaDistributionView />
    </>
  );
}
