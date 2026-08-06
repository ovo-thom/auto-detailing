export type PricingPlan = {
  name: string;
  price: string;
  time: string;
  desc: string;
  items: string[];
  popular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essentiel",
    price: "69",
    time: "2–3h",
    desc: "Pour un habitacle entretenu ou légèrement sale.",
    items: [
      "Aspiration complète",
      "Nettoyage plastiques",
      "Nettoyage des tapis",
      "Vitres intérieures",
      "Finitions et parfum léger",
    ],
  },
  {
    name: "Approfondi",
    price: "99",
    time: "4–5h",
    desc: "Parfait pour les véhicules tachés ou très utilisés.",
    popular: true,
    items: [
      "Tout l’Essentiel",
      "Nettoyage des sièges (tissu, cuir ou Alcantara)",
      "Injection-extraction des tapis et moquettes",
      "Détachage ciblé",
      "Nettoyage des ceintures",
    ],
  },
  {
    name: "Complet",
    price: "149",
    time: "6–8h",
    desc: "Pour un résultat proche du neuf.",
    items: [
      "Tout l’Approfondi",
      "Nettoyage détaillé des zones difficiles",
      "Protection des plastiques",
      "Traitement du cuir (si équipé)",
      "Nettoyage des rails de sièges",
      "Nettoyage des aérations au pinceau",
      "Finitions complètes",
    ],
  },
];

export const pricingOptions = [
  ["Poils d’animaux", "dès 30€"],
  ["Traitement anti-odeurs", "45€"],
  ["Soin cuir premium", "55€"],
  ["Coffre très chargé", "25€"],
  ["Siège enfant", "20€"],
  ["Déplacement à domicile", "sur devis"],
];

export const pricingFaq = [
  [
    "Combien de temps faut-il laisser le véhicule ?",
    "De 2 à 8 heures selon la formule et l’état de l’habitacle. Une estimation précise vous est communiquée avant le rendez-vous.",
  ],
  [
    "Les taches partent-elles toutes ?",
    "Nous obtenons d’excellents résultats, mais certaines taches anciennes ou ayant altéré les fibres peuvent rester légèrement visibles.",
  ],
  [
    "Puis-je récupérer la voiture avec les sièges secs ?",
    "Oui. Notre matériel d’extraction et de séchage permet une restitution sèche ou très légèrement humide selon la saison.",
  ],
  [
    "Travaillez-vous sur les véhicules professionnels ?",
    "Oui, nous proposons des conditions adaptées aux flottes, taxis, VTC et véhicules de société.",
  ],
];
