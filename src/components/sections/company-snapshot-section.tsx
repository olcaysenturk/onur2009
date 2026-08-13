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
    <section className="bg-white px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-10 text-primary md:text-[42px] md:leading-[50px]">
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

        <div className="space-y-6 lg:col-span-8">
          <div className="relative min-h-[360px] overflow-hidden bg-primary">
            <Image
              src={pageImages.logisticsHero}
              alt={content.title}
              fill
              quality={100}
              className="object-cover opacity-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/88 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 grid w-full grid-cols-1 gap-px bg-white/14 p-px md:grid-cols-3">
              {content.metrics.map((metric) => (
                <div key={metric.label} className="bg-white/92 px-6 py-6 backdrop-blur">
                  <div className="font-display text-3xl font-semibold leading-none text-primary">
                    {metric.value}
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-outline/40 md:grid-cols-3">
            {content.cards.map((card, index) => {
              const Icon = cardIcons[index] ?? PackageCheck;

              return (
                <article
                  key={card.title}
                  className="bg-surface p-6 transition-colors hover:bg-surface-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-surface-muted text-accent">
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
    </section>
  );
}
