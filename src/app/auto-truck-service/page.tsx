import { JsonLd } from "@/components/seo/json-ld";
import { DivisionPageTemplate } from "@/components/pages/division-page-template";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { pageImages } from "@/lib/pages";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";

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
      <Header />
      <main className="pt-16 md:pt-20">
        <DivisionPageTemplate slug="auto-truck-service" />
      </main>
      <Footer />
    </>
  );
}
