import type { Translation } from "./types";
import { pageImages } from "@/lib/pages";
import { divisionEn, nav } from "./common";

export const en: Translation = {
    nav: nav.en,
    languages: { en: "English", tr: "Turkish", bg: "Bulgarian" },
    common: {
      requestQuote: "Request a Quote",
      requestAssessment: "Request Assessment",
      selectLanguage: "Select language",
      brandsLabel: "Brands",
    },
    footer: {
      description: "Orchestrating Global Trade & Logistics. Delivering excellence across supply chains, corporate services, and brand management since 2009.",
      copyright: "© 2024 ONUR2009. All rights reserved.",
      groups: [
        { title: "Logistics & Trade", links: [{ label: "Logistics & Transport", href: "/logistics-transport" }, { label: "Fresh Produce Trade", href: "/fresh-produce-trade" }, { label: "Auto & Truck Service", href: "/auto-truck-service" }] },
        { title: "Brands", links: [{ label: "Altinyildiz Classics", href: "/retail-fashion" }, { label: "SoBaklava", href: "/sobaklava-distribution" }] },
        { title: "Advisory", links: [{ label: "Bulgatex Consulting", href: "/bulgatex-consulting" }] },
        { title: "Legal", links: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
      ],
    },
    home: {
      hero: {
        eyebrow: "ONUR2009 • Global Operations",
        title: "Orchestrating Global",
        accent: "Trade & Logistics",
        description: "Delivering structural integrity and premium service across continents. ONUR2009 is the visionary partner for institutional investors and enterprises seeking absolute reliability in complex global supply chains.",
        primary: "Explore Solutions",
        secondary: "Corporate Profile",
      },
      stats: [
        { value: "15+", label: "Years of Excellence" },
        { value: "40+", label: "Countries Reached" },
        { value: "250+", label: "Fleet Vehicles" },
        { value: "1M+", label: "Tons Delivered" },
      ],
      heritage: {
        eyebrow: "Our Heritage",
        title: "Establishing Global Authority",
        body: "ONUR2009 is an established global leader operating at the nexus of high-value international trade, logistics, and premium service distribution.",
        link: "Discover Our Heritage",
        highlights: [
          { title: "Institutional scale", description: "Global operations built for enterprise supply chains." },
          { title: "Executive reliability", description: "Structured delivery with premium service standards." },
        ],
      },
      services: {
        eyebrow: "Our Ecosystem",
        title: "Integrated Business Divisions",
        body: "A comprehensive portfolio of brands delivering excellence across the supply chain, retail, and advisory sectors.",
      },
      partners: { eyebrow: "Trusted by Industry Leaders", items: ["PARTNER ONE", "GLOBAL INC.", "LOGISTICS CO.", "TRADE CORP", "NEXUS ENTERPRISE"] },
      contact: {
        title: "Ready to elevate your global operations?",
        body: "Connect with our executive advisory team to discuss bespoke logistics, trade, and distribution solutions tailored for institutional scale.",
        primary: "Contact Executive Sales",
        secondary: "Call Office",
        email: "sales@onur2009.com",
        note: "Global logistics, trade, retail, and advisory services",
      },
    },
    servicesPage: {
    title: "Our Business Divisions",
    body:
      "Altinyildiz Group International operates across six core divisions, delivering premium B2B solutions globally. We combine deep industry expertise with an unwavering commitment to structural integrity and operational excellence.",
    explore: "Explore Division",
    viewDetails: "View Details",
    exploreService: "Explore Service",
    visitBoutiques: "Visit Boutiques",
    discoverNetwork: "Discover Network",
    consult: "Consult With Us",
    tags: ["Agriculture & Trade", "Fleet Maintenance", "Retail & Fashion", "FMCG Distribution", "Strategic Advisory"],
    footerBody: "The Architect of Success. Structuring global trade, logistics, and consulting with unwavering reliability.",
    footerCopyright: "© 2024 LOGO International. All rights reserved.",
    footerDivisions: "Divisions",
    footerBrands: "Brands",
    footerLegal: "Legal",
  },
    services: {
      eyebrow: "Our Services",
      title: "Our Business Divisions",
      body: "A complete operating ecosystem spanning fresh produce trade, logistics, commercial vehicle service, retail distribution, confectionery, and strategic consulting.",
      explore: "Explore Division",
    },
    retailPage: {
      readStory: "Read our full story",
      statLabel: "Years of excellence",
      heritageLabel: "Our Heritage",
      body: "As a proud extension of the Altinyildiz Group, our Bulgarian operations bring decades of textile mastery directly to discerning gentlemen. We merge traditional tailoring techniques with contemporary corporate aesthetics.",
      secondaryBody: "Every garment represents our commitment to structural integrity, using only the finest fabrics designed to maintain composure in high-stakes environments.",
    },
    about: {
      eyebrow: "Corporate Profile",
      title: "Building reliable global operations since 2009.",
      body: "Altinyildiz Group International brings trade, logistics, retail, service, and advisory divisions into one disciplined operating platform.",
      purposeEyebrow: "Our Purpose",
      purposeTitle: "Structured for Trust, Scale, and Continuity",
      purposeBody: "The group brings multiple operating divisions into one coordinated organization, giving partners a reliable point of contact across logistics, agriculture, retail, service, and consulting.",
      cards: [
        { title: "Our Vision", description: "To be a trusted regional platform for premium trade, logistics, and brand operations." },
        { title: "Our Mission", description: "To deliver reliable services through structured teams, strong partnerships, and operational discipline." },
      ],
    },
    aboutView: {
    title: "Architects of Global",
    accent: "Success",
    body:
      "Altinyildiz Group International is a multifaceted conglomerate driving innovation and precision across trade, logistics, and specialized services worldwide.",
    primary: "Explore Divisions",
    secondary: "Our History",
    purposeTitle: "Our Purpose",
    purposeBody:
      "Defining the trajectory of global commerce through unwavering commitment to quality and structural integrity. We don't just facilitate trade; we build the infrastructure of international growth.",
    visionTitle: "Our Vision",
    visionBody:
      "To be the undisputed global architect of multifaceted business solutions, recognized for building enduring partnerships and pioneering sustainable operational excellence across all our operational sectors.",
    missionTitle: "Our Mission",
    missionBody:
      "We execute complex global strategies with precision. By integrating fresh produce trade, advanced logistics, and specialized consulting, we deliver measurable, premium value to stakeholders while maintaining absolute structural integrity.",
    footerBody:
      "Architects of global supply chain and corporate infrastructure. Delivering excellence across Europe and beyond since our foundation.",
    footerDivisions: "Divisions",
    footerCorporate: "Corporate",
    copyright: "© 2024 LOGO International. All rights reserved.",
    headquarters: "Headquartered in Sofia, Bulgaria",
  },
    galleryView: {
    title: "Our Operations",
    body: "A visual portfolio showcasing our global logistics network, premium retail spaces, and state-of-the-art service centers. Built on precision and scale.",
    filters: ["All", "Trucks", "Logistics", "Retail Stores", "Service Centers", "Food Products"],
    items: [
      { title: "Global Freight Terminals", category: "Logistics & Transport" },
      { title: "European Fleet", category: "Trucks" },
      { title: "Flagship Store", category: "Retail Stores" },
      { title: "Advanced Diagnostics", category: "Service Centers" },
      { title: "Cold Storage Hub", category: "Food Products" },
      { title: "Global Headquarters", category: "Corporate" },
    ],
    footerBody: "The Architect of Success. Delivering global authority and structural integrity across diverse business sectors.",
    footerSectors: "Sectors",
    footerBrands: "Brands",
    footerLegal: "Legal",
    copyright: "© 2024 LOGO International. All rights reserved.",
  },
    contactView: {
    title: "Contact Us",
    body:
      "Connect with our global team. Whether you require complex logistics solutions, retail partnerships, or have general inquiries, our dedicated departments are ready to assist you.",
    headquarters: "Headquarters",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    address: "123 Global Commerce Blvd,\nSuite 4500\nIstanbul, Turkey",
    phone: "+90 212 555 0199",
    email: "contact@altinyildizgroup.com",
    departments: [
      { title: "Logistics", email: "logistics@altinyildiz.com", type: "logistics" },
      { title: "Retail", email: "retail@altinyildiz.com", type: "retail" },
      { title: "Human Resources", email: "hr@altinyildiz.com", type: "hr" },
    ],
    formTitle: "Business Inquiries",
    fields: { firstName: "First Name", lastName: "Last Name", businessEmail: "Business Email", company: "Company Name", department: "Department Inquiry", message: "Message" },
    placeholders: { firstName: "Jane", lastName: "Doe", businessEmail: "jane@company.com", company: "Acme Corp", department: "Select a department...", message: "How can we help you?" },
    submit: "Send Message",
    footerBody: "Building the future of global trade, logistics, and retail with unwavering commitment to excellence.",
    footerCopyright: "© 2024 LOGO International. All rights reserved.",
    footerDivisions: "Divisions",
    footerSubsidiaries: "Subsidiaries",
    footerLegal: "Legal",
  },
    bulgatexView: {
    badge: "Bulgatex Consulting",
    title: "Strategic Architecture for Global Markets",
    body:
      "Expert market entry support, intricate import/export logistics, and specialized textile trade consulting. We engineer robust business development strategies for visionary enterprises expanding across Europe and Asia.",
    primary: "Explore Services",
    secondary: "Consult with an Expert",
    competenciesTitle: "Core Competencies",
    competenciesBody:
      "Data-driven methodologies applied to international trade complexities. Our consulting framework is built on decades of operational excellence.",
    learnMore: "Learn More",
    cards: [
      {
        title: "Market Entry Support",
        body:
          "Comprehensive strategic planning for penetrating new territories. We provide detailed risk analysis, regulatory compliance roadmaps, and competitive landscape mapping.",
        tags: ["Risk Analysis", "Regulatory Compliance"],
      },
      {
        title: "Partnership Development",
        body:
          "Identifying, vetting, and establishing critical joint ventures and distribution channels to solidify your market presence.",
      },
      {
        title: "Textile Trade Expertise",
        body:
          "Leveraging deep industry networks to optimize your textile supply chain, from raw material sourcing to finished goods distribution.",
      },
      {
        title: "Import/Export Consulting",
        body:
          "Navigating complex customs architectures, tariff classifications, and cross-border logistics to streamline your operational efficiency.",
      },
    ],
    processTitle: "Strategic Integration Process",
    processBody:
      "A methodical, phase-gated approach to establishing your operational footprint in new markets.",
    phases: [
      {
        title: "Phase 01: Audit & Analysis",
        body:
          "Deep-dive into current capabilities, target market dynamics, and regulatory requirements. We formulate the baseline data required for strategic positioning.",
      },
      {
        title: "Phase 02: Strategic Blueprinting",
        body:
          "Development of the execution roadmap. This includes partner identification profiles, supply chain routing, and financial modeling for the first 24 months.",
      },
      {
        title: "Phase 03: Execution & Integration",
        body:
          "Active facilitation of negotiations, legal structure formation, and operational setup. We serve as your on-ground architects during the critical launch window.",
      },
    ],
  },
    freshProduceView: {
    heroEyebrow: "Global Fresh Produce Trade",
    heroTitle: "Architecting the Global Fresh Supply Chain.",
    heroBody:
      "Delivering premium citrus, stone fruits, and fresh vegetables across borders. We ensure structural integrity and quality control from farm to international markets.",
    heroPrimary: "Explore Our Categories",
    heroSecondary: "View Supply Chain",
    categoriesTitle: "Premium Categories",
    categoriesBody:
      "Sourced globally, delivered flawlessly. Our core focus areas in the fresh produce sector.",
    categories: [
      {
        title: "Citrus Fruits",
        body: "Oranges, Lemons, Mandarins, Grapefruits.",
        badge: "High Volume Export",
        image: pageImages.freshCitrus,
        size: "wide",
      },
      {
        title: "Stone Fruits",
        body: "Peaches, Nectarines, Plums.",
        image: pageImages.freshStone,
        size: "small",
      },
      {
        title: "Fresh Vegetables",
        body: "Tomatoes, Peppers, Cucumbers.",
        image: pageImages.freshVegetables,
        size: "medium",
      },
      {
        title: "Exotics & Seasonal",
        body:
          "Curated selections of high-demand exotic fruits and seasonal specialties, managed with strict temperature control protocols.",
        size: "text",
      },
    ],
    catalogLabel: "View Full Catalog",
    operationsTitle: "Precision Import & Export Operations",
    operationsBody:
      "Our supply chain architecture is built for absolute reliability. From the moment of harvest to final destination delivery, we maintain a flawless cold chain.",
    features: [
      {
        title: "Advanced Cold Chain",
        body: "Continuous temperature monitoring via IoT sensors ensuring optimal freshness.",
      },
      {
        title: "Quality Control Standards",
        body:
          "Multi-tier inspection protocols compliant with international BRC and GlobalGAP standards.",
      },
    ],
    metricValue: "40+",
    metricLabel: "Countries Served",
    footerBody:
      "Architecting the global supply chain. Premium services across fresh produce, logistics, and consulting.",
    footerCopyright: "© 2024 LOGO International. All rights reserved.",
    footerDivisions: "Divisions",
    footerLegal: "Legal",
    legalExtra: [
      { label: "Bulgatex Consulting", href: "/bulgatex-consulting" },
      { label: "Altinyildiz Classics Bulgaria", href: "/retail-fashion" },
    ],
  },
    logisticsTransportView: {
    heroEyebrow: "Global Logistics Division",
    heroTitle: "Precision Transport,",
    heroAccent: "Global Scale.",
    heroBody:
      "Engineered for high-stakes B2B operations. We deliver structural integrity, visionary supply chain solutions, and the security of an established global leader.",
    heroPrimary: "Explore Our Fleet",
    heroSecondary: "Operational Map",
    operationsTitle: "Architects of the Supply Chain",
    operationsBody:
      "Comprehensive logistical solutions designed for reliability and speed across international borders.",
    roadTitle: "Road Transport",
    roadBody:
      "Our core competency. We operate a massive, modern fleet ensuring uninterrupted supply lines. From standard freight to temperature-controlled logistics, our road network is the backbone of regional trade.",
    roadItems: ["FTL & LTL Services", "Specialized Cargo Handling"],
    freightTitle: "Freight Forwarding",
    freightBody:
      "Seamless integration of air, sea, and rail freight to optimize your global supply chain flow.",
    freightLink: "View Capabilities",
    customsTitle: "Frictionless Customs clearance",
    customsSteps: [
      {
        title: "Pre-Clearance Verification",
        body: "Automated document checking to prevent delays at borders.",
      },
      {
        title: "Dedicated Brokerage",
        body: "In-house experts navigating complex international tariffs.",
      },
    ],
    fleetTitle: "Modern, Sustainable Fleet",
    fleetBody: "Euro 6 compliant vehicles maintained to rigorous aviation-style standards.",
    footprintTitle: "Operational Footprint",
    footprintBody: "Connecting strategic economic hubs across Europe and Asia.",
    mapTitle: "Interactive Map Interface Pending Integration",
    mapBody: "Connecting Turkey, Bulgaria, and broader European transit routes.",
    footerBody:
      "Architecting success through premium logistics, fresh produce trade, and robust corporate services.",
    footerCta: "Contact Corporate",
    footerCopyright: "© 2024 LOGO International. All rights reserved.",
    footerDivisions: "Divisions",
    footerBrands: "Brands",
    footerLegal: "Legal",
  },
    contact: {
      eyebrow: "Contact",
      title: "Contact Us",
      body: "Reach the right department for business inquiries, logistics coordination, retail operations, or partnership discussions.",
      headquarters: "Headquarters",
      address: "Bulgaria and international operations network",
      email: "sales@onur2009.com",
      phone: "+359 000 000 000",
      formTitle: "Business Inquiries",
      placeholders: { name: "Full name", email: "Corporate email", company: "Company", department: "Department", message: "Tell us about your request" },
      submit: "Submit Inquiry",
      departments: [
        { title: "Logistics", description: "Freight, customs, and fleet operations." },
        { title: "Retail", description: "Brand and store operations." },
        { title: "Human Resources", description: "Careers and corporate communication." },
      ],
    },
    sobaklava: {
    heroBadge: "SO BAKLAVA",
    heroTitle: "Bringing Traditional Turkish Flavors to Europe",
    heroBody:
      "Developed and managed by Onur 2009, SO BAKLAVA connects Turkey's selected desserts and bakery products with consumers in Bulgaria and the wider European market.",
    productsCta: "Explore Products",
    storyCta: "Our Story",
    heritageYears: "Years of Experience",
    aboutLabel: "About Us",
    aboutTitle: "A Reliable European Operation for Turkish Gastronomy",
    aboutBody:
      "SO BAKLAVA operates with the vision of presenting traditional Turkish desserts and bakery products at high quality standards while carrying the long-standing craft of trusted producers to international markets.",
    aboutBodyAlt:
      "Since 2022, Onur 2009 has managed the brand's operations in Bulgaria, including supply, import, logistics, storage, sales, marketing, store operations, and customer service.",
    experienceLabel: "Producer Network",
    experienceTitle: "Strong Partnerships with Leading Turkish Producers",
    experienceBody:
      "The product portfolio is built on strong partnerships with leading producers in Turkey. Baklava varieties are produced by Seydioglu Baklava, active since 1953, while borek and frozen bakery products are produced by Asli Borek.",
    qualityTitle: "Quality Assurance",
    craftTitle: "Master Craft",
    productsLabel: "Special Selection",
    productsTitle: "Our Signature Flavors",
    producerCards: [
      {
        title: "Seydioglu Baklava",
        body: "Rooted baklava production since 1953.",
      },
      {
        title: "Asli Borek",
        body: "Borek and frozen bakery product production.",
      },
    ],
    products: [
      {
        title: "Walnut Cold Baklava",
        price: "Premium line",
        badge: "Cold dessert",
        description: "A fresh profile with milky cream, delicate chocolate notes, and balanced walnut filling.",
      },
      {
        title: "Havuc Dilimi",
        price: "İmza seri",
        badge: "Master pick",
        description: "A special plated slice with generous texture and refined pistachio finish.",
      },
      {
        title: "Sobiyet",
        price: "Limitli seri",
        badge: "Daily production",
        description: "A premium retail-ready interpretation of cream, pistachio, and crisp pastry texture.",
      },
    ],
    growthLabel: "Operation",
    growthTitle: "Freshness Secured from Production to Consumer",
    growthBody:
      "With its stores in Bulgaria, corporate partners, and distribution network, SO BAKLAVA reaches more consumers every day while representing Turkish gastronomy in Europe with disciplined operations.",
    growthChartTitle: "Supply and Market Reach",
    growthChartLabel: "Growth Index",
    growthChartSupply: "Operational Capacity",
    growthChartReach: "Market Reach",
    satisfactionLabel: "Customer Satisfaction",
    guestLabel: "Happy Guests",
    ctaTitle: "Aiming to Become One of the Balkans' Strongest Turkish Dessert Brands",
    ctaBody:
      "Premium retail, franchise, and distribution conversations start with the right product experience.",
    stores: "Stores",
    franchise: "Franchise Info",
    operations: [
      {
        title: "Supply & Import",
        body: "Product supply and import processes are managed by Onur 2009.",
      },
      {
        title: "Logistics & Storage",
        body: "Freshness and quality are secured from production to the final consumer.",
      },
      {
        title: "Sales & Store Operations",
        body: "Sales, marketing, store operations, and customer service run under one structure.",
      },
    ],
  },
    divisions: divisionEn,
  };
