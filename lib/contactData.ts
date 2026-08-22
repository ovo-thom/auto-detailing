import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const contactInfos = [
  {
    icon: PhoneIcon,
    label: "Téléphone",
    value: "+32 491 95 41 61",
  },
  {
    icon: EnvelopeIcon,
    label: "E-mail",
    value: "bonjour@ateliernacre.be",
  },
  {
    icon: MapPinIcon,
    label: "Atelier",
    value: "Saint-Nicolas · Province de Liège",
  },
  {
    icon: ClockIcon,
    label: "Horaires",
    value: "Lun–Sam · Sur rendez-vous",
  },
];

export const serviceOptions = [
  "Je souhaite être conseillé",
  "Formule Essentiel",
  "Formule Approfondi",
  "Formule Complet",
  "Prestation à la carte",
];

export const whatsappMessage =
  "Bonjour, je souhaiterais obtenir des informations pour le nettoyage de mon véhicule.";

export const whatsappUrl = `https://wa.me/32491954161?text=${encodeURIComponent(
  whatsappMessage,
)}`;
