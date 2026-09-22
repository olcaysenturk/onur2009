"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { serviceOperationImages } from "@/lib/assets";

const capabilityIcons = [ClipboardCheck, Gauge, PackageCheck, Wrench];

const workshopImages = [
  serviceOperationImages[11],
  serviceOperationImages[15],
  serviceOperationImages[16],
  serviceOperationImages[18],
  serviceOperationImages[20],
  serviceOperationImages[23],
];


export default function AutoTruckServiceView() {
  const { t } = useLanguage();
  const copy = t.autoTruckServiceView;
  const division = t.divisions["auto-truck-service"];

  return (
    <>
      <Header />
      <main className="bg-[#f5f6f2] pt-16 text-[#10161b] md:pt-20">
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1440px] grid-cols-1 gap-8 px-4 py-8 md:grid-cols-12 md:px-10 md:py-12">
          <div className="flex flex-col justify-center py-10 md:col-span-5">
            <span className="mb-6 w-fit border-l-2 border-[#cda729] bg-white px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-[#6d5d19]">
              {copy.eyebrow}
            </span>
            <h1 className="font-display text-[44px] font-bold leading-[48px] tracking-normal text-[#000613] md:text-[72px] md:leading-[76px]">
              {copy.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#4e5a55] md:text-lg">
              {copy.heroBody}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-[#000613] px-6 font-display text-sm font-semibold text-white transition-colors hover:bg-[#1f2b3a]">
                {copy.heroPrimaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/gallery" className="inline-flex min-h-12 items-center gap-2 border border-[#000613]/30 bg-white px-6 font-display text-sm font-semibold text-[#000613] transition-colors hover:border-[#cda729]">
                {copy.heroSecondaryCta}
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-px bg-outline/40">
              {copy.serviceMetrics.map((metric) => (
                <div key={metric.label} className="bg-white p-4">
                  <div className="font-display text-3xl font-bold text-[#000613] md:text-4xl">{metric.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid min-h-[540px] grid-cols-6 grid-rows-6 gap-3 md:col-span-7">
            <figure className="relative col-span-6 row-span-4 overflow-hidden bg-white md:col-span-4 md:row-span-6">
              <Image src={serviceOperationImages[11]} alt={division.title} fill priority sizes="(min-width: 768px) 54vw, 100vw" className="object-cover" />
            </figure>
            <figure className="relative col-span-3 row-span-2 overflow-hidden bg-white md:col-span-2 md:row-span-3">
              <Image src={serviceOperationImages[15]} alt={division.cards[1]?.title ?? division.title} fill sizes="(min-width: 768px) 24vw, 50vw" className="object-cover" />
            </figure>
            <figure className="relative col-span-3 row-span-2 overflow-hidden bg-white md:col-span-2 md:row-span-3">
              <Image src={serviceOperationImages[20]} alt={division.cards[0]?.title ?? division.title} fill sizes="(min-width: 768px) 24vw, 50vw" className="object-cover" />
            </figure>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#7b6829]">
                {division.title}
              </span>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight text-[#000613] md:text-[52px]">
                {division.introTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-muted md:text-lg">
                {division.introBody}
              </p>
            </div>
            <div className="grid gap-px bg-outline/40 md:col-span-7 md:grid-cols-2">
              {division.cards.map((card, index) => {
                const Icon = capabilityIcons[index] ?? ShieldCheck;

                return (
                  <article key={card.title} className="bg-white p-7">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[#f2e8bd] text-[#5d4b09]">
                      <Icon aria-hidden className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#000613]">{card.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#7b6829]">
                {copy.workshopTitle}
              </span>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight text-[#000613] md:text-[52px]">
                {copy.workshopSubtitle}
              </h2>
              <p className="mt-6 text-base leading-7 text-muted">
                {copy.workshopBody}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-8 lg:grid-cols-4">
              {workshopImages.map((image, index) => (
                <figure
                  key={image}
                  className={`relative overflow-hidden bg-white ${
                    index === 0 ? "col-span-2 row-span-2 min-h-[420px]" : "min-h-[210px]"
                  }`}
                >
                  <Image src={image} alt={`${division.title} ${index + 1}`} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#10161b] px-4 py-16 text-white md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#e2c34f]">
                {copy.processTitle}
              </span>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight md:text-[52px]">
                {copy.processSubtitle}
              </h2>
              <p className="mt-6 text-base leading-7 text-white/72">
                {copy.introBody}
              </p>
            </div>
            <div className="grid gap-px bg-white/12 md:col-span-7">
              {(division.process ?? []).map((step, index) => (
                <div key={step} className="grid grid-cols-[72px_1fr] bg-[#10161b]">
                  <div className="flex items-center justify-center border-r border-white/12 font-display text-xl font-semibold text-[#e2c34f]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#e2c34f]" />
                    <p className="text-base leading-7 text-white/82">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
