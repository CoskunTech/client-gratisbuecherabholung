import { business } from "@/data/business";
import { faqs } from "@/data/faqs";

// Structured data for search engines and LLMs (GEO). NAP comes from the single
// source in data/business.ts. No fabricated geo coordinates — Google geocodes
// the PostalAddress on its own; wrong coordinates would be worse than none.
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${business.url}/#business`,
        name: business.name,
        url: business.url,
        image: `${business.url}/family_photo.jpg`,
        telephone: business.phone,
        email: business.email,
        description:
          "Gratis Abholservice für Bücher, CDs, DVDs und Schallplatten in der Schweiz. Statt wegwerfen — weitergeben.",
        priceRange: "Gratis",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          postalCode: business.address.postalCode,
          addressLocality: business.address.city,
          addressRegion: business.address.region,
          addressCountry: business.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        areaServed: business.areaServed.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        sameAs: [...business.sameAs],
        makesOffer: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "CHF",
          itemOffered: {
            "@type": "Service",
            name: "Gratis Bücher-Abholung",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${business.url}/#website`,
        url: business.url,
        name: business.name,
        inLanguage: "de-CH",
        publisher: { "@id": `${business.url}/#business` },
      },
      {
        "@type": "FAQPage",
        "@id": `${business.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
