import { pricingPlans } from "@/lib/pricing";
import { siteInfo } from "@/lib/site";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: siteInfo.name,
    url: siteInfo.url,
    image: `${siteInfo.url}/images/apres_cockpit_cadre.webp`,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    priceRange: `À partir de ${pricingPlans[0].price} €`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteInfo.locality,
      postalCode: siteInfo.postalCode,
      addressRegion: siteInfo.region,
      addressCountry: siteInfo.country,
    },
    areaServed: siteInfo.servedCities.map((name) => ({
      "@type": "City",
      name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
