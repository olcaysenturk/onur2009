"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { formatCopyright } from "@/lib/copyright";
import { images } from "@/lib/site";
import {
  altinyildizEditorialImages,
  altinyildizStoreImages,
  bulgatexGalleryImages,
  freshProduceProductImages,
  imageAssets,
  logisticsTransportImages,
  sobaklavaStoreImages,
} from "@/lib/assets";

const pageImages = imageAssets.pages;

const uniqueImages = (items: string[]) => Array.from(new Set(items));

export default function GalleryPage() {
  const { t } = useLanguage();
  const content = t.galleryView;
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const galleryGroups = [
    uniqueImages([
      ...altinyildizEditorialImages,
      ...altinyildizStoreImages,
    ]),
    uniqueImages(freshProduceProductImages),
    uniqueImages([
      "/images/sobaklava/store/store-07.webp",
      ...sobaklavaStoreImages,
      pageImages.servicesSoba,
      pageImages.sobaklavaHero,
      pageImages.sobaklavaChef,
      pageImages.sobaklavaPistachio,
      pageImages.sobaklavaWalnut,
      pageImages.sobaklavaAssorted,
      pageImages.sobaklavaStore,
      pageImages.sobaklavaHavucDilimi,
      pageImages.sobaklavaSobiyet,
      pageImages.sobaklavaCevizliSoguk,
      pageImages.sobaklavaChocolateClose,
      pageImages.sobaklavaCikolataListing,
    ]),
    uniqueImages(bulgatexGalleryImages),
    uniqueImages(logisticsTransportImages),
  ];
  const galleryItems = galleryGroups.flatMap((group, groupIndex) => {
    const filterIndex = groupIndex + 1;
    const category = content.filters[filterIndex] ?? content.filters[0];

    return group.map((image) => ({
      image,
      title: category,
      category,
      categoryIndex: filterIndex,
    }));
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
            <article
              key={`${item.title}-${index}`}
              className={`group relative cursor-pointer overflow-hidden rounded-lg border border-outline/40 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 3 ? "md:row-span-2" : ""}`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image src={item.image} alt={item.title} fill quality={100} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-[#000613]/40 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="translate-y-4 rounded bg-white/90 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <h2>{item.title}</h2>
                  <p className="text-sm leading-5 text-muted">{item.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={filteredGalleryItems[selectedImageIndex].image}
              alt={filteredGalleryItems[selectedImageIndex].title}
              width={1920}
              height={1080}
              quality={100}
              className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}

      <footer className="bg-[#000613] px-5 py-[120px] text-white md:px-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image src={images.logo} alt="" width={1536} height={759} className="mb-6 h-auto w-[132px] object-contain" />
            <p className="max-w-sm text-sm leading-5 text-white/70">{content.footerBody}</p>
          </div>
          <FooterGroup title={content.footerSectors} links={t.footer.groups[0]?.links ?? []} />
          <FooterGroup title={content.footerBrands} links={[...(t.footer.groups[1]?.links ?? []), ...(t.footer.groups[2]?.links ?? [])]} />
          <FooterGroup title={content.footerLegal} links={t.footer.groups.at(-1)?.links ?? []} />
          <div className="mt-12 border-t border-white/20 pt-8 md:col-span-12">
            <p className="text-sm leading-5 text-white/70">{formatCopyright(content.copyright)}</p>
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
