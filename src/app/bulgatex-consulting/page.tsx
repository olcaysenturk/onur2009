import { JsonLd } from "@/components/seo/json-ld";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";
import BulgatexConsultingView from "@/views/bulgatex-consulting/bulgatex-consulting-view";
import { pageImages } from "@/lib/pages";

export const metadata = createPageMetadata(
  "Bulgatex Consulting",
  "Strategic market entry, textile trade, partnership, and import-export consulting across global markets.",
  {
    path: "/bulgatex-consulting",
    keywords: [
      "Bulgatex Consulting",
      "market entry",
      "textile trade",
      "import export consulting",
      "strategic advisory",
    ],
    image: pageImages.bulgatexHero,
    imageAlt: "Bulgatex Consulting strategic advisory",
  },
);

export default function BulgatexConsultingPage() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Bulgatex Consulting",
          description:
            "Strategic market entry, textile trade, partnership, and import-export consulting across global markets.",
          path: "/bulgatex-consulting",
          image: pageImages.bulgatexHero,
        })}
      />
      <BulgatexConsultingView />
    </>
  );
}
