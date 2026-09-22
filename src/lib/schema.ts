import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://grohs.adv.br/#legalservice",
    name: OFFICE_INFO.name,
    alternateName: "Grohs Advocacia Trabalhista",
    description:
      "Advocacia trabalhista e previdenciária exercida com rigor técnico, especialização e 13 anos de experiência em Curitiba/PR. Dr. João Rodrigo Pimentel Grohs.",
    url: "https://grohs.adv.br",
    telephone: `+${OFFICE_INFO.whatsappNumber}`,
    email: OFFICE_INFO.email,
    priceRange: "$$",
    image: "https://grohs.adv.br/Logosemfundo_escritaescura_usarnomodoclaro.png",
    logo: "https://grohs.adv.br/Logosemfundo_escritaescura_usarnomodoclaro.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Desembargador Hugo Simas, 1120 - Sl 207 - Bom Retiro",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80520-250",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4058,
      longitude: -49.2783,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.social.instagram,
      OFFICE_INFO.social.linkedin,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.oab}, ${LAWYER_PROFILE.specialties}`,
      },
    ],
  };
}