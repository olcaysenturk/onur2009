"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge, Building2, Mail, MapPin, Navigation, Phone, Store, Truck } from "lucide-react";
import type { FormEvent } from "react";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { formatCopyright } from "@/lib/copyright";
import { images } from "@/lib/site";
import { imageAssets } from "@/lib/assets";
import type { Translation } from "@/locales/types";

type ContactContent = Translation["contactView"];
const mapQuery = "Onur 2009, 13 Professor Tsvetan Lazarov Blvd, Sofia Slatina, Bulgaria";
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export default function ContactPage() {
  const { t } = useLanguage();
  const content = t.contactView as ContactContent;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`${content.formTitle} - ${name || content.headquarters}`);
    const body = encodeURIComponent(
      [
        `${content.fields.firstName}: ${name}`,
        `${content.fields.businessEmail}: ${contact}`,
        `${content.fields.company}: ${company || "-"}`,
        "",
        `${content.fields.message}:`,
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${content.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[74vh] items-end overflow-hidden bg-[#05080f] px-5 pb-14 pt-36 text-white md:px-16 md:pb-20 md:pt-44">
          <Image
            src={imageAssets.pages.contactHero}
            alt={content.title}
            fill
            priority
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/94 via-[#05080f]/70 to-[#05080f]/22" />
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0, 0, 0, 0.9) 0.75px, transparent 1.1px)",
              backgroundSize: "7px 7px",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

          <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 border-l-2 border-accent bg-white/10 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.08em] backdrop-blur">
                <Building2 aria-hidden className="h-4 w-4 text-accent" />
                {content.headquarters}
              </div>
              <h1 className="text-balance font-display text-[44px] font-semibold leading-[50px] md:text-[72px] md:leading-[78px]">
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
                {content.body}
              </p>
            </div>

            <div className="border border-white/14 bg-white/[0.08] p-6 backdrop-blur-md lg:col-span-5">
              <ul className="space-y-5">
                <ContactInfo icon="address" label={content.addressLabel} value={content.address} inverted />
                <ContactInfo icon="phone" label={content.phoneLabel} value={content.phone} inverted />
                <ContactInfo icon="email" label={content.emailLabel} value={content.email} inverted />
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-16 md:py-24">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-5">
              <div className="grid grid-cols-1 gap-px bg-outline/40 sm:grid-cols-2">
                {content.departments.map((department) => (
                  <DepartmentCard key={department.type} department={department} />
                ))}
              </div>

              <div className="relative h-[420px] overflow-hidden bg-[#e2e2e2]">
                <iframe
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapEmbedUrl}
                  title={`${content.headquarters} ${content.addressLabel}`}
                />
                <a
                  className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-white px-5 py-3 font-display text-sm font-semibold text-[#000613] shadow-[0_12px_35px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#ffe089]"
                  href={mapLinkUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Navigation aria-hidden className="h-4 w-4 text-accent" />
                  Google Maps
                </a>
              </div>
            </div>

            <form
              className="bg-white p-6 shadow-[0_22px_70px_rgba(39,59,120,0.10)] md:p-10 lg:col-span-7"
              onSubmit={handleSubmit}
            >
              <div className="mb-8 flex items-start justify-between gap-6 border-b border-outline/35 pb-6">
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    {content.email}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-10 text-[#000613]">
                    {content.formTitle}
                  </h2>
                </div>
                <Mail aria-hidden className="mt-1 hidden h-7 w-7 text-muted md:block" />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label={content.fields.firstName} name="name" placeholder={content.placeholders.firstName} required />
                <Field label={content.fields.businessEmail} name="contact" placeholder={content.placeholders.businessEmail} required />
                <Field className="md:col-span-2" label={content.fields.company} name="company" placeholder={content.placeholders.company} />
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="font-display text-sm font-semibold tracking-[0.05em] text-muted">{content.fields.message}</span>
                  <textarea className="min-h-44 resize-none border border-outline/60 bg-white px-4 py-3 text-base text-[#000613] outline-none transition-colors focus:border-[#000613]" name="message" placeholder={content.placeholders.message} required />
                </label>
              </div>
              <div className="flex justify-end pt-8">
                <button className="bg-[#000613] px-8 py-4 font-display text-base font-semibold tracking-[0.04em] text-white transition-all hover:bg-accent" type="submit">{content.submit}</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <ContactFooter content={content} />
    </>
  );
}

function ContactInfo({ icon, label, value, inverted = false }: { icon: "address" | "phone" | "email"; label: string; value: string; inverted?: boolean }) {
  const Icon = icon === "address" ? MapPin : icon === "phone" ? Phone : Mail;
  return (
    <li className="flex items-start gap-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
      <div>
        <span className={`mb-1 block font-display text-sm font-semibold tracking-[0.05em] ${inverted ? "text-white/54" : "text-muted"}`}>{label}</span>
        <span className={`whitespace-pre-line text-base leading-6 ${inverted ? "text-white/88" : "text-[#000613]"}`}>{value}</span>
      </div>
    </li>
  );
}

function DepartmentCard({ department }: { department: ContactContent["departments"][number] }) {
  const Icon = department.type === "logistics" ? Truck : department.type === "retail" ? Store : Badge;
  return (
    <article className={`bg-white p-6 transition-colors hover:bg-surface-soft ${department.type === "hr" ? "sm:col-span-2" : ""}`}>
      <Icon className="mb-5 h-6 w-6 text-accent" />
      <h3 className="mb-2 font-display text-lg font-semibold text-[#000613]">{department.title}</h3>
      <p className="text-sm leading-5 text-muted">{department.email}</p>
    </article>
  );
}

function Field({ className = "", label, name, placeholder, required = false, type = "text" }: { className?: string; label: string; name: string; placeholder: string; required?: boolean; type?: string }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-display text-sm font-semibold tracking-[0.05em] text-muted">{label}</span>
      <input className="border border-outline/60 bg-white px-4 py-3 text-base text-[#000613] outline-none transition-colors focus:border-[#000613]" name={name} placeholder={placeholder} required={required} type={type} />
    </label>
  );
}

function ContactFooter({ content }: { content: ContactContent }) {
  const { t } = useLanguage();
  return (
    <footer className="mt-auto grid grid-cols-1 gap-8 bg-[#000613] px-5 py-[120px] text-white sm:grid-cols-2 lg:grid-cols-12 md:px-16">
      <div className="flex flex-col justify-between lg:col-span-4">
        <div>
          <Image src={images.logo} alt="" width={1536} height={759} className="mb-6 h-auto w-[132px] object-contain" />
          <p className="mb-8 max-w-xs text-sm leading-5 text-white/70">{content.footerBody}</p>
        </div>
        <div className="text-sm leading-5 text-white/50">
          {formatCopyright(content.footerCopyright)}
        </div>
      </div>
      <FooterGroup title={content.footerDivisions} links={t.footer.groups[0]?.links ?? []} />
      <FooterGroup title={content.footerSubsidiaries} links={[...(t.footer.groups[1]?.links ?? []), ...(t.footer.groups[2]?.links ?? [])]} />
      <FooterGroup title={content.footerLegal} links={t.footer.groups.at(-1)?.links ?? []} />
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h3 className="mb-4 font-display text-sm font-bold text-[#ffe089]">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={`${link.href}-${link.label}-${index}`}>
            <Link className="text-sm leading-5 text-white/70 hover:text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
