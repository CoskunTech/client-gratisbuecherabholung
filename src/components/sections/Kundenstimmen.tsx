import { Star } from "lucide-react";

// TODO: Replace with real testimonials from client (with permission)
const TESTIMONIALS = [
  {
    quote:
      "Kamil und sein Sohn waren unglaublich freundlich. Sie haben meine gesamte Bibliothek abgeholt – ein toller Service!",
    author: "Frau M. aus Basel",
  },
  {
    quote:
      "Endlich eine sinnvolle Lösung für meine gelesenen Bücher. Es fühlt sich gut an zu wissen, dass sie nicht einfach weggeworfen werden.",
    author: "Hans-Peter S. aus Riehen",
  },
] as const;

function StarRating() {
  return (
    <div className="flex gap-1 mb-6" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 text-secondary fill-secondary"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Kundenstimmen() {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4 sm:text-4xl md:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all md:p-10"
            >
              <StarRating />
              <blockquote className="text-lg font-medium italic text-on-surface leading-relaxed mb-8 md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="font-bold text-primary">&mdash; {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
