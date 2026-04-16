"use client";

import { useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const NAV_LINKS = [
  { label: "Startseite", href: "#startseite" },
  { label: "So helfen wir Ihnen", href: "#so-helfen-wir" },
  { label: "Abholtermine", href: "#abholtermine" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Hauptnavigation"
      >
        {/* Logo */}
        <a
          href="#startseite"
          className="font-heading text-xl font-bold tracking-tight text-primary"
        >
          Gratis Bücher Abholung
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-bold tracking-wider uppercase text-primary/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop WhatsApp button */}
        <div className="hidden md:block">
          <WhatsAppButton />
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-outline-variant/30 px-6 py-4"
        >
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-semibold text-primary hover:text-primary/70 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton />
        </div>
      )}
    </header>
  );
}
