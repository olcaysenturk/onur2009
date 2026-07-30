"use client";

import Image from "next/image";
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {t.home.partners.items.map((partner) => (
            <div
              key={partner.name}
              className="group flex h-24 items-center justify-center rounded-lg border border-outline/30 bg-surface px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_35px_rgba(39,59,120,0.10)]"
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
