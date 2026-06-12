"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images, trustHighlights } from "@/lib/site";
import { SectionLabel } from "@/components/ui/section-label";
import { useLanguage } from "@/hooks/useLanguage";

export function HeritageSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-[1280px] px-4 py-16 md:px-10 md:py-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-6">
        <div className="space-y-6 md:col-span-5">
          <SectionLabel>{t.home.heritage.eyebrow}</SectionLabel>
          <h2 className="text-balance font-display text-2xl font-semibold leading-8 text-primary md:text-[32px] md:leading-[40px]">
            {t.home.heritage.title}
          </h2>
          <p className="text-sm leading-5 text-muted">
            {t.home.heritage.body}
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            {t.home.heritage.link}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>

        <div className="relative md:col-span-6 md:col-start-7">
          <div className="absolute -inset-4 translate-x-4 translate-y-4 rounded-xl bg-surface-muted" />
          <div className="relative overflow-hidden rounded-lg shadow-[0_12px_40px_rgba(39,59,120,0.1)]">
            <Image
              src={images.heritage}
              alt="Corporate boardroom"
              width={900}
              height={675}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="hidden">
        {trustHighlights.map((item, index) => {
          const Icon = item.icon;
          const text = t.home.heritage.highlights[index];
          return (
            <div key={item.title} className="border-l-4 border-accent bg-surface px-6 py-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3 text-primary">
                <Icon aria-hidden className="h-5 w-5" />
                <h3 className="font-display text-lg font-semibold">{text.title}</h3>
              </div>
              <p className="text-sm leading-6 text-muted">{text.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
