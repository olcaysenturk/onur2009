"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { images } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary px-4 py-16 text-white md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="space-y-6 md:col-span-4">
          <Link href="/" aria-label="ONUR2009 home" className="inline-flex">
            <Image
              src={images.logo}
              alt="ONUR2009 Logo"
              width={1536}
              height={759}
              className="h-auto w-[132px] object-contain"
            />
          </Link>
          <p className="max-w-sm text-xs leading-5 text-white/70">
            {t.footer.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
          {t.footer.groups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs leading-5 text-white/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 md:col-span-12 md:mt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/70">{t.footer.copyright}</p>
          <Link
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/15 text-white/70 transition-colors hover:text-accent"
            aria-label="Language options"
          >
            <Globe2 aria-hidden className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
