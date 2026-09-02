const galleryImageCount = 21;
const altinyildizEditorialImageCount = 12;
const altinyildizStoreImageCount = 11;
const sobaklavaStoreImageCount = 35;
const logisticsTransportImageCount = 5;
const bulgatexGalleryImageCount = 10;

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
    servicesLogistics: "/images/logistics-transport/highway-truck.png",
    servicesAuto: "/images/pages/servicesAuto.jpg",
    servicesRetail: "/images/altinyildiz/editorial-01.jpg",
    servicesSoba: "/images/pages/servicesSoba.jpg",
    servicesBulgatex: "/images/bulgatex/gallery/bulgatex-gallery-06.png",
    contactHero: "/images/contact/contact-hero.jpg",
  },
  videos: {
    altinyildizHero: "/videos/altinyildiz-classics-hero.mp4",
    freshProduceHero: "/videos/onur-2009-hero-fullframe.mp4",
    bulgatexHero: "/videos/bulgatex-consulting-hero.mp4",
  },
  videoPosters: {
    altinyildizHero: "/images/video-posters/altinyildiz-classics-hero.jpg",
    freshProduceHero: "/images/video-posters/onur-2009-hero-fullframe.jpg",
    bulgatexHero: "/images/video-posters/bulgatex-consulting-hero.jpg",
  },
  gallery: Array.from(
    { length: galleryImageCount },
    (_, index) => `/images/gallery/gallery-${index + 1}.jpg`,
  ),
  freshProduceProducts: {
    tomato: "/images/fresh-produce/products/tomato.jpg",
    pepper: "/images/fresh-produce/products/pepper.jpg",
    onion: "/images/fresh-produce/products/onion.jpg",
    carrot: "/images/fresh-produce/products/carrot.jpg",
    gherkin: "/images/fresh-produce/products/gherkin.jpg",
    zucchini: "/images/fresh-produce/products/zucchini.jpg",
    grapes: "/images/fresh-produce/products/grapes.jpg",
    pomegranate: "/images/fresh-produce/products/pomegranate.jpg",
    quince: "/images/fresh-produce/products/quince.jpg",
    watermelonMelon: "/images/fresh-produce/products/watermelon-melon.jpg",
    fig: "/images/fresh-produce/products/fig.jpg",
    citrus: "/images/fresh-produce/products/citrus.jpg",
  },
  altinyildizEditorial: Array.from(
    { length: altinyildizEditorialImageCount },
    (_, index) => `/images/altinyildiz/editorial-${String(index + 1).padStart(2, "0")}.jpg`,
  ),
  altinyildizStores: Array.from(
    { length: altinyildizStoreImageCount },
    (_, index) => `/images/altinyildiz/store/store-${String(index + 1).padStart(2, "0")}.webp`,
  ),
  sobaklavaStores: Array.from(
    { length: sobaklavaStoreImageCount },
    (_, index) => `/images/sobaklava/store/store-${String(index + 1).padStart(2, "0")}.webp`,
  ),
  logisticsTransport: [
    "/images/logistics-transport/fleet-lineup.png",
    "/images/logistics-transport/loading-dock.png",
    "/images/logistics-transport/highway-truck.png",
    "/images/logistics-transport/yard-truck.png",
    "/images/logistics-transport/warehouse-truck.png",
  ].slice(0, logisticsTransportImageCount),
  logisticsFleetHighlight: "/images/logistics-transport/fleet-highway.png",
  bulgatexGallery: Array.from(
    { length: bulgatexGalleryImageCount },
    (_, index) => `/images/bulgatex/gallery/bulgatex-gallery-${String(index + 1).padStart(2, "0")}.png`,
  ),
} as const;

export const galleryImages = imageAssets.gallery;
export const freshProduceProductImages = Object.values(imageAssets.freshProduceProducts);
export const altinyildizEditorialImages = imageAssets.altinyildizEditorial;
export const altinyildizStoreImages = imageAssets.altinyildizStores;
export const sobaklavaStoreImages = imageAssets.sobaklavaStores;
export const logisticsTransportImages = imageAssets.logisticsTransport;
export const logisticsFleetHighlightImage = imageAssets.logisticsFleetHighlight;
export const bulgatexGalleryImages = imageAssets.bulgatexGallery;
