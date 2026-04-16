export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-fixed-dim py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-heading text-lg font-bold text-on-primary mb-3">
            Gratis Bücher Abholung
          </p>
          <p className="text-sm text-on-primary/60 leading-relaxed">
            Ein Herzensprojekt für kulturelle Nachhaltigkeit. Wir geben Ihren
            Büchern ein neues Leben.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-on-primary font-bold uppercase text-xs tracking-widest mb-6">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Startseite", href: "#startseite" },
              { label: "So geht's", href: "#so-helfen-wir" },
              { label: "Abholtermine", href: "#abholtermine" },
              { label: "Über uns", href: "#ueber-uns" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-on-primary/60 hover:text-primary-fixed-dim transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-on-primary font-bold uppercase text-xs tracking-widest mb-6">
            Rechtliches
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "AGB", href: "/agb" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-on-primary/60 hover:text-primary-fixed-dim transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-on-primary/10 mt-12 pt-8 text-center text-xs text-on-primary/40">
        © {year} Gratis Bücher Abholung · Im Niederholzboden 2, 4125 Riehen
      </div>
    </footer>
  );
}
