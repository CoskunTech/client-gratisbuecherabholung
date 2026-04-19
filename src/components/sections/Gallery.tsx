"use client";

import { useRef, useCallback } from "react";

const FB_HREF = "https://www.facebook.com/gratisbuecher";

/**
 * TODO: Replace placeholder tiles with real Facebook photos via Graph API.
 * Endpoint: GET https://graph.facebook.com/v19.0/me/photos?fields=images,name&access_token=PAGE_ACCESS_TOKEN
 * Mustafa has Meta Developer access — page: facebook.com/gratisbuecher
 * When ready: fetch server-side and pass `photos: { src: string; alt: string }[]` as props.
 */
const TILES = [
  { label: "Abholung · Kartons", variant: "default" },
  { label: "Sortierung · Wohnung", variant: "dark" },
  { label: "Schallplatten", variant: "mint" },
  { label: "Regal · vorher", variant: "default" },
  { label: "Bücherkisten", variant: "dark" },
  { label: "Unterwegs", variant: "default" },
] as const;

const VARIANT_CLASS: Record<string, string> = {
  default: "bg-forest text-white/50",
  dark: "bg-gradient-to-br from-forest-ink to-forest text-white/50",
  mint: "bg-mint text-forest-ink/50",
};

const TILE_W = 260;
const GAP = 12;
const HALF_TRACK = TILES.length * (TILE_W + GAP); // 6 × 272 = 1632 px
const ANIM_DURATION = 36; // seconds

// Duplicated tiles for seamless infinite loop
const ALL_TILES = [...TILES, ...TILES];

function getCurrentX(el: HTMLElement): number {
  return new DOMMatrix(getComputedStyle(el).transform).m41;
}

function normalizeX(x: number): number {
  // Clamp to [-HALF_TRACK, 0] with wrap-around
  let n = x % HALF_TRACK;
  if (n > 0) n -= HALF_TRACK;
  return n;
}

function resumeFrom(el: HTMLElement, x: number) {
  const fraction = Math.abs(normalizeX(x)) / HALF_TRACK;
  el.style.transform = "";
  el.style.animation = `carousel-scroll ${ANIM_DURATION}s linear ${-(fraction * ANIM_DURATION)}s infinite`;
}

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, baseX: 0 });

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    const baseX = getCurrentX(el);
    el.style.animation = "none";
    el.style.transform = `translateX(${baseX}px)`;
    drag.current = { active: true, startX: e.clientX, baseX };
    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    if (!el) return;
    const x = normalizeX(drag.current.baseX + (e.clientX - drag.current.startX));
    el.style.transform = `translateX(${x}px)`;
  }, []);

  const onDragEnd = useCallback(() => {
    if (!drag.current.active) return;
    drag.current.active = false;
    const el = trackRef.current;
    if (!el) return;
    resumeFrom(el, getCurrentX(el));
  }, []);

  return (
    <section
      id="fotos"
      className="py-[clamp(40px,6vw,72px)] bg-paper-deep border-t border-b border-line"
    >
      {/* Section header — right-side description intentionally omitted */}
      <div className="wrap mb-10 pb-5 border-b border-line">
        <div className="flex items-center gap-[10px] mb-[14px] font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
          05 — Eindrücke
        </div>
        <h2 className="font-manrope font-extrabold text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.03em] max-w-[720px]">
          Aus unserem&nbsp;Alltag.
        </h2>
      </div>

      {/* Infinite drag carousel — overflows viewport intentionally */}
      <div className="overflow-hidden select-none">
        <div
          ref={trackRef}
          className="flex carousel-track cursor-grab active:cursor-grabbing"
          style={{ gap: `${GAP}px`, touchAction: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onDragEnd}
          onPointerCancel={onDragEnd}
        >
          {ALL_TILES.map(({ label, variant }, i) => (
            <figure
              key={i}
              className={`gallery-figure-stripes m-0 shrink-0 aspect-square rounded-[8px] border border-line-strong flex items-center justify-center font-mono text-[12px] text-center p-4 ${VARIANT_CLASS[variant]}`}
              style={{ width: `${TILE_W}px` }}
              aria-label={label}
            >
              <span className="relative z-10">{label}</span>
            </figure>
          ))}
        </div>
      </div>

      {/* Facebook CTA */}
      <div className="wrap mt-8 flex justify-center">
        <a
          href={FB_HREF}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-[10px] px-6 py-4 rounded-full bg-forest text-white font-semibold text-[16px] hover:bg-forest-ink hover:-translate-y-px transition-all duration-150 whitespace-nowrap"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
            <path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.2-1.5 1.5-1.5h1.6V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.5H7v3.1h3V22h3z" />
          </svg>
          Mehr Fotos auf Facebook →
        </a>
      </div>
    </section>
  );
}
