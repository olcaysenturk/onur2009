"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Map, Truck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";
import { images } from "@/lib/site";
import type { Translation } from "@/locales/types";

type LogisticsContent = Translation["logisticsTransportView"];
export function LogisticsTransportPageContent() {
  const { t } = useLanguage();
  const content = t.logisticsTransportView as LogisticsContent;
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
            <Image src={images.logo} alt="" width={600} height={300} className="h-auto w-36 rounded bg-white p-2" />
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
