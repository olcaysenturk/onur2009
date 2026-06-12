"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { useLanguage } from "@/hooks/useLanguage";

export function ServicesSection() {
  const [featured] = services;
  const FeaturedIcon = featured.icon;
  const { t } = useLanguage();
  const localizedServices = services.map((service) => ({
    ...service,
    title: t.divisions[service.href.slice(1)]?.title ?? service.title,
    description: t.divisions[service.href.slice(1)]?.description ?? service.description,
  }));
  const [localizedFeatured, ...localizedRegularServices] = localizedServices;

  return (
    <section id="services" className="bg-surface-soft px-4 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
          <h2 className="font-display text-2xl font-semibold leading-8 text-primary md:text-[32px] md:leading-[40px]">
            {t.home.services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-5 text-muted">
            {t.home.services.body}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:auto-rows-[300px]">
          <Link
            href={localizedFeatured.href}
            className="group relative overflow-hidden rounded-lg border border-outline/40 bg-surface shadow-sm transition-all duration-500 hover:shadow-xl md:col-span-4"
          >
            {localizedFeatured.image ? (
              <Image
                src={localizedFeatured.image}
                alt={localizedFeatured.title}
                fill
                quality={100}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
            <div className="relative z-10 flex h-[300px] flex-col justify-end p-8 text-white md:h-full">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded bg-accent text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                <FeaturedIcon aria-hidden className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-2xl font-semibold">{localizedFeatured.title}</h3>
              <p className="max-w-lg text-sm leading-5 text-white/85">{localizedFeatured.description}</p>
            </div>
          </Link>

          {localizedRegularServices.map((service, index) => {
            const Icon = service.icon;
            const isCompact = index >= 3;

            if (isCompact) {
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex items-center gap-5 rounded-lg border border-outline/40 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:shadow-md md:col-span-4"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon aria-hidden className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-display text-base font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-xs leading-4 text-muted">{service.description}</p>
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-lg border border-outline/40 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-4 ${
                  service.inverted ? "bg-primary text-white" : "bg-surface"
                }`}
              >
                {service.inverted ? <div className="absolute inset-x-0 top-0 h-1.5 bg-accent" /> : null}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg transition-colors ${
                    service.inverted
                      ? "bg-white/10 text-accent"
                      : "bg-surface-muted text-primary group-hover:bg-accent group-hover:text-white"
                  }`}
                >
                  <Icon aria-hidden className="h-6 w-6" />
                </div>
                <div className="relative z-10">
                  <h3
                    className={`mb-3 font-display text-xl font-semibold ${
                      service.inverted ? "text-white" : "text-primary"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-xs leading-5 ${service.inverted ? "text-white/80" : "text-muted"}`}>
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
