import type { Translation } from "./types";
import { pageImages } from "@/lib/pages";
import { nav } from "./common";

export const tr: Translation = {
    nav: nav.tr,
    languages: { en: "İngilizce", tr: "Türkçe", bg: "Bulgarca" },
    common: { requestQuote: "Teklif İste", requestAssessment: "Değerlendirme İste", selectLanguage: "Dil seç", brandsLabel: "Markalar" },
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
      partners: { eyebrow: "Sektör Liderlerinin Güvendiği Yapı", items: [
        { name: "Paradise Center", logo: "/images/partners/partner-footer.png" },
        { name: "Serdika Center", logo: "/images/partners/partner-85.png" },
        { name: "KAM Market", logo: "/images/partners/kam.png" },
        { name: "T Market", logo: "/images/partners/tmarket.png" },
        { name: "Carrefour", logo: "/images/partners/carrefour.png" },
        { name: "Kaufland", logo: "/images/partners/kaufland.png" },
        { name: "Princes", logo: "/images/partners/princess.png" },
        { name: "Fantastico", logo: "/images/partners/fantastico.png" },
        { name: "HIT", logo: "/images/partners/hit.png" },
        { name: "BILLA", logo: "/images/partners/billa.png" },
        { name: "Hesburger", logo: "/images/partners/hesburger.png" },
        { name: "eBag", logo: "/images/partners/partner-logo.png" },
        { name: "Metro", logo: "/images/partners/metro.png" },
        { name: "Hyatt Regency", logo: "/images/partners/hyatt.png" },
      ] },
      contact: { title: "Küresel operasyonlarınızı yükseltmeye hazır mısınız?", body: "Kurumsal ölçekte lojistik, ticaret ve dağıtım çözümleri için yönetici danışmanlık ekibimizle görüşün.", primary: "Satış Ekibiyle Görüş", secondary: "Ofisi Ara", email: "sales@onur2009.com", note: "Küresel lojistik, ticaret, perakende ve danışmanlık hizmetleri" },
    },
    servicesPage: {
    title: "İş Birimlerimiz",
    body:
      "Altinyildiz Group International altı ana birimde faaliyet gösterir ve global ölçekte premium B2B çözümler sunar. Derin sektör uzmanlığını operasyonel mükemmellik ile birleştiririz.",
    explore: "Birimi İncele",
    viewDetails: "Detayları Gör",
    exploreService: "Hizmeti İncele",
    visitBoutiques: "Butikleri Gör",
    discoverNetwork: "Ağı Keşfet",
    consult: "Bizimle Görüş",
    tags: ["Tarım & Ticaret", "Filo Bakımı", "Perakende & Moda", "FMCG Dağıtım", "Stratejik Danışmanlık"],
    footerBody: "Başarının mimarı. Küresel ticaret, lojistik ve danışmanlığı güvenilirlikle yapılandırıyoruz.",
    footerCopyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
    footerDivisions: "Birimler",
    footerBrands: "Markalar",
    footerLegal: "Yasal",
  },
    services: { eyebrow: "Hizmetlerimiz", title: "İş Birimlerimiz", body: "Yaş sebze meyve ticareti, lojistik, ticari araç servisi, perakende dağıtımı, gıda dağıtımı ve stratejik danışmanlığı kapsayan eksiksiz operasyon ekosistemi.", explore: "Birimi İncele" },
    retailPage: {
      readStory: "Hikayenin tamamını oku",
      statLabel: "Yıllık uzmanlık",
      heritageLabel: "Mirasımız",
      body: "Bulgaristan operasyonlarımız, tekstil ustalığının onlarca yıllık birikimini seçkin erkek giyimine taşır. Geleneksel terzilik tekniklerini çağdaş kurumsal estetikle birleştiriyoruz.",
      secondaryBody: "Her ürün, yapısal bütünlük ve profesyonel dinginlik taahhüdümüzü temsil eder.",
    },
    about: { eyebrow: "Kurumsal Profil", title: "2009'dan beri güvenilir küresel operasyonlar.", body: "Altinyildiz Group International ticaret, lojistik, perakende, servis ve danışmanlık birimlerini disiplinli bir platformda toplar.", purposeEyebrow: "Amacımız", purposeTitle: "Güven, Ölçek ve Süreklilik İçin Yapılandırıldı", purposeBody: "Grup, farklı operasyon birimlerini tek koordineli yapı altında toplar ve partnerlere güvenilir temas noktası sağlar.", cards: [{ title: "Vizyonumuz", description: "Premium ticaret, lojistik ve marka operasyonları için güvenilir bölgesel platform olmak." }, { title: "Misyonumuz", description: "Yapılandırılmış ekipler, güçlü ortaklıklar ve operasyon disipliniyle güvenilir hizmet sunmak." }] },
    aboutView: {
    title: "Küresel Başarının",
    accent: "Mimarları",
    body:
      "Altinyildiz Group International; ticaret, lojistik ve uzmanlaşmış hizmetlerde yenilik ve hassasiyet sağlayan çok yönlü bir yapıdır.",
    primary: "Birimleri İncele",
    secondary: "Tarihçemiz",
    purposeTitle: "Amacımız",
    purposeBody:
      "Kalite ve yapısal bütünlüğe bağlılıkla küresel ticaretin yönünü belirliyoruz. Sadece ticareti kolaylaştırmıyor, uluslararası büyümenin altyapısını kuruyoruz.",
    visionTitle: "Vizyonumuz",
    visionBody:
      "Kalıcı ortaklıklar kuran ve tüm operasyonel alanlarda sürdürülebilir mükemmelliğe öncülük eden, çok yönlü iş çözümlerinin küresel mimarı olmak.",
    missionTitle: "Misyonumuz",
    missionBody:
      "Yaş sebze meyve ticareti, gelişmiş lojistik ve uzman danışmanlığı entegre ederek paydaşlara ölçülebilir premium değer sunuyoruz.",
    footerBody:
      "Küresel tedarik zinciri ve kurumsal altyapının mimarları. Kuruluşumuzdan bu yana Avrupa ve ötesinde mükemmellik sunuyoruz.",
    footerDivisions: "Birimler",
    footerCorporate: "Kurumsal",
    copyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
    headquarters: "Merkez: Sofya, Bulgaristan",
  },
    galleryView: {
    title: "Operasyonlarımız",
    body: "Küresel lojistik ağımızı, premium perakende alanlarımızı ve modern servis merkezlerimizi gösteren görsel portföy.",
    filters: ["Tümü", "Kamyonlar", "Lojistik", "Perakende", "Servis Merkezleri", "Gıda Ürünleri"],
    items: [
      { title: "Küresel Yük Terminalleri", category: "Lojistik & Taşımacılık" },
      { title: "Avrupa Filosu", category: "Kamyonlar" },
      { title: "Amiral Mağaza", category: "Perakende" },
      { title: "Gelişmiş Diagnostik", category: "Servis Merkezleri" },
      { title: "Soğuk Depo Merkezi", category: "Gıda Ürünleri" },
      { title: "Küresel Merkez", category: "Kurumsal" },
    ],
    footerBody: "Başarının mimarı. Farklı iş alanlarında global otorite ve yapısal güvenilirlik sunuyoruz.",
    footerSectors: "Sektörler",
    footerBrands: "Markalar",
    footerLegal: "Yasal",
    copyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
  },
    contactView: {
    title: "İletişim",
    body:
      "Küresel ekibimizle iletişime geçin. Lojistik çözümler, perakende ortaklıkları veya genel talepler için ilgili ekiplerimiz yardımcı olmaya hazır.",
    headquarters: "Merkez",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    emailLabel: "E-posta",
    address: "123 Global Commerce Blvd,\nSuite 4500\nİstanbul, Türkiye",
    phone: "+90 212 555 0199",
    email: "contact@altinyildizgroup.com",
    departments: [
      { title: "Lojistik", email: "logistics@altinyildiz.com", type: "logistics" },
      { title: "Perakende", email: "retail@altinyildiz.com", type: "retail" },
      { title: "İnsan Kaynakları", email: "hr@altinyildiz.com", type: "hr" },
    ],
    formTitle: "İş Talepleri",
    fields: { firstName: "Ad", lastName: "Soyad", businessEmail: "İş E-postası", company: "Şirket Adı", department: "Departman", message: "Mesaj" },
    placeholders: { firstName: "Jane", lastName: "Doe", businessEmail: "jane@company.com", company: "Acme Corp", department: "Departman seçin...", message: "Size nasıl yardımcı olabiliriz?" },
    submit: "Mesaj Gönder",
    footerBody: "Küresel ticaret, lojistik ve perakendenin geleceğini mükemmellik odağıyla inşa ediyoruz.",
    footerCopyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
    footerDivisions: "Birimler",
    footerSubsidiaries: "Bağlı Şirketler",
    footerLegal: "Yasal",
  },
    bulgatexView: {
    badge: "Bulgatex Consulting",
    title: "Küresel Pazarlar için Stratejik Mimari",
    body:
      "Pazar giriş desteği, detaylı ithalat/ihracat lojistiği ve tekstil ticareti danışmanlığı. Avrupa ve Asya’da büyüyen şirketler için sağlam iş geliştirme stratejileri tasarlarız.",
    primary: "Hizmetleri İncele",
    secondary: "Uzmanla Görüş",
    competenciesTitle: "Temel Yetkinlikler",
    competenciesBody:
      "Uluslararası ticaret karmaşıklıklarına uygulanan veri odaklı metodolojiler. Danışmanlık çerçevemiz operasyonel deneyim üzerine kuruludur.",
    learnMore: "Detayları Gör",
    cards: [
      {
        title: "Pazar Giriş Desteği",
        body:
          "Yeni pazarlara giriş için kapsamlı stratejik planlama, risk analizi, mevzuat uyum yol haritası ve rekabet haritalaması.",
        tags: ["Risk Analizi", "Mevzuat Uyumu"],
      },
      {
        title: "Partner Geliştirme",
        body:
          "Pazar varlığınızı güçlendirmek için kritik ortaklıkları ve dağıtım kanallarını belirleme, değerlendirme ve kurma.",
      },
      {
        title: "Tekstil Ticaret Uzmanlığı",
        body:
          "Ham madde tedarikinden nihai ürün dağıtımına kadar tekstil tedarik zincirinizi optimize eden sektör ağı.",
      },
      {
        title: "İthalat/İhracat Danışmanlığı",
        body:
          "Gümrük süreçleri, tarife sınıflandırmaları ve sınır ötesi lojistik akışlarında operasyonel verimlilik.",
      },
    ],
    processTitle: "Stratejik Entegrasyon Süreci",
    processBody: "Yeni pazarlarda operasyonel varlık kurmak için aşamalı ve metodik yaklaşım.",
    phases: [
      {
        title: "Faz 01: Denetim & Analiz",
        body:
          "Mevcut kabiliyetler, hedef pazar dinamikleri ve mevzuat gereksinimleri detaylı incelenir.",
      },
      {
        title: "Faz 02: Stratejik Planlama",
        body:
          "Partner profilleri, tedarik zinciri rotası ve ilk 24 aya yönelik finansal modelleme hazırlanır.",
      },
      {
        title: "Faz 03: Uygulama & Entegrasyon",
        body:
          "Müzakereler, yasal yapı ve operasyonel kurulumda sahadaki stratejik mimarınız oluruz.",
      },
    ],
  },
    freshProduceView: {
    heroEyebrow: "Küresel Yaş Sebze Meyve Ticareti",
    heroTitle: "Küresel Taze Ürün Tedarik Zincirini Tasarlıyoruz.",
    heroBody:
      "Premium narenciye, sert çekirdekli meyveler ve taze sebzeleri sınırlar ötesine ulaştırıyoruz. Tarladan uluslararası pazarlara kalite kontrol ve operasyonel bütünlük sağlıyoruz.",
    heroPrimary: "Kategorileri İncele",
    heroSecondary: "Tedarik Zincirini Gör",
    categoriesTitle: "Premium Kategoriler",
    categoriesBody:
      "Küresel kaynak, kusursuz teslimat. Yaş sebze meyve alanındaki temel odaklarımız.",
    categories: [
      {
        title: "Narenciye",
        body: "Portakal, limon, mandalina, greyfurt.",
        badge: "Yüksek Hacimli İhracat",
        image: pageImages.freshCitrus,
        size: "wide",
      },
      {
        title: "Sert Çekirdekli Meyveler",
        body: "Şeftali, nektarin, erik.",
        image: pageImages.freshStone,
        size: "small",
      },
      {
        title: "Taze Sebzeler",
        body: "Domates, biber, salatalık.",
        image: pageImages.freshVegetables,
        size: "medium",
      },
      {
        title: "Egzotik & Sezonluk",
        body:
          "Yüksek talep gören egzotik meyve ve sezonluk ürünler, sıkı sıcaklık kontrol protokolleriyle yönetilir.",
        size: "text",
      },
    ],
    catalogLabel: "Tam Kataloğu Gör",
    operationsTitle: "Hassas İthalat & İhracat Operasyonları",
    operationsBody:
      "Tedarik zinciri mimarimiz mutlak güvenilirlik için kuruludur. Hasat anından nihai teslimata kadar kusursuz soğuk zincir korunur.",
    features: [
      {
        title: "Gelişmiş Soğuk Zincir",
        body: "IoT sensörleriyle sürekli sıcaklık takibi sayesinde optimum tazelik sağlanır.",
      },
      {
        title: "Kalite Kontrol Standartları",
        body:
          "Uluslararası BRC ve GlobalGAP standartlarıyla uyumlu çok aşamalı denetim protokolleri.",
      },
    ],
    metricValue: "40+",
    metricLabel: "Hizmet Verilen Ülke",
    footerBody:
      "Küresel tedarik zincirini tasarlıyoruz. Yaş sebze meyve, lojistik ve danışmanlıkta premium hizmetler.",
    footerCopyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
    footerDivisions: "Birimler",
    footerLegal: "Yasal",
    legalExtra: [
      { label: "Bulgatex Consulting", href: "/bulgatex-consulting" },
      { label: "Altinyildiz Classics Bulgaria", href: "/retail-fashion" },
    ],
  },
    logisticsTransportView: {
    heroEyebrow: "Küresel Lojistik Birimi",
    heroTitle: "Hassas Taşımacılık,",
    heroAccent: "Küresel Ölçek.",
    heroBody:
      "Yüksek öncelikli B2B operasyonlar için tasarlandı. Yapısal güvenilirlik, vizyoner tedarik zinciri çözümleri ve köklü bir global liderin güvenini sunuyoruz.",
    heroPrimary: "Filomuzu İncele",
    heroSecondary: "Operasyon Haritası",
    operationsTitle: "Tedarik Zincirinin Mimarları",
    operationsBody:
      "Uluslararası sınırlarda güvenilirlik ve hız için tasarlanmış kapsamlı lojistik çözümler.",
    roadTitle: "Karayolu Taşımacılığı",
    roadBody:
      "Temel uzmanlığımız. Kesintisiz tedarik hatları için modern ve büyük ölçekli filo işletiyoruz. Standart yükten sıcaklık kontrollü lojistiğe kadar karayolu ağımız bölgesel ticaretin omurgasıdır.",
    roadItems: ["FTL & LTL Hizmetleri", "Özel Kargo Elleçleme"],
    freightTitle: "Freight Forwarding",
    freightBody:
      "Hava, deniz ve demiryolu yüklerinin kusursuz entegrasyonu ile global tedarik zinciri akışınızı optimize eder.",
    freightLink: "Kabiliyetleri Gör",
    customsTitle: "Sürtünmesiz Gümrük Süreci",
    customsSteps: [
      {
        title: "Ön Kontrol Doğrulaması",
        body: "Sınır gecikmelerini önlemek için otomatik belge kontrolü.",
      },
      {
        title: "Dedike Gümrük Müşavirliği",
        body: "Karmaşık uluslararası tarifeleri yöneten şirket içi uzmanlar.",
      },
    ],
    fleetTitle: "Modern, Sürdürülebilir Filo",
    fleetBody: "Euro 6 uyumlu araçlar, havacılık düzeyinde sıkı standartlarla bakımdan geçirilir.",
    footprintTitle: "Operasyonel Kapsam",
    footprintBody: "Avrupa ve Asya’daki stratejik ekonomik merkezleri birbirine bağlarız.",
    mapTitle: "Etkileşimli Harita Entegrasyonu Bekleniyor",
    mapBody: "Türkiye, Bulgaristan ve geniş Avrupa transit rotalarını bağlar.",
    footerBody:
      "Premium lojistik, yaş sebze meyve ticareti ve güçlü kurumsal hizmetlerle başarıyı tasarlıyoruz.",
    footerCta: "Kurumsal İletişim",
    footerCopyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
    footerDivisions: "Birimler",
    footerBrands: "Markalar",
    footerLegal: "Yasal",
  },
    contact: { eyebrow: "İletişim", title: "Bize Ulaşın", body: "İş talepleri, lojistik koordinasyonu, perakende operasyonları veya ortaklık görüşmeleri için doğru departmana ulaşın.", headquarters: "Merkez", address: "Bulgaristan ve uluslararası operasyon ağı", email: "sales@onur2009.com", phone: "+359 000 000 000", formTitle: "İş Talepleri", placeholders: { name: "Ad soyad", email: "Kurumsal e-posta", company: "Şirket", department: "Departman", message: "Talebinizi yazın" }, submit: "Talep Gönder", departments: [{ title: "Lojistik", description: "Nakliye, gümrük ve filo operasyonları." }, { title: "Perakende", description: "Marka ve mağaza operasyonları." }, { title: "İnsan Kaynakları", description: "Kariyer ve kurumsal iletişim." }] },
    sobaklava: {
    heroBadge: "SO BAKLAVA",
    heroTitle: "Geleneksel Türk Lezzetlerini Avrupa ile Buluşturuyoruz",
    heroBody:
      "Onur 2009 tarafından geliştirilen ve yönetilen SO BAKLAVA, Türkiye'nin seçkin tatlarını Bulgaristan ve Avrupa pazarındaki tüketicilerle buluşturur.",
    productsCta: "Ürünleri Keşfet",
    storyCta: "Hikayemiz",
    heritageYears: "Yıllık Tecrübe",
    aboutLabel: "Hakkımızda",
    aboutTitle: "Türk Gastronomisi İçin Güvenilir Avrupa Operasyonu",
    aboutBody:
      "SO BAKLAVA, geleneksel Türk tatlılarını ve unlu mamullerini yüksek kalite standartlarında sunarken, üreticilerimizin yıllara dayanan ustalığını güvenilir bir tedarik ağıyla uluslararası pazarlara taşır.",
    aboutBodyAlt:
      "Onur 2009, 2022 tarihinden bu yana markanın Bulgaristan'daki ürün tedariği, ithalat, lojistik, depolama, satış, pazarlama, mağaza operasyonları ve müşteri hizmetleri süreçlerini yönetir.",
    experienceLabel: "Üretici Ağı",
    experienceTitle: "Türkiye'nin Lider Üreticileriyle Güçlü İş Birlikleri",
    experienceBody:
      "Ürün portföyümüz, Türkiye'nin alanında lider üreticileriyle kurulan iş birlikleri üzerine kuruludur. Baklava çeşitleri 1953 yılından bu yana faaliyet gösteren Seydioğlu Baklava tarafından, börek ve dondurulmuş unlu mamuller ise Aslı Börek tarafından üretilir.",
    qualityTitle: "Kalite Garantisi",
    craftTitle: "Usta Eller",
    productsLabel: "Özel Seçki",
    productsTitle: "Özel Lezzetlerimiz",
    producerCards: [
      {
        title: "Seydioğlu Baklava",
        body: "1953'ten bu yana köklü baklava üretimi.",
      },
      {
        title: "Aslı Börek",
        body: "Börek ve dondurulmuş unlu mamul üretimi.",
      },
    ],
    products: [
      {
        title: "Cevizli Soğuk Baklava",
        price: "Premium seri",
        badge: "Soğuk lezzet",
        description: "Sütlü kreması, hafif çikolata dokusu ve cevizli iç dengesiyle ferah sunum.",
      },
      {
        title: "Havuç Dilimi",
        price: "Signature",
        badge: "Usta seçimi",
        description: "Dilim sunumu, kremamsı dolgunluk ve rafine fıstık bitişiyle özel servis.",
      },
      {
        title: "Şöbiyet",
        price: "Limited",
        badge: "Günlük üretim",
        description: "Kaymak, fıstık ve çıtır dokunun vitrin satışına hazır premium yorumu.",
      },
    ],
    growthLabel: "Operasyon",
    growthTitle: "Üretimden Son Tüketiciye Tazelik Güvencesi",
    growthBody:
      "Bulgaristan'daki mağazalarımız, kurumsal iş ortaklarımız ve geniş dağıtım ağımızla her gün daha fazla tüketiciye ulaşıyor; Türk gastronomi kültürünü Avrupa'da doğru şekilde temsil ediyoruz.",
    growthChartTitle: "Tedarik ve Pazar Erişimi",
    growthChartLabel: "Büyüme Endeksi",
    growthChartSupply: "Operasyon Kapasitesi",
    growthChartReach: "Pazar Erişimi",
    satisfactionLabel: "Müşteri Memnuniyeti",
    guestLabel: "Mutlu Misafir",
    ctaTitle: "Balkanlar'ın Güçlü Türk Tatlı Markalarından Biri Olma Hedefi",
    ctaBody:
      "Premium perakende, franchise ve dağıtım görüşmeleri doğru ürün deneyimiyle başlar.",
    stores: "Mağazalarımız",
    franchise: "Franchise Bilgisi",
    operations: [
      {
        title: "Tedarik & İthalat",
        body: "Ürün tedariği ve ithalat süreçleri Onur 2009 tarafından yönetilir.",
      },
      {
        title: "Lojistik & Depolama",
        body: "Tazelik ve kalite, üretimden son tüketiciye kadar güvence altına alınır.",
      },
      {
        title: "Satış & Mağaza Operasyonu",
        body: "Satış, pazarlama, mağaza operasyonları ve müşteri hizmetleri tek yapı altında yürütülür.",
      },
    ],
  },
    divisions: {
      "logistics-transport": {
            title: "Lojistik & Taşımacılık",
            eyebrow: "Küresel Lojistik",
            headline: "Hassas Taşımacılık, Küresel Ölçek.",
            description: "Freight forwarding, karayolu taşımacılığı, gümrük işlemleri ve sürdürülebilir filo operasyonları için kontrollü lojistik ağı.",
            introTitle: "Tedarik Zincirinin Mimarları",
            introBody: "ONUR2009, kurumsal teslimat ihtiyaçları için planlama, broker desteği ve filo görünürlüğüyle karmaşık taşımaları koordine eder.",
            cardsTitle: "Temel Operasyonlar",
            cardsIntro: "Güvenilirlik, hız ve mevzuat güveni için yapılandırılmış yüksek hassasiyetli lojistik hizmetleri.",
            cards: [
                  {
                        title: "Karayolu Taşımacılığı",
                        description: "Rota planlama ve filo takibiyle özel karayolu operasyonları."
                  },
                  {
                        title: "Freight Forwarding",
                        description: "Zamana duyarlı yükler için sınır ötesi nakliye koordinasyonu."
                  },
                  {
                        title: "Gümrükleme",
                        description: "Ön kontrol ve özel broker akışlarıyla düzenli gümrük süreçleri."
                  },
                  {
                        title: "Sürdürülebilir Filo",
                        description: "Kapasite ve verimlilik için tasarlanmış modern filo planlaması."
                  }
            ],
            processTitle: "Operasyonel Kapsam",
            processIntro: "Tedarikçileri, limanları, gümrük noktalarını ve son teslimatı bağlayan bölgesel ağ.",
            process: [
                  "Rota analizi",
                  "Yük konsolidasyonu",
                  "Gümrük doğrulama",
                  "Son teslimat"
            ]
      },
      "fresh-produce-trade": {
            title: "Yaş Sebze Meyve Ticareti",
            eyebrow: "Premium Kategoriler",
            headline: "Tazelik, kaynaktan varış noktasına kadar kontrollü.",
            description: "Premium ürünler için sertifikalı üreticiler, soğuk zincir disiplini ve uluslararası ithalat-ihracat operasyonları.",
            introTitle: "Hassas İthalat & İhracat Operasyonları",
            introBody: "Bu birim, tutarlı ticari kalite için premium ürün tedariği, kontrol, soğuk taşıma ve teslimat planlamasını yönetir.",
            cardsTitle: "Premium Kategoriler",
            cardsIntro: "Tazelik, sezonluk yapı ve güvenilir dağıtım etrafında organize edilen ürün kategorileri.",
            cards: [
                  {
                        title: "Narenciye",
                        description: "Kontrollü elleçleme ile yüksek hacimli narenciye programları."
                  },
                  {
                        title: "Sert Çekirdekli Meyveler",
                        description: "Sıkı kalite sınıflandırmasıyla sezonluk tedarik."
                  },
                  {
                        title: "Taze Sebzeler",
                        description: "Güvenilir tedarikçilerden günlük taze sebze akışı."
                  },
                  {
                        title: "Egzotik & Sezonluk",
                        description: "Premium perakende ve toptan talep için özel ürün seçkisi."
                  }
            ],
            processTitle: "Tedarik Zinciri Standartları",
            processIntro: "Sıcaklık kontrolü, denetim, dokümantasyon ve teslimat pencereleri ürün bütünlüğünü korur.",
            process: [
                  "Üretici tedariği",
                  "Kalite kontrol",
                  "Gelişmiş soğuk zincir",
                  "Uluslararası dağıtım"
            ]
      },
      "auto-truck-service": {
            title: "Oto & Kamyon Servisi",
            eyebrow: "Filo Mühendisliği",
            headline: "Hassas Mühendislik. Tavizsiz Güvenilirlik.",
            description: "Filo sürekliliği için ticari araç servisi, önleyici bakım, gelişmiş arıza tespiti ve yedek parça desteği.",
            introTitle: "Yetkili Parça Envanteri",
            introBody: "Önleyici bakım, uzman diagnostik ve usta teknisyenler etrafında kurulan teknik servis operasyonu.",
            cardsTitle: "Temel Yetkinlikler",
            cardsIntro: "Kesintisiz iş operasyonları ve güvenilirlik odaklı filo servis kabiliyetleri.",
            cards: [
                  {
                        title: "Önleyici Bakım",
                        description: "Ticari filo sürekliliği için planlı servis programları."
                  },
                  {
                        title: "Diagnostik & Onarım",
                        description: "Karmaşık arıza tespiti ve hassas onarım iş akışları."
                  },
                  {
                        title: "Parça Envanteri",
                        description: "Daha hızlı servis dönüşü için yetkili parça bulunurluğu."
                  },
                  {
                        title: "Usta Teknisyenler",
                        description: "Ağır vasıta araçlar için uzman teknik ekipler."
                  }
            ],
            processTitle: "Servis Değerlendirmesi",
            processIntro: "Ticari müşteriler için yapılandırılmış kabul ve servis akışı.",
            process: [
                  "Filo kabulü",
                  "Teknik değerlendirme",
                  "Parça planlama",
                  "Servis tamamlama"
            ]
      },
      "retail-fashion": {
            title: "Altınyıldız Classics Bulgaristan",
            eyebrow: "Perakende & Moda",
            headline: "Erkek Giyim Sanatında Ustalık",
            description: "Bulgaristan genelinde premium klasik erkek giyim için özel perakende dağıtımı ve marka yönetimi.",
            introTitle: "Premium Perakende Ağı",
            introBody: "Altınyıldız Classics BG, seçkin erkek giyim ürünlerini dikkatle yönetilen perakende operasyonları ve marka sunumuyla buluşturur.",
            cardsTitle: "Perakende Kabiliyetleri",
            cardsIntro: "Tutarlı müşteri deneyimi için marka, mağaza ve dağıtım kabiliyetleri.",
            cards: [
                  {
                        title: "Marka Yönetimi",
                        description: "Premium erkek giyim standartlarının tutarlı sunumu."
                  },
                  {
                        title: "Perakende Operasyonları",
                        description: "Mağaza uygulaması, görsel düzenleme ve yerel pazar yönetimi."
                  },
                  {
                        title: "Dağıtım Merkezleri",
                        description: "Pazarda güvenilir ürün bulunurluğu."
                  },
                  {
                        title: "Müşteri Deneyimi",
                        description: "Premium perakende için profesyonel hizmet kültürü."
                  }
            ]
      },
      "sobaklava-distribution": {
            title: "SO BAKLAVA",
            eyebrow: "Premium Türk Tatlıları",
            headline: "Tatlı Mükemmelliğin Mirası.",
            description: "Onur 2009 operasyon ağı altında Türk tatlıları, baklava seçkisi, perakende ürünleri ve premium dağıtım yapısı.",
            introTitle: "Marka Mirası",
            introBody: "SO BAKLAVA, geleneksel Türk tatlı ustalığını disiplinli modern dağıtım yapısıyla Bulgaristan ve Avrupa pazarına taşır.",
            cardsTitle: "Seçilmiş Portföy",
            cardsIntro: "Kalite, tazelik, hediyeleşme ve perakende hazırlığı etrafında tasarlanan ürün vitrini.",
            cards: [
                  {
                        title: "Cevizli Soğuk Baklava",
                        description: "Sütlü dokusu, ceviz dolgusu ve premium sunumuyla soğuk baklava seçkisi."
                  },
                  {
                        title: "Havuç Dilimi",
                        description: "Yoğun fıstık dolgusu ve özel dilim sunumuyla imza lezzet."
                  },
                  {
                        title: "Şöbiyet",
                        description: "Kaymak, fıstık ve çıtır yufka dokusunu birleştiren geleneksel tat."
                  },
                  {
                        title: "Dağıtım Kalitesi",
                        description: "Ürün bütünlüğü için kontrollü taşıma, depolama ve mağaza operasyonu."
                  }
            ]
      },
      "bulgatex-consulting": {
            title: "Bulgatex Consulting",
            eyebrow: "Stratejik Danışmanlık",
            headline: "Sınır ötesi büyüme için stratejik entegrasyon.",
            description: "Pazar giriş desteği, ortaklık geliştirme, tekstil ticareti uzmanlığı ve ithalat-ihracat danışmanlığı.",
            introTitle: "Stratejik Entegrasyon Süreci",
            introBody: "Bulgatex Consulting, bölgesel ticarete giren veya büyüyen şirketleri analiz, ortaklık tasarımı ve uygulama yoluyla destekler.",
            cardsTitle: "Temel Yetkinlikler",
            cardsIntro: "Pazar erişimi, ticaret operasyonları ve tekstil sektörü uzmanlığı için danışmanlık kabiliyetleri.",
            cards: [
                  {
                        title: "Pazar Giriş Desteği",
                        description: "Bölgesel genişleme ve lansman planlaması için yapılandırılmış destek."
                  },
                  {
                        title: "Ortaklık Geliştirme",
                        description: "Nitelikli yerel partnerlerle ticari ilişki geliştirme."
                  },
                  {
                        title: "Tekstil Ticaret Uzmanlığı",
                        description: "Tekstil sektörü odaklı bilgi ve tedarik içgörüsü."
                  },
                  {
                        title: "İthalat/İhracat Danışmanlığı",
                        description: "Ticaret dokümantasyonu, süreç tasarımı ve operasyonel yönlendirme."
                  }
            ],
            processTitle: "Danışmanlık Aşamaları",
            processIntro: "Analiz, strateji ve uygulama olarak üç aşamalı model.",
            process: [
                  "Denetim & Analiz",
                  "Stratejik Planlama",
                  "Uygulama & Entegrasyon"
            ]
      }
},
  };
