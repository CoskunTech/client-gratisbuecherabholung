"use client";

import { useState } from "react";
import { Home, HelpCircle, Calendar, Users, Phone, X, Menu } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";


const NAV_LINKS = [
  { label: "Startseite", href: "#startseite", icon: Home },
  { label: "So geht's", href: "#so-helfen-wir", icon: HelpCircle },
  { label: "Abholtermine", href: "#abholtermine", icon: Calendar },
  { label: "Über uns", href: "#ueber-uns", icon: Users },
] as const;

const CONTACT_LINK = { label: "Kontakt", href: "#kontakt", icon: Phone };

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
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
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-bold tracking-wider uppercase whitespace-nowrap text-primary/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CONTACT_LINK.href}
                className="text-xs font-bold tracking-wider uppercase whitespace-nowrap text-primary/70 hover:text-primary transition-colors"
              >
                {CONTACT_LINK.label}
              </a>
            </li>
          </ul>

          {/* Desktop WhatsApp button */}
          <div className="hidden lg:block">
            <WhatsAppButton />
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Menü öffnen"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigationsmenü"
        >
          {/* Overlay header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30">
            <a
              href="#startseite"
              onClick={closeMenu}
              className="font-heading text-xl font-bold tracking-tight text-primary"
            >
              Gratis Bücher Abholung
            </a>
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
              aria-label="Menü schließen"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto">
            <ul>
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li
                    key={link.href}
                    className="border-b border-outline-variant/20"
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-4 w-full px-6 py-4 text-xl font-medium text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors"
                    >
                      <Icon
                        className="w-5 h-5 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      {link.label}
                    </a>
                  </li>
                );
              })}

              {/* Divider before Kontakt */}
              <li className="border-b border-outline-variant/20">
                <a
                  href={CONTACT_LINK.href}
                  onClick={closeMenu}
                  className="flex items-center gap-4 w-full px-6 py-4 text-xl font-semibold text-primary hover:bg-surface-container active:bg-surface-container-high transition-colors"
                >
                  <CONTACT_LINK.icon
                    className="w-5 h-5 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  {CONTACT_LINK.label}
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <div className="px-6 py-6">
              <WhatsAppButton fullWidth />
            </div>
          </nav>

        </div>
      )}
    </>
  );
}
