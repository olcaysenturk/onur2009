import type { FooterGroup, Language, NavItem } from "@/types/i18n";

type Translation = {
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
  about: {
    eyebrow: string;
    title: string;
    body: string;
    purposeEyebrow: string;
    purposeTitle: string;
    purposeBody: string;
    cards: { title: string; description: string }[];
  };
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
  };
};

const nav = {
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
} satisfies Record<Language, NavItem[]>;

const divisionEn = {
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

function localizeDivisions(language: Language): Translation["divisions"] {
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

export const translations: Record<Language, Translation> = {
  en: {
    nav: nav.en,
    languages: { en: "English", tr: "Turkish", bg: "Bulgarian" },
    common: {
      requestQuote: "Request a Quote",
      requestAssessment: "Request Assessment",
      selectLanguage: "Select language",
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
    services: {
      eyebrow: "Our Services",
      title: "Our Business Divisions",
      body: "A complete operating ecosystem spanning fresh produce trade, logistics, commercial vehicle service, retail distribution, confectionery, and strategic consulting.",
      explore: "Explore Division",
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
    divisions: divisionEn,
  },
  tr: {
    nav: nav.tr,
    languages: { en: "İngilizce", tr: "Türkçe", bg: "Bulgarca" },
    common: { requestQuote: "Teklif İste", requestAssessment: "Değerlendirme İste", selectLanguage: "Dil seç" },
    footer: {
      description: "Küresel ticaret ve lojistiği yönetiyoruz. 2009'dan beri tedarik zinciri, kurumsal hizmetler ve marka yönetiminde mükemmellik sunuyoruz.",
      copyright: "© 2024 ONUR2009. Tüm hakları saklıdır.",
      groups: [
        { title: "Lojistik & Ticaret", links: [{ label: "Lojistik & Taşımacılık", href: "/logistics-transport" }, { label: "Yaş Sebze Meyve Ticareti", href: "/fresh-produce-trade" }, { label: "Oto & Kamyon Servisi", href: "/auto-truck-service" }] },
        { title: "Markalar", links: [{ label: "Altinyildiz Classics", href: "/retail-fashion" }, { label: "SoBaklava", href: "/sobaklava-distribution" }] },
        { title: "Danışmanlık", links: [{ label: "Bulgatex Consulting", href: "/bulgatex-consulting" }] },
        { title: "Yasal", links: [{ label: "Gizlilik Politikası", href: "#" }, { label: "Kullanım Şartları", href: "#" }] },
      ],
    },
    home: {
      hero: { eyebrow: "ONUR2009 • Küresel Operasyonlar", title: "Küresel", accent: "Ticaret & Lojistik", description: "Kıtalar arasında yapısal güvenilirlik ve premium hizmet sunuyoruz. ONUR2009 karmaşık tedarik zincirlerinde mutlak güvenilirlik arayan kurumlar için vizyoner ortaktır.", primary: "Çözümleri İncele", secondary: "Kurumsal Profil" },
      stats: [{ value: "15+", label: "Yıllık Deneyim" }, { value: "40+", label: "Ulaşılan Ülke" }, { value: "250+", label: "Filo Aracı" }, { value: "1M+", label: "Teslim Edilen Ton" }],
      heritage: { eyebrow: "Mirasımız", title: "Küresel Otorite İnşa Etmek", body: "ONUR2009 uluslararası ticaret, lojistik ve premium hizmet dağıtımı kesişiminde faaliyet gösteren köklü bir gruptur.", link: "Mirasımızı Keşfet", highlights: [{ title: "Kurumsal ölçek", description: "Kurumsal tedarik zincirleri için küresel operasyonlar." }, { title: "Yönetici güvenilirliği", description: "Premium standartlarla yapılandırılmış teslimat." }] },
      services: { eyebrow: "Ekosistemimiz", title: "Entegre İş Birimleri", body: "Tedarik zinciri, perakende ve danışmanlık alanlarında mükemmellik sunan kapsamlı marka portföyü." },
      partners: { eyebrow: "Sektör Liderlerinin Güvendiği Yapı", items: ["PARTNER ONE", "GLOBAL INC.", "LOGISTICS CO.", "TRADE CORP", "NEXUS ENTERPRISE"] },
      contact: { title: "Küresel operasyonlarınızı yükseltmeye hazır mısınız?", body: "Kurumsal ölçekte lojistik, ticaret ve dağıtım çözümleri için yönetici danışmanlık ekibimizle görüşün.", primary: "Satış Ekibiyle Görüş", secondary: "Ofisi Ara", email: "sales@onur2009.com", note: "Küresel lojistik, ticaret, perakende ve danışmanlık hizmetleri" },
    },
    services: { eyebrow: "Hizmetlerimiz", title: "İş Birimlerimiz", body: "Yaş sebze meyve ticareti, lojistik, ticari araç servisi, perakende dağıtımı, gıda dağıtımı ve stratejik danışmanlığı kapsayan eksiksiz operasyon ekosistemi.", explore: "Birimi İncele" },
    about: { eyebrow: "Kurumsal Profil", title: "2009'dan beri güvenilir küresel operasyonlar.", body: "Altinyildiz Group International ticaret, lojistik, perakende, servis ve danışmanlık birimlerini disiplinli bir platformda toplar.", purposeEyebrow: "Amacımız", purposeTitle: "Güven, Ölçek ve Süreklilik İçin Yapılandırıldı", purposeBody: "Grup, farklı operasyon birimlerini tek koordineli yapı altında toplar ve partnerlere güvenilir temas noktası sağlar.", cards: [{ title: "Vizyonumuz", description: "Premium ticaret, lojistik ve marka operasyonları için güvenilir bölgesel platform olmak." }, { title: "Misyonumuz", description: "Yapılandırılmış ekipler, güçlü ortaklıklar ve operasyon disipliniyle güvenilir hizmet sunmak." }] },
    contact: { eyebrow: "İletişim", title: "Bize Ulaşın", body: "İş talepleri, lojistik koordinasyonu, perakende operasyonları veya ortaklık görüşmeleri için doğru departmana ulaşın.", headquarters: "Merkez", address: "Bulgaristan ve uluslararası operasyon ağı", email: "sales@onur2009.com", phone: "+359 000 000 000", formTitle: "İş Talepleri", placeholders: { name: "Ad soyad", email: "Kurumsal e-posta", company: "Şirket", department: "Departman", message: "Talebinizi yazın" }, submit: "Talep Gönder", departments: [{ title: "Lojistik", description: "Nakliye, gümrük ve filo operasyonları." }, { title: "Perakende", description: "Marka ve mağaza operasyonları." }, { title: "İnsan Kaynakları", description: "Kariyer ve kurumsal iletişim." }] },
    divisions: localizeDivisions("tr"),
  },
  bg: {
    nav: nav.bg,
    languages: { en: "Английски", tr: "Турски", bg: "Български" },
    common: { requestQuote: "Заяви оферта", requestAssessment: "Заяви оценка", selectLanguage: "Избор на език" },
    footer: {
      description: "Оркестрираме глобална търговия и логистика. От 2009 г. доставяме качество във вериги за доставки, корпоративни услуги и управление на марки.",
      copyright: "© 2024 ONUR2009. Всички права запазени.",
      groups: [
        { title: "Логистика & Търговия", links: [{ label: "Логистика & Транспорт", href: "/logistics-transport" }, { label: "Търговия с пресни продукти", href: "/fresh-produce-trade" }, { label: "Авто & Камион сервиз", href: "/auto-truck-service" }] },
        { title: "Марки", links: [{ label: "Altinyildiz Classics", href: "/retail-fashion" }, { label: "SoBaklava", href: "/sobaklava-distribution" }] },
        { title: "Консултиране", links: [{ label: "Bulgatex Consulting", href: "/bulgatex-consulting" }] },
        { title: "Правни", links: [{ label: "Политика за поверителност", href: "#" }, { label: "Общи условия", href: "#" }] },
      ],
    },
    home: {
      hero: { eyebrow: "ONUR2009 • Глобални операции", title: "Глобална", accent: "Търговия & Логистика", description: "Доставяме структурна надеждност и премиум обслужване между континенти. ONUR2009 е партньор за институции, които търсят сигурност във сложни вериги за доставки.", primary: "Виж решенията", secondary: "Корпоративен профил" },
      stats: [{ value: "15+", label: "Години опит" }, { value: "40+", label: "Държави" }, { value: "250+", label: "Превозни средства" }, { value: "1M+", label: "Доставени тона" }],
      heritage: { eyebrow: "Нашето наследство", title: "Изграждане на глобален авторитет", body: "ONUR2009 е утвърден лидер в международна търговия, логистика и премиум дистрибуция.", link: "Виж наследството", highlights: [{ title: "Институционален мащаб", description: "Глобални операции за корпоративни вериги." }, { title: "Надеждност", description: "Структурирана доставка с премиум стандарти." }] },
      services: { eyebrow: "Нашата екосистема", title: "Интегрирани бизнес дивизии", body: "Портфолио от марки, доставящи качество във веригата за доставки, търговията и консултирането." },
      partners: { eyebrow: "Доверие от лидери в индустрията", items: ["PARTNER ONE", "GLOBAL INC.", "LOGISTICS CO.", "TRADE CORP", "NEXUS ENTERPRISE"] },
      contact: { title: "Готови ли сте да развиете глобалните си операции?", body: "Свържете се с нашия екип за логистика, търговия и дистрибуция в институционален мащаб.", primary: "Свържи се с продажби", secondary: "Обади се", email: "sales@onur2009.com", note: "Глобална логистика, търговия, ритейл и консултиране" },
    },
    services: { eyebrow: "Нашите услуги", title: "Бизнес дивизии", body: "Операционна екосистема за пресни продукти, логистика, сервиз, ритейл, сладкарска дистрибуция и консултиране.", explore: "Виж дивизията" },
    about: { eyebrow: "Корпоративен профил", title: "Надеждни глобални операции от 2009 г.", body: "Altinyildiz Group International обединява търговия, логистика, ритейл, сервиз и консултиране в дисциплинирана платформа.", purposeEyebrow: "Нашата цел", purposeTitle: "Структура за доверие, мащаб и непрекъснатост", purposeBody: "Групата обединява множество дивизии в координирана организация за надежден контакт.", cards: [{ title: "Визия", description: "Да бъдем надеждна регионална платформа за премиум търговия, логистика и марки." }, { title: "Мисия", description: "Да доставяме надеждни услуги чрез екипи, партньорства и оперативна дисциплина." }] },
    contact: { eyebrow: "Контакт", title: "Свържете се с нас", body: "Свържете се с правилния отдел за бизнес запитвания, логистика, ритейл или партньорства.", headquarters: "Централа", address: "България и международна оперативна мрежа", email: "sales@onur2009.com", phone: "+359 000 000 000", formTitle: "Бизнес запитвания", placeholders: { name: "Име и фамилия", email: "Корпоративен имейл", company: "Компания", department: "Отдел", message: "Опишете запитването" }, submit: "Изпрати", departments: [{ title: "Логистика", description: "Транспорт, митници и флот." }, { title: "Ритейл", description: "Марка и магазинни операции." }, { title: "Човешки ресурси", description: "Кариери и корпоративна комуникация." }] },
    divisions: localizeDivisions("bg"),
  },
};

export function getTranslation(language: Language) {
  return translations[language];
}
