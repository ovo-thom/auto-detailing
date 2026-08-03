import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import {
  SparklesIcon,
  SwatchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
const items = [
  {
    icon: SparklesIcon,
    n: "01",
    title: "Nettoyage essentiel",
    text: "Aspiration profonde, plastiques, vitres et finitions soignées.",
  },
  {
    icon: SwatchIcon,
    n: "02",
    title: "Rénovation textile",
    text: "Injection-extraction des sièges, tapis et moquettes en profondeur.",
  },
  {
    icon: ShieldCheckIcon,
    n: "03",
    title: "Intérieur signature",
    text: "Traitement complet, cuir nourri et protection longue durée.",
  },
];
export default function ServicesPreview() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Nos prestations"
            title="Un intérieur remis à neuf."
          />
          <Link href="/prestations" className="btn-light self-start">
            Voir tous les tarifs →
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, ...x }) => (
            <div
              key={x.n}
              className="group rounded-3xl border border-black/10 p-7 transition duration-300 hover:-translate-y-2 hover:border-aqua/60 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-9 w-9 text-aqua-dark" />
                <span className="font-display text-sm text-black/25">
                  {x.n}
                </span>
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
