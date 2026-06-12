"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { images } from "@/lib/site";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/types/i18n";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, t, changeLanguage } = useLanguage();
  const languages = Object.entries(t.languages) as [Language, string][];

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
          {t.nav.map((item, index) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={`font-display text-sm font-semibold transition-colors ${
                pathname === item.href.split("#")[0] || (index === 0 && pathname === "/")
                  ? "border-b-2 border-accent pb-1 text-primary"
                  : "text-muted hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
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
                  className="block px-4 py-2 text-sm text-muted transition-colors hover:bg-primary hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {/* <ButtonLink href="/contact">{t.common.requestQuote}</ButtonLink> */}
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
            {t.nav.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="rounded px-2 py-3 font-display text-base font-semibold text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
