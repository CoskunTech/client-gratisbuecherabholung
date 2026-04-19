"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { href: "#start", label: "Startseite" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#termine", label: "Abholtermine" },
  { href: "#ueber", label: "Über uns" },
  { href: "#fotos", label: "Fotos" },
  { href: "#kontakt", label: "Kontakt" },
];

const WA_HREF = "https://wa.me/41767201353";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("start");

  useEffect(() => {
    const sectionIds = ["start", "ablauf", "termine", "ueber", "fotos", "kontakt"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-[12px] border-b border-line">
      <div className="wrap flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 font-manrope font-extrabold text-[16px] tracking-[-0.01em] text-forest"
          aria-label="Gratis Bücher Abholung — Startseite"
        >
          <Image
            src="/assets/Logo.png"
            alt="Gratis Bücher Abholung Logo"
            width={40}
            height={40}
            className="h-10 w-auto flex-shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span>Gratis Bücher Abholung</span>
            <span className="text-ink-muted font-medium text-[12px] tracking-normal">
              Seit 2021
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-[14px] font-medium transition-colors duration-150 ${
                activeId === href.slice(1)
                  ? "text-ink font-semibold"
                  : "text-ink-soft hover:text-forest"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener"
            className="bg-whatsapp text-white px-[18px] py-[10px] rounded-full font-semibold text-[14px] inline-flex items-center gap-2 hover:bg-whatsapp-deep hover:-translate-y-px transition-all duration-150"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.4A10 10 0 1012 2z" />
            </svg>
            Schreiben Sie uns
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 cursor-pointer bg-transparent border-none"
          aria-label="Menü"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block w-6 h-0.5 bg-ink my-[5px]" />
          <span className="block w-6 h-0.5 bg-ink my-[5px]" />
          <span className="block w-6 h-0.5 bg-ink my-[5px]" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line px-[clamp(20px,4vw,56px)] py-4 bg-paper">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block py-3 text-[16px] font-medium border-b border-line last:border-none"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener"
            className="block py-3 text-[16px] font-bold text-whatsapp"
            onClick={() => setMobileOpen(false)}
          >
            WhatsApp schreiben →
          </a>
        </div>
      )}
    </nav>
  );
}
