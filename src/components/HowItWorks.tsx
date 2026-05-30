const steps = [
  {
    num: 1,
    title: "Kontaktieren Sie uns",
    desc: "Melden Sie sich per WhatsApp, E-Mail, Telefon oder über unser Formular. Da wir tagsüber oft unterwegs sind, erreichen Sie uns am schnellsten schriftlich – wir melden uns rasch bei Ihnen zurück.",
  },
  {
    num: 2,
    title: "Details besprechen",
    desc: "Wir klären kurz, um welche Bücher es geht, in welchem Zustand sie sind und wie viele es ungefähr sind. Gemeinsam vereinbaren wir einen passenden Abholtermin.",
  },
  {
    num: 3,
    title: "Wir holen ab!",
    desc: "Am vereinbarten Tag holen wir die Bücher ab. Wenn möglich, sollten die Bücher bereits in Taschen oder Kartons vorbereitet sein. Vor Ort prüfen wir kurz den Zustand und nehmen die wiederverwendbaren Bücher und Medien mit.",
  },
];

export default function HowItWorks() {
  return (
    <section id="ablauf" className="bg-surface py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            In 3 einfachen Schritten
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">
            So funktioniert&apos;s
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex flex-col items-center rounded-xl bg-surface p-8 text-center shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">
                {s.num}
              </div>
              <h4 className="mb-2 text-lg font-semibold">{s.title}</h4>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
