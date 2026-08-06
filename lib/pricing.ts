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
    price: "89",
    time: "2–3h",
    desc: "Pour un entretien régulier et soigné.",
    items: [
      "Aspiration complète",
      "Dépoussiérage minutieux",
      "Nettoyage plastiques",
      "Vitres intérieures",
      "Parfum neutre",
    ],
  },
  {
    name: "Renouveau",
    price: "169",
    time: "4–5h",
    desc: "Le grand nettoyage en profondeur.",
    popular: true,
    items: [
      "Tout l’Essentiel",
      "Injection-extraction textiles",
      "Détachage ciblé",
      "Nettoyage des ceintures",
      "Désinfection vapeur",
      "Dressing plastiques",
    ],
  },
  {
    name: "Signature",
    price: "249",
    time: "6–8h",
    desc: "Notre expérience la plus complète.",
    items: [
      "Tout le Renouveau",
      "Soin complet du cuir",
      "Protection anti-UV",
      "Traitement anti-odeurs",
      "Finitions au pinceau",
      "Contrôle qualité final",
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