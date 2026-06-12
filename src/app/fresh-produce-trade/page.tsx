import { JsonLd } from "@/components/seo/json-ld";
import { FreshProducePage } from "@/components/pages/fresh-produce-page";
import { Header } from "@/components/layout/header";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "Fresh Produce Trade",
  "Premium citrus, stone fruits, and fresh vegetables with cold-chain quality control and international distribution.",
  {
    path: "/fresh-produce-trade",
    keywords: [
      "fresh produce trade",
      "citrus export",
      "cold chain",
      "international produce distribution",
      "quality control",
    ],
    image: pageImages.freshHero,
    imageAlt: "Fresh produce trade and cold chain logistics",
  },
);

export default function FreshProduceTradePage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Fresh Produce Trade",
          description:
            "Premium citrus, stone fruits, and fresh vegetables with cold-chain quality control and international distribution.",
          path: "/fresh-produce-trade",
          image: pageImages.freshHero,
        })}
      />
      <Header />
      <main className="pt-16 md:pt-20">
        <FreshProducePage />
      </main>
    </>
  );
}
