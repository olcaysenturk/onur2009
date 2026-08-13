"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { images } from "@/lib/site";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-background px-4 py-16 md:px-10 md:py-24">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden bg-[#05080f]">
        <Image
          src={images.cta}
          alt="Executive office"
          fill
          className="object-cover opacity-35 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/94 via-[#05080f]/74 to-[#05080f]/35" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0, 0, 0, 0.9) 0.75px, transparent 1.1px)",
            backgroundSize: "7px 7px",
          }}
        />
        <div className="relative z-10 grid grid-cols-1 gap-10 px-6 py-14 text-white md:grid-cols-12 md:p-16">
          <div className="md:col-span-7">
            <h2 className="text-balance font-display text-3xl font-semibold leading-10 md:text-[48px] md:leading-[56px]">
              {t.home.contact.title}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-white/78 md:text-base md:leading-7">
              {t.home.contact.body}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="mailto:office@onur2009.com" showIcon>
                {t.home.contact.primary}
              </ButtonLink>
              <a
                href="tel:+359878587675"
                className="inline-flex min-h-10 items-center justify-center gap-2 border border-white/25 px-6 py-3 font-display text-xs font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone aria-hidden className="h-4 w-4" />
                {t.home.contact.secondary}
              </a>
            </div>
          </div>

          <div
            id="gallery"
            className="self-end border border-white/14 bg-white/[0.08] p-6 text-sm text-white/72 backdrop-blur md:col-span-5"
          >
            <span className="flex items-center gap-2 text-white">
              <Mail aria-hidden className="h-4 w-4 text-accent" />
              {t.home.contact.email}
            </span>
            <span className="mt-4 block leading-6">{t.home.contact.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
