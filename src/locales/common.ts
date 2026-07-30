import type { Language } from "@/types/i18n";
import type { Translation } from "./types";

export const nav = {
  en: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  tr: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Hizmetler", href: "/services" },
    { label: "Galeri", href: "/gallery" },
    { label: "İletişim", href: "/contact" },
  ],
  bg: [
    { label: "Начало", href: "/" },
    { label: "За нас", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Галерия", href: "/gallery" },
    { label: "Контакт", href: "/contact" },
  ],
}

export const divisionEn = {
  "logistics-transport": {
    title: "Logistics & Transport",
    eyebrow: "Global Logistics",
    headline: "Precision Transport, Global Scale.",
    description: "A controlled logistics network for freight forwarding, road transport, customs clearance, and sustainable fleet operations.",
    introTitle: "Architects of the Supply Chain",
    introBody: "ONUR2009 coordinates complex movement across markets with disciplined planning, brokerage support, and fleet visibility for enterprise delivery.",
    cardsTitle: "Core Operations",
    cardsIntro: "High-stakes logistics services organized for reliability, speed, and regulatory confidence.",
    cards: [
      { title: "Road Transport", description: "Dedicated road operations with route planning and fleet oversight." },
      { title: "Freight Forwarding", description: "Cross-border freight coordination for time-sensitive cargo." },
      { title: "Customs Clearance", description: "Pre-clearance verification and dedicated brokerage workflows." },
      { title: "Sustainable Fleet", description: "Modern fleet planning designed for capacity and efficiency." },
    ],
    processTitle: "Operational Footprint",
    processIntro: "A regional network designed to connect suppliers, ports, customs points, and final delivery.",
    process: ["Route analysis", "Cargo consolidation", "Customs verification", "Final-mile delivery"],
  },
  "fresh-produce-trade": {
    title: "Fresh Produce Trade",
    eyebrow: "Premium Categories",
    headline: "Freshness, controlled from source to destination.",
    description: "Certified growers, cold-chain discipline, and international import-export operations for premium produce.",
    introTitle: "Precision Import & Export Operations",
    introBody: "The division manages premium produce sourcing, inspection, refrigerated movement, and delivery planning for consistent commercial quality.",
    cardsTitle: "Premium Categories",
    cardsIntro: "Product categories organized around freshness, seasonality, and reliable distribution.",
    cards: [
      { title: "Citrus Fruits", description: "High-volume citrus programs with controlled handling." },
      { title: "Stone Fruits", description: "Seasonal sourcing with strict quality grading." },
      { title: "Fresh Vegetables", description: "Daily movement of fresh vegetables from trusted suppliers." },
      { title: "Exotics & Seasonal", description: "Specialty produce selected for premium retail and wholesale demand." },
    ],
    processTitle: "Supply Chain Standards",
    processIntro: "Temperature control, inspection, documentation, and delivery windows keep product integrity intact.",
    process: ["Grower sourcing", "Quality control", "Advanced cold chain", "International distribution"],
  },
  "auto-truck-service": {
    title: "Auto & Truck Service",
    eyebrow: "Fleet Engineering",
    headline: "Precision Engineering. Uncompromising Reliability.",
    description: "Commercial vehicle service, preventative maintenance, complex diagnostics, and parts inventory for fleet uptime.",
    introTitle: "Authorized Parts Inventory",
    introBody: "A technical service operation built around preventative maintenance, expert diagnostics, and master technicians.",
    cardsTitle: "Core Competencies",
    cardsIntro: "Fleet service capabilities focused on reliability and uninterrupted business operations.",
    cards: [
      { title: "Preventative Maintenance", description: "Scheduled service programs for commercial fleet continuity." },
      { title: "Diagnostics & Repair", description: "Complex diagnostics and precision repair workflows." },
      { title: "Parts Inventory", description: "Authorized parts availability for faster service turnaround." },
      { title: "Master Technicians", description: "Specialist technical teams for heavy-duty vehicles." },
    ],
    processTitle: "Service Assessment",
    processIntro: "A structured intake and service workflow for commercial clients.",
    process: ["Fleet intake", "Technical assessment", "Parts planning", "Service completion"],
  },
  "retail-fashion": {
    title: "Altinyildiz Classics Bulgaria",
    eyebrow: "Retail & Fashion",
    headline: "Mastering the Art of Menswear",
    description: "Exclusive retail distribution and brand management for premium classic menswear across Bulgaria.",
    introTitle: "A Premium Retail Network",
    introBody: "Altinyildiz Classics BG connects refined menswear products with carefully managed retail operations and brand presentation.",
    cardsTitle: "Retail Capabilities",
    cardsIntro: "Brand, store, and distribution capabilities for a polished customer experience.",
    cards: [
      { title: "Brand Management", description: "Consistent presentation of premium menswear standards." },
      { title: "Retail Operations", description: "Store-level execution, merchandising, and local market handling." },
      { title: "Distribution Hubs", description: "Reliable product availability across the market." },
      { title: "Customer Experience", description: "Professional service culture for premium retail." },
    ],
  },
  "sobaklava-distribution": {
    title: "SoBaklava Distribution",
    eyebrow: "Premium Confectionery",
    headline: "A Legacy of Sweet Perfection.",
    description: "Curated baklava portfolio, retail assortments, and premium confectionery distribution under the group network.",
    introTitle: "Brand Heritage",
    introBody: "SoBaklava blends traditional confectionery excellence with disciplined modern distribution for premium retail and wholesale channels.",
    cardsTitle: "Curated Portfolio",
    cardsIntro: "A focused product showcase designed around quality, gifting, and retail readiness.",
    cards: [
      { title: "Classic Pistachio Cold Baklava", description: "Signature milk-soaked cold baklava with refined pistachio presentation." },
      { title: "Chocolate Cold Baklava", description: "Cocoa-finished cold baklava with creamy layers and pistachio garnish." },
      { title: "Cold Baklava Assortments", description: "Shelf-ready cold baklava assortments for premium retail channels." },
      { title: "Distribution Quality", description: "Controlled movement and handling for product integrity." },
    ],
  },
  "bulgatex-consulting": {
    title: "Bulgatex Consulting",
    eyebrow: "Strategic Advisory",
    headline: "Strategic integration for cross-border growth.",
    description: "Market entry support, partnership development, textile trade expertise, and import-export consulting.",
    introTitle: "Strategic Integration Process",
    introBody: "Bulgatex Consulting supports companies entering or expanding in regional trade through analysis, partnership design, and execution.",
    cardsTitle: "Core Competencies",
    cardsIntro: "Advisory capabilities for market access, trade operations, and textile-sector expertise.",
    cards: [
      { title: "Market Entry Support", description: "Structured support for regional expansion and launch planning." },
      { title: "Partnership Development", description: "Commercial relationship building with qualified local partners." },
      { title: "Textile Trade Expertise", description: "Specialized textile-sector knowledge and sourcing insight." },
      { title: "Import/Export Consulting", description: "Trade documentation, process design, and operational guidance." },
    ],
    processTitle: "Consulting Phases",
    processIntro: "A three-phase model matching the Stitch design: audit, strategy, and execution.",
    process: ["Audit & Analysis", "Strategic Blueprinting", "Execution & Integration"],
  },
};

export function localizeDivisions(language: Language): Translation["divisions"] {
  if (language === "en") return divisionEn;

  const prefix = language === "tr" ? "TR" : "BG";
  return Object.fromEntries(
    Object.entries(divisionEn).map(([slug, page]) => [
      slug,
      {
        ...page,
        eyebrow: `${prefix} • ${page.eyebrow}`,
        description:
          language === "tr"
            ? `${page.description} Bu içerik aktif dil seçimine bağlı i18n kaynağından gelir.`
            : `${page.description} Това съдържание идва от активния i18n езиков източник.`,
      },
    ]),
  );
}
