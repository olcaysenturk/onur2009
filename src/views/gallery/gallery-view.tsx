"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { galleryImages } from "@/lib/assets";
import type { Language } from "@/types/i18n";

const galleryText: Record<Language, {
  title: string;
  body: string;
  filters: string[];
  items: { title: string; category: string }[];
  footerBody: string;
  footerSectors: string;
  footerBrands: string;
  footerLegal: string;
  copyright: string;
}> = {
  en: {
    title: "Our Operations",
    body: "A visual portfolio showcasing our global logistics network, premium retail spaces, and state-of-the-art service centers. Built on precision and scale.",
    filters: ["All", "Trucks", "Logistics", "Retail Stores", "Service Centers", "Food Products"],
    items: [
      { title: "Global Freight Terminals", category: "Logistics & Transport" },
      { title: "European Fleet", category: "Trucks" },
      { title: "Flagship Store", category: "Retail Stores" },
      { title: "Advanced Diagnostics", category: "Service Centers" },
      { title: "Cold Storage Hub", category: "Food Products" },
      { title: "Global Headquarters", category: "Corporate" },
    ],
    footerBody: "The Architect of Success. Delivering global authority and structural integrity across diverse business sectors.",
    footerSectors: "Sectors",
    footerBrands: "Brands",
    footerLegal: "Legal",
    copyright: "© 2024 LOGO International. All rights reserved.",
  },
  tr: {
    title: "Operasyonlarımız",
    body: "Küresel lojistik ağımızı, premium perakende alanlarımızı ve modern servis merkezlerimizi gösteren görsel portföy.",
    filters: ["Tümü", "Kamyonlar", "Lojistik", "Perakende", "Servis Merkezleri", "Gıda Ürünleri"],
    items: [
      { title: "Küresel Yük Terminalleri", category: "Lojistik & Taşımacılık" },
      { title: "Avrupa Filosu", category: "Kamyonlar" },
      { title: "Amiral Mağaza", category: "Perakende" },
      { title: "Gelişmiş Diagnostik", category: "Servis Merkezleri" },
      { title: "Soğuk Depo Merkezi", category: "Gıda Ürünleri" },
      { title: "Küresel Merkez", category: "Kurumsal" },
    ],
    footerBody: "Başarının mimarı. Farklı iş alanlarında global otorite ve yapısal güvenilirlik sunuyoruz.",
    footerSectors: "Sektörler",
    footerBrands: "Markalar",
    footerLegal: "Yasal",
    copyright: "© 2024 LOGO International. Tüm hakları saklıdır.",
  },
  bg: {
    title: "Нашите операции",
    body: "Визуално портфолио на глобалната логистична мрежа, премиум ритейл пространства и модерни сервизни центрове.",
    filters: ["Всички", "Камиони", "Логистика", "Ритейл", "Сервизни центрове", "Храни"],
    items: [
      { title: "Глобални товарни терминали", category: "Логистика & Транспорт" },
      { title: "Европейски флот", category: "Камиони" },
      { title: "Флагмански магазин", category: "Ритейл" },
      { title: "Разширена диагностика", category: "Сервизни центрове" },
      { title: "Хладилен склад", category: "Храни" },
      { title: "Глобална централа", category: "Корпоративно" },
    ],
    footerBody: "Архитектът на успеха. Доставяме глобален авторитет и структурна надеждност.",
    footerSectors: "Сектори",
    footerBrands: "Марки",
    footerLegal: "Правни",
    copyright: "© 2024 LOGO International. Всички права запазени.",
  },
};

const galleryCategoryIndexes = [
  2, 1, 2, 1, 3, 4, 4, 1, 5, 3, 3, 2, 2, 5, 3, 1, 5, 1, 5, 5, 2,
];

export default function GalleryPage() {
  const { language, t } = useLanguage();
  const content = galleryText[language];
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const galleryItems = galleryImages.map((image, index) => {
    const categoryIndex = galleryCategoryIndexes[index] ?? ((index % (content.filters.length - 1)) + 1);
    const item = content.items[index] ?? {
      title: `${content.title} ${index + 1}`,
      category: content.filters[categoryIndex],
    };

    return {
      image,
      title: item.title,
      category: item.category,
      categoryIndex,
    };
  });
  const filteredGalleryItems =
    activeFilterIndex === 0
      ? galleryItems
      : galleryItems.filter((item) => item.categoryIndex === activeFilterIndex);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1440px] px-5 pb-[120px] pt-32 md:px-16">
        <header className="mx-auto max-w-3xl py-16 text-center md:py-24">
          <h1 className="mb-6 font-display text-[40px] font-bold leading-[48px] text-[#000613] md:text-[64px] md:leading-[72px]">{content.title}</h1>
          <p className="text-lg leading-7 text-muted">{content.body}</p>
        </header>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {content.filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full px-6 py-2 font-display text-sm font-semibold transition-colors ${
                activeFilterIndex === index
                  ? "bg-[#000613] text-white"
                  : "bg-[#eeeeee] text-[#000613] hover:bg-outline/40"
              }`}
              type="button"
              aria-pressed={activeFilterIndex === index}
              onClick={() => setActiveFilterIndex(index)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid auto-rows-[300px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredGalleryItems.map((item, index) => (
            <article key={`${item.title}-${index}`} className={`group relative cursor-pointer overflow-hidden rounded-lg border border-outline/40 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 3 ? "md:row-span-2" : ""}`}>
              <Image src={item.image} alt={item.title} fill quality={100} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-[#000613]/40 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="translate-y-4 rounded bg-white/90 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <h2 className="font-display text-base font-semibold text-[#000613]">{item.title}</h2>
                  <p className="text-sm leading-5 text-muted">{item.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="bg-[#000613] px-5 py-[120px] text-white md:px-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-6 font-display text-[32px] font-bold leading-[40px]">LOGO</div>
            <p className="max-w-sm text-sm leading-5 text-white/70">{content.footerBody}</p>
          </div>
          <FooterGroup title={content.footerSectors} links={t.footer.groups[0]?.links ?? []} />
          <FooterGroup title={content.footerBrands} links={[...(t.footer.groups[1]?.links ?? []), ...(t.footer.groups[2]?.links ?? [])]} />
          <FooterGroup title={content.footerLegal} links={t.footer.groups.at(-1)?.links ?? []} />
          <div className="mt-12 border-t border-white/20 pt-8 md:col-span-12">
            <p className="text-sm leading-5 text-white/70">{content.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4 md:col-span-2">
      <h3 className="font-display text-sm font-bold text-white">{title}</h3>
      {links.map((link, index) => (
        <Link key={`${link.href}-${link.label}-${index}`} href={link.href} className="text-sm leading-5 text-white/70 hover:text-white">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
