type DetailingSteps = {
  id: string;
  title: string;
  description: string;
};

type ComparisonProject = {
  name: string;
  subtitle: string;
  duration: string;
  before: string;
  after: string;
};

type GalleryPhoto = {
  src: string;
  alt: string;
};

type DetailingStep = {
  id: string;
  title: string;
  description: string;
};

// Section - Dernières transformations (galleryPhotos)

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/realisations/after/camionette_passager_apres.webp",
    alt: "Habitacle propre d’une Volkswagen Golf 8",
  },
  {
    src: "/images/realisations/after/siege_arriere_apres.webp",
    alt: "Habitacle propre d’une Fiat 500",
  },
  {
    src: "/images/after/apres_devant-propre.webp",
    alt: "Habitacle propre d’un Fiat Doblò",
  },
  {
    src: "/images/realisations/after/fiat_500_conducteur_apres.webp",
    alt: "Habitacle propre d’un Fiat Doblò",
  },
  {
    src: "/images/apres_cockpit_cadre.webp",
    alt: "Habitacle propre d’un Fiat Doblò",
  },
];

export const comparisonProjects: ComparisonProject[] = [
  {
    name: "Fiat Doblò",
    subtitle: "Utilitaire · Nettoyage intérieur",
    duration: "6h",
    before: "/images/realisations/before/camionette_passager_avant.webp",
    after: "/images/realisations/after/camionette_passager_apres.webp",
  },
  {
    name: "Volkswagen Golf 8",
    subtitle: "Banquette arrière · Poils d’animaux",
    duration: "4h",
    before: "/images/realisations/before/siege_arriere_avant.webp",
    after: "/images/realisations/after/siege_arriere_apres.webp",
  },
  {
    name: "Fiat 500",
    subtitle: "Habitacle avant · Nettoyage intérieur",
    duration: "4h",
    before: "/images/realisations/before/fiat_500_conducteur_avant.webp",
    after: "/images/realisations/after/fiat_500_conducteur_apres.webp",
  },
];

export const detailingSteps: DetailingSteps[] = [
  {
    id: "01",
    title: "Diagnostic",
    description: "Inspection sous éclairage adapté et choix des méthodes.",
  },
  {
    id: "02",
    title: "Traitement",
    description: "Nettoyage zone par zone avec produits et accessoires dedies.",
  },
  {
    id: "03",
    title: "Finition",
    description: "Protection, controle qualite et photos de restitution.",
  },
];
