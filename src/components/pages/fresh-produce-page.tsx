"use client";

import Image from "next/image";
import Link from "next/link";
import { Boxes, Globe2, Leaf, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { imageAssets } from "@/lib/assets";
import { formatCopyright } from "@/lib/copyright";
import { images } from "@/lib/site";
import type { Translation } from "@/locales/types";

type FreshContent = Translation["freshProduceView"];

const freshProduceImages = {
  vegetables: "/images/fresh-produce/vegetables-market.jpg",
  citrus: "/images/fresh-produce/citrus-crates.jpg",
  packaging: "/images/fresh-produce/produce-packaging.jpg",
  vineyard: "/images/fresh-produce/vineyard-grapes.jpg",
  products: {
    tomato: "/images/fresh-produce/products/tomato.jpg",
    pepper: "/images/fresh-produce/products/pepper.jpg",
    onion: "/images/fresh-produce/products/onion.jpg",
    carrot: "/images/fresh-produce/products/carrot.jpg",
    gherkin: "/images/fresh-produce/products/gherkin.jpg",
    zucchini: "/images/fresh-produce/products/zucchini.jpg",
    grapes: "/images/fresh-produce/products/grapes.jpg",
    pomegranate: "/images/fresh-produce/products/pomegranate.jpg",
    quince: "/images/fresh-produce/products/quince.jpg",
    watermelonMelon: "/images/fresh-produce/products/watermelon-melon.jpg",
    fig: "/images/fresh-produce/products/fig.jpg",
    citrus: "/images/fresh-produce/products/citrus.jpg",
  },
} as const;

const produceHighlightImages = [
  freshProduceImages.vegetables,
  freshProduceImages.citrus,
  freshProduceImages.packaging,
];

const productImages = [
  freshProduceImages.products.tomato,
  freshProduceImages.products.pepper,
  freshProduceImages.products.onion,
  freshProduceImages.products.carrot,
  freshProduceImages.products.gherkin,
  freshProduceImages.products.zucchini,
  freshProduceImages.products.grapes,
  freshProduceImages.products.pomegranate,
  freshProduceImages.products.quince,
  freshProduceImages.products.watermelonMelon,
  freshProduceImages.products.fig,
  freshProduceImages.products.citrus,
];

export function FreshProducePage() {
  const { t } = useLanguage();
  const content = t.freshProduceView as FreshContent;

  return (
    <>
      <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-[#05110b] text-white md:min-h-[calc(100vh-80px)]">
        <video
          aria-label={content.heroVideoLabel}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#030806]/88 via-[#06140d]/50 to-[#06140d]/14" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0, 0, 0, 0.85) 0.75px, transparent 1.1px)",
            backgroundSize: "7px 7px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_36%,rgba(3,8,6,0.48)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030806]/72 via-transparent to-[#030806]/28" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-20 md:px-16">
          <div className="max-w-[760px]">
            <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78">
              <Truck aria-hidden className="h-4 w-4 text-[#cda729]" />
              {content.heroEyebrow}
            </span>
            <h1 className="font-display text-[40px] font-bold leading-[1.08] tracking-normal md:text-[68px]">
              {content.heroTitle}
            </h1>
            <p className="mt-7 max-w-[680px] text-base leading-7 text-white/84 md:text-lg md:leading-8">
              {content.heroBody}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center bg-[#cda729] px-7 text-sm font-semibold text-[#030806] transition-opacity hover:opacity-90"
                href="#fresh-products"
              >
                {content.heroPrimary}
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-white/55 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#030806]"
                href="#fresh-packaging"
              >
                {content.heroSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf9f2] px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b6829]">
              {content.introEyebrow}
            </span>
            <h2 className="font-display text-[32px] font-semibold leading-tight text-[#07120c] md:text-[48px]">
              {content.introTitle}
            </h2>
            <p className="mt-7 text-base leading-8 text-[#3f4a42] md:text-lg">
              {content.introBody}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {content.produceHighlights.map((image, index) => (
                <figure className="group relative h-32 overflow-hidden bg-[#dfe6dc] md:h-44" key={image.label}>
                  <Image
                    src={produceHighlightImages[index] ?? freshProduceImages.vegetables}
                    alt={image.alt}
                    fill
                    quality={100}
                    sizes="(min-width: 768px) 220px, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#07120c]/64 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-3 left-3 right-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/88">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:col-span-5">
            {content.introFeatures.map((feature, index) => {
              const Icon = index === 0 ? Leaf : index === 1 ? ShieldCheck : Globe2;

              return (
                <article
                  className="border-l-4 border-[#cda729] bg-white p-6 shadow-[0_12px_32px_rgba(7,18,12,0.06)]"
                  key={feature.title}
                >
                  <Icon aria-hidden className="mb-4 h-6 w-6 text-[#8a721d]" />
                  <h3 className="font-display text-xl font-semibold text-[#07120c]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4a554d]">{feature.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fresh-products" className="bg-white px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-[820px]">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b6829]">
              {content.productEyebrow}
            </span>
            <h2 className="font-display text-[32px] font-semibold leading-tight text-[#07120c] md:text-[48px]">
              {content.productTitle}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#4a554d]">
              {content.productBody}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.productCategories.map((category, index) => (
              <article
                className="group overflow-hidden border border-[#e2e6df] bg-[#fbf9f2] transition-colors hover:border-[#cda729]"
                key={category.title}
              >
                <div className="relative h-36 overflow-hidden bg-[#dfe6dc]">
                  <Image
                    src={productImages[index] ?? freshProduceImages.vegetables}
                    alt={category.title}
                    fill
                    quality={95}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#07120c]/42 to-transparent" />
                </div>
                <div className="p-6">
                  <Boxes aria-hidden className="mb-5 h-5 w-5 text-[#8a721d]" />
                  <h3 className="font-display text-lg font-semibold leading-6 text-[#07120c]">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4a554d]">{category.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fresh-packaging" className="bg-[#eef2ec] px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Image
              src={freshProduceImages.packaging}
              alt={content.packagingImageAlt}
              width={920}
              height={760}
              quality={100}
              className="h-[420px] w-full object-cover shadow-[0_18px_50px_rgba(7,18,12,0.14)] md:h-[560px]"
            />
          </div>
          <div className="md:col-span-6">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b6829]">
              {content.packagingEyebrow}
            </span>
            <h2 className="font-display text-[32px] font-semibold leading-tight text-[#07120c] md:text-[46px]">
              {content.packagingTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4a554d]">
              {content.packagingBody}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {content.packagingFeatures.map((feature) => (
                <article className="bg-white p-5" key={feature.title}>
                  <PackageCheck aria-hidden className="mb-4 h-5 w-5 text-[#8a721d]" />
                  <h3 className="font-display text-base font-semibold leading-6 text-[#07120c]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4a554d]">{feature.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 bg-[#07120c] p-6 text-white">
              <h3 className="font-display text-xl font-semibold">{content.packagingOptionsTitle}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/78">
                {content.packagingOptions.map((option) => (
                  <li className="flex gap-3" key={option}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#cda729]" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07120c] px-5 py-20 text-white md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#cda729]">
                {content.vineyardEyebrow}
              </span>
              <h2 className="font-display text-[32px] font-semibold leading-tight md:text-[48px]">
                {content.vineyardTitle}
              </h2>
            </div>
            <p className="text-base leading-8 text-white/72 md:col-span-5">
              {content.vineyardBody}
            </p>
          </div>
          <div className="relative mt-12 h-[320px] overflow-hidden bg-[#102118] md:h-[440px]">
            <Image
              src={freshProduceImages.vineyard}
              alt={content.vineyardImageAlt}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center opacity-82"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07120c]/72 via-[#07120c]/18 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-[520px] p-7 md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#cda729]">
                {content.vineyardImageLabel}
              </span>
              <p className="mt-4 text-base leading-7 text-white/82 md:text-lg">
                {content.vineyardImageBody}
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {content.vineyardMetrics.map((metric) => (
              <article className="border border-white/12 bg-white/[0.04] p-7" key={metric.label}>
                <div className="font-display text-[44px] font-bold leading-none text-[#cda729]">
                  {metric.value}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-7">
                  {metric.label}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/68">{metric.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-[860px] text-base leading-8 text-white/72">
            {content.vineyardClosing}
          </p>
        </div>
      </section>

      <footer className="grid w-full grid-cols-12 gap-8 bg-[#000613] px-5 py-16 text-white md:px-16 md:py-[120px]">
        <div className="col-span-12 mb-8 md:col-span-4 md:mb-0">
          <Image
            src={images.logo}
            alt=""
            width={1536}
            height={759}
            className="mb-6 h-auto w-[132px] object-contain"
          />
          <p className="mb-6 max-w-xs text-sm leading-5 text-white/70">
            {content.footerBody}
          </p>
          <div className="text-sm leading-5 text-white/70">
            {formatCopyright(content.footerCopyright)}
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <h2 className="mb-6 font-display text-sm font-bold leading-5 tracking-[0.05em] text-[#cda729]">
            {content.footerDivisions}
          </h2>
          <ul className="space-y-4">
            {t.footer.groups
              .slice(0, 2)
              .flatMap((group) => group.links)
              .slice(0, 4)
              .map((link, index) => (
                <li key={`${link.href}-${link.label}-${index}`}>
                  <Link
                    className="text-sm leading-5 text-white/70 transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-4">
          <h2 className="mb-6 font-display text-sm font-bold leading-5 tracking-[0.05em] text-[#cda729]">
            {content.footerLegal}
          </h2>
          <ul className="space-y-4">
            {t.footer.groups.at(-1)?.links.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-sm leading-5 text-white/70 transition-colors hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {content.legalExtra.map((link, index) => (
              <li key={`${link.href}-${link.label}-${index}`}>
                <Link
                  className="text-sm leading-5 text-white/70 transition-colors hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
