import { Hero } from "@/components/sections/Hero";
import { WasWirAbholen } from "@/components/sections/WasWirAbholen";
import { SoGehtEs } from "@/components/sections/SoGehtEs";
import { Abholtermine } from "@/components/sections/Abholtermine";
import { UeberUns } from "@/components/sections/UeberUns";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { Kontakt } from "@/components/sections/Kontakt";

// HowTo schema — tells Google/AI exactly how the pickup process works
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Bücher kostenlos abholen lassen — in 3 Schritten",
  description:
    "So funktioniert die kostenlose Bücher-Abholung von Gratis Bücher Abholung in der Deutschschweiz.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sie melden sich",
      text: "Schreiben Sie uns via WhatsApp, Facebook oder E-Mail — und teilen Sie uns Ihren Standort, die ungefähre Anzahl der Bücher und wenn möglich ein paar Fotos mit.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Wir vereinbaren einen Termin",
      text: "Wir melden uns zurück und schlagen einen Termin vor, der zu unserer Route passt. Meist innert weniger Tage.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wir kommen und holen ab",
      text: "Wir kommen pünktlich zu Ihnen, nehmen die Bücher entgegen und kümmern uns um alles Weitere. Ehrlich, unkompliziert — ganz ohne grosses Aufheben.",
    },
  ],
};

// FAQ schema — Google can show these as rich results in search
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kostet die Abholung etwas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein — vollständig kostenlos. Wir kommen zu Ihnen, nehmen die Bücher mit und verlangen weder Gebühren noch Trinkgeld. Kein Haken, keine versteckten Kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viele Bücher müssen es sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keine Mindestmenge. Ob ein einzelner Karton oder ein ganzes Zimmer voller Bücher — wir kommen für beides.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Bücher nehmen Sie mit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Romane, Sachbücher, Fachliteratur, Kinder- und Schulbücher — wir nehmen alle Bücher gerne mit. Auch CDs, DVDs, Schallplatten (LP, Single, Vinyl) und Zeitschriften.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert mit den abgeholten Büchern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alles, was wir mitnehmen, bekommt ein neues Zuhause: Antiquariate, Flohmärkte, Sammler oder private Leser. Nichts landet im Müll.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell melden Sie sich zurück?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meist am selben Tag, spätestens innert 24 Stunden. WhatsApp ist am schnellsten.",
      },
    },
    {
      "@type": "Question",
      name: "In welchen Regionen sind Sie unterwegs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir sind regelmässig im Raum Zürich, Aargau, Solothurn, Basel und Baselland unterwegs. Schreiben Sie uns Ihren Standort — wir sagen Ihnen, wann wir in Ihrer Nähe sind.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero />
        <WasWirAbholen />
        <SoGehtEs />
        <Abholtermine />
        <UeberUns />
        <Gallery />
        <Faq />
        <Kontakt />
      </main>
    </>
  );
}
