"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Lightbulb,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { serviceOperationImages } from "@/lib/assets";
import { formatCopyright } from "@/lib/copyright";
import { pageImages } from "@/lib/pages";
import { images } from "@/lib/site";
import type { Translation } from "@/locales/types";

type ServicesContent = Translation["servicesPage"];

const metrics = [
  { value: "6", label: "aktif iş birimi" },
  { value: "40+", label: "ülkeye erişim" },
  { value: "24", label: "yeni operasyon görseli" },
];

const operationSteps = [
  "İhtiyaç, kapasite ve teslimat hedefleri netleştirilir.",
  "Doğru iş birimi, ekip ve saha akışı birlikte planlanır.",
  "Operasyon yürütülür; kalite, süre ve maliyet görünür tutulur.",
  "Sonuçlar raporlanır ve bir sonraki döngü için iyileştirilir.",
];

export default function ServicesPage() {
  const { t } = useLanguage();
  const content = t.servicesPage;
  const divisions = t.divisions;
  const serviceLines = [
    {
      href: "/auto-truck-service",
      eyebrow: content.tags[1],
      title: divisions["auto-truck-service"].title,
      body: "Araç kabulünden diagnostik kontrole, periyodik bakımdan parça yönetimine kadar filo sürekliliğini destekleyen saha servisi.",
      image: serviceOperationImages[12],
      icon: Wrench,
    },
    {
      href: "/logistics-transport",
      eyebrow: "Lojistik koordinasyon",
      title: divisions["logistics-transport"].title,
      body: divisions["logistics-transport"].description,
      image: pageImages.servicesLogistics,
      icon: Truck,
    },
    {
      href: "/fresh-produce-trade",
      eyebrow: content.tags[0],
      title: divisions["fresh-produce-trade"].title,
      body: divisions["fresh-produce-trade"].description,
      image: pageImages.servicesFresh,
      icon: PackageCheck,
    },
    {
      href: "/bulgatex-consulting",
      eyebrow: content.tags[4],
      title: divisions["bulgatex-consulting"].title,
      body: divisions["bulgatex-consulting"].description,
      image: pageImages.servicesBulgatex,
      icon: Lightbulb,
    },
  ];
  const brandLines = [
    {
      href: "/altinyildiz",
      title: divisions["retail-fashion"].title,
      body: divisions["retail-fashion"].description,
      image: pageImages.servicesRetail,
      cta: content.visitBoutiques,
    },
    {
      href: "/sobaklava-distribution",
      title: divisions["sobaklava-distribution"].title,
      body: divisions["sobaklava-distribution"].description,
      image: pageImages.servicesSoba,
      cta: content.discoverNetwork,
    },
  ];
  const workshopImages = [
    serviceOperationImages[11],
    serviceOperationImages[15],
    serviceOperationImages[16],
    serviceOperationImages[18],
    serviceOperationImages[20],
    serviceOperationImages[23],
  ];

  return (
    <>
      <Header />
      <main className="bg-[#f5f6f2] pt-16 text-[#111815] md:pt-20">
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1440px] grid-cols-1 gap-8 px-4 py-8 md:grid-cols-12 md:px-10 md:py-12">
          <div className="flex flex-col justify-center py-10 md:col-span-5">
            <span className="mb-6 w-fit border-l-2 border-[#cda729] bg-white px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-[#6d5d19]">
              ONUR2009 Service Network
            </span>
            <h1 className="font-display text-[44px] font-bold leading-[48px] tracking-normal text-[#000613] md:text-[74px] md:leading-[76px]">
              Operasyon sahada başlar.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#4e5a55] md:text-lg">
              Servis, lojistik, tedarik ve marka operasyonlarını aynı iş disipliniyle yöneten entegre yapı. Yeni servis merkezi görselleriyle kapasiteyi, ekipmanı ve günlük operasyon ritmini doğrudan gösteriyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/auto-truck-service" className="inline-flex min-h-12 items-center gap-2 bg-[#000613] px-6 font-display text-sm font-semibold text-white transition-colors hover:bg-[#1f2b3a]">
                Servis Merkezini İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/gallery" className="inline-flex min-h-12 items-center gap-2 border border-[#000613]/30 bg-white px-6 font-display text-sm font-semibold text-[#000613] transition-colors hover:border-[#cda729]">
                Operasyon Galerisi
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-px bg-outline/40">
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-white p-4">
                  <div className="font-display text-3xl font-bold text-[#000613] md:text-4xl">{metric.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid min-h-[540px] grid-cols-6 grid-rows-6 gap-3 md:col-span-7">
            <figure className="relative col-span-6 row-span-4 overflow-hidden bg-white md:col-span-4 md:row-span-6">
              <Image src={serviceOperationImages[11]} alt="ONUR2009 servis operasyon alanı" fill priority sizes="(min-width: 768px) 54vw, 100vw" className="object-cover" />
            </figure>
            <figure className="relative col-span-3 row-span-2 overflow-hidden bg-white md:col-span-2 md:row-span-3">
              <Image src={serviceOperationImages[15]} alt="Araç bakım lift alanı" fill sizes="(min-width: 768px) 24vw, 50vw" className="object-cover" />
            </figure>
            <figure className="relative col-span-3 row-span-2 overflow-hidden bg-white md:col-span-2 md:row-span-3">
              <Image src={serviceOperationImages[20]} alt="Servis merkezi araç kabul alanı" fill sizes="(min-width: 768px) 24vw, 50vw" className="object-cover" />
            </figure>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#7b6829]">
                  Integrated Services
                </span>
                <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight text-[#000613] md:text-[54px]">
                  Her iş birimi gerçek operasyon görüntüsüyle anlatılıyor.
                </h2>
              </div>
              <p className="text-base leading-7 text-muted md:col-span-5">
                Sayfa artık sadece bölüm linkleri değil; servis alanı, lojistik koordinasyon, taze ürün ticareti ve danışmanlık operasyonlarını daha güçlü bir görsel akışla sunuyor.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-outline/40 md:grid-cols-2">
              {serviceLines.map((line, index) => {
                const Icon = line.icon;

                return (
                  <Link key={line.href} href={line.href} className="group grid min-h-[440px] grid-cols-1 bg-white md:grid-cols-2">
                    <figure className={`relative min-h-[260px] overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image src={line.image} alt={line.title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </figure>
                    <div className="flex flex-col justify-between p-7 md:p-9">
                      <div>
                        <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[#f2e8bd] text-[#5d4b09]">
                          <Icon aria-hidden className="h-6 w-6" />
                        </div>
                        <span className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-[#7b6829]">
                          {line.eyebrow}
                        </span>
                        <h3 className="mt-3 font-display text-3xl font-semibold leading-9 text-[#000613]">
                          {line.title}
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-muted">{line.body}</p>
                      </div>
                      <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-[#000613] group-hover:text-[#7b6829]">
                        {content.viewDetails}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#7b6829]">
                Workshop Capacity
              </span>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight text-[#000613] md:text-[52px]">
                Servis merkezi artık sayfanın ana vitrini.
              </h2>
              <p className="mt-6 text-base leading-7 text-muted">
                Verdiğin yeni fotoğraflar büyük ekipman, lift alanı, kabul noktası ve çoklu araç bakım kapasitesini gösteriyor. Bu bölüm bu görselleri doğrudan ön plana çıkarıyor.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  { label: "Diagnostik ve kontrol", Icon: Gauge },
                  { label: "Periyodik bakım akışı", Icon: ClipboardCheck },
                  { label: "Filo sürekliliği", Icon: ShieldCheck },
                ].map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-3 border border-outline/35 bg-white p-4">
                    <Icon className="h-5 w-5 text-[#7b6829]" />
                    <span className="font-display text-sm font-semibold text-[#000613]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-8 lg:grid-cols-4">
              {workshopImages.map((image, index) => (
                <figure
                  key={image}
                  className={`relative overflow-hidden bg-white ${
                    index === 0 ? "col-span-2 row-span-2 min-h-[420px]" : "min-h-[210px]"
                  }`}
                >
                  <Image src={image} alt={`ONUR2009 servis merkezi ${index + 1}`} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#10161b] px-4 py-16 text-white md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#e2c34f]">
                Operating Model
              </span>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight md:text-[52px]">
                Tekliften teslimata kontrollü süreç.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/72">
                ONUR2009 hizmet yapısı tek sayfalık bir katalog gibi değil, sahada işleyen bir operasyon sistemi gibi konumlandı.
              </p>
            </div>
            <div className="grid gap-px bg-white/12 md:col-span-7">
              {operationSteps.map((step, index) => (
                <div key={step} className="grid grid-cols-[72px_1fr] bg-[#10161b]">
                  <div className="flex items-center justify-center border-r border-white/12 font-display text-xl font-semibold text-[#e2c34f]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#e2c34f]" />
                    <p className="text-base leading-7 text-white/82">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#7b6829]">
                  Brands & Distribution
                </span>
                <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight text-[#000613] md:text-[48px]">
                  Markalı operasyonlar aynı ağın parçası.
                </h2>
              </div>
              <Link href="/contact" className="inline-flex min-h-12 w-fit items-center gap-2 bg-[#cda729] px-6 font-display text-sm font-semibold text-[#000613]">
                Bizimle Görüş
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-px bg-outline/40 md:grid-cols-2">
              {brandLines.map((brand) => (
                <Link key={brand.href} href={brand.href} className="group grid bg-white md:grid-cols-[0.9fr_1.1fr]">
                  <figure className="relative min-h-[320px] overflow-hidden">
                    <Image src={brand.image} alt={brand.title} fill sizes="(min-width: 768px) 28vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </figure>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <h3 className="font-display text-3xl font-semibold leading-9 text-[#000613]">{brand.title}</h3>
                    <p className="mt-5 text-sm leading-6 text-muted">{brand.body}</p>
                    <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-[#000613] group-hover:text-[#7b6829]">
                      {brand.cta}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <DarkFooter content={content} />
    </>
  );
}

function DarkFooter({ content }: { content: ServicesContent }) {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#000613] px-4 py-16 text-white md:px-10 md:py-[120px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src={images.logo} alt="" width={1536} height={759} className="mb-6 h-auto w-[132px] object-contain" />
          <p className="max-w-xs text-sm leading-5 text-white/70">{content.footerBody}</p>
        </div>
        <FooterGroup title={content.footerDivisions} links={t.footer.groups[0]?.links ?? []} />
        <FooterGroup title={content.footerBrands} links={[...(t.footer.groups[1]?.links ?? []), ...(t.footer.groups[2]?.links ?? [])]} />
        <FooterGroup title={content.footerLegal} links={t.footer.groups.at(-1)?.links ?? []} />
        <div className="border-t border-white/10 pt-8 md:col-span-12 md:mt-12">
          <p className="text-sm leading-5 text-white/50">{formatCopyright(content.footerCopyright)}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4 md:col-span-2">
      <h3 className="mb-2 font-display text-base font-bold text-[#ffe089]">{title}</h3>
      {links.map((link, index) => (
        <Link key={`${link.href}-${link.label}-${index}`} href={link.href} className="text-sm leading-5 text-white/70 hover:text-white">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
