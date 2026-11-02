import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { siteInfo } from "@/lib/site";

export const contactInfos: {
  icon: typeof PhoneIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: PhoneIcon,
    label: "Téléphone",
    value: siteInfo.phone,
    href: siteInfo.phoneHref,
  },
  {
    icon: EnvelopeIcon,
    label: "E-mail",
    value: siteInfo.email,
    href: siteInfo.emailHref,
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
