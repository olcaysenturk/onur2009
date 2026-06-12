"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Rocket } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { useLanguage } from "@/hooks/useLanguage";
import { images } from "@/lib/site";
import { pageImages } from "@/lib/pages";

export function HeroSection() {
  const { t } = useLanguage();
  const slides = [
    {
      key: "overview",
      image: images.hero,
      eyebrow: t.home.hero.eyebrow,
      title: t.home.hero.title,
      accent: t.home.hero.accent,
      description: t.home.hero.description,
      href: "/services",
    },
    {
      key: "logistics",
      image: pageImages.logisticsHero,
      eyebrow: t.divisions["logistics-transport"].eyebrow,
      title: t.divisions["logistics-transport"].headline,
      description: t.divisions["logistics-transport"].description,
      href: "/logistics-transport",
    },
    {
      key: "fresh",
      image: pageImages.freshHero,
      eyebrow: t.divisions["fresh-produce-trade"].eyebrow,
      title: t.divisions["fresh-produce-trade"].headline,
      description: t.divisions["fresh-produce-trade"].description,
      href: "/fresh-produce-trade",
    },
    {
      key: "retail",
      image: pageImages.retailHero,
      eyebrow: t.divisions["retail-fashion"].eyebrow,
      title: t.divisions["retail-fashion"].headline,
      description: t.divisions["retail-fashion"].description,
      href: "/retail-fashion",
    },
    {
      key: "soba",
      image: pageImages.sobaklavaHero,
      eyebrow: t.divisions["sobaklava-distribution"].eyebrow,
      title: t.divisions["sobaklava-distribution"].headline,
      description: t.divisions["sobaklava-distribution"].description,
      href: "/sobaklava-distribution",
    },
    {
      key: "bulgatex",
      image: pageImages.bulgatexHero,
      eyebrow: t.divisions["bulgatex-consulting"].eyebrow,
      title: t.divisions["bulgatex-consulting"].headline,
      description: t.divisions["bulgatex-consulting"].description,
      href: "/bulgatex-consulting",
    },
  ] as const;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide];

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-primary text-white md:min-h-[90vh]"
    >
      {slides.map((item, index) => (
        <Image
          key={item.key}
          src={item.image}
          alt={item.title}
          fill
          quality={100}
          priority={index === 0}
          className={`object-cover transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/25" />
      <div className="absolute inset-0 bg-primary/10" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-4 py-24 md:grid-cols-12 md:px-10">
        <div className="space-y-6 md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.05em] backdrop-blur-sm ring-1 ring-white/20">
            <Rocket aria-hidden className="h-3.5 w-3.5 text-accent" />
            <span>{slide.eyebrow}</span>
          </div>
          <h1 className="text-balance font-display text-[40px] font-bold leading-[48px] tracking-normal md:text-[48px] md:leading-[56px]">
            {slide.title}
            {"accent" in slide ? <span className="text-accent"> {slide.accent}</span> : null}
          </h1>
          <p className="max-w-2xl text-sm leading-5 text-white/90 md:max-w-[620px]">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <ButtonLink href={slide.href} showIcon>
              {t.home.hero.primary}
            </ButtonLink>
            <ButtonLink href="#about" variant="ghost">
              {t.home.hero.secondary}
            </ButtonLink>
          </div>
        </div>

    

        <div className="mt-4 flex items-center gap-3 md:col-span-7">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setActiveSlide((current) => (current - 1 + slides.length) % slides.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.key}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide ? "w-8 bg-accent" : "w-2.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setActiveSlide((current) => (current + 1) % slides.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
