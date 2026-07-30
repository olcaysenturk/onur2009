import type { FooterGroup, Language, NavItem } from "@/types/i18n";

export type AboutViewTranslation = {
  title: string;
  accent: string;
  body: string;
  primary: string;
  secondary: string;
  purposeTitle: string;
  purposeBody: string;
  visionTitle: string;
  visionBody: string;
  missionTitle: string;
  missionBody: string;
  footerBody: string;
  footerDivisions: string;
  footerCorporate: string;
  copyright: string;
  headquarters: string;
};

export type GalleryViewTranslation = {
  title: string;
  body: string;
  filters: string[];
  items: { title: string; category: string }[];
  footerBody: string;
  footerSectors: string;
  footerBrands: string;
  footerLegal: string;
  copyright: string;
};

export type ContactViewTranslation = {
  title: string;
  body: string;
  headquarters: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  address: string;
  phone: string;
  email: string;
  departments: { title: string; email: string; type: "logistics" | "retail" | "hr" }[];
  formTitle: string;
  fields: {
    firstName: string;
    lastName: string;
    businessEmail: string;
    company: string;
    department: string;
    message: string;
  };
  placeholders: {
    firstName: string;
    lastName: string;
    businessEmail: string;
    company: string;
    department: string;
    message: string;
  };
  submit: string;
  footerBody: string;
  footerCopyright: string;
  footerDivisions: string;
  footerSubsidiaries: string;
  footerLegal: string;
};

export type BulgatexViewTranslation = {
  badge: string;
  title: string;
  body: string;
  primary: string;
  secondary: string;
  competenciesTitle: string;
  competenciesBody: string;
  learnMore: string;
  cards: { title: string; body: string; tags?: string[] }[];
  processTitle: string;
  processBody: string;
  phases: { title: string; body: string }[];
};

export type FreshProduceViewTranslation = {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  categoriesTitle: string;
  categoriesBody: string;
  categories: {
    title: string;
    body: string;
    badge?: string;
    image?: string;
    size: "wide" | "small" | "medium" | "text";
  }[];
  catalogLabel: string;
  operationsTitle: string;
  operationsBody: string;
  features: { title: string; body: string }[];
  metricValue: string;
  metricLabel: string;
  footerBody: string;
  footerCopyright: string;
  footerDivisions: string;
  footerLegal: string;
  legalExtra: { label: string; href: string }[];
};

export type LogisticsTransportViewTranslation = {
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  operationsTitle: string;
  operationsBody: string;
  roadTitle: string;
  roadBody: string;
  roadItems: string[];
  freightTitle: string;
  freightBody: string;
  freightLink: string;
  customsTitle: string;
  customsSteps: { title: string; body: string }[];
  fleetTitle: string;
  fleetBody: string;
  footprintTitle: string;
  footprintBody: string;
  mapTitle: string;
  mapBody: string;
  footerBody: string;
  footerCta: string;
  footerCopyright: string;
  footerDivisions: string;
  footerBrands: string;
  footerLegal: string;
};

export type Translation = {
  nav: NavItem[];
  languages: Record<Language, string>;
  footer: {
    description: string;
    copyright: string;
    groups: FooterGroup[];
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      accent: string;
      description: string;
      primary: string;
      secondary: string;
    };
    stats: { value: string; label: string }[];
    heritage: {
      eyebrow: string;
      title: string;
      body: string;
      link: string;
      highlights: { title: string; description: string }[];
    };
    services: {
      eyebrow: string;
      title: string;
      body: string;
    };
    partners: {
      eyebrow: string;
      items: string[];
    };
    contact: {
      title: string;
      body: string;
      primary: string;
      secondary: string;
      email: string;
      note: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    body: string;
    explore: string;
  };
  servicesPage: {
    title: string;
    body: string;
    explore: string;
    viewDetails: string;
    exploreService: string;
    visitBoutiques: string;
    discoverNetwork: string;
    consult: string;
    tags: string[];
    footerBody: string;
    footerCopyright: string;
    footerDivisions: string;
    footerBrands: string;
    footerLegal: string;
  };
  retailPage: {
    readStory: string;
    statLabel: string;
    heritageLabel: string;
    body: string;
    secondaryBody: string;
  };
  sobaklava: {
    heroBadge: string;
    heroTitle: string;
    heroBody: string;
    productsCta: string;
    storyCta: string;
    heritageYears: string;
    aboutLabel: string;
    aboutTitle: string;
    aboutBody: string;
    aboutBodyAlt: string;
    experienceLabel: string;
    experienceTitle: string;
    experienceBody: string;
    qualityTitle: string;
    craftTitle: string;
    productsLabel: string;
    productsTitle: string;
    producerCards: { title: string; body: string }[];
    products: { title: string; price: string; badge: string; description: string }[];
    growthLabel: string;
    growthTitle: string;
    growthBody: string;
    growthChartTitle: string;
    growthChartLabel: string;
    growthChartSupply: string;
    growthChartReach: string;
    satisfactionLabel: string;
    guestLabel: string;
    ctaTitle: string;
    ctaBody: string;
    stores: string;
    franchise: string;
    operations: { title: string; body: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    purposeEyebrow: string;
    purposeTitle: string;
    purposeBody: string;
    cards: { title: string; description: string }[];
  };
  aboutView: AboutViewTranslation;
  galleryView: GalleryViewTranslation;
  contactView: ContactViewTranslation;
  bulgatexView: BulgatexViewTranslation;
  freshProduceView: FreshProduceViewTranslation;
  logisticsTransportView: LogisticsTransportViewTranslation;
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    headquarters: string;
    address: string;
    email: string;
    phone: string;
    formTitle: string;
    placeholders: {
      name: string;
      email: string;
      company: string;
      department: string;
      message: string;
    };
    submit: string;
    departments: { title: string; description: string }[];
  };
  divisions: Record<
    string,
    {
      title: string;
      eyebrow: string;
      headline: string;
      description: string;
      introTitle: string;
      introBody: string;
      cardsTitle: string;
      cardsIntro: string;
      cards: { title: string; description: string }[];
      processTitle?: string;
      processIntro?: string;
      process?: string[];
    }
  >;
  common: {
    requestQuote: string;
    requestAssessment: string;
    selectLanguage: string;
    brandsLabel: string;
  };
};
