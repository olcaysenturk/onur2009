"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section
      id="references"
      className="overflow-hidden bg-white px-4 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex items-center justify-between gap-6 border-b border-outline/35 pb-6">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-muted">
            {t.home.partners.eyebrow}
          </p>
          <div className="hidden h-px flex-1 bg-outline/35 md:block" />
        </div>
        <div className="grid grid-cols-2 gap-px bg-outline/35 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {t.home.partners.items.map((partner) => (
            <div
              key={partner.name}
              className="group flex h-24 items-center justify-center bg-surface px-5 py-4 transition-colors duration-300 hover:bg-surface-soft"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={100}
                className="max-h-14 w-auto max-w-full object-contain opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
