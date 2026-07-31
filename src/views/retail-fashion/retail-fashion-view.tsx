"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin, Search } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";

const collectionImages = [pageImages.servicesRetail, pageImages.retailHero];

export default function RetailFashionPage() {
  const { t } = useLanguage();
  const content = t.retailPage;

  return (
    <>
      <Header />
      <main className="bg-[#fbf9f7] pt-16 text-[#1b1c1b] md:pt-20">
        <section className="relative flex min-h-[620px] items-center overflow-hidden md:min-h-[calc(100vh-80px)]">
          <Image
            src={pageImages.retailCraft}
            alt={content.heroTitle}
            fill
            priority
            quality={100}
            className="object-cover object-[50%_20%] grayscale-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000c1e]/75 via-[#000c1e]/30 to-transparent" />
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
      <Footer />
    </>
  );
}
