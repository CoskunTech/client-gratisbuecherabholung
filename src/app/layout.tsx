import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import "./globals.css";

// TODO: Update SITE_URL to real domain before going live
const SITE_URL = "https://gratisbuecher.ch";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRIPTION =
  "Kostenlose Bücher-Abholung direkt bei Ihnen zu Hause — Bücher, CDs, Schallplatten und DVDs. Kamil und Mustafa, Vater und Sohn, seit 2021 in der Deutschschweiz.";

export const metadata: Metadata = {
  title: {
    default: "Gratis Bücher Abholung",
    template: "%s – Gratis Bücher Abholung",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gratis Bücher Abholung",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Gratis Bücher Abholung",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/assets/family_photo.png",
        width: 800,
        height: 1000,
        alt: "Kamil und Mustafa — Gratis Bücher Abholung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis Bücher Abholung",
    description: DESCRIPTION,
    images: ["/assets/family_photo.png"],
  },
};

// LocalBusiness JSON-LD — tells Google this is a local service business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gratis Bücher Abholung",
  description:
    "Kostenlose Abholung von Büchern, CDs, DVDs und Schallplatten direkt bei Ihnen zu Hause. Familienbetrieb von Kamil und Mustafa, seit 2021 in der Deutschschweiz.",
  url: SITE_URL,
  telephone: "+41767201353",
  // TODO: Verify address with Mustafa before going live
  address: {
    "@type": "PostalAddress",
    streetAddress: "Im Niederholzboden 2",
    addressLocality: "Riehen",
    postalCode: "4125",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.5897,
    longitude: 7.6556,
  },
  areaServed: [
    { "@type": "City", "name": "Zürich" },
    { "@type": "City", "name": "Basel" },
    { "@type": "City", "name": "Winterthur" },
    { "@type": "City", "name": "Aarau" },
    { "@type": "City", "name": "Olten" },
    { "@type": "AdministrativeArea", "name": "Aargau" },
    { "@type": "AdministrativeArea", "name": "Solothurn" },
    { "@type": "AdministrativeArea", "name": "Basel-Landschaft" },
  ],
  sameAs: ["https://www.facebook.com/gratisbuecher"],
  priceRange: "Kostenlos",
  foundingDate: "2021",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      className={`${manrope.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink font-jakarta antialiased text-[17px] leading-[1.55]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <WhatsAppFloatingButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
