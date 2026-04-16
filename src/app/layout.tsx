import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
