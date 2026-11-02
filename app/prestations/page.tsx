import PageHero from "@/components/ui/PageHero";
import Cta from "@/components/sections/Cta";
import PricingFaq from "@/components/sections/PricingFaq";
import { pageMetadata } from "@/lib/metadata";
import { pricingPlans, pricingOptions } from "@/lib/pricing";

export const metadata = pageMetadata({
  title: "Tarifs nettoyage intérieur voiture à Saint-Nicolas",
  description:
    "Formules de nettoyage intérieur à Saint-Nicolas, près de Liège, à partir de 69 € : aspiration, injection-extraction, sièges et détachage. Options à la carte.",
  path: "/prestations",
});

export default function Prestations() {
  return (
    <>
      <PageHero
        eyebrow="Prestations et tarifs de nettoyage intérieur"
        title="Des prestations claires,"
        accent="des prix transparents."
        text="Choisissez la formule adaptée à votre véhicule. Les prestations peuvent être ajustées selon l'état de votre habitacle et vos besoins."
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative rounded-[2rem] border p-6 md:p-8 lg:p-9 ${
                    plan.popular
                      ? "border-aqua bg-mist/40 shadow-soft"
                      : "border-black/10"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute right-7 top-7 rounded-full bg-aqua px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                      LA PLUS CHOISIE
                    </span>
                  )}

                  <span className="text-xs font-bold uppercase tracking-widest text-aqua-dark">
                    {plan.time}
                  </span>

                  <h2 className="mt-4 font-display text-2xl font-bold md:text-2xl lg:text-3xl">
                    {plan.name}
                  </h2>

                  <p className="mt-2 text-sm leading-5 text-black/60 md:leading-6">
                    {plan.desc}
                  </p>

                  <div className="my-5 border-y border-black/10 py-5 md:my-7 md:py-6 lg:my-8 lg:py-7">
                    <div className="flex items-end gap-1">
                      <span className="font-display text-[22px] font-bold md:text-4xl lg:text-5xl">
                        {plan.price}€
                      </span>

                      <span className="mb-1 text-xs text-black/60">
                        à partir de
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 md:space-y-4">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-5"
                      >
                        <span className="text-aqua-dark">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="mt-7 block w-full rounded-full bg-ink px-6 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-1 md:mt-9 lg:mt-10"
                  >
                    Demander un devis
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-[2rem] border border-black/10 bg-mist/40 px-8 py-8 md:px-12 md:py-12">
              <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="eyebrow before:hidden">Le soin du détail</p>

                  <h3 className="font-display text-2xl font-bold leading-tight md:text-4xl">
                    Bien plus qu&apos;un simple nettoyage.
                  </h3>
                </div>
                <div>
                  <p className="max-w-lg text-sm leading-6 text-black/60 md:text-base md:leading-7">
                    Chaque prestation est réalisée avec soin, en prenant le
                    temps nécessaire pour traiter votre véhicule jusque dans les
                    détails. J&apos;utilise des produits professionnels adaptés
                    aux différentes surfaces de l&apos;habitacle : plastiques,
                    textiles, cuir ou Alcantara. Chaque matériau est traité avec
                    une méthode adaptée afin d&apos;éliminer efficacement les
                    saletés tout en respectant les surfaces. L&apos;objectif
                    n&apos;est pas simplement de donner un coup de propre, mais
                    d&apos;obtenir un intérieur réellement nettoyé, soigné et
                    agréable à retrouver.
                  </p>

                  <div className="mt-8 grid gap-6 border-t border-black/10 pt-7 sm:grid-cols-3">
                    <div>
                      <p className="font-display font-bold">
                        Produits professionnels
                      </p>

                      <p className="mt-1 text-sm leading-6 text-black/60">
                        Adaptés à chaque surface.
                      </p>
                    </div>

                    <div>
                      <p className="font-display font-bold">
                        Méthodes adaptées
                      </p>

                      <p className="mt-1 text-sm leading-6 text-black/60">
                        Textile, cuir, Alcantara et plastiques.
                      </p>
                    </div>

                    <div>
                      <p className="font-display font-bold">
                        Travail minutieux
                      </p>

                      <p className="mt-1 text-sm leading-6 text-black/60">
                        Une attention portée jusque dans les moindres détails.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-site">
          <p className="mb-6 text-[11px] sm:text-xs font-bold uppercase tracking-[.24em] text-aqua">
            À la carte
          </p>

          <h2 className="display text-3xl text-white sm:text-4xl lg:text-5xl">
            Des besoins spécifiques ?
          </h2>

          <p className="mt-5 max-w-2xl text-sm sm:text-base leading-7 text-white/60">
            Besoin d&apos;un nettoyage ciblé ou d&apos;une attention
            particulière ? Certaines prestations peuvent être réalisées
            séparément ou ajoutées à votre formule.
          </p>

          <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 md:grid-cols-2">
            {pricingOptions.map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between border-b border-white/10 px-7 py-7 md:odd:border-r"
              >
                <span className="text-base md:text-lg">{name}</span>

                <span className="font-display text-lg font-bold text-aqua md:text-xl">
                  {price}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm sm:text-base leading-7 text-white/55">
            <strong className="text-white">Bon à savoir :</strong> les tarifs
            peuvent varier selon le gabarit et l&apos;état du véhicule. Pour
            faciliter le nettoyage, merci de retirer vos effets personnels du
            véhicule avant le rendez-vous. Un supplément peut s&apos;appliquer
            en cas de salissure importante.
          </p>
        </div>
      </section>

      <PricingFaq />

      <Cta
        eyebrow="Une formule adaptée à votre véhicule"
        title="Pas sûr de la formule qu’il vous faut ?"
        text="Décrivez-moi l’état de votre véhicule et vos besoins. Je vous orienterai vers la prestation la plus adaptée."
      />
    </>
  );
}
