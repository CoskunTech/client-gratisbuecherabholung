"use client";

import type { ReactNode } from "react";

type AnchorLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/**
 * Smooth-scrolls to an in-page section without writing the hash to the URL.
 * Offsets by the live sticky-header height so headings land just below the bar.
 * The logo / "startseite" target scrolls fully to the top.
 */
export default function AnchorLink({
  href,
  children,
  className,
  onClick,
}: AnchorLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";

      if (id === "startseite") {
        window.scrollTo({ top: 0, behavior });
      } else {
        const header = document.querySelector("nav");
        const headerOffset = header ? header.offsetHeight : 72;
        const top =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior });
      }
    }

    onClick?.();
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
