const galleryImageCount = 21;
const altinyildizEditorialImageCount = 12;

export const imageAssets = {
  site: {
    logo: "/images/site/logo.png",
    hero: "/images/site/hero.jpg",
    heritage: "/images/site/heritage.jpg",
    logistics: "/images/site/logistics.jpg",
    cta: "/images/site/cta.jpg",
  },
  pages: {
    logoHome: "/images/pages/logoHome.png",
    aboutHero: "/images/about/corporate-operations-hero.jpg",
    aboutOffice: "/images/pages/aboutOffice.jpg",
    logisticsHero: "/images/pages/logisticsHero.jpg",
    logisticsFacility: "/images/pages/logisticsFacility.jpg",
    freshHero: "/images/pages/freshHero.jpg",
    freshCitrus: "/images/pages/freshCitrus.jpg",
    freshStone: "/images/pages/freshStone.jpg",
    freshVegetables: "/images/pages/freshVegetables.jpg",
    freshSupply: "/images/pages/freshSupply.jpg",
    autoHero: "/images/pages/autoHero.jpg",
    autoParts: "/images/pages/autoParts.jpg",
    retailHero: "/images/pages/retailHero.jpg",
    retailCraft: "/images/pages/retailCraft.jpg",
    sobaklavaHero: "/images/pages/sobaklavaHero.jpg",
    sobaklavaChef: "/images/pages/sobaklavaChef.jpg",
    sobaklavaPistachio: "/images/pages/sobaklavaPistachio.jpg",
    sobaklavaWalnut: "/images/pages/sobaklavaWalnut.jpg",
    sobaklavaAssorted: "/images/pages/sobaklavaAssorted.jpg",
    sobaklavaStore: "/images/pages/sobaklavaStore.png",
    sobaklavaGrowth: "/images/pages/sobaklavaGrowth.png",
    sobaklavaHavucDilimi: "/images/pages/sobaklavaHavucDilimi.png",
    sobaklavaSobiyet: "/images/pages/sobaklavaSobiyet.png",
    sobaklavaCevizliSoguk: "/images/pages/sobaklavaCevizliSoguk.png",
    sobaklavaChocolateClose: "/images/pages/sobaklavaChocolateClose.jpg",
    sobaklavaCikolataListing: "/images/pages/sobaklavaCikolataListing.jpg",
    bulgatexHero: "/images/pages/bulgatexHero.jpg",
    contactMap: "/images/pages/contactMap.jpg",
    servicesFresh: "/images/pages/servicesFresh.jpg",
    servicesLogistics: "/images/pages/servicesLogistics.jpg",
    servicesAuto: "/images/pages/servicesAuto.jpg",
    servicesRetail: "/images/pages/servicesRetail.jpg",
    servicesSoba: "/images/pages/servicesSoba.jpg",
    servicesBulgatex: "/images/pages/servicesBulgatex.jpg",
    contactHero: "/images/contact/contact-hero.jpg",
  },
  videos: {
    altinyildizHero: "/videos/altinyildiz-classics-hero.mp4",
    freshProduceHero: "/videos/onur-2009-hero-fullframe.mp4",
    bulgatexHero: "/videos/bulgatex-consulting-hero.mp4",
  },
  gallery: Array.from(
    { length: galleryImageCount },
    (_, index) => `/images/gallery/gallery-${index + 1}.jpg`,
  ),
  altinyildizEditorial: Array.from(
    { length: altinyildizEditorialImageCount },
    (_, index) => `/images/altinyildiz/editorial-${String(index + 1).padStart(2, "0")}.png`,
  ),
} as const;

export const galleryImages = imageAssets.gallery;
export const altinyildizEditorialImages = imageAssets.altinyildizEditorial;
