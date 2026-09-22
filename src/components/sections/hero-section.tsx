"use client";

import { ArrowRight, Globe2, PackageCheck, Rocket } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { useLanguage } from "@/hooks/useLanguage";
import { imageAssets } from "@/lib/assets";

export function HeroSection() {
  const { t } = useLanguage();
  const featuredDivisions = [
    { href: "/fresh-produce-trade", title: t.divisions["fresh-produce-trade"].title },
    { href: "/logistics-transport", title: t.divisions["logistics-transport"].title },
    { href: "/bulgatex-consulting", title: t.divisions["bulgatex-consulting"].title },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[#05080f] text-white md:min-h-[92vh]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={imageAssets.videos.homeHero}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={imageAssets.videoPosters.homeHero}
        aria-label={t.home.hero.eyebrow}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-4 py-24 md:grid-cols-12 md:px-10 md:py-28">
        <div className="max-w-3xl space-y-7 drop-shadow-[0_3px_16px_rgba(0,0,0,0.75)] md:col-span-8">
          <div className="inline-flex items-center gap-2 border-l-2 border-accent bg-white/10 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.08em] backdrop-blur-md">
            <Rocket aria-hidden className="h-3.5 w-3.5 text-accent" />
            <span>{t.home.hero.eyebrow}</span>
          </div>

          <h1 className="text-balance font-display text-[44px] font-semibold leading-[48px] tracking-normal md:text-[66px] md:leading-[66px]">
            {t.home.hero.title}
            <span className="block text-accent">{t.home.hero.accent}</span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-white/84 md:text-lg md:leading-8">
            {t.home.hero.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/services" showIcon>
              {t.home.hero.primary}
            </ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              {t.home.hero.secondary}
            </ButtonLink>
          </div>
        </div>

        <aside className="self-end md:col-span-4">
          <div className="border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-accent text-white">
                <Globe2 aria-hidden className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-white/65">
                  ONUR2009
                </p>
                <p className="text-sm text-white/85">{t.home.services.eyebrow}</p>
              </div>
            </div>

            <div className="divide-y divide-white/12">
              {featuredDivisions.map((division) => (
                <a
                  key={division.href}
                  href={division.href}
                  className="group flex items-center justify-between gap-4 py-4 text-sm font-semibold text-white transition-colors hover:text-accent"
                >
                  <span>{division.title}</span>
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 bg-black/18 p-4 text-sm leading-6 text-white/78">
              <PackageCheck aria-hidden className="h-5 w-5 shrink-0 text-accent" />
              <span>{t.home.company.metrics[0]?.label}</span>
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-px bg-white/12 md:col-span-12 md:grid-cols-4">
          {t.home.stats.map((stat) => (
            <div key={stat.label} className="bg-white/[0.08] px-5 py-5 backdrop-blur-md">
              <div className="font-display text-3xl font-semibold leading-none text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-white/62">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
