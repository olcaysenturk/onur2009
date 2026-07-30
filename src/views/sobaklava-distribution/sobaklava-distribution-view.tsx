"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Coffee,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Utensils,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";

const productImages = [
  pageImages.sobaklavaCevizliSoguk,
  pageImages.sobaklavaHavucDilimi,
  pageImages.sobaklavaSobiyet,
];

const growthBars = [
  { year: "2022", supply: 42, reach: 52 },
  { year: "2023", supply: 58, reach: 68 },
  { year: "2024", supply: 72, reach: 82 },
  { year: "2025", supply: 86, reach: 96 },
];

const copy = {
  en: {
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
  tr: {
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
  bg: {
    heroBadge: "SO BAKLAVA",
    heroTitle: "Свързваме традиционните турски вкусове с Европа",
    heroBody:
      "Разработена и управлявана от Onur 2009, SO BAKLAVA представя подбрани турски десерти и печива на потребителите в България и Европа.",
    productsCta: "Разгледай продуктите",
    storyCta: "Нашата история",
    heritageYears: "Години опит",
    aboutLabel: "За нас",
    aboutTitle: "Надеждна европейска операция за турската гастрономия",
    aboutBody:
      "SO BAKLAVA представя традиционни турски десерти и печива при високи стандарти за качество, като пренася опита на доверени производители към международните пазари.",
    aboutBodyAlt:
      "От 2022 г. Onur 2009 управлява доставките, вноса, логистиката, складирането, продажбите, маркетинга, магазинните операции и обслужването на клиенти в България.",
    experienceLabel: "Производителска мрежа",
    experienceTitle: "Силни партньорства с водещи турски производители",
    experienceBody:
      "Портфолиото се изгражда с водещи производители от Турция. Баклавата се произвежда от Seydioglu Baklava, активна от 1953 г., а баниците и замразените печива - от Asli Borek.",
    qualityTitle: "Гаранция за качество",
    craftTitle: "Майсторска изработка",
    productsLabel: "Специална селекция",
    productsTitle: "Нашите специални вкусове",
    producerCards: [
      {
        title: "Seydioglu Baklava",
        body: "Утвърдено производство на баклава от 1953 г.",
      },
      {
        title: "Asli Borek",
        body: "Производство на баници и замразени печива.",
      },
    ],
    products: [
      {
        title: "Студена баклава с орехи",
        price: "Премиум линия",
        badge: "Студен десерт",
        description: "Свеж профил с млечен крем, фин шоколадов нюанс и балансиран орехов пълнеж.",
      },
      {
        title: "Havuc Dilimi",
        price: "Signature",
        badge: "Избор на майстора",
        description: "Специално сервирано парче с богата текстура и фин завършек от шамфъстък.",
      },
      {
        title: "Sobiyet",
        price: "Limited",
        badge: "Дневно производство",
        description: "Премиум интерпретация на крем, шамфъстък и хрупкава текстура.",
      },
    ],
    growthLabel: "Операции",
    growthTitle: "Гарантирана свежест от производство до потребител",
    growthBody:
      "Чрез магазините в България, корпоративните партньори и широката дистрибуционна мрежа SO BAKLAVA достига до повече потребители всеки ден.",
    growthChartTitle: "Доставки и пазарен обхват",
    growthChartLabel: "Индекс на растеж",
    growthChartSupply: "Оперативен капацитет",
    growthChartReach: "Пазарен обхват",
    satisfactionLabel: "Удовлетвореност на клиентите",
    guestLabel: "Доволни гости",
    ctaTitle: "Цел: една от най-силните турски десертни марки на Балканите",
    ctaBody:
      "Премиум ритейл, франчайз и дистрибуционни разговори започват с правилното продуктово изживяване.",
    stores: "Магазини",
    franchise: "Франчайз информация",
    operations: [
      {
        title: "Доставки & Внос",
        body: "Доставките и вносът се управляват от Onur 2009.",
      },
      {
        title: "Логистика & Складиране",
        body: "Свежестта и качеството се гарантират от производството до крайния потребител.",
      },
      {
        title: "Продажби & Магазинни операции",
        body: "Продажбите, маркетингът, магазинните операции и обслужването се управляват в една структура.",
      },
    ],
  },
};

export default function SobaklavaDistributionView() {
  const { language } = useLanguage();
  const t = copy[language];
  const products = t.products.map((product, index) => ({
    ...product,
    image: productImages[index],
  }));

  return (
    <>
      <Header />
      <main className="bg-[#fbf9f4] pt-16 text-[#1b1c19] md:pt-20">
        <section className="relative flex min-h-[620px] items-center overflow-hidden px-4 py-20 text-white md:min-h-[760px] md:px-10">
          <Image
            src={pageImages.sobaklavaHero}
            alt={t.heroTitle}
            fill
            priority
            className="scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-[#1b1c19]/58" />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#775a19]/70 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#ffdea5] backdrop-blur">
              <Sparkles aria-hidden className="h-3.5 w-3.5" />
              {t.heroBadge}
            </span>
            <h1 className="mx-auto mt-6 max-w-[850px] font-display text-[40px] font-bold leading-[48px] text-white md:text-[64px] md:leading-[72px]">
              {t.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-[#f2f1ec]/90 md:text-lg md:leading-8">
              {t.heroBody}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#775a19] px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_16px_40px_rgba(78,52,46,0.18)] transition-colors hover:bg-[#5d4201]"
              >
                {t.productsCta}
              </Link>
              <Link
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
              >
                {t.storyCta}
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-6">
              <Image
                src={pageImages.sobaklavaChef}
                alt={t.aboutTitle}
                width={720}
                height={820}
                className="aspect-[4/5] w-full rounded-lg object-cover shadow-[0_20px_55px_rgba(78,52,46,0.10)]"
              />
              <div className="absolute -bottom-6 right-6 hidden rounded bg-white px-7 py-6 shadow-[0_18px_45px_rgba(78,52,46,0.12)] md:block">
                <p className="font-display text-3xl font-bold text-[#775a19]">70+</p>
                <p className="mt-1 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#4e4639]">
                  {t.heritageYears}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#775a19]">
                {t.aboutLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[48px] md:leading-[56px]">
                {t.aboutTitle}
              </h2>
              <div className="mt-7 space-y-5 text-base leading-7 text-[#4e4639]">
                <p>{t.aboutBody}</p>
                <p>{t.aboutBodyAlt}</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#d1c5b4] pt-8">
                <div>
                  <Star aria-hidden className="h-7 w-7 text-[#775a19]" />
                  <p className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b1c19]">
                    {t.qualityTitle}
                  </p>
                </div>
                <div>
                  <Utensils aria-hidden className="h-7 w-7 text-[#775a19]" />
                  <p className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b1c19]">
                    {t.craftTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-white px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 text-center">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#775a19]">
                {t.productsLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[48px] md:leading-[56px]">
                {t.productsTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {products.map((product) => (
                <article key={product.title} className="group">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-white shadow-[0_18px_40px_rgba(78,52,46,0.08)]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-[#c8f17a]/90 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-[#364e00]">
                      {product.badge}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-[#1b1c19]">
                      {product.title}
                    </h3>
                    <span className="h-px min-w-6 flex-1 border-b border-dotted border-[#d1c5b4]" />
                    <p className="whitespace-nowrap text-sm font-bold text-[#775a19]">{product.price}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#4e4639]">{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f0eee9] px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#775a19]">
                {t.experienceLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[48px] md:leading-[56px]">
                {t.experienceTitle}
              </h2>
              <p className="mt-6 text-base leading-7 text-[#4e4639]">{t.experienceBody}</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded bg-white px-5 py-4 shadow-[0_14px_30px_rgba(78,52,46,0.08)]">
                  <Coffee aria-hidden className="h-5 w-5 text-[#775a19]" />
                  <p className="mt-3 text-sm font-semibold text-[#1b1c19]">{t.producerCards[0].title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4e4639]">{t.producerCards[0].body}</p>
                </div>
                <div className="rounded bg-white px-5 py-4 shadow-[0_14px_30px_rgba(78,52,46,0.08)]">
                  <Store aria-hidden className="h-5 w-5 text-[#775a19]" />
                  <p className="mt-3 text-sm font-semibold text-[#1b1c19]">{t.producerCards[1].title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4e4639]">{t.producerCards[1].body}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Image
                src={pageImages.sobaklavaStore}
                alt={t.experienceTitle}
                width={1040}
                height={680}
                className="aspect-[13/8] w-full rounded-lg object-cover shadow-[0_22px_55px_rgba(78,52,46,0.12)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#151713] px-4 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="rounded-lg bg-white p-6 text-[#1b1c19] shadow-[0_20px_55px_rgba(0,0,0,0.2)] lg:col-span-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#775a19]">
                    {t.growthChartLabel}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#1b1c19]">
                    {t.growthChartTitle}
                  </h3>
                </div>
                <div className="rounded-full bg-[#f0eee9] px-3 py-1 text-xs font-bold text-[#775a19]">
                  2022-2025
                </div>
              </div>

              <div className="mt-8 grid min-h-[260px] grid-cols-[36px_1fr] gap-4">
                <div className="flex flex-col justify-between pb-8 pt-2 text-right text-[10px] font-semibold text-[#7f7667]">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                </div>
                <div className="relative border-l border-b border-[#d1c5b4]">
                  <div className="absolute inset-0 grid grid-rows-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span key={index} className="border-t border-[#e4e2dd]" />
                    ))}
                  </div>
                  <div className="relative z-10 flex h-full items-end justify-around gap-4 px-4 pb-8">
                    {growthBars.map((bar) => (
                      <div key={bar.year} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                        <div className="flex h-full w-full max-w-[64px] items-end justify-center gap-2">
                          <span
                            className="w-5 rounded-t bg-[#c5a059] shadow-[0_8px_18px_rgba(119,90,25,0.18)]"
                            style={{ height: `${bar.supply}%` }}
                            aria-label={`${bar.year} ${t.growthChartSupply} ${bar.supply}`}
                          />
                          <span
                            className="w-5 rounded-t bg-[#add461] shadow-[0_8px_18px_rgba(73,104,0,0.16)]"
                            style={{ height: `${bar.reach}%` }}
                            aria-label={`${bar.year} ${t.growthChartReach} ${bar.reach}`}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-[#4e4639]">{bar.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 border-t border-[#e4e2dd] pt-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4e4639]">
                  <span className="h-3 w-3 rounded-sm bg-[#c5a059]" />
                  {t.growthChartSupply}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4e4639]">
                  <span className="h-3 w-3 rounded-sm bg-[#add461]" />
                  {t.growthChartReach}
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#e9c176]">
                {t.growthLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-white md:text-[48px] md:leading-[56px]">
                {t.growthTitle}
              </h2>
              <p className="mt-6 max-w-[560px] text-base italic leading-7 text-white/70">{t.growthBody}</p>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <Award aria-hidden className="mb-3 h-6 w-6 text-[#e9c176]" />
                  <p className="font-display text-3xl font-bold text-[#e9c176]">%100</p>
                  <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                    {t.satisfactionLabel}
                  </p>
                </div>
                <div>
                  <BarChart3 aria-hidden className="mb-3 h-6 w-6 text-[#e9c176]" />
                  <p className="font-display text-3xl font-bold text-[#e9c176]">900k+</p>
                  <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                    {t.guestLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 overflow-hidden rounded-2xl bg-[#eae8e3] shadow-[0_22px_60px_rgba(78,52,46,0.10)] md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <ShieldCheck aria-hidden className="mb-6 h-8 w-8 text-[#775a19]" />
              <h2 className="font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[44px] md:leading-[52px]">
                {t.ctaTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-[#4e4639]">{t.ctaBody}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded bg-[#775a19] px-6 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#5d4201]"
                >
                  {t.stores}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded border border-[#775a19] px-6 font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#775a19] transition-colors hover:bg-white/60"
                >
                  {t.franchise}
                </Link>
              </div>
            </div>
            <Image
              src={pageImages.sobaklavaChocolateClose}
              alt={t.ctaTitle}
              width={900}
              height={760}
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-10">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-3">
            {t.operations.map((item, index) => {
              const Icon = [PackageCheck, ShieldCheck, Sparkles][index];

              return (
                <div key={item.title} className="rounded-lg border border-[#d1c5b4] bg-[#fbf9f4] p-6">
                  <Icon aria-hidden className="h-6 w-6 text-[#775a19]" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#1b1c19]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4e4639]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
