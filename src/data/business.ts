// Single source of truth for NAP (Name, Address, Phone) — keep identical
// everywhere (site, JSON-LD, Google Business Profile, Facebook) for local SEO.

export const business = {
  name: "Gratis Bücher Abholung",
  url: "https://gratisbuecherabholung.ch",
  phone: "+41767201353",
  phoneDisplay: "+41 76 720 13 53",
  email: "buecher_abholservice@gmx.ch",
  address: {
    street: "Im Niederholzboden 2",
    postalCode: "4125",
    city: "Riehen",
    region: "Basel-Stadt",
    country: "CH",
  },
  // Real coordinates geocoded from the exact address (OpenStreetMap Nominatim).
  geo: {
    latitude: 47.5759291,
    longitude: 7.6359032,
  },
  // Regions we actively serve — keep in sync with TrustBar/Schedule.
  areaServed: ["Basel", "Baselland", "Zürich", "Aargau", "Solothurn"],
  sameAs: [
    "https://www.instagram.com/buecher_abholservice",
    "https://www.facebook.com/MehmetK.4125",
  ],
} as const;

// Derived contact helpers — keep components free of hardcoded numbers/links.
// wa.me needs the number without "+" or spaces.
export const whatsappNumber = business.phone.replace(/[^0-9]/g, "");
export const whatsappLink = `https://wa.me/${whatsappNumber}`;
export const telLink = `tel:${business.phone}`;
export const mailLink = `mailto:${business.email}`;
export const addressLine = `${business.address.street}, ${business.address.postalCode} ${business.address.city}`;
