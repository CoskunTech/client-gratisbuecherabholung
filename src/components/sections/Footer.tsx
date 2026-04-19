const WA_HREF = "https://wa.me/41767201353";
const FB_HREF = "https://www.facebook.com/gratisbuecher";
// TODO: Replace with real email address from Mustafa
const EMAIL = "info@gratisbuecher.ch";

export function Footer() {
  return (
    <footer className="bg-dark text-[#e8e8e4] pt-16 pb-8 mt-10">
      <div className="wrap flex flex-col gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-12 pb-10 border-b border-white/[0.07]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-manrope font-extrabold text-[16px] tracking-[-0.01em] text-paper">
              <span className="w-8 h-8 rounded-[6px] bg-mint text-forest-ink flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  width={18}
                  height={18}
                  aria-hidden="true"
                >
                  <path d="M4 4h7v16H4z" />
                  <path d="M13 4h7v16h-7z" />
                  <path d="M7 8h1M7 12h1M16 8h1M16 12h1" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span>Gratis Bücher Abholung</span>
                <span className="text-white/[0.44] font-medium text-[12px] tracking-normal">
                  Seit 2021
                </span>
              </span>
            </div>
            <p className="text-white/50 text-[14px] max-w-[320px] leading-relaxed">
              Kamil und Mustafa — Vater und Sohn — holen seit 2021 Bücher, CDs, Platten und DVDs
              direkt bei Ihnen ab. Kostenlos, persönlich, ohne Aufwand für Sie.
            </p>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-paper text-[13px] font-semibold uppercase tracking-[0.1em] mb-4 font-manrope">
              Service
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {[
                { href: "#abholen", label: "Was wir abholen" },
                { href: "#ablauf", label: "So läuft es ab" },
                { href: "#termine", label: "Abholtermine" },
                { href: "#kontakt", label: "Gratis anfragen" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/65 text-[14px] hover:text-mint transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-paper text-[13px] font-semibold uppercase tracking-[0.1em] mb-4 font-manrope">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener"
                  className="text-white/65 text-[14px] hover:text-mint transition-colors duration-150"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={FB_HREF}
                  target="_blank"
                  rel="noopener"
                  className="text-white/65 text-[14px] hover:text-mint transition-colors duration-150"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/65 text-[14px] hover:text-mint transition-colors duration-150"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-4 flex-wrap text-[13px] text-white/40">
          <div>© 2026 Gratis Bücher Abholung · Alle Rechte vorbehalten</div>
          <div className="flex gap-5">
            <a
              href="/impressum"
              className="text-white/50 hover:text-mint transition-colors duration-150"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-white/50 hover:text-mint transition-colors duration-150"
            >
              Datenschutz
            </a>
            <a
              href="/agb"
              className="text-white/50 hover:text-mint transition-colors duration-150"
            >
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
