"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { useLanguage } from "@/hooks/useLanguage";
import { imageAssets } from "@/lib/assets";

const serviceImages: Record<string, string> = {
  "/logistics-transport": imageAssets.pages.servicesLogistics,
  "/fresh-produce-trade": imageAssets.pages.servicesFresh,
  "/auto-truck-service": imageAssets.pages.servicesAuto,
  "/altinyildiz": imageAssets.pages.servicesRetail,
  "/sobaklava-distribution": imageAssets.pages.servicesSoba,
  "/bulgatex-consulting": imageAssets.pages.servicesBulgatex,
};

export function ServicesSection() {
  const { t } = useLanguage();
  const localizedServices = services.map((service) => ({
    ...service,
    title: t.divisions[service.href.slice(1)]?.title ?? service.title,
    description: t.divisions[service.href.slice(1)]?.description ?? service.description,
    image: serviceImages[service.href] ?? service.image,
  }));

  return (
    <section id="services" className="bg-[#eef1f4] px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              {t.home.services.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-10 text-primary md:text-[44px] md:leading-[52px]">
              {t.home.services.title}
            </h2>
          </div>
          <p className="text-sm leading-6 text-muted md:col-span-5 md:text-base md:leading-7">
            {t.home.services.body}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-outline/50 md:grid-cols-2">
          {localizedServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative min-h-[340px] overflow-hidden bg-primary text-white"
              >
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/92 via-[#05080f]/46 to-[#05080f]/8" />
                <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between p-6 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center bg-white/12 text-accent backdrop-blur">
                    <Icon aria-hidden className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
