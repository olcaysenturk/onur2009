"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Landmark,
  Megaphone,
  Scale,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { imageAssets } from "@/lib/assets";
import { pageImages } from "@/lib/pages";

const serviceIcons = [Building2, Warehouse, Truck, Landmark, Scale, Megaphone];

export default function BulgatexConsultingView() {
  const { t } = useLanguage();
  const copy = t.bulgatexView;

  return (
    <>
      <Header />
      <main className="bg-[#f7f7f4] pt-16 text-[#171b1c] md:pt-20">
        <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-[#000815] text-white md:min-h-[calc(100vh-80px)]">
          <video
            aria-label={copy.heroBadge}
            autoPlay
            className="absolute inset-0 h-full w-full object-cover object-center saturate-[0.88] contrast-[1.12] brightness-[0.78]"
            loop
            muted
            playsInline
            poster={imageAssets.videoPosters.bulgatexHero}
            preload="metadata"
          >
            <source src={imageAssets.videos.bulgatexHero} type="video/mp4" />
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
            <div className="max-w-[820px]">
              <span className="mb-6 inline-flex text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78">
                {copy.heroBadge}
              </span>
              <h1 className="max-w-[760px] text-[42px] font-bold leading-[1.05] tracking-normal md:text-[68px]">
                {copy.heroTitlePrefix}
                <span className="block text-[#2fc56b]">{copy.heroTitleGreen}</span>
                <span className="block text-[#ff4b4f]">{copy.heroTitleRed}</span>
              </h1>
              <p className="mt-7 max-w-[700px] text-base leading-7 text-white/84 md:text-lg md:leading-8">
                {copy.heroBody}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center bg-[#009640] px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {copy.heroPrimary}
                </a>
                <a
                  href="#storage"
                  className="inline-flex min-h-12 items-center justify-center border border-white/55 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#000815]"
                >
                  {copy.heroSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#008238]">
                  BulgateX
                </span>
                <h2 className="text-[32px] font-semibold leading-tight text-[#171b1c] md:text-[48px]">
                  {copy.servicesTitle}
                </h2>
              </div>
              <p className="text-base leading-7 text-[#5a6264] md:col-span-5">
                {copy.heroBody}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {copy.services.map((service, index) => {
                const Icon = serviceIcons[index] ?? ShieldCheck;

                return (
                  <article
                    key={service.title}
                    className="group min-h-[250px] border border-[#e2e6e2] bg-[#f7f7f4] p-7 transition-colors hover:border-[#009640]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center bg-white text-[#009640] shadow-sm">
                      <Icon aria-hidden className="h-6 w-6" />
                    </span>
                    <h3 className="mt-7 text-xl font-semibold text-[#171b1c]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#5a6264]">{service.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="storage" className="bg-[#f0f2ef] px-5 py-20 md:px-16 md:py-28">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 md:grid-cols-12 md:items-center">
            <div className="relative md:col-span-6">
              <div className="absolute -bottom-6 -left-6 hidden h-full w-full border border-[#009640]/40 md:block" />
              <Image
                src={pageImages.logisticsFacility}
                alt={copy.storageTitle}
                width={920}
                height={720}
                quality={100}
                className="relative h-[420px] w-full object-cover shadow-[0_18px_50px_rgba(23,27,28,0.14)] md:h-[560px]"
              />
            </div>
            <div className="md:col-span-6">
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b6000a]">
                {copy.reasonsTitle}
              </span>
              <h2 className="text-[32px] font-semibold leading-tight text-[#171b1c] md:text-[48px]">
                {copy.storageTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#4c5557] md:text-lg">
                {copy.storageBody}
              </p>
              <div className="mt-8 space-y-5">
                {copy.storageBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4 border-b border-[#d8ddd8] pb-5">
                    <CheckCircle2 aria-hidden className="mt-1 h-5 w-5 flex-none text-[#009640]" />
                    <div>
                      <h3 className="font-semibold text-[#171b1c]">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#5a6264]">{benefit.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 border-l-4 border-[#e30613] bg-white p-5">
                <p className="text-sm font-semibold italic leading-6 text-[#5a6264]">
                  {copy.storageExample}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111718] px-5 py-20 text-white md:px-16 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-[720px] text-[32px] font-semibold leading-tight md:text-[48px]">
                {copy.reasonsTitle}
              </h2>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#2fc56b] transition-all hover:gap-5"
              >
                {copy.ctaButton}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
              {copy.reasons.map((reason) => (
                <article
                  key={reason.label}
                  className="border border-white/14 bg-white/[0.04] p-7"
                >
                  <div className="text-[42px] font-bold leading-none text-[#2fc56b] md:text-[54px]">
                    {reason.value}
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.08em] text-white/76">
                    {reason.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white px-5 py-20 md:px-16 md:py-28">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#008238]">
                BulgateX network
              </span>
              <h2 className="text-[32px] font-semibold leading-tight text-[#171b1c] md:text-[48px]">
                {copy.logisticsTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5a6264] md:text-lg">
                {copy.logisticsBody}
              </p>
              <ul className="mt-8 space-y-4">
                {copy.logisticsItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-[#e1e5e1] pb-4">
                    <ShieldCheck aria-hidden className="h-5 w-5 flex-none text-[#e30613]" />
                    <span className="font-semibold text-[#171b1c]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-4 border-[#009640] bg-[#009640]/5 p-5">
                <p className="font-bold text-[#008238]">{copy.logisticsAdvantageTitle}</p>
                <p className="mt-1 text-sm leading-6 text-[#5a6264]">{copy.logisticsAdvantageBody}</p>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden bg-[#111718] md:col-span-7 md:h-[560px]">
              <Image
                src={pageImages.logisticsHero}
                alt={copy.logisticsTitle}
                fill
                quality={100}
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111718]/72 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-[560px] p-7 text-white md:p-10">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2fc56b]">
                  {copy.logisticsAdvantageTitle}
                </span>
                <p className="mt-4 text-base leading-7 text-white/82 md:text-lg">
                  {copy.logisticsAdvantageBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#c9000b] px-5 py-20 text-white md:px-16 md:py-28">
          <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
            <h2 className="text-[38px] font-bold leading-tight tracking-normal md:text-[58px]">
              {copy.ctaTitle}
            </h2>
            <p className="mt-5 max-w-[720px] text-base font-semibold leading-7 text-white/90">
              {copy.ctaBody}
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 bg-[#009640] px-9 font-semibold text-white transition-colors hover:bg-[#007c35]"
            >
              {copy.ctaButton}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
