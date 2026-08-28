"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Coffee,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Utensils,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { sobaklavaStoreImages } from "@/lib/assets";
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

export default function SobaklavaDistributionView() {
  const { t } = useLanguage();
  const copy = t.sobaklava;
  const [activeStoreIndex, setActiveStoreIndex] = useState<number | null>(null);
  const activeStoreImage = activeStoreIndex === null ? null : sobaklavaStoreImages[activeStoreIndex];
  const products = copy.products.map((product, index) => ({
    ...product,
    image: productImages[index],
  }));

  function closeLightbox() {
    setActiveStoreIndex(null);
  }

  function showPreviousStore() {
    setActiveStoreIndex((current) =>
      current === null
        ? current
        : (current - 1 + sobaklavaStoreImages.length) % sobaklavaStoreImages.length,
    );
  }

  function showNextStore() {
    setActiveStoreIndex((current) =>
      current === null ? current : (current + 1) % sobaklavaStoreImages.length,
    );
  }

  useEffect(() => {
    if (activeStoreIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousStore();
      }

      if (event.key === "ArrowRight") {
        showNextStore();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStoreIndex]);

  return (
    <>
      <Header />
      <main className="bg-[#fbf9f4] pt-16 text-[#1b1c19] md:pt-20">
        <section className="relative flex min-h-[620px] items-center overflow-hidden px-4 py-20 text-white md:min-h-[760px] md:px-10">
          <Image
            src={pageImages.sobaklavaHero}
            alt={copy.heroTitle}
            fill
            priority
            className="scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-[#1b1c19]/58" />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#775a19]/70 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#ffdea5] backdrop-blur">
              <Sparkles aria-hidden className="h-3.5 w-3.5" />
              {copy.heroBadge}
            </span>
            <h1 className="mx-auto mt-6 max-w-[850px] font-display text-[40px] font-bold leading-[48px] text-white md:text-[64px] md:leading-[72px]">
              {copy.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-[#f2f1ec]/90 md:text-lg md:leading-8">
              {copy.heroBody}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#775a19] px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_16px_40px_rgba(78,52,46,0.18)] transition-colors hover:bg-[#5d4201]"
              >
                {copy.productsCta}
              </Link>
              <Link
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
              >
                {copy.storyCta}
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-6">
              <Image
                src={pageImages.sobaklavaChef}
                alt={copy.aboutTitle}
                width={720}
                height={820}
                className="aspect-[4/5] w-full rounded-lg object-cover shadow-[0_20px_55px_rgba(78,52,46,0.10)]"
              />
              <div className="absolute -bottom-6 right-6 hidden rounded bg-white px-7 py-6 shadow-[0_18px_45px_rgba(78,52,46,0.12)] md:block">
                <p className="font-display text-3xl font-bold text-[#775a19]">70+</p>
                <p className="mt-1 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#4e4639]">
                  {copy.heritageYears}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#775a19]">
                {copy.aboutLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[48px] md:leading-[56px]">
                {copy.aboutTitle}
              </h2>
              <div className="mt-7 space-y-5 text-base leading-7 text-[#4e4639]">
                <p>{copy.aboutBody}</p>
                <p>{copy.aboutBodyAlt}</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#d1c5b4] pt-8">
                <div>
                  <Star aria-hidden className="h-7 w-7 text-[#775a19]" />
                  <p className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b1c19]">
                    {copy.qualityTitle}
                  </p>
                </div>
                <div>
                  <Utensils aria-hidden className="h-7 w-7 text-[#775a19]" />
                  <p className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b1c19]">
                    {copy.craftTitle}
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
                {copy.productsLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[48px] md:leading-[56px]">
                {copy.productsTitle}
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
                {copy.experienceLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[48px] md:leading-[56px]">
                {copy.experienceTitle}
              </h2>
              <p className="mt-6 text-base leading-7 text-[#4e4639]">{copy.experienceBody}</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded bg-white px-5 py-4 shadow-[0_14px_30px_rgba(78,52,46,0.08)]">
                  <Coffee aria-hidden className="h-5 w-5 text-[#775a19]" />
                  <p className="mt-3 text-sm font-semibold text-[#1b1c19]">{copy.producerCards[0].title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4e4639]">{copy.producerCards[0].body}</p>
                </div>
                <div className="rounded bg-white px-5 py-4 shadow-[0_14px_30px_rgba(78,52,46,0.08)]">
                  <Store aria-hidden className="h-5 w-5 text-[#775a19]" />
                  <p className="mt-3 text-sm font-semibold text-[#1b1c19]">{copy.producerCards[1].title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4e4639]">{copy.producerCards[1].body}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Image
                src={pageImages.sobaklavaStore}
                alt={copy.experienceTitle}
                width={1040}
                height={680}
                className="aspect-[13/8] w-full rounded-lg object-cover shadow-[0_22px_55px_rgba(78,52,46,0.12)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#775a19]">
                  {copy.storeGalleryLabel}
                </p>
                <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-[#1b1c19] md:text-[48px] md:leading-[56px]">
                  {copy.storeGalleryTitle}
                </h2>
              </div>
              <p className="text-base leading-7 text-[#4e4639] md:col-span-5">
                {copy.storeGalleryBody}
              </p>
            </div>

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-4 md:gap-5">
              {sobaklavaStoreImages.map((image, index) => (
                <figure
                  className="group mb-4 break-inside-avoid overflow-hidden rounded-lg bg-[#eae8e3] md:mb-5"
                  key={image}
                >
                  <button
                    aria-label={`${copy.storeGalleryLabel} ${index + 1}`}
                    className="relative block w-full cursor-zoom-in text-left"
                    onClick={() => setActiveStoreIndex(index)}
                    type="button"
                  >
                    <Image
                      src={image}
                      alt={`${copy.storeGalleryLabel} ${index + 1}`}
                      width={1200}
                      height={1600}
                      quality={88}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                    <span className="absolute inset-0 bg-[#1b1c19]/0 transition-colors group-hover:bg-[#1b1c19]/10" />
                  </button>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#151713] px-4 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="rounded-lg bg-white p-6 text-[#1b1c19] shadow-[0_20px_55px_rgba(0,0,0,0.2)] lg:col-span-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#775a19]">
                    {copy.growthChartLabel}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#1b1c19]">
                    {copy.growthChartTitle}
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
                            aria-label={`${bar.year} ${copy.growthChartSupply} ${bar.supply}`}
                          />
                          <span
                            className="w-5 rounded-t bg-[#add461] shadow-[0_8px_18px_rgba(73,104,0,0.16)]"
                            style={{ height: `${bar.reach}%` }}
                            aria-label={`${bar.year} ${copy.growthChartReach} ${bar.reach}`}
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
                  {copy.growthChartSupply}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4e4639]">
                  <span className="h-3 w-3 rounded-sm bg-[#add461]" />
                  {copy.growthChartReach}
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#e9c176]">
                {copy.growthLabel}
              </p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[42px] text-white md:text-[48px] md:leading-[56px]">
                {copy.growthTitle}
              </h2>
              <p className="mt-6 max-w-[560px] text-base italic leading-7 text-white/70">{copy.growthBody}</p>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <Award aria-hidden className="mb-3 h-6 w-6 text-[#e9c176]" />
                  <p className="font-display text-3xl font-bold text-[#e9c176]">%100</p>
                  <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                    {copy.satisfactionLabel}
                  </p>
                </div>
                <div>
                  <BarChart3 aria-hidden className="mb-3 h-6 w-6 text-[#e9c176]" />
                  <p className="font-display text-3xl font-bold text-[#e9c176]">900k+</p>
                  <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                    {copy.guestLabel}
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
                {copy.ctaTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-[#4e4639]">{copy.ctaBody}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded bg-[#775a19] px-6 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#5d4201]"
                >
                  {copy.stores}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded border border-[#775a19] px-6 font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#775a19] transition-colors hover:bg-white/60"
                >
                  {copy.franchise}
                </Link>
              </div>
            </div>
            <Image
              src={pageImages.sobaklavaChocolateClose}
              alt={copy.ctaTitle}
              width={900}
              height={760}
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-10">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-3">
            {copy.operations.map((item, index) => {
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
      {activeStoreImage ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#151713]/92 px-4 py-6 backdrop-blur-sm md:px-10"
          role="dialog"
        >
          <button
            aria-label="Close"
            className="absolute inset-0 cursor-zoom-out"
            onClick={closeLightbox}
            type="button"
          />
          <div className="pointer-events-none relative z-10 flex h-full w-full max-w-[1180px] items-center justify-center">
            <div className="pointer-events-auto relative max-h-full max-w-full">
              <Image
                src={activeStoreImage}
                alt={`${copy.storeGalleryLabel} ${(activeStoreIndex ?? 0) + 1}`}
                width={1200}
                height={1600}
                quality={92}
                sizes="90vw"
                className="max-h-[82vh] w-auto max-w-full object-contain shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                priority
              />
              <div className="mt-4 flex items-center justify-between text-white/72">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em]">
                  {copy.storeGalleryLabel}
                </span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em]">
                  {(activeStoreIndex ?? 0) + 1} / {sobaklavaStoreImages.length}
                </span>
              </div>
            </div>
          </div>
          <button
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-[#1b1c19] md:left-8 md:h-12 md:w-12"
            onClick={showPreviousStore}
            type="button"
          >
            <ChevronLeft aria-hidden className="h-6 w-6" />
          </button>
          <button
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-[#1b1c19] md:right-8 md:h-12 md:w-12"
            onClick={showNextStore}
            type="button"
          >
            <ChevronRight aria-hidden className="h-6 w-6" />
          </button>
          <button
            aria-label="Close"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1b1c19] transition-colors hover:bg-[#ffdea5] md:right-8 md:top-8"
            onClick={closeLightbox}
            type="button"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>
      ) : null}
      <Footer />
    </>
  );
}
