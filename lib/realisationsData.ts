type Photos = string[];

type DetailingSteps = {
  id: string;
  title: string;
  description: string;
};

type Project = {
  name: string;
  subtitle: string;
  duration: string;
};

export const photos: Photos = [
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80",
];

export const projects: Project[] = [
  {
    name: "Audi Q5",
    subtitle: "SUV familial · Formule Signature",
    duration: "7h",
  },
  {
    name: "Mercedes Classe A",
    subtitle: "Textile taché · Formule Renouveau",
    duration: "5h",
  },
  {
    name: "Porsche 911",
    subtitle: "Cuir clair · Soin sur mesure",
    duration: "6h",
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
