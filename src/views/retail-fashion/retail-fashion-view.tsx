"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ChevronLeft, ChevronRight, MapPin, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { altinyildizEditorialImages, altinyildizStoreImages, imageAssets } from "@/lib/assets";
import { pageImages } from "@/lib/pages";

const collectionImages = [pageImages.servicesRetail, pageImages.retailHero];
const editorialLayouts = [
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[5/4]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[5/4]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[5/4]",
];
const storeMasonryLayouts = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/4]",
  "aspect-[4/3]",
];

export default function RetailFashionPage() {
  const { t } = useLanguage();
  const content = t.retailPage;
  const [activeEditorialIndex, setActiveEditorialIndex] = useState<number | null>(null);
  const [activeStoreIndex, setActiveStoreIndex] = useState<number | null>(null);
  const activeEditorialImage =
    activeEditorialIndex === null ? null : altinyildizEditorialImages[activeEditorialIndex];
  const activeStoreImage = activeStoreIndex === null ? null : altinyildizStoreImages[activeStoreIndex];

  function closeLightbox() {
    setActiveEditorialIndex(null);
    setActiveStoreIndex(null);
  }

  function showPreviousEditorial() {
    setActiveEditorialIndex((current) =>
      current === null
        ? current
        : (current - 1 + altinyildizEditorialImages.length) % altinyildizEditorialImages.length,
    );
  }

  function showPreviousStore() {
    setActiveStoreIndex((current) =>
      current === null
        ? current
        : (current - 1 + altinyildizStoreImages.length) % altinyildizStoreImages.length,
    );
  }

  function showNextEditorial() {
    setActiveEditorialIndex((current) =>
      current === null ? current : (current + 1) % altinyildizEditorialImages.length,
    );
  }

  function showNextStore() {
    setActiveStoreIndex((current) =>
      current === null ? current : (current + 1) % altinyildizStoreImages.length,
    );
  }

  useEffect(() => {
    if (activeEditorialIndex === null && activeStoreIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        if (activeStoreIndex !== null) {
          showPreviousStore();
        } else {
          showPreviousEditorial();
        }
      }

      if (event.key === "ArrowRight") {
        if (activeStoreIndex !== null) {
          showNextStore();
        } else {
          showNextEditorial();
        }
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeEditorialIndex, activeStoreIndex]);

  return (
    <>
      <Header />
      <main className="bg-[#fbf9f7] pt-16 text-[#1b1c1b] md:pt-20">
        <section className="relative flex min-h-[620px] items-center overflow-hidden md:min-h-[calc(100vh-80px)]">
          <video
            aria-label={content.heroTitle}
            autoPlay
            className="absolute inset-0 h-full w-full object-cover object-[50%_20%] saturate-[0.88] contrast-[1.12] brightness-[0.78]"
            loop
            muted
            playsInline
            poster={imageAssets.videoPosters.altinyildizHero}
            preload="metadata"
          >
            <source src={imageAssets.videos.altinyildizHero} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000815]/85 via-[#000c1e]/45 to-[#000c1e]/12" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.85) 0.75px, transparent 1.1px)",
              backgroundSize: "7px 7px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_36%,rgba(0,8,21,0.48)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000815]/70 via-transparent to-[#000815]/28" />
          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-24 md:px-16">
            <div className="max-w-[640px] text-white">
              <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
                {content.heroEyebrow}
              </span>
              <h1 className="max-w-[620px] font-serif text-[42px] font-bold leading-[1.05] md:text-[60px]">
                {content.heroTitle}
              </h1>
              <p className="mt-7 max-w-[560px] text-base leading-7 text-white/88 md:text-lg">
                {content.heroBody}
              </p>
              <Link
                href="#collections"
                className="mt-10 inline-flex bg-[#000c1e] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#002344]"
              >
                {content.heroCta}
              </Link>
            </div>
          </div>
          <div className="absolute bottom-12 right-8 hidden flex-col items-center gap-4 text-white/60 lg:flex">
            <span className="h-16 w-px bg-white/70" />
            <span className="origin-center rotate-90 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em]">
              {content.scrollLabel}
            </span>
          </div>
        </section>

        <section className="bg-[#fbf9f7] px-4 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6c5b4b]">
                {content.partnershipEyebrow}
              </span>
              <h2 className="font-serif text-[32px] font-semibold leading-tight text-[#000c1e] md:text-[42px]">
                {content.partnershipTitle}
              </h2>
              <div className="my-8 h-px w-24 bg-[#c3c6cf]" />
              <p className="max-w-[620px] text-base leading-8 text-[#43474e] md:text-lg">
                {content.partnershipBody}
              </p>
              <p className="mt-8 max-w-[560px] text-base italic leading-7 text-[#43474e]">
                &quot;{content.partnershipQuote}&quot;
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#000c1e] transition-all hover:gap-5"
              >
                {content.partnershipCta}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={pageImages.retailHero}
                  alt={content.partnershipTitle}
                  width={900}
                  height={1125}
                  quality={100}
                  className="h-full w-full object-cover object-center grayscale-[0.12] transition duration-700 hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-8 left-4 bg-[#000c1e] px-8 py-7 text-white md:-left-10 md:px-10 md:py-9">
                <span className="block font-serif text-3xl font-bold leading-none">
                  {content.sealYear}
                </span>
                <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                  {content.sealLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="bg-[#fbf9f7] px-4 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-serif text-[30px] font-semibold leading-tight text-[#000c1e] md:text-[40px]">
                  {content.collectionsTitle}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#43474e] md:text-base">
                  {content.collectionsBody}
                </p>
              </div>
              <Link
                href="/contact"
                className="w-fit border-b border-[#000c1e] pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#000c1e] transition-opacity hover:opacity-70"
              >
                {content.collectionsCta}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {content.collections.map((collection, index) => (
                <article key={collection.title} className="group">
                  <div className="aspect-[16/9] overflow-hidden bg-[#e4e2e0]">
                    <Image
                      src={collectionImages[index] ?? pageImages.retailCraft}
                      alt={collection.title}
                      width={900}
                      height={506}
                      quality={100}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mx-auto mt-7 max-w-[440px] text-center">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6c5b4b]/70">
                      {collection.eyebrow}
                    </span>
                    <h3 className="mt-2 font-serif text-[25px] font-semibold text-[#000c1e]">
                      {collection.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#43474e] md:text-base">
                      {collection.body}
                    </p>
                    <span className="mt-6 inline-flex bg-[#eae8e6] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6c5b4b]">
                      {collection.badge}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f2efeb] px-4 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6c5b4b]">
                  {content.editorialEyebrow}
                </span>
                <h2 className="font-serif text-[30px] font-semibold leading-tight text-[#000c1e] md:text-[42px]">
                  {content.editorialTitle}
                </h2>
              </div>
              <p className="text-sm leading-6 text-[#43474e] md:col-span-5 md:text-base">
                {content.editorialBody}
              </p>
            </div>

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-4 md:gap-5">
              {altinyildizEditorialImages.map((image, index) => (
                <figure
                  className={`group mb-4 break-inside-avoid overflow-hidden bg-[#ded9d2] md:mb-5 ${editorialLayouts[index] ?? "aspect-[4/5]"}`}
                  key={image}
                >
                  <button
                    aria-label={`${content.editorialEyebrow} ${index + 1}`}
                    className="relative block h-full w-full cursor-zoom-in text-left"
                    onClick={() => setActiveEditorialIndex(index)}
                    type="button"
                  >
                    <Image
                      src={image}
                      alt={`${content.editorialEyebrow} ${index + 1}`}
                      width={900}
                      height={1125}
                      quality={82}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                    />
                    <span className="absolute inset-0 bg-[#000c1e]/0 transition-colors group-hover:bg-[#000c1e]/10" />
                  </button>
                </figure>
              ))}
            </div>

            <div className="mt-20 border-t border-[#d8d2cb] pt-14 md:mt-24 md:pt-16">
              <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <h3 className="font-serif text-[28px] font-semibold leading-tight text-[#000c1e] md:text-[36px]">
                    {content.storeImageryTitle}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-[#43474e] md:col-span-5 md:text-base">
                  {content.storeImageryBody}
                </p>
              </div>

              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 md:gap-5">
                {altinyildizStoreImages.map((image, index) => (
                  <figure
                    className={`group mb-4 break-inside-avoid overflow-hidden bg-[#ded9d2] md:mb-5 ${storeMasonryLayouts[index] ?? "aspect-[4/3]"}`}
                    key={image}
                  >
                    <button
                      aria-label={`${content.storeImageryEyebrow} ${index + 1}`}
                      className="relative block h-full w-full cursor-zoom-in text-left"
                      onClick={() => setActiveStoreIndex(index)}
                      type="button"
                    >
                      <Image
                        src={image}
                        alt={`${content.storeImageryEyebrow} ${index + 1}`}
                        width={1400}
                        height={1050}
                        quality={88}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                      />
                      <span className="absolute inset-0 bg-[#000c1e]/0 transition-colors group-hover:bg-[#000c1e]/10" />
                    </button>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#000c1e] px-4 py-28 text-center text-white md:px-16 md:py-36">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-[820px]">
            <Award aria-hidden className="mx-auto mb-8 h-12 w-12 text-[#708bb2]" />
            <h2 className="font-serif text-[36px] font-bold leading-tight md:text-[54px]">
              {content.heritageTitle}
            </h2>
            <p className="mx-auto mt-8 max-w-[760px] text-base leading-8 text-white/78 md:text-lg">
              {content.heritageBody}
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-10 md:gap-16">
              {content.metrics.map((metric) => (
                <div key={metric.label} className="min-w-[120px] text-center">
                  <div className="font-serif text-[26px] font-bold leading-none md:text-[32px]">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/58">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#c3c6cf] bg-[#fbf9f7] px-4 py-16 md:px-16 md:py-20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-[26px] font-semibold text-[#000c1e]">
                {content.storeTitle}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#43474e] md:text-base">
                {content.storeBody}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <label className="relative block min-w-0 sm:min-w-[320px]">
                <MapPin
                  aria-hidden
                  className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#43474e]"
                />
                <input
                  className="h-12 w-full border-0 bg-[#efedec] pl-11 pr-4 text-sm text-[#1b1c1b] outline-none ring-1 ring-transparent transition focus:ring-[#000c1e]"
                  placeholder={content.storePlaceholder}
                  type="search"
                />
              </label>
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[#000c1e] px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#002344]"
              >
                <Search aria-hidden className="h-4 w-4" />
                {content.storeButton}
              </button>
            </div>
          </div>
        </section>
      </main>
      {activeEditorialImage ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000c1e]/92 px-4 py-6 backdrop-blur-sm md:px-10"
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
                src={activeEditorialImage}
                alt={`${content.editorialEyebrow} ${(activeEditorialIndex ?? 0) + 1}`}
                width={900}
                height={1600}
                quality={90}
                sizes="90vw"
                className="max-h-[82vh] w-auto max-w-full object-contain shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                priority
              />
              <div className="mt-4 flex items-center justify-between text-white/70">
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {content.editorialEyebrow}
                </span>
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {(activeEditorialIndex ?? 0) + 1} / {altinyildizEditorialImages.length}
                </span>
              </div>
            </div>
          </div>
          <button
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white hover:text-[#000c1e] md:left-8 md:h-12 md:w-12"
            onClick={showPreviousEditorial}
            type="button"
          >
            <ChevronLeft aria-hidden className="h-6 w-6" />
          </button>
          <button
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white hover:text-[#000c1e] md:right-8 md:h-12 md:w-12"
            onClick={showNextEditorial}
            type="button"
          >
            <ChevronRight aria-hidden className="h-6 w-6" />
          </button>
          <button
            aria-label="Close"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center bg-white text-[#000c1e] transition-colors hover:bg-[#ffe089] md:right-8 md:top-8"
            onClick={closeLightbox}
            type="button"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>
      ) : null}
      {activeStoreImage ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000c1e]/92 px-4 py-6 backdrop-blur-sm md:px-10"
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
                alt={`${content.storeImageryEyebrow} ${(activeStoreIndex ?? 0) + 1}`}
                width={1400}
                height={1050}
                quality={92}
                sizes="90vw"
                className="max-h-[82vh] w-auto max-w-full object-contain shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                priority
              />
              <div className="mt-4 flex items-center justify-between text-white/70">
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {(activeStoreIndex ?? 0) + 1} / {altinyildizStoreImages.length}
                </span>
              </div>
            </div>
          </div>
          <button
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white hover:text-[#000c1e] md:left-8 md:h-12 md:w-12"
            onClick={showPreviousStore}
            type="button"
          >
            <ChevronLeft aria-hidden className="h-6 w-6" />
          </button>
          <button
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white hover:text-[#000c1e] md:right-8 md:h-12 md:w-12"
            onClick={showNextStore}
            type="button"
          >
            <ChevronRight aria-hidden className="h-6 w-6" />
          </button>
          <button
            aria-label="Close"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center bg-white text-[#000c1e] transition-colors hover:bg-[#ffe089] md:right-8 md:top-8"
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
