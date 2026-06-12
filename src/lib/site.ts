import type { LucideIcon } from "lucide-react";
import {
  CakeSlice,
  ChevronRight,
  Globe2,
  Handshake,
  Languages,
  Leaf,
  Menu,
  Quote,
  Rocket,
  Settings,
  Shirt,
  ShipWheel,
  Truck,
} from "lucide-react";
import { imageAssets } from "./assets";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
  featured?: boolean;
  inverted?: boolean;
};

export const icons = {
  chevronRight: ChevronRight,
  globe: Globe2,
  languages: Languages,
  menu: Menu,
  quote: Quote,
  rocket: Rocket,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/retail-fashion" },
  { label: "Contact", href: "/contact" },
];

export const images = imageAssets.site;

export const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "40+", label: "Countries Reached" },
  { value: "250+", label: "Fleet Vehicles" },
  { value: "1M+", label: "Tons Delivered" },
];

export const services: Service[] = [
  {
    title: "Global Logistics & Freight",
    description:
      "End-to-end freight forwarding, customs clearance, and precision supply chain management designed for high-stakes enterprise delivery.",
    icon: Truck,
    image: images.logistics,
    href: "/logistics-transport",
    featured: true,
  },
  {
    title: "Fresh Produce Trade",
    description:
      "Premium agricultural sourcing and international distribution network ensuring quality from farm to facility.",
    icon: Leaf,
    href: "/fresh-produce-trade",
  },
  {
    title: "Auto & Truck Service",
    description:
      "Advanced fleet maintenance, diagnostics, and commercial vehicle engineering to keep operations moving.",
    icon: Settings,
    href: "/auto-truck-service",
  },
  {
    title: "Altinyildiz Classics BG",
    description:
      "Exclusive retail distribution and brand management of premium classic menswear across Bulgaria.",
    icon: Shirt,
    href: "/retail-fashion",
    inverted: true,
  },
  {
    title: "SoBaklava",
    description: "Premium confectionery distribution.",
    icon: CakeSlice,
    href: "/sobaklava-distribution",
  },
  {
    title: "Bulgatex Consulting",
    description: "Strategic trade and regulatory advisory.",
    icon: ShipWheel,
    href: "/bulgatex-consulting",
  },
];

export const partners = [
  "PARTNER ONE",
  "GLOBAL INC.",
  "LOGISTICS CO.",
  "TRADE CORP",
  "NEXUS ENTERPRISE",
];

export const footerGroups = [
  {
    title: "Logistics & Trade",
    links: [
      { label: "Logistics & Transport", href: "/logistics-transport" },
      { label: "Fresh Produce Trade", href: "/fresh-produce-trade" },
      { label: "Auto & Truck Service", href: "/auto-truck-service" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Altinyildiz Classics", href: "/retail-fashion" },
      { label: "SoBaklava", href: "/sobaklava-distribution" },
    ],
  },
  {
    title: "Advisory",
    links: [{ label: "Bulgatex Consulting", href: "/bulgatex-consulting" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export const languages = ["English", "Turkish", "Bulgarian"];

export const trustHighlights = [
  {
    title: "Institutional scale",
    description: "Global operations built for enterprise supply chains.",
    icon: Globe2,
  },
  {
    title: "Executive reliability",
    description: "Structured delivery with premium service standards.",
    icon: Handshake,
  },
];
