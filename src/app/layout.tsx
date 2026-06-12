import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { StoreProvider } from "@/store/provider";
import { buildOrganizationSchema, buildWebsiteSchema, siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: siteConfig.title,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[buildOrganizationSchema(), buildWebsiteSchema()]} />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
