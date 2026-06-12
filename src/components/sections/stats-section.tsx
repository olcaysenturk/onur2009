"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-outline/25 bg-surface px-4 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-outline/30">
          {t.home.stats.map((stat) => (
            <div key={stat.label} className="px-4 text-center">
              <div className="mb-2 font-display text-base font-normal leading-none text-primary">
                {stat.value}
              </div>
              <div className="font-sans text-xs font-normal uppercase tracking-[0.12em] text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
