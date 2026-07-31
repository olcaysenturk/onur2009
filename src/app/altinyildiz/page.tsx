import { JsonLd } from "@/components/seo/json-ld";
import RetailFashionView from "@/views/retail-fashion/retail-fashion-view";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "Altinyildiz Classics Bulgaria",
  "Premium classic menswear retail distribution and brand management across Bulgaria.",
  {
    path: "/altinyildiz",
    keywords: [
      "Altinyildiz Classics Bulgaria",
      "menswear retail",
      "fashion distribution",
      "Bulgarian retail",
      "brand management",
    ],
    image: pageImages.retailHero,
    imageAlt: "Altinyildiz Classics Bulgaria menswear retail",
  },
);

export default function AltinyildizPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Altinyildiz Classics Bulgaria",
          description:
            "Premium classic menswear retail distribution and brand management across Bulgaria.",
          path: "/altinyildiz",
          image: pageImages.retailHero,
        })}
      />
      <RetailFashionView />
    </>
  );
}
