"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Snowflake, Truck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";
import type { Language } from "@/types/i18n";

type FreshContent = {
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

const freshContent: Record<Language, FreshContent> = {
  en: {
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
  tr: {
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
  bg: {
    heroEyebrow: "Глобална търговия с пресни продукти",
    heroTitle: "Архитектура на глобалната верига за пресни продукти.",
    heroBody:
      "Доставяме премиум цитруси, костилкови плодове и свежи зеленчуци през граници с контрол на качеството от фермата до международните пазари.",
    heroPrimary: "Виж категориите",
    heroSecondary: "Виж веригата",
    categoriesTitle: "Премиум категории",
    categoriesBody:
      "Глобално снабдяване и безупречна доставка. Основните ни направления в сектора.",
    categories: [
      {
        title: "Цитрусови плодове",
        body: "Портокали, лимони, мандарини, грейпфрути.",
        badge: "Голям обем износ",
        image: pageImages.freshCitrus,
        size: "wide",
      },
      {
        title: "Костилкови плодове",
        body: "Праскови, нектарини, сливи.",
        image: pageImages.freshStone,
        size: "small",
      },
      {
        title: "Свежи зеленчуци",
        body: "Домати, чушки, краставици.",
        image: pageImages.freshVegetables,
        size: "medium",
      },
      {
        title: "Екзотични & сезонни",
        body:
          "Подбрани екзотични плодове и сезонни специалитети, управлявани със строг температурен контрол.",
        size: "text",
      },
    ],
    catalogLabel: "Виж пълния каталог",
    operationsTitle: "Прецизни импорт & експорт операции",
    operationsBody:
      "Нашата верига е изградена за абсолютна надеждност. От реколтата до финалната доставка поддържаме безупречна студена верига.",
    features: [
      {
        title: "Развита студена верига",
        body: "Постоянен температурен мониторинг чрез IoT сензори за оптимална свежест.",
      },
      {
        title: "Стандарти за качество",
        body:
          "Многостепенни инспекционни протоколи, съвместими с BRC и GlobalGAP.",
      },
    ],
    metricValue: "40+",
    metricLabel: "Обслужвани държави",
    footerBody:
      "Архитектура на глобалната верига. Премиум услуги в пресни продукти, логистика и консултиране.",
    footerCopyright: "© 2024 LOGO International. Всички права запазени.",
    footerDivisions: "Дивизии",
    footerLegal: "Правни",
    legalExtra: [
      { label: "Bulgatex Consulting", href: "/bulgatex-consulting" },
      { label: "Altinyildiz Classics Bulgaria", href: "/retail-fashion" },
    ],
  },
};

export function FreshProducePage() {
  const { language, t } = useLanguage();
  const content = freshContent[language];

  return (
    <>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-white">
        <Image
          src={pageImages.freshHero}
          alt={content.heroTitle}
          fill
          quality={100}
          priority
          className="object-cover opacity-90"
        />
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-8 px-5 py-16 md:px-16">
          <div className="col-span-12 rounded-lg border border-[#e9ecef]/60 border-l-8 border-l-primary bg-white/95 p-8 shadow-[0_12px_40px_rgba(39,59,120,0.08)] backdrop-blur-md md:col-span-8 md:p-12 lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eeeeee] px-4 py-2">
              <Truck aria-hidden className="h-4 w-4 text-primary" />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                {content.heroEyebrow}
              </span>
            </div>
            <h1 className="mb-6 font-display text-[40px] font-bold leading-[48px] tracking-[-0.01em] text-[#000613] md:text-[64px] md:leading-[72px] md:tracking-[-0.02em]">
              {content.heroTitle}
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-6 text-muted md:text-lg md:leading-7">
              {content.heroBody}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#fresh-categories"
                className="inline-flex min-h-14 items-center justify-center rounded bg-[#cda729] px-8 py-4 text-center font-display text-sm font-semibold tracking-[0.05em] text-[#000613] transition-opacity hover:opacity-90"
              >
                {content.heroPrimary}
              </a>
              <a
                href="#fresh-operations"
                className="inline-flex min-h-14 items-center justify-center rounded border-2 border-[#000613] bg-transparent px-8 py-4 text-center font-display text-sm font-semibold tracking-[0.05em] text-[#000613] transition-colors hover:bg-[#eeeeee]"
              >
                {content.heroSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="fresh-categories" className="mx-auto max-w-[1440px] px-5 py-16 md:px-16 md:py-[120px]">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-display text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-[#000613] md:text-[48px] md:leading-[56px]">
            {content.categoriesTitle}
          </h2>
          <p className="text-base leading-6 text-muted">{content.categoriesBody}</p>
        </div>

        <div className="grid auto-rows-[250px] grid-cols-1 gap-8 md:auto-rows-[300px] md:grid-cols-12">
          {content.categories.map((category) =>
            category.image ? (
              <article
                key={category.title}
                className={`group relative overflow-hidden rounded-lg border border-[#e9ecef] border-t-4 border-t-[#cda729] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(39,59,120,0.12)] ${
                  category.size === "wide"
                    ? "md:col-span-8"
                    : category.size === "medium"
                      ? "md:col-span-5"
                      : "md:col-span-4"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
                <div className="absolute bottom-0 left-0 z-10 p-8 text-white">
                  {category.badge ? (
                    <div className="mb-3 inline-block rounded-full bg-[#cda729] px-3 py-1 text-xs font-bold text-[#000613]">
                      {category.badge}
                    </div>
                  ) : null}
                  <h3 className="mb-2 font-display text-2xl font-semibold leading-8">{category.title}</h3>
                  <p className="text-sm leading-5 text-white/90">{category.body}</p>
                </div>
              </article>
            ) : (
              <article
                key={category.title}
                className="flex items-center rounded-lg border border-[#e9ecef] border-t-4 border-t-[#cda729] bg-[#eeeeee] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:col-span-7"
              >
                <div>
                  <h3 className="mb-4 font-display text-2xl font-semibold leading-8 text-[#000613]">
                    {category.title}
                  </h3>
                  <p className="mb-6 text-base leading-6 text-muted">{category.body}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-[0.05em] text-[#745b00] transition-colors hover:text-[#000613]"
                  >
                    {content.catalogLabel}
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section id="fresh-operations" className="bg-[#f3f3f4] py-16 md:py-[120px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 md:grid-cols-12 md:px-16">
          <div className="order-2 mt-12 md:order-1 md:col-span-5 md:mt-0">
            <h2 className="mb-6 font-display text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-[#000613] md:text-[48px] md:leading-[56px]">
              {content.operationsTitle}
            </h2>
            <p className="mb-8 text-base leading-6 text-muted">{content.operationsBody}</p>
            <div className="space-y-6">
              {content.features.map((feature, index) => {
                const Icon = index === 0 ? Snowflake : ShieldCheck;
                return (
                  <div key={feature.title} className="flex items-start">
                    <div className="mr-4 mt-1 flex shrink-0 rounded-full bg-[#000613] p-2 text-white">
                      <Icon aria-hidden className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold leading-8 text-[#000613]">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-5 text-muted">{feature.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative order-1 md:order-2 md:col-span-6 md:col-start-7">
            <div className="absolute -left-10 top-10 z-0 hidden h-full w-full rounded-lg bg-[#cda729]/15 md:block" />
            <Image
              src={pageImages.freshSupply}
              alt={content.operationsTitle}
              width={920}
              height={760}
              quality={100}
              className="relative z-10 h-[360px] w-full rounded-lg border border-[#e2e2e2] object-cover shadow-lg md:h-[500px]"
            />
            <div className="absolute -bottom-8 right-4 z-20 hidden w-[250px] rounded-lg border border-[#e9ecef]/60 border-b-4 border-b-[#cda729] bg-white/95 p-6 shadow-[0_12px_40px_rgba(39,59,120,0.08)] backdrop-blur-md sm:block md:-left-12 md:right-auto">
              <Globe2 aria-hidden className="mb-2 h-8 w-8 text-[#cda729]" />
              <div className="font-display text-[32px] font-bold leading-[40px] text-[#000613]">
                {content.metricValue}
              </div>
              <div className="font-display text-sm font-semibold tracking-[0.05em] text-muted">
                {content.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="grid w-full grid-cols-12 gap-8 bg-[#000613] px-5 py-16 text-white md:px-16 md:py-[120px]">
        <div className="col-span-12 mb-8 md:col-span-4 md:mb-0">
          <div className="mb-4 font-display text-[32px] font-bold leading-[40px] text-white">LOGO</div>
          <p className="mb-6 max-w-xs text-sm leading-5 text-white/70">{content.footerBody}</p>
          <div className="text-sm leading-5 text-white/70">{content.footerCopyright}</div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <h2 className="mb-6 font-display text-sm font-bold leading-5 tracking-[0.05em] text-[#cda729]">
            {content.footerDivisions}
          </h2>
          <ul className="space-y-4">
            {t.footer.groups.slice(0, 2).flatMap((group) => group.links).slice(0, 4).map((link, index) => (
              <li key={`${link.href}-${link.label}-${index}`}>
                <Link className="text-sm leading-5 text-white/70 transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-4">
          <h2 className="mb-6 font-display text-sm font-bold leading-5 tracking-[0.05em] text-[#cda729]">
            {content.footerLegal}
          </h2>
          <ul className="space-y-4">
            {t.footer.groups.at(-1)?.links.map((link) => (
              <li key={link.label}>
                <Link className="text-sm leading-5 text-white/70 transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            {content.legalExtra.map((link, index) => (
              <li key={`${link.href}-${link.label}-${index}`}>
                <Link className="text-sm leading-5 text-white/70 transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
