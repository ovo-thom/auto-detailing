import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import {
  SparklesIcon,
  BeakerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
const items = [
  {
    icon: SparklesIcon,
    title: "Nettoyage intérieur",
    text: "Aspiration complète, nettoyage des plastiques, vitres, coffre et finitions soignées.",
  },
  {
    icon: BeakerIcon,
    title: "Rénovation textile",
    text: "Injection-extraction des sièges, tapis et moquettes pour éliminer les saletés incrustées.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Nettoyage complet",
    text: "Le nettoyage le plus complet pour retrouver un habitacle propre jusque dans les moindres détails.",
  },
];
export default function ServicesPreview() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle eyebrow="Mes services" title="Chaque détail compte." />
          <Link href="/prestations" className="btn-light self-start">
            Voir tous les tarifs →
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, ...x }) => (
            <div
              key={x.title}
              className="group rounded-3xl border border-black/10 p-7 transition duration-300 hover:-translate-y-2 hover:border-aqua/60 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-9 w-9 text-aqua-dark" />
              </div>
              <h3 className="mt-12 font-display text-2xl font-bold">
                {x.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/50">{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
