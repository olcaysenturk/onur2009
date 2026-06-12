"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, Sparkles } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/hooks/useLanguage";
import { divisionPages, pageImages } from "@/lib/pages";

const page = divisionPages.find((item) => item.slug === "sobaklava-distribution");

const localizedCopy = {
  en: {
    badge: "Premium Heritage Distribution",
    title: "Delivering the Golden Standard of Traditional Baklava.",
    heroBody:
      "SoBaklava Distribution partners with elite producers to bring authentic, artisanal quality to premium retail and hospitality networks globally.",
    partner: "Become a Partner",
    catalog: "View Product Catalog",
    legacyTitle: "A Legacy of Sweet Perfection.",
    legacyBody:
      "For generations, the art of baklava has been guarded by master craftsmen. SoBaklava serves as the vital bridge between these heritage bakeries and the world's most discerning culinary establishments.",
    legacyBodyAlt:
      "We don't just distribute; we preserve integrity. Our rigorous selection process ensures that only products meeting our exacting standards for ingredient quality, traditional technique, and flavor profile enter our network.",
    standards: "Discover Our Standards",
    portfolioTitle: "Curated Portfolio",
    portfolioBody:
      "A selection of our highest-volume, premium grades engineered for fine dining and luxury retail environments.",
    flagship: "Flagship Line",
    specSheet: "Request Spec Sheet",
    products: [
      {
        title: "Classic Pistachio Cold Baklava",
        description:
          "Our highest-demand cold baklava SKU. Crafted with milk-soaked layers, hand-finished phyllo, and premium Antep pistachios.",
      },
      {
        title: "Chocolate Cold Baklava",
        description: "A cocoa-finished cold baklava profile with creamy layers and refined pistachio garnish.",
      },
      {
        title: "Cold Baklava Assortments",
        description: "Pre-packaged, luxury gift boxes ready for high-end boutique and duty-free retail.",
      },
    ],
  },
  tr: {
    badge: "Premium Miras Dağıtımı",
    title: "Geleneksel baklavanın altın standardını sunuyoruz.",
    heroBody:
      "SoBaklava Distribution, seçkin üreticilerle çalışarak otantik ve el yapımı kaliteyi premium perakende ve hospitality ağlarına taşır.",
    partner: "Partner Ol",
    catalog: "Ürün Kataloğu",
    legacyTitle: "Tatlı mükemmelliğin mirası.",
    legacyBody:
      "Baklava sanatı nesiller boyunca usta zanaatkarlar tarafından korunmuştur. SoBaklava, bu miras üreticileriyle seçkin mutfak işletmeleri arasında güçlü bir köprü kurar.",
    legacyBodyAlt:
      "Yalnızca dağıtım yapmıyoruz; kalite bütünlüğünü koruyoruz. Seçim sürecimiz, içerik kalitesi ve geleneksel teknik standartlarını karşılayan ürünleri öne çıkarır.",
    standards: "Standartları Keşfet",
    portfolioTitle: "Seçilmiş Portföy",
    portfolioBody:
      "Fine dining ve lüks perakende ortamları için hazırlanmış yüksek hacimli premium ürün seçkisi.",
    flagship: "Amiral Seri",
    specSheet: "Teknik Form İste",
    products: [
      {
        title: "Klasik Fıstıklı Soğuk Baklava",
        description:
          "Sütlü katmanlar, elde tamamlanan yufka ve premium Antep fıstığıyla hazırlanan en güçlü ürünümüz.",
      },
      {
        title: "Çikolatalı Soğuk Baklava",
        description: "Kakao dokunuşu, kremamsı katmanlar ve rafine fıstık garnitürüyle premium soğuk baklava profili.",
      },
      {
        title: "Soğuk Baklava Assortment",
        description: "Butik, duty-free ve premium perakende için hazır lüks hediye kutuları.",
      },
    ],
  },
  bg: {
    badge: "Премиум наследствена дистрибуция",
    title: "Доставяме златния стандарт на традиционната баклава.",
    heroBody:
      "SoBaklava Distribution работи с елитни производители, за да доставя автентично качество до премиум ритейл и hospitality мрежи.",
    partner: "Стани партньор",
    catalog: "Виж продуктов каталог",
    legacyTitle: "Наследство на сладко съвършенство.",
    legacyBody:
      "Изкуството на баклавата се пази от майстори занаятчии поколения наред. SoBaklava свързва тези наследствени пекарни с изискани кулинарни обекти.",
    legacyBodyAlt:
      "Ние не само дистрибутираме; запазваме интегритета. Нашият подбор гарантира качество на съставките, традиционна техника и прецизен вкус.",
    standards: "Виж стандартите",
    portfolioTitle: "Куриран портфейл",
    portfolioBody:
      "Селекция от премиум продукти за fine dining и луксозни ритейл среди.",
    flagship: "Флагманска линия",
    specSheet: "Заяви спецификация",
    products: [
      {
        title: "Класическа студена баклава с шамфъстък",
        description:
          "Флагмански студен баклава продукт с млечни слоеве, ръчно завършени кори и премиум шамфъстък.",
      },
      {
        title: "Шоколадова студена баклава",
        description: "Какаов профил със сметанови слоеве и фин шамфъстъчен завършек.",
      },
      {
        title: "Асортимент студена баклава",
        description: "Луксозни подаръчни кутии за бутиков и duty-free ритейл.",
      },
    ],
  },
};

export default function SobaklavaDistributionView() {
  const { language } = useLanguage();

  if (!page) return null;

  const copy = localizedCopy[language];
  const products = [
    {
      title: copy.products[0].title,
      description: copy.products[0].description,
      image: pageImages.sobaklavaPistachio,
      featured: true,
    },
    {
      title: copy.products[1].title,
      description: copy.products[1].description,
      image: pageImages.sobaklavaWalnut,
    },
    {
      title: copy.products[2].title,
      description: copy.products[2].description,
      image: pageImages.sobaklavaAssorted,
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="relative flex min-h-[560px] items-center overflow-hidden bg-primary-deep px-4 py-20 text-white md:min-h-[720px] md:px-10">
          <Image
            src={pageImages.sobaklavaHero}
            alt={copy.title}
            fill
            priority
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-deep/72" />
          <div className="relative z-10 mx-auto w-full max-w-[1280px]">
            <div className="max-w-[680px]">
              <span className="inline-flex items-center gap-2 rounded bg-white px-3 py-1.5 font-sans text-xs font-semibold text-primary-deep">
                <Sparkles aria-hidden className="h-3.5 w-3.5" />
                {copy.badge}
              </span>
              <h1 className="mt-6 max-w-[650px] font-display text-[38px] font-bold leading-[46px] text-white md:text-[48px] md:leading-[56px]">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-[620px] text-base leading-7 text-white/90">
                {copy.heroBody}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-7 font-display text-sm font-bold text-white transition-colors hover:bg-secondary"
                >
                  {copy.partner}
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white px-7 font-display text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  {copy.catalog}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-20 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-24">
            <div className="md:col-span-6">
              <Image
                src={pageImages.sobaklavaChef}
                alt={copy.legacyTitle}
                width={720}
                height={720}
                quality={100}
                className="aspect-square w-full rounded object-cover shadow-[0_22px_60px_rgba(13,159,196,0.14)]"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <h2 className="font-display text-[30px] font-semibold leading-10 text-primary">
                {copy.legacyTitle}
              </h2>
              <div className="mt-7 space-y-5 text-base leading-7 text-muted">
                <p>{copy.legacyBody}</p>
                <p>{copy.legacyBodyAlt}</p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 font-display text-sm font-bold text-primary transition-colors hover:text-accent"
              >
                {copy.standards}
                <ArrowRight aria-hidden className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-surface-soft px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-16 max-w-[560px]">
              <h2 className="font-display text-[30px] font-semibold leading-10 text-primary">
                {copy.portfolioTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">{copy.portfolioBody}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
              <article className="overflow-hidden rounded border border-outline/40 bg-surface">
                <Image
                  src={products[0].image}
                  alt={products[0].title}
                  width={900}
                  height={420}
                  quality={100}
                  className="h-[320px] w-full object-cover md:h-[360px]"
                />
                <div className="p-7 md:p-8">
                  <span className="inline-flex items-center gap-2 rounded-sm bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                    <Sparkles aria-hidden className="h-3.5 w-3.5" />
                    {copy.flagship}
                  </span>
                  <h3 className="mt-5 font-display text-[26px] font-semibold leading-9 text-primary">
                    {products[0].title}
                  </h3>
                  <p className="mt-3 max-w-[720px] text-sm leading-6 text-muted">
                    {products[0].description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-20 inline-flex items-center gap-2 font-display text-xs font-bold text-primary transition-colors hover:text-accent"
                  >
                    {copy.specSheet}
                    <ArrowDownToLine aria-hidden className="h-4 w-4" />
                  </Link>
                </div>
              </article>

              <div className="grid gap-8">
                {products.slice(1).map((product) => (
                  <article
                    key={product.title}
                    className="overflow-hidden rounded border border-outline/40 bg-surface"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={520}
                      height={280}
                      quality={100}
                      className="h-[180px] w-full object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold leading-7 text-primary">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
