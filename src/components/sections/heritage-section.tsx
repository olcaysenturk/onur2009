"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images, trustHighlights } from "@/lib/site";
import { SectionLabel } from "@/components/ui/section-label";
import { useLanguage } from "@/hooks/useLanguage";

export function HeritageSection() {
  const { t } = useLanguage();
  const highlights = trustHighlights.map((item, index) => ({
    ...item,
    text: t.home.heritage.highlights[index],
  }));

  return (
    <section id="about" className="bg-background px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <SectionLabel>{t.home.heritage.eyebrow}</SectionLabel>
          <h2 className="text-balance font-display text-3xl font-semibold leading-10 text-primary md:text-[44px] md:leading-[52px]">
            {t.home.heritage.title}
          </h2>
          <p className="text-base leading-7 text-muted">
            {t.home.heritage.body}
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border-b border-accent pb-1 font-sans text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            {t.home.heritage.link}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src={images.heritage}
              alt="Corporate boardroom"
              fill
              quality={100}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/82 via-primary/16 to-transparent" />
            <div className="absolute bottom-0 left-0 grid w-full grid-cols-1 gap-px bg-white/16 p-px md:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="bg-white/90 p-6 backdrop-blur">
                    <Icon aria-hidden className="mb-4 h-6 w-6 text-accent" />
                    <h3 className="font-display text-lg font-semibold text-primary">
                      {item.text.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
