"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CakeSlice,
  FileText,
  Handshake,
  Landmark,
  Monitor,
  PackageCheck,
  Route,
  Shirt,
  Sprout,
  Truck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { aboutPage, pageImages } from "@/lib/pages";
import type { Translation } from "@/locales/types";

type AboutContent = Translation["aboutView"];

const highlightIcons = [Handshake, Route, PackageCheck];
const capabilityIcons = [Sprout, Truck, PackageCheck, Shirt];
const teamIcons = [Handshake, UsersRound, PackageCheck, FileText, Landmark, Monitor, Truck, UserRound];
const partnershipIcons = [Sprout, UsersRound, Handshake];

export default function AboutPage() {
  const { t } = useLanguage();
  const content = t.aboutView as AboutContent;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="relative overflow-hidden bg-primary px-4 py-20 text-white md:px-10 md:py-28">
          <Image
            src={pageImages.logisticsHero}
            alt={content.overviewTitle}
            fill
            priority
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/35" />
          <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                {content.overviewTitle}
              </p>
              <h1 className="mt-5 text-balance font-display text-[42px] font-bold leading-[50px] md:text-[64px] md:leading-[72px]">
                {content.title} <span className="text-accent">{content.accent}</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/88 md:text-lg md:leading-8">
                {content.overviewBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded bg-accent px-7 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-secondary"
                >
                  {content.primary}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <a
                  href="#team"
                  className="inline-flex items-center rounded border border-white/30 px-7 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {content.secondary}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {content.overviewHighlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Handshake;

                return (
                  <article key={item.title} className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
                    <Icon aria-hidden className="h-6 w-6 text-accent" />
                    <h2 className="mt-4 font-display text-lg font-semibold">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-white/78">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-semibold leading-10 text-primary md:text-[40px] md:leading-[48px]">
                {content.capabilitiesTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-muted">{content.capabilitiesBody}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {content.capabilities.map((item, index) => {
                const Icon = capabilityIcons[index] ?? CakeSlice;

                return (
                  <article key={item.title} className="rounded-lg border border-outline/30 bg-surface p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-muted text-accent">
                      <Icon aria-hidden className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="relative overflow-hidden rounded-lg shadow-[0_18px_45px_rgba(39,59,120,0.12)] lg:col-span-5">
              <Image
                src={aboutPage.image}
                alt={content.partnershipTitle}
                width={760}
                height={860}
                quality={100}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl font-semibold leading-10 text-primary md:text-[40px] md:leading-[48px]">
                {content.partnershipTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-muted md:text-lg md:leading-8">
                {content.partnershipBody}
              </p>
              <div className="mt-8 space-y-5">
                {content.partnershipItems.map((item, index) => {
                  const Icon = partnershipIcons[index] ?? Handshake;

                  return (
                    <div key={item.title} className="flex gap-5">
                      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-surface-muted text-primary">
                        <Icon aria-hidden className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-primary">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-8 text-base leading-7 text-muted">{content.partnershipClosing}</p>
            </div>
          </div>
        </section>

        <section id="team" className="bg-surface-soft px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 max-w-4xl">
              <h2 className="font-display text-3xl font-semibold leading-10 text-primary md:text-[40px] md:leading-[48px]">
                {content.teamTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">{content.teamBody}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {content.team.map((member, index) => {
                const Icon = teamIcons[index] ?? UserRound;

                return (
                  <article
                    key={member.name}
                    className="flex gap-5 rounded-lg border border-outline/30 bg-surface p-6 shadow-sm"
                  >
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-surface-muted text-accent">
                      <Icon aria-hidden className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-primary">{member.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{member.role}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
