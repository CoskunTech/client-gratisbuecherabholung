const faqs = [
  {
    q: "Kostet die Abholung etwas?",
    a: "Nein — vollständig kostenlos. Wir kommen zu Ihnen, nehmen die Bücher mit und verlangen weder Gebühren noch Trinkgeld. Kein Haken, keine versteckten Kosten.",
  },
  {
    q: "Wie viele Bücher müssen es sein?",
    a: "Keine Mindestmenge. Ob ein einzelner Karton oder ein ganzes Zimmer voller Bücher — wir kommen für beides. Schreiben Sie uns einfach kurz, was Sie haben.",
  },
  {
    q: "Welche Bücher nehmen Sie mit?",
    a: "Romane, Sachbücher, Fachliteratur, Kinder- und Schulbücher — wir nehmen alle Bücher gerne mit. Auch CDs, DVDs, Schallplatten (LP, Single, Vinyl) und Zeitschriften.",
  },
  {
    q: "Was passiert mit den abgeholten Büchern?",
    a: "Alles, was wir mitnehmen, bekommt ein neues Zuhause: Antiquariate, Flohmärkte, Sammler oder private Leser. Nichts landet im Müll.",
  },
  {
    q: "Wie schnell melden Sie sich zurück?",
    a: "Meist am selben Tag, spätestens innert 24 Stunden. WhatsApp ist am schnellsten — wir antworten dort so rasch wie möglich.",
  },
  {
    q: "In welchen Regionen sind Sie unterwegs?",
    a: "Wir sind regelmässig im Raum Zürich, Aargau, Solothurn, Basel und Baselland unterwegs. Schreiben Sie uns Ihren Standort — wir sagen Ihnen, wann wir in Ihrer Nähe sind.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-[clamp(72px,10vw,130px)] border-t border-line">
      <div className="wrap">
        <div className="flex items-end justify-between gap-8 mb-14 pb-5 border-b border-line flex-col md:flex-row">
          <div>
            <div className="flex items-center gap-[10px] mb-[14px] font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
              Häufige Fragen
            </div>
            <h2 className="font-manrope font-extrabold text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.03em] max-w-[720px]">
              Was Sie wissen möchten.
            </h2>
          </div>
          <p className="text-ink-muted text-[15px] max-w-[320px] md:text-right">
            Noch eine Frage offen? Schreiben Sie uns direkt — wir antworten meist am selben Tag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-[10px] overflow-hidden">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-paper p-[28px_32px] flex flex-col gap-3">
              <h3 className="font-manrope font-bold text-[18px] tracking-[-0.01em] text-ink">
                {q}
              </h3>
              <p className="text-ink-soft text-[15px] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
