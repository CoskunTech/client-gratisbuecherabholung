import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gratisbuecherabholung.ch"),
  title:
    "Gratis Bücher abholen lassen | Basel, Zürich, Aargau & Solothurn",
  description:
    "Wir holen Bücher, CDs, DVDs und Schallplatten in Basel, Zürich, Aargau und Solothurn ab. Jetzt unkompliziert anfragen und Medien sinnvoll weitergeben.",
  keywords: [
    "Bücher abholen",
    "Bücher Abholservice",
    "Bücher spenden Basel",
    "Bücher abholen lassen Zürich",
    "CDs DVDs Schallplatten abgeben",
    "Bücher entsorgen Schweiz",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Gratis Bücher-Abholung in der Schweiz",
    description:
      "Statt wegwerfen – weitergeben. Wir holen Bücher, CDs, DVDs und Schallplatten ab und bringen sie wieder in Umlauf.",
    locale: "de_CH",
    type: "website",
    url: "https://gratisbuecherabholung.ch",
    siteName: "Gratis Bücher Abholung",
    // og:image is supplied automatically by app/opengraph-image.tsx (1200×630).
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis Bücher-Abholung in der Schweiz",
    description:
      "Statt wegwerfen – weitergeben. Wir holen Bücher, CDs, DVDs und Schallplatten ab.",
    // twitter:image is supplied automatically by app/twitter-image.tsx (1200×630).
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className={`${dmSans.className} antialiased`}>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
