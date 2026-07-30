"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, FileSearch, Globe2, Truck } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";

const cardIcons = [Globe2, BriefcaseBusiness, FileSearch, Truck];

export default function BulgatexConsultingView() {
  const { t } = useLanguage();
  const copy = t.bulgatexView;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="relative flex min-h-[620px] items-center overflow-hidden bg-primary-deep px-4 py-20 text-white md:min-h-[760px] md:px-10">
          <Image
            src={pageImages.bulgatexHero}
            alt={copy.title}
            fill
            priority
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-deep/72" />
          <div className="relative z-10 mx-auto w-full max-w-[1280px]">
            <div className="max-w-[720px]">
              <span className="inline-flex rounded bg-accent px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.03em] text-white">
                {copy.badge}
              </span>
              <h1 className="mt-7 max-w-[680px] font-display text-[38px] font-bold leading-[46px] text-white md:text-[50px] md:leading-[58px]">
                {copy.title}
              </h1>
              <p className="mt-7 max-w-[680px] text-base leading-7 text-white/90">
                {copy.body}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-7 font-display text-sm font-bold text-white transition-colors hover:bg-secondary"
                >
                  {copy.primary}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white px-7 font-display text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  {copy.secondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-16 max-w-[760px]">
              <h2 className="font-display text-[30px] font-semibold leading-10 text-primary">
                {copy.competenciesTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary">{copy.competenciesBody}</p>
            </div>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
              <article className="rounded border border-outline/35 border-t-4 border-t-accent bg-surface p-8 shadow-[0_8px_28px_rgba(39,59,120,0.06)] lg:col-span-2">
                <h3 className="mt-10 font-display text-2xl font-semibold text-primary">
                  {copy.cards[0].title}
                </h3>
                <p className="mt-5 max-w-[760px] text-sm leading-6 text-secondary">
                  {copy.cards[0].body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {copy.cards[0].tags?.map((tag) => (
                    <span key={tag} className="rounded-sm bg-surface-soft px-3 py-1.5 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              <article className="relative overflow-hidden rounded bg-primary p-8 text-white">
                <div className="absolute right-6 top-5 h-16 w-16 border-8 border-white/10" />
                <h3 className="font-display text-2xl font-semibold">{copy.cards[1].title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/85">{copy.cards[1].body}</p>
                <Link
                  href="/contact"
                  className="mt-14 inline-flex items-center gap-3 font-display text-sm font-bold text-white transition-colors hover:text-accent"
                >
                  {copy.learnMore}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </article>

              {copy.cards.slice(2).map((card, index) => {
                const Icon = cardIcons[index + 2];

                return (
                  <article
                    key={card.title}
                    className="rounded border border-outline/35 border-t-4 border-t-accent bg-surface p-8 shadow-[0_8px_28px_rgba(39,59,120,0.06)]"
                  >
                    <Icon aria-hidden className="h-7 w-7 text-primary" />
                    <h3 className="mt-8 font-display text-xl font-semibold text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-secondary">{card.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface-soft px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1120px]">
            <div className="mx-auto mb-16 max-w-[720px] text-center">
              <h2 className="font-display text-[30px] font-semibold leading-10 text-primary">
                {copy.processTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary">{copy.processBody}</p>
            </div>

            <div className="relative mx-auto max-w-[920px]">
              <div className="absolute left-4 top-0 h-full w-px bg-outline md:left-1/2" />
              <div className="space-y-14">
                {copy.phases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`pl-14 md:pl-0 ${
                        index % 2 === 0 ? "md:pr-14" : "md:col-start-2 md:pl-14"
                      }`}
                    >
                      <h3 className="font-display text-xl font-semibold text-primary">{phase.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-secondary">{phase.body}</p>
                    </div>
                    <span className="absolute left-4 top-0 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded bg-primary font-display text-sm font-bold text-white md:left-1/2">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
