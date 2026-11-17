export type PricingPlan = {
  name: string;
  price: string;
  desc: string;
  items: string[];
  popular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essentiel",
    price: "69",
    desc: "Pour un habitacle entretenu ou légèrement sale.",
    items: [
      "Aspiration complète (habitacle et coffre)",
      "Aérations et recoins au pinceau",
      "Nettoyage des plastiques",
      "Nettoyage des tapis de sol",
      "Vitres intérieures",
      "Finitions et parfum léger",
    ],
  },
  {
    name: "Approfondi",
    price: "99",
    desc: "Parfait pour les véhicules tachés ou très utilisés.",
    popular: true,
    items: [
      "Tout l’Essentiel",
      "Nettoyage des sièges : injection-extraction (tissu) ou nettoyage adapté (cuir, Alcantara)",
      "Injection-extraction des tapis et moquettes",
      "Détachage ciblé",
      "Nettoyage des ceintures",
    ],
  },
  {
    name: "Complet",
    price: "149",
    desc: "Pour un résultat proche du neuf.",
    items: [
      "Tout l’Approfondi",
      "Traitement et protection du cuir (si équipé)",
      "Protection des plastiques",
      "Rails et dessous des sièges",
      "Encadrements et joints de portes",
    ],
  },
];

export const pricingVehicleSizes = [
  ["Citadine / compacte", "Prix de base"],
  ["Break / SUV", "+15 €"],
  ["Monospace / utilitaire", "+30 €"],
];

export const pricingOptions = [
  ["Nettoyage d’un siège enfant", "20€"],
  ["Poils d’animaux", "dès 20€"],
  ["Nettoyage d'un siège seul", "dès 25€"],
  ["Nettoyage du coffre seul", "dès 25€"],
];

export const pricingFaq = [
  [
    "Où se déroule la prestation ?",
    "À Saint-Nicolas (4420), près de Liège. L’adresse exacte vous est communiquée à la prise de rendez-vous. Pour le moment, je ne me déplace pas à domicile.",
  ],
  [
    "Combien de temps faut-il laisser le véhicule ?",
    "De 2 à 8 heures selon la formule et l’état de l’habitacle. Une estimation plus précise vous est communiquée avant le rendez-vous.",
  ],
  [
    "Les taches partent-elles toutes ?",
    "Nous obtenons d’excellents résultats grâce à des produits et des méthodes adaptés, mais certaines taches anciennes ou ayant altéré les fibres peuvent rester légèrement visibles.",
  ],
  [
    "Quel est le temps de séchage après le nettoyage ?",
    "Après une injection-extraction, les sièges et textiles peuvent rester légèrement humides. Le temps de séchage varie selon les matériaux et les conditions, mais l’extraction permet de retirer un maximum d’humidité avant la restitution du véhicule.",
  ],
  [
    "Travaillez-vous sur les véhicules professionnels ?",
    "Oui, les véhicules professionnels et utilitaires peuvent également être pris en charge. Le tarif est adapté au gabarit, à l’état du véhicule et au travail nécessaire.",
  ],
  [
    "Dois-je vider mon véhicule avant le rendez-vous ?",
    "Pour faciliter le nettoyage et permettre l’accès à l’ensemble de l’habitacle, il est recommandé de retirer vos effets personnels avant le rendez-vous. Les éléments et équipements faisant partie du véhicule peuvent bien entendu rester en place.",
  ],
  [
    "Comment connaître le tarif exact de ma prestation ?",
    "Les tarifs affichés sont des prix de départ et peuvent varier selon le gabarit, l’état du véhicule et le travail nécessaire. Quelques photos de l’habitacle peuvent permettre d’évaluer la prestation et de vous communiquer un tarif avant le rendez-vous.",
  ],
];
