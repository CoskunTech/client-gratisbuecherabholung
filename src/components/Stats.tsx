const stats = [
  {
    value: "Seit 2018",
    label: "Mit Herz und Engagement im Einsatz",
  },
  {
    value: "8.000+",
    label: "Zufriedene Kontakte und Unterstützer",
  },
  {
    value: "400.000+",
    label: "Bücher und Medienprodukte weitervermittelt statt entsorgt",
  },
];

export default function Stats() {
  return (
    <section className="bg-primary-500 py-16 text-white">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-6 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.value}>
            <p className="text-4xl font-bold lg:text-5xl">{s.value}</p>
            <p className="mx-auto mt-3 max-w-[260px] text-[15px] leading-relaxed text-white/90">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
