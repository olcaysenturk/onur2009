"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, PackageCheck, Route } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";

const cardIcons = [Handshake, Route, PackageCheck];

export function CompanySnapshotSection() {
  const { t } = useLanguage();
  const content = t.home.company;

  return (
    <section className="bg-white px-4 py-16 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-10 text-primary md:text-[40px] md:leading-[48px]">
            {content.title}
          </h2>
          <p className="mt-6 text-sm leading-6 text-muted md:text-base md:leading-7">
            {content.body}
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            {t.home.heritage.link}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {content.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-outline/30 bg-surface px-6 py-7 shadow-sm"
              >
                <div className="font-display text-3xl font-bold leading-none text-primary">
                  {metric.value}
                </div>
                <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {content.cards.map((card, index) => {
              const Icon = cardIcons[index] ?? PackageCheck;

              return (
                <article
                  key={card.title}
                  className="rounded-lg border border-outline/30 bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(39,59,120,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-muted text-accent">
                    <Icon aria-hidden className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1280px] overflow-hidden rounded-lg shadow-[0_16px_45px_rgba(39,59,120,0.10)]">
        <Image
          src={pageImages.logisticsHero}
          alt={content.title}
          width={1400}
          height={520}
          quality={100}
          className="h-[260px] w-full object-cover object-center md:h-[360px]"
        />
      </div>
    </section>
  );
}
