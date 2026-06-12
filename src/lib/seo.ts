import type { Metadata } from "next";
import { divisionPages } from "./pages";
import { images } from "./site";

const appTitle = process.env.NEXT_PUBLIC_APP_TITLE ?? "ONUR2009";
const appDescription =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
  "ONUR2009 delivers premium global trade, logistics, distribution, and advisory services.";
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const appOrigin = new URL(appUrl);

export const siteConfig = {
  title: appTitle,
  description: appDescription,
  url: appUrl,
  origin: appOrigin.toString(),
  logo: new URL(images.logo, appOrigin).toString(),
  defaultImage: new URL(images.hero, appOrigin).toString(),
};

type PageMetadataOptions = {
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

type ServiceSchemaOptions = {
  description: string;
  image?: string;
  name: string;
  path: string;
};

function resolveUrl(pathname: string) {
  return new URL(pathname, appOrigin).toString();
}

export function createPageMetadata(
  title: string,
  description = appDescription,
  options: PageMetadataOptions = {},
): Metadata {
  const canonicalPath = options.path ?? "/";
  const socialTitle = title === appTitle ? appTitle : `${title} | ${appTitle}`;
  const pageTitle = title === appTitle ? { absolute: appTitle } : title;
  const imageUrl = resolveUrl(options.image ?? images.hero);

  return {
    applicationName: appTitle,
    title: pageTitle,
    description,
    keywords: options.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: resolveUrl(canonicalPath),
      siteName: appTitle,
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: options.imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
    robots: options.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: appTitle,
    url: siteConfig.url,
    description: appDescription,
    inLanguage: ["en", "tr", "bg"],
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: appTitle,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: appDescription,
    foundingDate: "2009",
    areaServed: ["Turkey", "Bulgaria", "Europe"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${appTitle} Divisions`,
      itemListElement: divisionPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: page.title,
          description: page.description,
          url: resolveUrl(`/${page.slug}`),
        },
      })),
    },
  };
}

export function buildServiceSchema({ description, image, name, path }: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: resolveUrl(path),
    image: image ? resolveUrl(image) : siteConfig.defaultImage,
    provider: {
      "@type": "Organization",
      name: appTitle,
      url: siteConfig.url,
      logo: siteConfig.logo,
    },
  };
}
