"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { divisionPages, pageImages } from "@/lib/pages";

const page = divisionPages.find((item) => item.slug === "retail-fashion");

export default function RetailFashionPage() {
  const { t } = useLanguage();

  if (!page) return null;

  const localizedPage = t.divisions[page.slug] ?? page;
  const content = t.retailPage;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="relative min-h-[520px] overflow-hidden bg-primary md:min-h-[720px]">
          <Image
            src={pageImages.retailHero}
            alt={localizedPage.headline}
            fill
            priority
            quality={100}
            className="object-cover object-[42%_38%]"
          />
          <div className="absolute inset-0 bg-primary-deep/68" />
        </section>

        <section className="bg-background px-4 py-20 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-20">
            <div className="relative md:col-span-6">
              <Image
                src={page.introImage ?? pageImages.retailCraft}
                alt={localizedPage.introTitle}
                width={720}
                height={900}
                quality={100}
                className="aspect-[4/5] w-full rounded object-cover shadow-[0_18px_50px_rgba(39,59,120,0.12)]"
              />
              <div className="absolute -bottom-8 right-[-6px] w-[190px] rounded-sm border border-primary-deep bg-primary px-7 py-6 text-white shadow-[0_20px_44px_rgba(39,59,120,0.28)] md:-right-8 md:w-[250px] md:px-8 md:py-7">
                <div className="font-display text-4xl font-bold leading-none text-accent md:text-5xl">
                  20+
                </div>
                <div className="mt-3 font-display text-xs font-bold uppercase leading-4 tracking-[0.03em]">
                  {content.statLabel}
                </div>
              </div>
            </div>

            <div className="pt-10 md:col-span-5 md:col-start-8 md:pt-0">
              <span className="inline-flex rounded bg-accent/10 px-4 py-2 font-sans text-xs font-medium text-accent">
                {content.heritageLabel}
              </span>
              <h1 className="mt-8 font-display text-[30px] font-semibold leading-10 text-primary md:text-[34px]">
                {localizedPage.headline}
              </h1>
              <div className="mt-7 space-y-5 text-base leading-7 text-muted">
                <p>{content.body}</p>
                <p>{content.secondaryBody}</p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 font-display text-sm font-bold text-primary transition-colors hover:text-accent"
              >
                {content.readStory}
                <ArrowRight aria-hidden className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
