const steps = [
  {
    num: "01",
    arrow: "→",
    title: "Sie melden sich",
    desc: "Schreiben Sie uns via WhatsApp, Facebook oder E-Mail — und teilen Sie uns Ihren Standort, die ungefähre Anzahl der Bücher und wenn möglich ein paar Fotos mit.",
    mono: "WhatsApp · Facebook · E-Mail",
  },
  {
    num: "02",
    arrow: "→",
    title: "Wir vereinbaren einen Termin",
    desc: "Wir melden uns zurück und schlagen einen Termin vor, der zu unserer Route passt. Meist innert weniger Tage.",
    mono: "Antwort meist am selben Tag",
  },
  {
    num: "03",
    arrow: "↓",
    title: "Wir kommen und holen ab",
    desc: "Wir kommen pünktlich zu Ihnen, nehmen die Bücher entgegen und kümmern uns um alles Weitere. Ehrlich, unkompliziert — ganz ohne grosses Aufheben.",
    mono: "Persönlich · Kostenlos · Unkompliziert",
  },
];

export function SoGehtEs() {
  return (
    <section
      id="ablauf"
      className="py-[clamp(72px,10vw,130px)] bg-paper-deep border-t border-b border-line"
    >
      <div className="wrap">
        <div className="flex items-end justify-between gap-8 mb-14 pb-5 border-b border-line flex-col md:flex-row">
          <div>
            <div className="flex items-center gap-[10px] mb-[14px] font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
              02 — So läuft es ab
            </div>
            <h2 className="font-manrope font-extrabold text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.03em] max-w-[720px]">
              Drei Schritte. Kein Papierkram.
              <br />
              Keine versteckten Kosten.
            </h2>
          </div>
          <p className="text-ink-muted text-[15px] max-w-[320px] md:text-right">
            Vom ersten Kontakt bis zur Abholung — meist innerhalb einer Woche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map(({ num, arrow, title, desc, mono }, idx) => (
            <div
              key={num}
              className={`py-10 px-0 md:px-8 ${
                idx > 0 ? "border-t md:border-t-0 md:border-l border-line" : ""
              } ${idx === 0 ? "md:pl-0" : ""}`}
            >
              <span
                className="font-manrope font-extrabold text-[72px] leading-[0.9] tracking-[-0.04em] text-forest block mb-7"
                style={{ opacity: 0.92 }}
              >
                {num}
                <sup className="text-[14px] text-mint font-semibold ml-1.5 tracking-normal align-super">
                  {arrow}
                </sup>
              </span>
              <h3 className="font-manrope font-extrabold text-[26px] tracking-[-0.02em] mb-3">
                {title}
              </h3>
              <p className="text-ink-soft text-[15.5px] max-w-[320px]">{desc}</p>
              <span className="font-mono text-[12px] tracking-[0.04em] uppercase text-ink-muted mt-5 block">
                {mono}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
