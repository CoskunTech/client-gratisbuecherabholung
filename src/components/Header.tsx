"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "@/data/business";

const navLinks = [
  { label: "So funktioniert's", href: "#ablauf" },
  { label: "Abholtermine", href: "#abholtermine" },
  { label: "Über uns", href: "#ueberuns" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="#startseite" className="text-xl font-bold text-neutral-900">
          <span className="text-primary-500">Gratis</span> Bücher Abholung
        </a>

        <ul className="hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-neutral-700 transition-colors hover:text-primary-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink}
            className="hidden rounded-full bg-wa px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex sm:items-center sm:gap-2"
          >
            <WhatsAppIcon className="size-4" /> Schreiben Sie uns
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-10 items-center justify-center rounded-lg text-neutral-700 lg:hidden"
            aria-label="Menü"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-bg px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-neutral-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-wa px-5 py-3 font-semibold text-white"
              >
                <WhatsAppIcon className="size-5" /> Schreiben Sie uns
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
