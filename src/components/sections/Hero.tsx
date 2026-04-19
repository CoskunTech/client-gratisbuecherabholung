import Image from "next/image";

const WA_HREF = "https://wa.me/41767201353";
const FB_HREF = "https://www.facebook.com/gratisbuecher";

export function Hero() {
  return (
    <section id="start" className="py-[clamp(32px,5vw,60px)] relative overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-[40px] md:gap-[64px] items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-[10px] px-[14px] py-[8px] rounded-full bg-paper-deep border border-line-strong text-[13px] font-medium text-forest-ink mb-7">
              <span className="w-2 h-2 rounded-full bg-mint" style={{ boxShadow: "0 0 0 4px #74C69D33" }} />
              Abholung nach Absprache
            </span>

            <h1 className="font-manrope font-extrabold text-[clamp(44px,7.2vw,108px)] leading-[0.95] tracking-[-0.035em] mb-6 text-ink">
              Wir holen Ihre{" "}
              <span className="relative inline-block text-forest italic">
                Bücher
                <span
                  className="absolute -left-[2%] -right-[2%] bottom-[0.08em] h-[0.12em] bg-mint z-[-1]"
                  style={{ opacity: 0.55 }}
                />
              </span>{" "}
              bei Ihnen zu&nbsp;Hause&nbsp;ab.
            </h1>

            <p className="text-[clamp(17px,1.6vw,20px)] text-ink-soft max-w-[540px] mb-9">
              Vater und Sohn — wir kommen persönlich zu Ihnen, schauen uns Ihre Bücher an und nehmen mit, was einen neuen Leser verdient. Kein Aufwand, kein Formular.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[10px] px-6 py-4 rounded-full bg-whatsapp text-white font-semibold text-[16px] hover:bg-whatsapp-deep hover:-translate-y-px transition-all duration-150 whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.4A10 10 0 1012 2z" />
                </svg>
                WhatsApp schreiben
              </a>
              <a
                href={FB_HREF}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[10px] px-6 py-4 rounded-full bg-transparent text-ink border border-ink font-semibold text-[16px] hover:bg-ink hover:text-paper transition-all duration-150 whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
                  <path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.2-1.5 1.5-1.5h1.6V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.5H7v3.1h3V22h3z" />
                </svg>
                Auf Facebook schreiben
              </a>
            </div>

            <div className="mt-12 flex gap-8 flex-wrap pt-7 border-t border-line">
              {[
                { num: "500+", lbl: "Zufriedene Kunden" },
                { num: "10.000+", lbl: "Bücher weitergegeben" },
                { num: "Seit 2021", lbl: "Familienbetrieb" },
              ].map(({ num, lbl }) => (
                <div key={lbl}>
                  <span className="font-manrope text-[28px] font-extrabold text-forest tracking-[-0.02em] block">
                    {num}
                  </span>
                  <span className="text-[13px] text-ink-muted font-medium">{lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            className="relative aspect-[4/5] rounded-[10px] overflow-hidden border border-line-strong max-w-[460px] mx-auto md:max-w-none md:mx-0"
          >
            <Image
              src="/assets/family_photo.png"
              alt="Kamil und Daniel — Gratis Bücher Abholung"
              fill
              className="object-cover"
              priority
            />
            {/* Badge */}
            <div
              className="absolute right-[-32px] top-[-32px] w-[170px] h-[170px] rounded-full bg-mint text-forest-ink flex items-center justify-center font-manrope font-extrabold text-center p-4 leading-none z-10"
              style={{
                transform: "rotate(-8deg)",
                boxShadow: "0 12px 32px #0f523822",
              }}
            >
              <div>
                <span className="text-[36px] block tracking-[-0.03em]">
                  Seit
                  <br />
                  2021
                </span>
                <span className="text-[11px] uppercase tracking-[0.1em] mt-1.5 block font-semibold">
                  Vater &amp; Sohn
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
