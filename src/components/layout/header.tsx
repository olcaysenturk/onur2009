"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import { images } from "@/lib/site";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/types/i18n";

const serviceSlugs = [
  "fresh-produce-trade",
  "logistics-transport",
  "auto-truck-service",
  "retail-fashion",
  "sobaklava-distribution",
  "bulgatex-consulting",
] as const;

const serviceHrefBySlug: Record<(typeof serviceSlugs)[number], string> = {
  "fresh-produce-trade": "/fresh-produce-trade",
  "logistics-transport": "/logistics-transport",
  "auto-truck-service": "/auto-truck-service",
  "retail-fashion": "/altinyildiz",
  "sobaklava-distribution": "/sobaklava-distribution",
  "bulgatex-consulting": "/bulgatex-consulting",
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, t, changeLanguage } = useLanguage();
  const languages = Object.entries(t.languages) as [Language, string][];
  const servicePaths = new Set([
    "/services",
    "/fresh-produce-trade",
    "/logistics-transport",
    "/auto-truck-service",
    "/altinyildiz",
    "/sobaklava-distribution",
    "/bulgatex-consulting",
  ]);
  const servicesLabel = t.common.brandsLabel;
  const serviceDropdownItems = serviceSlugs.map((slug) => ({
    label: t.divisions[slug].title,
    description: t.divisions[slug].eyebrow,
    href: serviceHrefBySlug[slug],
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline/25 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-20 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="ONUR2009 home"
        >
          <Image
            src={images.logo}
            alt="ONUR2009 Logo"
            width={1536}
            height={759}
            className="h-auto w-[112px] object-contain md:w-[140px]"
            priority
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {t.nav.map((item, index) => {
            const isServices = item.href === "/services";
            const isActive =
              pathname === item.href.split("#")[0] ||
              (isServices && servicePaths.has(pathname)) ||
              (index === 0 && pathname === "/");
            const linkClass = `border-b-2 px-0.5 py-2 font-display text-sm font-semibold transition-colors ${
              isActive
                ? "border-accent text-primary"
                : "border-transparent text-muted hover:text-primary"
            }`;

            if (isServices) {
              return (
                <div key={`${item.label}-${item.href}`} className="group relative">
                  <Link href={item.href} className={`${linkClass} inline-flex items-center gap-1.5`}>
                    {servicesLabel}
                    <ChevronDown aria-hidden className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full mt-5 w-[390px] -translate-x-1/2 translate-y-2 border border-outline/30 bg-white opacity-0 shadow-[0_24px_70px_rgba(12,36,97,0.16)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <Link
                      href="/services"
                      className="flex items-center justify-between border-b border-outline/30 bg-surface-soft px-5 py-4 font-display text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      <span>{item.label}</span>
                      <ArrowRight aria-hidden className="h-4 w-4" />
                    </Link>
                    <div className="grid">
                      {serviceDropdownItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`group/item border-l-2 px-5 py-4 transition-colors hover:border-accent hover:bg-surface-soft ${
                            pathname === service.href
                              ? "border-accent bg-surface-soft"
                              : "border-transparent"
                          }`}
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="block font-display text-sm font-semibold text-primary">
                              {service.label}
                            </span>
                            <ArrowRight
                              aria-hidden
                              className="h-3.5 w-3.5 shrink-0 text-outline transition-all group-hover/item:translate-x-1 group-hover/item:text-accent"
                            />
                          </span>
                          <span className="mt-1 block text-xs leading-4 text-muted">{service.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className={linkClass}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="group relative">
            <button
              type="button"
              className="flex h-10 items-center gap-2 border border-outline/35 bg-white px-3 font-display text-sm font-semibold text-primary transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Globe2 aria-hidden className="h-4 w-4" />
              {t.languages[language]}
              <ChevronDown aria-hidden className="h-4 w-4" />
            </button>
            <div className="invisible absolute right-0 top-full mt-3 w-44 translate-y-2 border border-outline/30 bg-white p-1.5 opacity-0 shadow-[0_18px_45px_rgba(12,36,97,0.14)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {languages.map(([code, label]) => (
                <button
                  type="button"
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className={`block w-full cursor-pointer px-3 py-2 text-left text-sm transition-colors ${
                    code === language
                      ? "bg-primary text-white"
                      : "text-muted hover:bg-surface-soft hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-outline/40 bg-white/90 text-primary md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-outline/30 bg-white px-4 py-4 shadow-[0_22px_50px_rgba(12,36,97,0.14)] md:hidden">
          <nav className="flex flex-col gap-1 border border-outline/30 p-2" aria-label="Mobile navigation">
            {t.nav.map((item) => {
              const isServices = item.href === "/services";
              const isActive =
                pathname === item.href.split("#")[0] ||
                (isServices && servicePaths.has(pathname));

              if (isServices) {
                return (
                  <div key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between border-l-2 px-3 py-3 font-display text-base font-semibold ${
                        isActive
                          ? "border-accent bg-surface-soft text-primary"
                          : "border-transparent text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{servicesLabel}</span>
                      <ChevronDown aria-hidden className="h-4 w-4" />
                    </Link>
                    <div className="mt-1 border-l border-outline/40 pl-3">
                      {serviceDropdownItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block border-l-2 px-3 py-2.5 text-sm ${
                            pathname === service.href
                              ? "border-accent text-primary"
                              : "border-transparent text-muted"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={`border-l-2 px-3 py-3 font-display text-base font-semibold ${
                    isActive
                      ? "border-accent bg-surface-soft text-primary"
                      : "border-transparent text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 flex flex-wrap gap-2 border border-outline/30 p-2">
            {languages.map(([code, label]) => (
              <button
                key={code}
                type="button"
                onClick={() => changeLanguage(code)}
                className={`px-3 py-2 text-sm ${
                  code === language
                    ? "bg-primary text-white"
                    : "border border-outline/40 text-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
