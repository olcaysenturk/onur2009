import {
  Apple,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Globe2,
  Handshake,
  Leaf,
  MapPinned,
  PackageCheck,
  Route,
  Shirt,
  ShipWheel,
  Store,
  Truck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { imageAssets } from "./assets";

export type InfoCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  inverted?: boolean;
};

export type DivisionPage = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  heroImage: string;
  introImage?: string;
  processImage?: string;
  primaryCta?: string;
  introTitle: string;
  introBody: string;
  cardsTitle: string;
  cardsIntro: string;
  cards: InfoCard[];
  processTitle?: string;
  processIntro?: string;
  process?: string[];
};

export const pageImages = imageAssets.pages;

export const divisionPages: DivisionPage[] = [
  {
    slug: "logistics-transport",
    title: "Logistics & Transport",
    eyebrow: "Global Logistics",
    headline: "Precision Transport, Global Scale.",
    description:
      "A controlled logistics network for freight forwarding, road transport, customs clearance, and sustainable fleet operations.",
    heroImage: pageImages.logisticsHero,
    processImage: pageImages.logisticsFacility,
    introTitle: "Architects of the Supply Chain",
    introBody:
      "ONUR2009 coordinates complex movement across markets with disciplined planning, brokerage support, and fleet visibility for enterprise delivery.",
    cardsTitle: "Core Operations",
    cardsIntro: "High-stakes logistics services organized for reliability, speed, and regulatory confidence.",
    cards: [
      { title: "Road Transport", description: "Dedicated road operations with route planning and fleet oversight.", icon: Route, image: pageImages.logisticsHero },
      { title: "Freight Forwarding", description: "Cross-border freight coordination for time-sensitive cargo.", icon: Truck, inverted: true },
      { title: "Customs Clearance", description: "Pre-clearance verification and dedicated brokerage workflows.", icon: FileCheck2 },
      { title: "Sustainable Fleet", description: "Modern fleet planning designed for capacity and efficiency.", icon: MapPinned },
    ],
    processTitle: "Operational Footprint",
    processIntro: "A regional network designed to connect suppliers, ports, customs points, and final delivery.",
    process: ["Route analysis", "Cargo consolidation", "Customs verification", "Final-mile delivery"],
  },
  {
    slug: "fresh-produce-trade",
    title: "Fresh Produce Trade",
    eyebrow: "Premium Categories",
    headline: "Freshness, controlled from source to destination.",
    description:
      "Certified growers, cold-chain discipline, and international import-export operations for premium produce.",
    heroImage: pageImages.freshHero,
    processImage: pageImages.freshSupply,
    introTitle: "Precision Import & Export Operations",
    introBody:
      "The division manages premium produce sourcing, inspection, refrigerated movement, and delivery planning for consistent commercial quality.",
    cardsTitle: "Premium Categories",
    cardsIntro: "Product categories organized around freshness, seasonality, and reliable distribution.",
    cards: [
      { title: "Citrus Fruits", description: "High-volume citrus programs with controlled handling.", icon: Apple, image: pageImages.freshCitrus, inverted: true },
      { title: "Stone Fruits", description: "Seasonal sourcing with strict quality grading.", icon: Leaf, image: pageImages.freshStone },
      { title: "Fresh Vegetables", description: "Daily movement of fresh vegetables from trusted suppliers.", icon: Boxes, image: pageImages.freshVegetables },
      { title: "Exotics & Seasonal", description: "Specialty produce selected for premium retail and wholesale demand.", icon: PackageCheck },
    ],
    processTitle: "Supply Chain Standards",
    processIntro: "Temperature control, inspection, documentation, and delivery windows keep product integrity intact.",
    process: ["Grower sourcing", "Quality control", "Advanced cold chain", "International distribution"],
  },
  {
    slug: "auto-truck-service",
    title: "Auto & Truck Service",
    eyebrow: "Fleet Engineering",
    headline: "Precision Engineering. Uncompromising Reliability.",
    description:
      "Commercial vehicle service, preventative maintenance, complex diagnostics, and parts inventory for fleet uptime.",
    heroImage: pageImages.autoHero,
    processImage: pageImages.autoParts,
    introTitle: "Authorized Parts Inventory",
    introBody:
      "A technical service operation built around preventative maintenance, expert diagnostics, and master technicians.",
    cardsTitle: "Core Competencies",
    cardsIntro: "Fleet service capabilities focused on reliability and uninterrupted business operations.",
    cards: [
      { title: "Preventative Maintenance", description: "Scheduled service programs for commercial fleet continuity.", icon: ClipboardCheck },
      { title: "Diagnostics & Repair", description: "Complex diagnostics and precision repair workflows.", icon: Wrench, inverted: true },
      { title: "Parts Inventory", description: "Authorized parts availability for faster service turnaround.", icon: Boxes, image: pageImages.autoParts },
      { title: "Master Technicians", description: "Specialist technical teams for heavy-duty vehicles.", icon: CheckCircle2 },
    ],
    processTitle: "Service Assessment",
    processIntro: "A structured intake and service workflow for commercial clients.",
    process: ["Fleet intake", "Technical assessment", "Parts planning", "Service completion"],
  },
  {
    slug: "retail-fashion",
    title: "Altinyildiz Classics Bulgaria",
    eyebrow: "Retail & Fashion",
    headline: "Mastering the Art of Menswear",
    description:
      "Exclusive retail distribution and brand management for premium classic menswear across Bulgaria.",
    heroImage: pageImages.retailHero,
    introImage: pageImages.retailCraft,
    introTitle: "A Premium Retail Network",
    introBody:
      "Altinyildiz Classics BG connects refined menswear products with carefully managed retail operations and brand presentation.",
    cardsTitle: "Retail Capabilities",
    cardsIntro: "Brand, store, and distribution capabilities for a polished customer experience.",
    cards: [
      { title: "Brand Management", description: "Consistent presentation of premium menswear standards.", icon: Shirt, image: pageImages.retailCraft, inverted: true },
      { title: "Retail Operations", description: "Store-level execution, merchandising, and local market handling.", icon: Store },
      { title: "Distribution Hubs", description: "Reliable product availability across the market.", icon: Boxes },
      { title: "Customer Experience", description: "Professional service culture for premium retail.", icon: Handshake },
    ],
  },
  {
    slug: "sobaklava-distribution",
    title: "SoBaklava Distribution",
    eyebrow: "Premium Confectionery",
    headline: "A Legacy of Sweet Perfection.",
    description:
      "Curated baklava portfolio, retail assortments, and premium confectionery distribution under the group network.",
    heroImage: pageImages.sobaklavaHero,
    introImage: pageImages.sobaklavaChef,
    introTitle: "Brand Heritage",
    introBody:
      "SoBaklava blends traditional confectionery excellence with disciplined modern distribution for premium retail and wholesale channels.",
    cardsTitle: "Curated Portfolio",
    cardsIntro: "A focused product showcase designed around quality, gifting, and retail readiness.",
    cards: [
      { title: "Classic Pistachio Cold Baklava", description: "Signature milk-soaked cold baklava with refined pistachio presentation.", icon: PackageCheck, image: pageImages.sobaklavaPistachio, inverted: true },
      { title: "Chocolate Cold Baklava", description: "Cocoa-finished cold baklava with creamy layers and pistachio garnish.", icon: Boxes, image: pageImages.sobaklavaWalnut },
      { title: "Cold Baklava Assortments", description: "Shelf-ready cold baklava assortments for premium retail channels.", icon: Store, image: pageImages.sobaklavaAssorted },
      { title: "Distribution Quality", description: "Controlled movement and handling for product integrity.", icon: ClipboardCheck },
    ],
  },
  {
    slug: "bulgatex-consulting",
    title: "Bulgatex Consulting",
    eyebrow: "Strategic Advisory",
    headline: "Strategic integration for cross-border growth.",
    description:
      "Market entry support, partnership development, textile trade expertise, and import-export consulting.",
    heroImage: pageImages.bulgatexHero,
    introTitle: "Strategic Integration Process",
    introBody:
      "Bulgatex Consulting supports companies entering or expanding in regional trade through analysis, partnership design, and execution.",
    cardsTitle: "Core Competencies",
    cardsIntro: "Advisory capabilities for market access, trade operations, and textile-sector expertise.",
    cards: [
      { title: "Market Entry Support", description: "Structured support for regional expansion and launch planning.", icon: BarChart3 },
      { title: "Partnership Development", description: "Commercial relationship building with qualified local partners.", icon: Handshake, inverted: true },
      { title: "Textile Trade Expertise", description: "Specialized textile-sector knowledge and sourcing insight.", icon: Factory },
      { title: "Import/Export Consulting", description: "Trade documentation, process design, and operational guidance.", icon: ShipWheel },
    ],
    processTitle: "Consulting Phases",
    processIntro: "A three-phase model matching the Stitch design: audit, strategy, and execution.",
    process: ["Audit & Analysis", "Strategic Blueprinting", "Execution & Integration"],
  },
];

export const aboutPage = {
  eyebrow: "Corporate Profile",
  headline: "Building reliable global operations since 2009.",
  description:
    "Altinyildiz Group International brings trade, logistics, retail, service, and advisory divisions into one disciplined operating platform.",
  heroImage: pageImages.aboutHero,
  image: pageImages.aboutOffice,
  cards: [
    {
      title: "Our Vision",
      description:
        "To be a trusted regional platform for premium trade, logistics, and brand operations.",
      icon: Globe2,
    },
    {
      title: "Our Mission",
      description:
        "To deliver reliable services through structured teams, strong partnerships, and operational discipline.",
      icon: Building2,
      inverted: true,
    },
  ],
};

export const contactDepartments = [
  { title: "Logistics", description: "Freight, customs, and fleet operations.", icon: Truck },
  { title: "Retail", description: "Brand and store operations.", icon: Store },
  { title: "Human Resources", description: "Careers and corporate communication.", icon: Handshake },
];

export const serviceOverviewCards = divisionPages.map((page) => ({
  title: page.title,
  description: page.description,
  href: `/${page.slug}`,
  image:
    {
      "fresh-produce-trade": pageImages.servicesFresh,
      "logistics-transport": pageImages.servicesLogistics,
      "auto-truck-service": pageImages.servicesAuto,
      "retail-fashion": pageImages.servicesRetail,
      "sobaklava-distribution": pageImages.servicesSoba,
      "bulgatex-consulting": pageImages.servicesBulgatex,
    }[page.slug] ?? page.heroImage,
  icon: page.cards[0]?.icon ?? Globe2,
}));
