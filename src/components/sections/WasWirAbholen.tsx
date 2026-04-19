const items = [
  {
    num: "/ 01",
    title: "Bücher",
    desc: "Romane, Sachbücher, Fachliteratur, Kinder- und Schulbücher — wir nehmen alle Bücher gerne mit.",
    icon: (
      // Open book
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={28} height={28}>
        <path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" />
        <path d="M12 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" />
        <path d="M12 6v14" />
      </svg>
    ),
  },
  {
    num: "/ 02",
    title: "CDs & DVDs",
    desc: "Musik, Filme, Hörbücher, Serien — einzelne Scheiben oder ganze Sammlungen.",
    icon: (
      // Disc with reflection line
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={28} height={28}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <path d="M12 3a9 9 0 0 1 6.36 2.64" strokeOpacity=".4" />
      </svg>
    ),
  },
  {
    num: "/ 03",
    title: "Schallplatten",
    desc: "LPs, Singles, Vinyl jeder Grösse und jedes Genres — wir behandeln sie mit Sorgfalt.",
    icon: (
      // Vinyl record with grooves
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={28} height={28}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="6" strokeOpacity=".35" />
        <circle cx="12" cy="12" r="3" strokeOpacity=".6" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "/ 04",
    title: "Zeitschriften",
    desc: "Fachzeitschriften, Comics, Notenhefte und thematische Hefte — alles willkommen.",
    icon: (
      // Magazine / stacked pages
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={28} height={28}>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 7h8M8 11h8M8 15h5" />
        <path d="M4 7h16" strokeOpacity=".3" />
      </svg>
    ),
  },
];

export function WasWirAbholen() {
  return (
    <section id="abholen" className="py-[clamp(72px,10vw,130px)]">
      <div className="wrap">
        <div className="mb-14 pb-5 border-b border-line">
          <div className="flex items-center gap-[10px] mb-[14px] font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
            01 — Was wir abholen
          </div>
          <h2 className="font-manrope font-extrabold text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.03em] max-w-[720px]">
            Was bei uns gut aufgehoben&nbsp;ist.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-[10px] overflow-hidden">
          {items.map(({ num, title, desc, icon }) => (
            <div
              key={title}
              className="bg-paper hover:bg-white transition-colors duration-200 p-[36px_28px_32px] flex flex-col gap-5 min-h-[260px]"
            >
              <span className="font-mono text-[11px] text-ink-muted tracking-[0.1em]">{num}</span>
              <h3 className="font-manrope font-bold text-[22px] tracking-[-0.02em]">{title}</h3>
              <p className="text-ink-soft text-[14.5px]">{desc}</p>
              <div className="w-14 h-14 rounded-[8px] bg-forest text-paper flex items-center justify-center mt-auto">
                {icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
