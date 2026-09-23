const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const businessName = "IMAI - Churea Producciones";
const phone = "+526122341114";
const email = "contacto@imai.com";
const geo = { latitude: 24.1426, longitude: -110.3128 };

export const metadata = {
  title: "Contacto — Fotógrafo en La Paz, Baja California Sur",
  description:
    "Contacta a Imai Photo, fotógrafo y cineasta en La Paz, BCS. Fotografía gastronómica, de hoteles, bodas y marcas en toda Baja California Sur. Teléfono, email y ubicación.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/contact",
    title: `Contacto — ${businessName} | La Paz, BCS`,
    description:
      "Solicita una cotización de fotografía y video en La Paz, Baja California Sur.",
  },
  other: {
    "geo.region": "MX-BCS",
    "geo.placename": "La Paz, Baja California Sur",
    "geo.position": `${geo.latitude};${geo.longitude}`,
    ICBM: `${geo.latitude},${geo.longitude}`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PhotographyBusiness"],
  name: businessName,
  alternateName: ["Imai Photo", "Churea Producciones"],
  description:
    "Fotografía y cine para restaurantes, hoteles, marcas y personas en La Paz, Baja California Sur.",
  url: siteUrl,
  image: `${siteUrl}/images/about_hero_bg.jpeg`,
  telephone: phone,
  email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Paz",
    addressRegion: "Baja California Sur",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: geo.latitude,
    longitude: geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: "La Paz" },
    { "@type": "City", name: "Los Cabos" },
    { "@type": "City", name: "Cabo San Lucas" },
    { "@type": "City", name: "San José del Cabo" },
    { "@type": "City", name: "Todos Santos" },
    { "@type": "AdministrativeArea", name: "Baja California Sur" },
  ],
  sameAs: ["https://www.instagram.com/imaiez"],
  availableLanguage: ["es", "en"],
};

export default function ContactLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
