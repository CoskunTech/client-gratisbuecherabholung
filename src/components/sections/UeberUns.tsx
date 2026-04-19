import Image from "next/image";

export function UeberUns() {
  return (
    <section id="ueber" className="py-[clamp(72px,10vw,130px)]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-[clamp(32px,5vw,80px)] items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-[10px] border border-line-strong overflow-hidden">
            <Image
              src="/assets/family_photo.png"
              alt="Kamil und Mustafa — Gratis Bücher Abholung"
              fill
              className="object-cover"
            />
            <div className="absolute left-5 bottom-5 right-5 bg-ink/90 text-paper px-4 py-3.5 rounded-[6px] text-[13px] flex justify-between gap-4 z-10">
              <span>Kamil</span>
              <span><b className="text-mint font-medium">Mustafa</b></span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-[10px] mb-[14px] font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
              04 — Über uns
            </div>
            <h2 className="font-manrope font-extrabold text-[clamp(32px,4.2vw,52px)] leading-[1.02] tracking-[-0.03em] mb-6">
              Hallo, wir sind Kamil und Mustafa.
            </h2>
            <p className="text-ink-soft text-[16px] max-w-[520px]">
              Seit 2021 sind wir — Vater und Sohn — in der Deutschschweiz unterwegs, um Bücher,
              Schallplatten, CDs und DVDs direkt bei Ihnen abzuholen. Was bei uns landet, findet
              einen neuen Platz — bei Antiquariaten, auf Flohmärkten oder bei Sammlern und Lesern.
            </p>
            <p className="text-ink-soft text-[16px] max-w-[520px] mt-[18px]">
              Uns ist wichtig: Wir kommen verlässlich, pünktlich und mit echter Freude an der Sache.
              Sie müssen sich um nichts kümmern — das ist unser Job.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-7 border-t border-line">
              {[
                { n: "500+", l: "Zufriedene Kunden" },
                { n: "10.000+", l: "Bücher weitergegeben" },
                { n: "Seit 2021", l: "Familienbetrieb" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <span className="font-manrope font-extrabold text-[32px] text-ink tracking-[-0.02em] block">
                    {n}
                  </span>
                  <span className="text-[13px] text-ink-muted mt-1 block">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
