import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Gratis Bücher Abholung",
  description:
    "Kostenlose Bücher-Abholung direkt bei Ihnen zu Hause — Bücher, CDs, Schallplatten und DVDs. Kamil und Mustafa, Vater und Sohn, seit 2021 in der Deutschschweiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink font-jakarta antialiased text-[17px] leading-[1.55]">
        <Navbar />
        <WhatsAppFloatingButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
