// TODO: Replace placeholder numbers with real data from client (Mustafa)
const STATS = [
  { value: "5.000+", label: "Bücher gerettet" },
  { value: "500+", label: "zufriedene Kunden" },
  { value: "seit 2021", label: "im Einsatz für Bücher" },
] as const;

export function Zahlen() {
  return (
    <section className="py-24 px-6 bg-primary-container text-on-primary-container relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-heading text-5xl font-bold mb-3 md:text-6xl">
                {stat.value}
              </span>
              <span className="text-xl opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
