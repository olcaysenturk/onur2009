"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Map, Truck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";
import type { Language } from "@/types/i18n";

type LogisticsContent = {
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

const logisticsContent: Record<Language, LogisticsContent> = {
  en: {
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
  tr: {
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
  bg: {
    heroEyebrow: "Глобална логистична дивизия",
    heroTitle: "Прецизен транспорт,",
    heroAccent: "Глобален мащаб.",
    heroBody:
      "Проектирано за критични B2B операции. Доставяме структурна надеждност, визионерски решения за веригата и сигурността на утвърден глобален лидер.",
    heroPrimary: "Виж флота",
    heroSecondary: "Оперативна карта",
    operationsTitle: "Архитекти на веригата за доставки",
    operationsBody:
      "Комплексни логистични решения за надеждност и скорост през международни граници.",
    roadTitle: "Автомобилен транспорт",
    roadBody:
      "Нашата основна компетентност. Управляваме модерна мащабна флота за непрекъснати доставки — от стандартни товари до температурно контролирана логистика.",
    roadItems: ["FTL & LTL услуги", "Специализирана обработка на товари"],
    freightTitle: "Спедиция",
    freightBody:
      "Безпроблемна интеграция на въздушни, морски и железопътни товари за оптимизация на глобалната верига.",
    freightLink: "Виж възможностите",
    customsTitle: "Безпроблемно митническо оформяне",
    customsSteps: [
      {
        title: "Предварителна проверка",
        body: "Автоматизирана проверка на документи за избягване на забавяния.",
      },
      {
        title: "Специализиран брокераж",
        body: "Вътрешни експерти за сложни международни тарифи.",
      },
    ],
    fleetTitle: "Модерен, устойчив флот",
    fleetBody: "Euro 6 съвместими превозни средства с поддръжка по строги стандарти.",
    footprintTitle: "Оперативен обхват",
    footprintBody: "Свързваме стратегически икономически центрове в Европа и Азия.",
    mapTitle: "Очаква се интеграция на интерактивна карта",
    mapBody: "Свързване на Турция, България и европейски транзитни маршрути.",
    footerBody:
      "Проектираме успех чрез премиум логистика, търговия с пресни продукти и корпоративни услуги.",
    footerCta: "Корпоративен контакт",
    footerCopyright: "© 2024 LOGO International. Всички права запазени.",
    footerDivisions: "Дивизии",
    footerBrands: "Марки",
    footerLegal: "Правни",
  },
};

export function LogisticsTransportPageContent() {
  const { language, t } = useLanguage();
  const content = logisticsContent[language];
  const divisionLinks = t.footer.groups[0]?.links ?? [];
  const brandLinks = t.footer.groups[1]?.links ?? [];
  const legalLinks = t.footer.groups.at(-1)?.links ?? [];

  return (
    <>
      <section className="relative flex h-[80vh] min-h-[600px] items-center justify-center overflow-hidden">
        <Image
          src={pageImages.logisticsHero}
          alt={content.heroTitle}
          fill
          quality={100}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#000613]/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-10">
          <span className="mb-6 inline-block rounded-full border border-[#cda729]/30 bg-[#cda729]/20 px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-[0.05em] text-[#cda729] backdrop-blur-sm">
            {content.heroEyebrow}
          </span>
          <h1 className="mb-6 font-display text-[40px] font-bold leading-[48px] tracking-[-0.01em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-[48px] md:leading-[56px] md:tracking-[-0.02em]">
            {content.heroTitle} <span className="text-[#cda729]">{content.heroAccent}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-7 text-white/90">{content.heroBody}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#logistics-operations"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#cda729] px-8 py-4 font-sans text-base font-semibold tracking-[0.05em] text-[#000613] shadow-lg transition-all hover:brightness-110"
            >
              {content.heroPrimary}
            </a>
            <a
              href="#logistics-footprint"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 font-sans text-base font-semibold tracking-[0.05em] text-white transition-colors hover:bg-white/10"
            >
              {content.heroSecondary}
            </a>
          </div>
        </div>
      </section>

      <section id="logistics-operations" className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-[120px]">
        <div className="mb-16 text-center md:mb-24 md:text-left">
          <h2 className="mb-4 font-display text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-[#000613]">
            {content.operationsTitle}
          </h2>
          <p className="max-w-3xl text-lg leading-7 text-muted">{content.operationsBody}</p>
        </div>

        <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-6 md:grid-cols-12">
          <article className="relative overflow-hidden rounded-xl border border-outline/30 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:col-span-8">
            <div className="absolute left-0 top-0 h-1 w-full bg-[#cda729]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <Truck aria-hidden className="mb-6 h-10 w-10 text-[#000613]" />
                <h3 className="mb-4 font-display text-[32px] font-semibold leading-[40px] text-[#000613]">
                  {content.roadTitle}
                </h3>
                <p className="mb-6 max-w-xl text-base leading-6 text-muted">{content.roadBody}</p>
              </div>
              <ul className="space-y-3">
                {content.roadItems.map((item) => (
                  <li key={item} className="flex items-center text-muted">
                    <CheckCircle2 aria-hidden className="mr-3 h-5 w-5 text-[#cda729]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-xl bg-[#000613] p-8 text-white md:col-span-4">
            <Globe2 aria-hidden className="absolute -bottom-10 -right-10 h-44 w-44 text-white/10" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <h3 className="mb-4 font-display text-2xl font-semibold leading-8">{content.freightTitle}</h3>
                <p className="mb-6 text-sm leading-5 text-white/80">{content.freightBody}</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#cda729] hover:underline">
                {content.freightLink}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="relative rounded-xl border border-outline/30 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:col-span-6">
            <div className="absolute left-0 top-0 h-1 w-full bg-[#cda729]" />
            <h3 className="mb-6 font-display text-2xl font-semibold leading-8 text-[#000613]">
              {content.customsTitle}
            </h3>
            <div className="space-y-6">
              {content.customsSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#000613] font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 font-sans text-base font-semibold tracking-[0.05em] text-[#000613]">
                      {step.title}
                    </h4>
                    <p className="text-sm leading-5 text-muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="relative min-h-[300px] overflow-hidden rounded-xl md:col-span-6">
            <Image
              src={pageImages.logisticsFacility}
              alt={content.fleetTitle}
              fill
              quality={100}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000613]/95 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <h3 className="mb-2 font-display text-2xl font-semibold leading-8">{content.fleetTitle}</h3>
              <p className="text-sm leading-5 text-white/80">{content.fleetBody}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="logistics-footprint" className="bg-[#f3f3f4] py-16 md:py-[120px]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-[#000613]">
              {content.footprintTitle}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-7 text-muted">{content.footprintBody}</p>
          </div>
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-xl border border-outline/30 bg-white shadow-[0_12px_40px_rgba(0,31,63,0.08)]">
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,#273b78_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="relative z-10 text-center">
              <Map aria-hidden className="mx-auto mb-4 h-14 w-14 text-[#cda729]" />
              <p className="font-sans text-base font-semibold tracking-[0.05em] text-[#000613]">
                {content.mapTitle}
              </p>
              <p className="mt-2 text-sm leading-5 text-muted">{content.mapBody}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#000613] px-4 py-16 md:px-10 md:py-[120px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-12">
          <div className="mb-8 md:col-span-4 md:mb-0">
            <h2 className="mb-6 font-display text-[32px] font-bold leading-[40px] text-white">LOGO</h2>
            <p className="mb-8 max-w-sm text-sm leading-5 text-white/70">{content.footerBody}</p>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#cda729] px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] text-[#000613] transition-all hover:brightness-110"
            >
              {content.footerCta}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            <FooterColumn title={content.footerDivisions} links={divisionLinks} activeHref="/logistics-transport" />
            <FooterColumn title={content.footerBrands} links={brandLinks} />
            <FooterColumn title={content.footerLegal} links={legalLinks} />
          </div>
          <div className="col-span-1 mt-12 border-t border-white/10 pt-8 text-center md:col-span-12 md:text-left">
            <p className="text-sm leading-5 text-white/50">{content.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterColumn({
  title,
  links,
  activeHref,
}: {
  title: string;
  links: { label: string; href: string }[];
  activeHref?: string;
}) {
  return (
    <div>
      <h3 className="mb-4 border-b border-white/20 pb-2 font-sans text-base font-semibold tracking-[0.05em] text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={`${link.href}-${link.label}-${index}`}>
            <Link
              className={`text-sm leading-5 transition-colors hover:text-[#cda729] ${
                link.href === activeHref ? "font-bold text-[#cda729]" : "text-white/70"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
