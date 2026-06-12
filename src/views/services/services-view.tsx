"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, Truck } from "lucide-react";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";
import type { Language } from "@/types/i18n";

type ServicesContent = {
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

const contentByLanguage: Record<Language, ServicesContent> = {
  en: {
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
  tr: {
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
  bg: {
    title: "Нашите бизнес дивизии",
    body:
      "Altinyildiz Group International оперира в шест основни дивизии и доставя премиум B2B решения глобално, с фокус върху структурна надеждност и оперативно качество.",
    explore: "Виж дивизията",
    viewDetails: "Виж детайли",
    exploreService: "Виж услугата",
    visitBoutiques: "Виж бутиците",
    discoverNetwork: "Виж мрежата",
    consult: "Консултирай се",
    tags: ["Земеделие & Търговия", "Поддръжка на флот", "Ритейл & Мода", "FMCG дистрибуция", "Стратегическо консултиране"],
    footerBody: "Архитектът на успеха. Структурираме глобална търговия, логистика и консултиране с надеждност.",
    footerCopyright: "© 2024 LOGO International. Всички права запазени.",
    footerDivisions: "Дивизии",
    footerBrands: "Марки",
    footerLegal: "Правни",
  },
};

export default function ServicesPage() {
  const { language, t } = useLanguage();
  const content = contentByLanguage[language];
  const divisions = t.divisions;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1440px] px-4 py-16 pt-32 md:px-10 md:py-[120px] md:pt-[160px]">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 font-display text-[40px] font-bold leading-[48px] tracking-[-0.01em] text-[#000613] md:text-[64px] md:leading-[72px]">
            {content.title}
          </h1>
          <p className="text-lg leading-7 text-muted">{content.body}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <Link href="/fresh-produce-trade" className="group relative h-[480px] overflow-hidden rounded-xl border border-outline/30 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:col-span-8">
            <Image src={pageImages.servicesFresh} alt={divisions["fresh-produce-trade"].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#000613]/40 transition-colors group-hover:bg-[#000613]/30" />
            <div className="absolute left-0 top-0 z-10 h-1 w-full bg-[#cda729]" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 text-white">
              <span className="mb-3 inline-block rounded-full bg-white/90 px-3 py-1 font-display text-sm font-semibold text-[#000613] backdrop-blur-sm">{content.tags[0]}</span>
              <h2 className="mb-2 font-display text-[32px] font-semibold leading-[40px]">{divisions["fresh-produce-trade"].title}</h2>
              <span className="inline-flex items-center gap-2 font-display text-base font-semibold text-[#ffe089]">{content.explore}<ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>

          <Link href="/logistics-transport" className="group relative h-[480px] overflow-hidden rounded-xl border border-outline/30 bg-[#303541] p-8 text-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:col-span-4">
            <div className="absolute left-0 top-0 h-1 w-full bg-[#cda729]" />
            <Truck className="mb-40 h-12 w-12 text-[#ffe089]" />
            <h2 className="mb-3 font-display text-2xl font-semibold leading-8">{divisions["logistics-transport"].title}</h2>
            <p className="mb-6 text-sm leading-5 text-white/85">{divisions["logistics-transport"].description}</p>
            <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#ffe089]">{content.viewDetails}<ArrowRight className="h-4 w-4" /></span>
          </Link>

          <ServiceCard href="/auto-truck-service" image={pageImages.servicesAuto} title={divisions["auto-truck-service"].title} body={divisions["auto-truck-service"].description} tag={content.tags[1]} cta={content.exploreService} />
          <ServiceCard href="/retail-fashion" image={pageImages.servicesRetail} title={divisions["retail-fashion"].title} body={divisions["retail-fashion"].description} tag={content.tags[2]} cta={content.visitBoutiques} />
          <ServiceCard href="/sobaklava-distribution" image={pageImages.servicesSoba} title={divisions["sobaklava-distribution"].title} body={divisions["sobaklava-distribution"].description} tag={content.tags[3]} cta={content.discoverNetwork} />

          <Link href="/bulgatex-consulting" className="group relative mt-8 overflow-hidden rounded-xl border border-outline/30 bg-[#000613] shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:col-span-12">
            <div className="absolute left-0 top-0 z-10 h-1 w-full bg-[#cda729]" />
            <div className="flex min-h-[460px] flex-col md:flex-row">
              <div className="z-10 flex w-full flex-col justify-center bg-[#000613] p-10 text-white md:w-1/2 md:p-16">
                <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-display text-sm font-semibold text-[#ffe089]"><Lightbulb className="h-4 w-4" />{content.tags[4]}</span>
                <h2 className="mb-6 font-display text-[32px] font-semibold leading-[40px] md:text-[48px] md:leading-[56px]">{divisions["bulgatex-consulting"].title}</h2>
                <p className="mb-8 max-w-lg text-lg leading-7 text-white/80">{divisions["bulgatex-consulting"].description}</p>
                <span className="inline-flex w-fit items-center gap-2 rounded bg-[#cda729] px-8 py-4 font-display text-base font-semibold text-[#000613]">{content.consult}<ArrowRight className="h-4 w-4" /></span>
              </div>
              <div className="relative min-h-[300px] w-full md:w-1/2">
                <Image src={pageImages.servicesBulgatex} alt={divisions["bulgatex-consulting"].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#000613]/40" />
              </div>
            </div>
          </Link>
        </div>
      </main>
      <DarkFooter content={content} />
    </>
  );
}

function ServiceCard({ href, image, title, body, tag, cta }: { href: string; image: string; title: string; body: string; tag: string; cta: string }) {
  return (
    <Link href={href} className="group flex min-h-[400px] flex-col overflow-hidden rounded-xl border border-outline/30 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:col-span-4">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-1 w-full bg-[#cda729]" />
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex grow flex-col p-8">
        <span className="mb-4 w-fit rounded-full bg-[#f3f3f4] px-3 py-1 font-display text-sm font-semibold text-[#000613]">{tag}</span>
        <h2 className="mb-3 font-display text-2xl font-semibold leading-8 text-[#000613]">{title}</h2>
        <p className="mb-6 grow text-sm leading-5 text-muted">{body}</p>
        <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#000613] group-hover:text-[#745b00]">{cta}<ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  );
}

function DarkFooter({ content }: { content: ServicesContent }) {
  const { t } = useLanguage();
  return (
    <footer className="mt-20 bg-[#000613] px-4 py-16 text-white md:px-10 md:py-[120px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-6 font-display text-[32px] font-bold leading-[40px]">LOGO</div>
          <p className="max-w-xs text-sm leading-5 text-white/70">{content.footerBody}</p>
        </div>
        <FooterGroup title={content.footerDivisions} links={t.footer.groups[0]?.links ?? []} />
        <FooterGroup title={content.footerBrands} links={[...(t.footer.groups[1]?.links ?? []), ...(t.footer.groups[2]?.links ?? [])]} />
        <FooterGroup title={content.footerLegal} links={t.footer.groups.at(-1)?.links ?? []} />
        <div className="border-t border-white/10 pt-8 md:col-span-12 md:mt-12">
          <p className="text-sm leading-5 text-white/50">{content.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4 md:col-span-2">
      <h3 className="mb-2 font-display text-base font-bold text-[#ffe089]">{title}</h3>
      {links.map((link, index) => (
        <Link key={`${link.href}-${link.label}-${index}`} href={link.href} className="text-sm leading-5 text-white/70 hover:text-white">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
