const WA_HREF = "https://wa.me/41767201353";
const FB_HREF = "https://www.facebook.com/gratisbuecher";
// TODO: Replace with real email address from Mustafa
const EMAIL = "info@gratisbuecher.ch";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={14}
    height={14}
    aria-hidden="true"
  >
    <path d="M7 17L17 7M17 7H9M17 7v8" />
  </svg>
);

export function Kontakt() {
  return (
    <section
      id="kontakt"
      className="py-[clamp(72px,10vw,130px)] bg-paper-deep border-t border-line"
    >
      <div className="wrap">
        <div className="flex items-end justify-between gap-8 mb-14 pb-5 border-b border-line flex-col md:flex-row">
          <div>
            <div className="flex items-center gap-[10px] mb-[14px] font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
              06 — Kontakt
            </div>
            <h2 className="font-manrope font-extrabold text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.03em] max-w-[720px]">
              Melden Sie sich.
              <br />
              Wir hören zu.
            </h2>
          </div>
          <p className="text-ink-muted text-[15px] max-w-[320px] md:text-right">
            WhatsApp, Facebook oder E-Mail — so erreichen Sie uns am zuverlässigsten. Meist melden
            wir uns am selben Tag zurück.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* WhatsApp */}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener"
            className="bg-forest text-paper border border-forest rounded-[10px] p-[28px] flex flex-col gap-4 min-h-[220px] transition-all duration-150 hover:bg-forest-ink hover:border-forest-ink group"
          >
            <div className="w-11 h-11 rounded-[8px] bg-mint text-forest-ink flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.4A10 10 0 1012 2z" />
              </svg>
            </div>
            <span className="text-[13px] text-white/70 uppercase tracking-[0.08em] font-semibold">
              WhatsApp · Empfohlen
            </span>
            <div className="flex items-center justify-between">
              <span className="font-manrope text-[22px] font-bold tracking-[-0.01em]">
                Chat starten
              </span>
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-mint group-hover:text-forest-ink group-hover:border-mint transition-all duration-150">
                <ArrowIcon />
              </span>
            </div>
            <span className="text-[14px] text-white/70 mt-auto">Meist Antwort am selben Tag</span>
          </a>

          {/* Facebook */}
          <a
            href={FB_HREF}
            target="_blank"
            rel="noopener"
            className="bg-paper border border-line-strong rounded-[10px] p-[28px] flex flex-col gap-4 min-h-[220px] transition-all duration-200 hover:-translate-y-0.5 hover:border-forest hover:shadow-[0_10px_30px_#0f523814] group"
          >
            <div className="w-11 h-11 rounded-[8px] bg-paper-deep text-forest flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden="true">
                <path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.2-1.5 1.5-1.5h1.6V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.5H7v3.1h3V22h3z" />
              </svg>
            </div>
            <span className="text-[13px] text-ink-muted uppercase tracking-[0.08em] font-semibold">
              Facebook
            </span>
            <div className="flex items-center justify-between gap-3">
              <span className="font-manrope text-[20px] font-bold tracking-[-0.01em]">
                Gratis Bücher Abholung
              </span>
              <span className="w-9 h-9 rounded-full border border-line-strong flex items-center justify-center group-hover:bg-forest group-hover:text-paper group-hover:border-forest transition-all duration-150 flex-shrink-0">
                <ArrowIcon />
              </span>
            </div>
            <span className="text-[14px] text-ink-muted mt-auto">
              Nachricht oder Beitrag — wir lesen beides
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="bg-paper border border-line-strong rounded-[10px] p-[28px] flex flex-col gap-4 min-h-[220px] transition-all duration-200 hover:-translate-y-0.5 hover:border-forest hover:shadow-[0_10px_30px_#0f523814] group"
          >
            <div className="w-11 h-11 rounded-[8px] bg-paper-deep text-forest flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                width={22}
                height={22}
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>
            <span className="text-[13px] text-ink-muted uppercase tracking-[0.08em] font-semibold">
              E-Mail
            </span>
            <div className="flex items-center justify-between gap-3">
              <span className="font-manrope text-[17px] font-bold tracking-[-0.01em] break-all">
                {EMAIL}
              </span>
              <span className="w-9 h-9 rounded-full border border-line-strong flex items-center justify-center group-hover:bg-forest group-hover:text-paper group-hover:border-forest transition-all duration-150 flex-shrink-0">
                <ArrowIcon />
              </span>
            </div>
            <span className="text-[14px] text-ink-muted mt-auto">Antwort innert 24 Stunden</span>
          </a>
        </div>

        {/* What to include */}
        <div className="mt-8 p-[28px_32px] bg-paper border border-line-strong rounded-[10px] flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
          <p className="font-manrope font-bold text-[18px] tracking-[-0.01em] text-ink shrink-0">
            Das hilft uns bei der Planung:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-1">
            {[
              { num: "01", text: "Ihr Standort — Stadt oder Gemeinde" },
              { num: "02", text: "Ungefähre Anzahl der Bücher" },
              { num: "03", text: "Wenn möglich ein paar Fotos" },
            ].map(({ num, text }) => (
              <div key={num} className="flex items-start gap-3">
                <span className="font-mono text-[11px] text-forest tracking-[0.08em] mt-0.5 shrink-0">
                  {num}
                </span>
                <span className="text-[14px] text-ink-soft">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
