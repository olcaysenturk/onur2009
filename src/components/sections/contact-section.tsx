"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { images } from "@/lib/site";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-4 py-16 md:px-10 md:py-28">
      <div className="relative overflow-hidden rounded-lg bg-primary shadow-[0_20px_60px_rgba(39,59,120,0.2)]">
        <Image
          src={images.cta}
          alt="Executive office"
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 px-6 py-16 text-center text-white md:p-24">
          <h2 className="text-balance font-display text-3xl font-bold leading-10 md:text-[48px] md:leading-[56px]">
            {t.home.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-5 text-white/80">
            {t.home.contact.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="mailto:sales@onur2009.com" showIcon>
              {t.home.contact.primary}
            </ButtonLink>
            <a
              href="tel:+359000000000"
              className="inline-flex min-h-12 items-center gap-2 rounded border border-white/25 px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-white/10"
            >
              <Phone aria-hidden className="h-4 w-4" />
              {t.home.contact.secondary}
            </a>
          </div>
          <div id="gallery" className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <Mail aria-hidden className="h-4 w-4 text-accent" />
              {t.home.contact.email}
            </span>
            <span>{t.home.contact.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
