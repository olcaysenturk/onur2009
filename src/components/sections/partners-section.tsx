"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section
      id="references"
      className="overflow-hidden border-y border-outline/25 bg-background px-4 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-muted">
            {t.home.partners.eyebrow}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-x-20">
          {t.home.partners.items.map((partner) => (
            <div key={partner} className="font-sans text-base font-normal uppercase leading-5 text-outline md:text-xl">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
