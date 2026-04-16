import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gratis Bücher Abholung Basel",
  description:
    "Wir holen gratis Bücher, CDs, DVDs und Schallplatten ab – in Basel, Baselland, Zürich, Aargau und Solothurn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${lora.variable} ${inter.variable}`}>
      <body className="bg-background text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
