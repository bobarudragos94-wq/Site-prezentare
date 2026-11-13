import type { Metadata, Viewport } from "next";
import { Archivo, Figtree } from "next/font/google";
import { Providers } from "@/components/Providers";
import { siteConfig } from "@/site.config";
import "./globals.css";

// Ambele fonturi au ș și ț cu virgulă (subsetul latin-ext).
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
});

const titlu = `${siteConfig.brand} · ${siteConfig.titluSeo}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titlu,
    template: `%s · ${siteConfig.brand}`,
  },
  description: siteConfig.descriereSeo,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: siteConfig.brand,
    title: titlu,
    description: siteConfig.descriereSeo,
  },
  twitter: {
    card: "summary_large_image",
    title: titlu,
    description: siteConfig.descriereSeo,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0c",
  viewportFit: "cover",
};

// Date structurate pentru Google: ProfessionalService.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brand,
  description: siteConfig.descriereSeo,
  url: siteConfig.url,
  telephone: siteConfig.contact.telefonApel,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}/opengraph-image`,
  areaServed: { "@type": "Country", name: "România" },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.firma.adresa,
    addressLocality: siteConfig.firma.oras,
    addressRegion: siteConfig.firma.judet,
    addressCountry: "RO",
  },
  priceRange: `${Math.min(...siteConfig.pachete.map((p) => p.pret))}–${Math.max(
    ...siteConfig.pachete.map((p) => p.pret),
  )} ${siteConfig.moneda.cod}`,
  makesOffer: siteConfig.pachete.map((p) => ({
    "@type": "Offer",
    name: p.nume,
    description: p.descriere,
    price: p.pret,
    priceCurrency: siteConfig.moneda.cod,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${archivo.variable} ${figtree.variable} antialiased`}>
      <body>
        <a
          href="#continut"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Sari la conținut
        </a>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {/* Fără JavaScript, tot conținutul rămâne vizibil. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
