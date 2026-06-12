"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, FileSearch, Globe2, Truck } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";

const localizedCopy = {
  en: {
    badge: "Bulgatex Consulting",
    title: "Strategic Architecture for Global Markets",
    body:
      "Expert market entry support, intricate import/export logistics, and specialized textile trade consulting. We engineer robust business development strategies for visionary enterprises expanding across Europe and Asia.",
    primary: "Explore Services",
    secondary: "Consult with an Expert",
    competenciesTitle: "Core Competencies",
    competenciesBody:
      "Data-driven methodologies applied to international trade complexities. Our consulting framework is built on decades of operational excellence.",
    learnMore: "Learn More",
    cards: [
      {
        title: "Market Entry Support",
        body:
          "Comprehensive strategic planning for penetrating new territories. We provide detailed risk analysis, regulatory compliance roadmaps, and competitive landscape mapping.",
        tags: ["Risk Analysis", "Regulatory Compliance"],
      },
      {
        title: "Partnership Development",
        body:
          "Identifying, vetting, and establishing critical joint ventures and distribution channels to solidify your market presence.",
      },
      {
        title: "Textile Trade Expertise",
        body:
          "Leveraging deep industry networks to optimize your textile supply chain, from raw material sourcing to finished goods distribution.",
      },
      {
        title: "Import/Export Consulting",
        body:
          "Navigating complex customs architectures, tariff classifications, and cross-border logistics to streamline your operational efficiency.",
      },
    ],
    processTitle: "Strategic Integration Process",
    processBody:
      "A methodical, phase-gated approach to establishing your operational footprint in new markets.",
    phases: [
      {
        title: "Phase 01: Audit & Analysis",
        body:
          "Deep-dive into current capabilities, target market dynamics, and regulatory requirements. We formulate the baseline data required for strategic positioning.",
      },
      {
        title: "Phase 02: Strategic Blueprinting",
        body:
          "Development of the execution roadmap. This includes partner identification profiles, supply chain routing, and financial modeling for the first 24 months.",
      },
      {
        title: "Phase 03: Execution & Integration",
        body:
          "Active facilitation of negotiations, legal structure formation, and operational setup. We serve as your on-ground architects during the critical launch window.",
      },
    ],
  },
  tr: {
    badge: "Bulgatex Consulting",
    title: "Küresel Pazarlar için Stratejik Mimari",
    body:
      "Pazar giriş desteği, detaylı ithalat/ihracat lojistiği ve tekstil ticareti danışmanlığı. Avrupa ve Asya’da büyüyen şirketler için sağlam iş geliştirme stratejileri tasarlarız.",
    primary: "Hizmetleri İncele",
    secondary: "Uzmanla Görüş",
    competenciesTitle: "Temel Yetkinlikler",
    competenciesBody:
      "Uluslararası ticaret karmaşıklıklarına uygulanan veri odaklı metodolojiler. Danışmanlık çerçevemiz operasyonel deneyim üzerine kuruludur.",
    learnMore: "Detayları Gör",
    cards: [
      {
        title: "Pazar Giriş Desteği",
        body:
          "Yeni pazarlara giriş için kapsamlı stratejik planlama, risk analizi, mevzuat uyum yol haritası ve rekabet haritalaması.",
        tags: ["Risk Analizi", "Mevzuat Uyumu"],
      },
      {
        title: "Partner Geliştirme",
        body:
          "Pazar varlığınızı güçlendirmek için kritik ortaklıkları ve dağıtım kanallarını belirleme, değerlendirme ve kurma.",
      },
      {
        title: "Tekstil Ticaret Uzmanlığı",
        body:
          "Ham madde tedarikinden nihai ürün dağıtımına kadar tekstil tedarik zincirinizi optimize eden sektör ağı.",
      },
      {
        title: "İthalat/İhracat Danışmanlığı",
        body:
          "Gümrük süreçleri, tarife sınıflandırmaları ve sınır ötesi lojistik akışlarında operasyonel verimlilik.",
      },
    ],
    processTitle: "Stratejik Entegrasyon Süreci",
    processBody: "Yeni pazarlarda operasyonel varlık kurmak için aşamalı ve metodik yaklaşım.",
    phases: [
      {
        title: "Faz 01: Denetim & Analiz",
        body:
          "Mevcut kabiliyetler, hedef pazar dinamikleri ve mevzuat gereksinimleri detaylı incelenir.",
      },
      {
        title: "Faz 02: Stratejik Planlama",
        body:
          "Partner profilleri, tedarik zinciri rotası ve ilk 24 aya yönelik finansal modelleme hazırlanır.",
      },
      {
        title: "Faz 03: Uygulama & Entegrasyon",
        body:
          "Müzakereler, yasal yapı ve operasyonel kurulumda sahadaki stratejik mimarınız oluruz.",
      },
    ],
  },
  bg: {
    badge: "Bulgatex Consulting",
    title: "Стратегическа архитектура за глобални пазари",
    body:
      "Експертна подкрепа за навлизане на пазари, импорт/експорт логистика и специализирано консултиране в текстилната търговия.",
    primary: "Виж услугите",
    secondary: "Консултация с експерт",
    competenciesTitle: "Основни компетенции",
    competenciesBody:
      "Методологии, базирани на данни, приложени към сложността на международната търговия.",
    learnMore: "Научи повече",
    cards: [
      {
        title: "Подкрепа за пазарно навлизане",
        body:
          "Стратегическо планиране, анализ на риска, регулаторна пътна карта и конкурентно позициониране.",
        tags: ["Анализ на риска", "Регулаторно съответствие"],
      },
      {
        title: "Развитие на партньорства",
        body:
          "Идентифициране и изграждане на ключови партньорства и дистрибуционни канали.",
      },
      {
        title: "Експертиза в текстилната търговия",
        body:
          "Оптимизация на текстилната верига от суровини до дистрибуция на готови продукти.",
      },
      {
        title: "Импорт/Експорт консултиране",
        body:
          "Навигация в митнически процеси, тарифни класификации и трансгранична логистика.",
      },
    ],
    processTitle: "Процес на стратегическа интеграция",
    processBody: "Методичен фазов подход за изграждане на оперативно присъствие на нови пазари.",
    phases: [
      {
        title: "Фаза 01: Одит & Анализ",
        body: "Детайлен преглед на способности, пазарна динамика и регулаторни изисквания.",
      },
      {
        title: "Фаза 02: Стратегически план",
        body: "Пътна карта, партньорски профили, маршрути на веригата и финансово моделиране.",
      },
      {
        title: "Фаза 03: Изпълнение & Интеграция",
        body: "Фасилитиране на преговори, правна структура и оперативен старт.",
      },
    ],
  },
};

const cardIcons = [FileSearch, BriefcaseBusiness, Globe2, Truck];

export default function BulgatexConsultingView() {
  const { language } = useLanguage();
  const copy = localizedCopy[language];

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
