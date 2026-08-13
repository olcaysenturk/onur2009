"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Route, Snowflake, Timer, Truck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { imageAssets } from "@/lib/assets";
import { formatCopyright } from "@/lib/copyright";
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
      <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-[#05070b] text-white md:min-h-[calc(100vh-80px)]">
        <video
          aria-label={content.heroEyebrow}
          autoPlay
          className="absolute inset-0 h-full w-full object-cover object-center saturate-[0.88] contrast-[1.12] brightness-[0.78]"
          loop
          muted
          playsInline
          poster={imageAssets.videoPosters.freshProduceHero}
          preload="metadata"
        >
          <source src={imageAssets.videos.freshProduceHero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#000815]/85 via-[#000c1e]/45 to-[#000c1e]/12" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0, 0, 0, 0.85) 0.75px, transparent 1.1px)",
            backgroundSize: "7px 7px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_36%,rgba(0,8,21,0.48)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000815]/70 via-transparent to-[#000815]/28" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-20 md:px-16">
          <div className="max-w-[760px]">
            <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/76">
              <Truck aria-hidden className="h-4 w-4 text-[#cda729]" />
              {content.heroEyebrow}
            </span>
            <h1 className="font-display text-[40px] font-bold leading-[1.08] tracking-normal md:text-[68px]">
              {content.heroTitle}
              <span className="block text-[#cda729]">{content.heroAccent}</span>
            </h1>
            <p className="mt-7 max-w-[700px] text-base leading-7 text-white/84 md:text-lg md:leading-8">
              {content.heroBody}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center bg-[#cda729] px-7 text-sm font-semibold text-[#05070b] transition-opacity hover:opacity-90"
                href="#fleet-capacity"
              >
                {content.heroPrimary}
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-white/55 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#05070b]"
                href="#international-transport"
              >
                {content.heroSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet-capacity" className="bg-[#f6f5f1] px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b6829]">
              {content.operationsTitle}
            </span>
            <h2 className="font-display text-[32px] font-semibold leading-tight text-[#07111d] md:text-[48px]">
              {content.roadTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#46505c] md:text-lg">
              {content.roadBody}
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {content.roadItems.map((item, index) => {
                const Icon = index === 0 ? Snowflake : Truck;

                return (
                  <article className="border-l-4 border-[#cda729] bg-white p-6 shadow-[0_12px_34px_rgba(7,17,29,0.07)]" key={item}>
                    <Icon aria-hidden className="mb-4 h-6 w-6 text-[#8a721d]" />
                    <h3 className="font-display text-lg font-semibold text-[#07111d]">{item}</h3>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="relative md:col-span-6">
            <div className="absolute -bottom-6 -left-6 hidden h-full w-full border border-[#cda729]/45 md:block" />
            <Image
              src={pageImages.logisticsFacility}
              alt={content.fleetTitle}
              width={920}
              height={720}
              quality={100}
              className="relative h-[420px] w-full object-cover shadow-[0_18px_50px_rgba(7,17,29,0.16)] md:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section id="international-transport" className="bg-white px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b6829]">
                {content.freightTitle}
              </span>
              <h2 className="font-display text-[32px] font-semibold leading-tight text-[#07111d] md:text-[48px]">
                {content.footprintTitle}
              </h2>
            </div>
            <p className="text-base leading-8 text-[#46505c] md:col-span-5">
              {content.freightBody}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {content.customsSteps.map((step, index) => {
              const Icon = index === 0 ? Route : index === 1 ? Timer : CheckCircle2;

              return (
                <article className="min-h-[260px] border border-[#e1e5ea] bg-[#f6f5f1] p-7" key={step.title}>
                  <Icon aria-hidden className="mb-7 h-7 w-7 text-[#8a721d]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b6829]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-7 text-[#07111d]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#46505c]">{step.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07111d] px-5 py-20 text-white md:px-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Globe2 aria-hidden className="mb-7 h-10 w-10 text-[#cda729]" />
            <h2 className="font-display text-[32px] font-semibold leading-tight md:text-[46px]">
              {content.fleetTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72">{content.fleetBody}</p>
            <Link
              className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#cda729] transition-all hover:gap-5"
              href="/contact"
            >
              {content.freightLink}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[360px] overflow-hidden bg-[#101b29] md:col-span-7 md:h-[520px]">
            <Image
              src={pageImages.logisticsHero}
              alt={content.footprintTitle}
              fill
              quality={100}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center opacity-82"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07111d]/70 via-[#07111d]/16 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-[560px] p-7 md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#cda729]">
                {content.mapTitle}
              </span>
              <p className="mt-4 text-base leading-7 text-white/82 md:text-lg">
                {content.mapBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#000613] px-5 py-16 text-white md:px-16 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src={images.logo}
              alt=""
              width={1536}
              height={759}
              className="mb-6 h-auto w-[132px] object-contain"
            />
            <p className="mb-8 max-w-sm text-sm leading-5 text-white/70">{content.footerBody}</p>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center bg-[#cda729] px-6 py-3 text-sm font-semibold tracking-[0.05em] text-[#000613] transition-opacity hover:opacity-90"
            >
              {content.footerCta}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            <FooterColumn title={content.footerDivisions} links={divisionLinks} activeHref="/logistics-transport" />
            <FooterColumn title={content.footerBrands} links={brandLinks} />
            <FooterColumn title={content.footerLegal} links={legalLinks} />
          </div>
          <div className="border-t border-white/10 pt-8 md:col-span-12">
            <p className="text-sm leading-5 text-white/50">
              {formatCopyright(content.footerCopyright)}
            </p>
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
      <h3 className="mb-4 border-b border-white/20 pb-2 text-sm font-semibold tracking-[0.05em] text-white">
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
