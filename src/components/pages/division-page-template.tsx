"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionLabel } from "@/components/ui/section-label";
import { divisionPages, type DivisionPage } from "@/lib/pages";
import { useLanguage } from "@/hooks/useLanguage";
import { PageHero } from "./page-hero";
import { InfoCard } from "./info-card";

type DivisionPageTemplateProps = {
  slug: DivisionPage["slug"];
};

export function DivisionPageTemplate({ slug }: DivisionPageTemplateProps) {
  const { t } = useLanguage();
  const page = divisionPages.find((item) => item.slug === slug);

  if (!page) {
    return null;
  }

  const localizedPage = t.divisions[page.slug] ?? page;
  const cards = page.cards.map((card, index) => ({
    ...card,
    title: localizedPage.cards[index]?.title ?? card.title,
    description: localizedPage.cards[index]?.description ?? card.description,
  }));

  return (
    <>
      <PageHero
        eyebrow={localizedPage.eyebrow}
        title={localizedPage.headline}
        description={localizedPage.description}
        image={page.heroImage}
      />

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 py-16 md:grid-cols-12 md:px-10 md:py-28">
        <div className="space-y-6 md:col-span-5">
          <SectionLabel>{localizedPage.title}</SectionLabel>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-primary md:text-5xl">
            {localizedPage.introTitle}
          </h2>
        </div>
        <div className="space-y-8 md:col-span-6 md:col-start-7">
          {page.introImage ? (
            <Image
              src={page.introImage}
              alt={localizedPage.introTitle}
              width={900}
              height={560}
              quality={100}
              className="aspect-[16/10] w-full rounded-lg object-cover shadow-[0_12px_40px_rgba(39,59,120,0.12)]"
            />
          ) : null}
          <p className="text-lg leading-8 text-muted">{localizedPage.introBody}</p>
          <ButtonLink href="/contact" showIcon>
            {t.common.requestAssessment}
          </ButtonLink>
        </div>
      </section>

      <section className="bg-surface-soft px-4 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              {localizedPage.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-5xl">
              {localizedPage.cardsTitle}
            </h2>
            <p className="text-lg leading-8 text-muted">{localizedPage.cardsIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {cards.map((card, index) => (
              <InfoCard key={card.title} card={card} large={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {localizedPage.process?.length ? (
        <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              {page.processImage ? (
                <Image
                  src={page.processImage}
                  alt={localizedPage.processTitle ?? localizedPage.title}
                  width={760}
                  height={520}
                  quality={100}
                  className="mb-8 aspect-[4/3] w-full rounded-lg object-cover shadow-lg"
                />
              ) : null}
              <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-5xl">
                {localizedPage.processTitle}
              </h2>
              <p className="text-lg leading-8 text-muted">{localizedPage.processIntro}</p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ol className="space-y-4">
                {localizedPage.process.map((step, index) => (
                  <li key={step} className="flex gap-4 border-l-2 border-accent bg-surface p-5 shadow-sm">
                    <span className="font-display text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-semibold text-primary">{step}</span>
                    <ArrowRight aria-hidden className="ml-auto h-5 w-5 text-muted" />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
