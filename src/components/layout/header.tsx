"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
    "/retail-fashion",
    "/sobaklava-distribution",
    "/bulgatex-consulting",
  ]);
  const servicesLabel =
    language === "tr" ? "Markalar" : language === "bg" ? "Марки" : "Brands";
  const serviceDropdownItems = serviceSlugs.map((slug) => ({
    label: t.divisions[slug].title,
    description: t.divisions[slug].eyebrow,
    href: `/${slug}`,
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline/30 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-20 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="ONUR2009 home">
          <Image
            src={images.logo}
            alt="ONUR2009 Logo"
            width={1536}
            height={759}
            className="h-auto w-[108px] object-contain md:w-[132px]"
            priority
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {t.nav.map((item, index) => {
            const isServices = item.href === "/services";
            const isActive =
              pathname === item.href.split("#")[0] ||
              (isServices && servicePaths.has(pathname)) ||
              (index === 0 && pathname === "/");
            const linkClass = `font-display text-sm font-semibold transition-colors ${
              isActive
                ? "border-b-2 border-accent pb-1 text-primary"
                : "text-muted hover:text-accent"
            }`;

            if (isServices) {
              return (
                <div key={`${item.label}-${item.href}`} className="group relative">
                  <Link href={item.href} className={`${linkClass} inline-flex items-center gap-1.5`}>
                    {servicesLabel}
                    <ChevronDown aria-hidden className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full mt-4 w-[340px] -translate-x-1/2 rounded border border-outline/30 bg-surface p-2 opacity-0 shadow-[0_20px_50px_rgba(39,59,120,0.16)] transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <Link
                      href="/services"
                      className="mb-1 block rounded px-4 py-3 font-display text-sm font-semibold text-primary transition-colors hover:bg-surface-soft hover:text-accent"
                    >
                      {item.label}
                    </Link>
                    <div className="h-px bg-outline/30" />
                    <div className="mt-1 grid gap-1">
                      {serviceDropdownItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`rounded px-4 py-3 transition-colors hover:bg-surface-soft ${
                            pathname === service.href ? "bg-surface-soft" : ""
                          }`}
                        >
                          <span className="block font-display text-sm font-semibold text-primary">
                            {service.label}
                          </span>
                          <span className="mt-1 block text-xs leading-4 text-muted">
                            {service.description}
                          </span>
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

        <div className="hidden items-center gap-6 md:flex">
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 font-display text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              {t.languages[language]}
              <ChevronDown aria-hidden className="h-4 w-4" />
            </button>
            <div className="invisible absolute right-0 top-full mt-3 w-40 rounded border border-outline/30 bg-surface py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {languages.map(([code, label]) => (
                <button
                  type="button"
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className="block px-4 py-2 text-sm text-muted transition-colors hover:bg-primary hover:text-white w-full text-left cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center justify-center rounded-sm border border-primary-deep bg-primary-deep px-5 py-2.5 font-display text-xs font-bold text-white transition-colors hover:bg-primary"
          >
            {t.common.requestQuote}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-outline/40 text-primary md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-outline/30 bg-surface px-4 py-5 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
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
                      className={`rounded px-2 py-3 font-display text-base font-semibold ${
                        isActive ? "text-accent" : "text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {servicesLabel}
                    </Link>
                    <div className="ml-3 border-l border-outline/40 pl-3">
                      {serviceDropdownItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block rounded px-2 py-2 text-sm ${
                            pathname === service.href ? "text-accent" : "text-muted"
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
                  className={`rounded px-2 py-3 font-display text-base font-semibold ${
                    isActive ? "text-accent" : "text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-outline/30 pt-5">
            {languages.map(([code, label]) => (
              <button
                key={code}
                type="button"
                onClick={() => changeLanguage(code)}
                className="rounded border border-outline/40 px-3 py-2 text-sm text-muted"
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
