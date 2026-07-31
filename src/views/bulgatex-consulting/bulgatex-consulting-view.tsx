"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Landmark,
  Megaphone,
  Scale,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { pageImages } from "@/lib/pages";

const serviceIcons = [Building2, Warehouse, Truck, Landmark, Scale, Megaphone];

export default function BulgatexConsultingView() {
  const { t } = useLanguage();
  const copy = t.bulgatexView;

  return (
    <>
      <Header />
      <main className="bg-[#f8f9fa] pt-16 text-[#191c1d] md:pt-20">
      <section className="relative flex min-h-[760px] items-center overflow-hidden bg-white px-5 py-24 md:px-16">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <span className="inline-flex rounded-xl bg-[#009640]/10 px-4 py-2 text-sm font-semibold text-[#009640]">
              {copy.heroBadge}
            </span>
            <h1 className="mt-6 max-w-[680px] text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#191c1d] md:text-[64px]">
              {copy.heroTitlePrefix}
              <br />
              <span className="text-[#009640]">{copy.heroTitleGreen}</span>
              <br />
              <span className="text-[#e30613]">{copy.heroTitleRed}</span>
            </h1>
            <p className="mt-7 max-w-[620px] text-base leading-7 text-[#595958] md:text-lg">
              {copy.heroBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded bg-[#e30613] px-8 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(227,6,19,0.18)] transition-transform hover:-translate-y-0.5"
              >
                {copy.heroPrimary}
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded border border-[#009640] px-8 text-sm font-semibold text-[#009640] transition-colors hover:bg-[#009640]/5"
              >
                {copy.heroSecondary}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-[#e30613]/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-[#e1e3e4] bg-white shadow-[0_24px_70px_rgba(25,28,29,0.18)]">
              <Image
                src={pageImages.bulgatexHero}
                alt={copy.heroTitlePrefix}
                width={900}
                height={600}
                priority
                quality={100}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-24 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-[34px] font-semibold leading-tight text-[#191c1d] md:text-[44px]">
              {copy.servicesTitle}
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#009640]" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {copy.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? ShieldCheck;

              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-[#e9ecef] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#009640] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded bg-[#009640]/10 text-[#009640]">
                    <Icon aria-hidden className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-[#191c1d]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#595958]">{service.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] px-5 py-24 md:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="order-2 md:order-1">
            <Image
              src={pageImages.logisticsFacility}
              alt={copy.storageTitle}
              width={900}
              height={640}
              quality={100}
              className="aspect-[16/9] w-full rounded-lg object-cover shadow-[0_18px_45px_rgba(25,28,29,0.12)]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[34px] font-semibold leading-tight text-[#b5000b] md:text-[44px]">
              {copy.storageTitle}
            </h2>
            <p className="mt-6 text-base leading-7 text-[#191c1d] md:text-lg">{copy.storageBody}</p>
            <div className="mt-8 space-y-5">
              {copy.storageBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 flex-none text-[#009640]" />
                  <div>
                    <h3 className="font-semibold text-[#191c1d]">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#595958]">{benefit.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded border border-[#e9bcb6] bg-white p-5">
              <p className="text-sm font-semibold italic leading-6 text-[#595958]">
                {copy.storageExample}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#15191a] px-5 py-16 text-white md:px-16">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="text-[32px] font-semibold leading-tight md:text-[40px]">
            {copy.reasonsTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {copy.reasons.map((reason) => (
              <article
                key={reason.label}
                className="rounded border border-white/30 p-7 transition-colors hover:bg-white/5"
              >
                <div className="text-[44px] font-bold leading-none text-[#00b652] md:text-[54px]">
                  {reason.value}
                </div>
                <p className="mt-4 text-xs font-bold uppercase leading-5 tracking-[0.02em] text-white">
                  {reason.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 py-24 md:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-[34px] font-semibold leading-tight text-[#009640] md:text-[44px]">
              {copy.logisticsTitle}
            </h2>
            <p className="mt-6 text-base leading-7 text-[#595958] md:text-lg">{copy.logisticsBody}</p>
            <ul className="mt-8 space-y-4">
              {copy.logisticsItems.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-[#e1e3e4] pb-4">
                  <ShieldCheck aria-hidden className="h-5 w-5 flex-none text-[#e30613]" />
                  <span className="font-semibold text-[#191c1d]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l-4 border-[#009640] bg-[#009640]/5 p-5">
              <p className="font-bold text-[#009640]">{copy.logisticsAdvantageTitle}</p>
              <p className="mt-1 text-sm leading-6 text-[#595958]">{copy.logisticsAdvantageBody}</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-[#009640]/5 blur-3xl" />
            <Image
              src={pageImages.logisticsHero}
              alt={copy.logisticsTitle}
              width={900}
              height={640}
              quality={100}
              className="relative z-10 aspect-[16/9] w-full rounded-lg object-cover shadow-[0_18px_45px_rgba(25,28,29,0.10)]"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#c9000b] px-5 py-20 text-white md:px-16">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <h2 className="text-[40px] font-bold leading-tight tracking-[-0.02em] md:text-[58px]">
            {copy.ctaTitle}
          </h2>
          <p className="mt-5 max-w-[720px] text-base font-semibold leading-7 text-white/90">
            {copy.ctaBody}
          </p>
          <form className="mt-8 flex w-full max-w-[620px] flex-col gap-4 sm:flex-row">
            <input
              className="min-h-12 flex-1 rounded bg-white px-5 text-[#191c1d] outline-none ring-2 ring-transparent transition focus:ring-[#009640]"
              placeholder={copy.ctaPlaceholder}
              type="email"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#009640] px-9 font-semibold text-white transition-colors hover:bg-[#007c35]"
            >
              {copy.ctaButton}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
