"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Globe2, Rocket, Share2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { aboutPage } from "@/lib/pages";
import type { Language } from "@/types/i18n";

type AboutContent = {
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

const aboutContent: Record<Language, AboutContent> = {
  en: {
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
  tr: {
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
  bg: {
    title: "Архитекти на глобалния",
    accent: "Успех",
    body:
      "Altinyildiz Group International е многостранен конгломерат, който движи иновации и прецизност в търговията, логистиката и специализираните услуги.",
    primary: "Виж дивизиите",
    secondary: "Нашата история",
    purposeTitle: "Нашата цел",
    purposeBody:
      "Определяме траекторията на глобалната търговия чрез ангажимент към качество и структурна надеждност. Не само улесняваме търговията — изграждаме инфраструктурата на международния растеж.",
    visionTitle: "Визия",
    visionBody:
      "Да бъдем глобален архитект на многостранни бизнес решения, признати за устойчиви партньорства и оперативно съвършенство.",
    missionTitle: "Мисия",
    missionBody:
      "Изпълняваме сложни глобални стратегии с прецизност, интегрирайки пресни продукти, логистика и консултиране за измерима премиум стойност.",
    footerBody:
      "Архитекти на глобална верига за доставки и корпоративна инфраструктура. Доставяме качество в Европа и отвъд нея.",
    footerDivisions: "Дивизии",
    footerCorporate: "Корпоративно",
    copyright: "© 2024 LOGO International. Всички права запазени.",
    headquarters: "Централа в София, България",
  },
};

export default function AboutPage() {
  const { language, t } = useLanguage();
  const content = aboutContent[language];
  const divisionLinks = [
    ...(t.footer.groups[0]?.links ?? []),
    { label: t.divisions["retail-fashion"].title, href: "/retail-fashion" },
  ];
  const corporateLinks = [
    { label: t.divisions["sobaklava-distribution"].title, href: "/sobaklava-distribution" },
    { label: t.divisions["bulgatex-consulting"].title, href: "/bulgatex-consulting" },
    ...(t.footer.groups.at(-1)?.links ?? []),
  ];

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="mx-auto max-w-[1440px] px-4 py-12 md:px-10 md:py-20">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-6">
              <div className="space-y-4">
                <h1 className="font-display text-[40px] font-bold leading-[48px] tracking-[-0.01em] text-primary md:text-[64px] md:leading-[72px] md:tracking-[-0.02em]">
                  {content.title} <br />
                  <span className="text-accent">{content.accent}</span>
                </h1>
                <p className="max-w-xl text-lg leading-7 text-muted">{content.body}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="rounded-lg bg-primary px-8 py-3 font-display text-base font-semibold tracking-[0.05em] text-white shadow-md transition-all hover:bg-accent">
                  {content.primary}
                </Link>
                <a href="#purpose" className="rounded-lg border border-outline px-8 py-3 font-display text-base font-semibold tracking-[0.05em] text-primary transition-all hover:bg-surface-soft">
                  {content.secondary}
                </a>
              </div>
            </div>
            <div className="mt-12 lg:col-span-6 lg:mt-0">
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl md:h-[540px]">
                <Image src={aboutPage.image} alt={content.title} fill priority quality={100} className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section id="purpose" className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="flex flex-col justify-center space-y-6 lg:col-span-4">
                <div className="h-1 w-12 bg-accent" />
                <h2 className="font-display text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-primary">{content.purposeTitle}</h2>
                <p className="text-base leading-6 text-muted">{content.purposeBody}</p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
                <article className="relative overflow-hidden rounded-xl border border-outline/40 bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <div className="absolute left-0 top-0 h-1.5 w-full bg-accent/20" />
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-muted text-accent">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 font-display text-2xl font-semibold leading-8 text-primary">{content.visionTitle}</h3>
                  <p className="text-base leading-6 text-muted">{content.visionBody}</p>
                </article>
                <article className="relative overflow-hidden rounded-xl bg-primary p-10 text-white shadow-[0_12px_40px_rgba(39,59,120,0.12)]">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-white shadow-lg">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 font-display text-2xl font-semibold leading-8">{content.missionTitle}</h3>
                  <p className="text-base leading-6 text-white/90">{content.missionBody}</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-primary px-4 pb-12 pt-12 text-white md:px-10 md:pt-20">
        <div className="mx-auto mb-16 grid max-w-[1440px] grid-cols-1 gap-12 md:grid-cols-12">
          <div className="flex flex-col space-y-6 md:col-span-4">
            <div className="font-display text-[32px] font-bold leading-[40px] tracking-tight">LOGO</div>
            <p className="max-w-xs text-sm leading-5 text-white/70">{content.footerBody}</p>
            <div className="flex gap-4">
              <a className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent" href="#" aria-label="Global">
                <Globe2 className="h-5 w-5" />
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent" href="#" aria-label="Share">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>
          <FooterColumn title={content.footerDivisions} links={divisionLinks} />
          <FooterColumn title={content.footerCorporate} links={corporateLinks} />
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 border-t border-white/10 pt-12 md:flex-row">
          <p className="text-sm leading-5 text-white/50">{content.copyright}</p>
          <span className="text-sm leading-5 text-white/30">{content.headquarters}</span>
        </div>
      </footer>
    </>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col space-y-6 md:col-span-4">
      <h3 className="font-display text-base font-semibold uppercase tracking-[0.18em] text-accent">{title}</h3>
      <div className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <Link key={`${link.href}-${link.label}-${index}`} className="inline-flex items-center gap-2 text-base leading-6 text-white/70 transition-colors hover:text-white" href={link.href}>
            <span className="h-1 w-1 rounded-full bg-accent" />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
