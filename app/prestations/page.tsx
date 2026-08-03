import PageHero from "@/components/ui/PageHero";
import Cta from "@/components/sections/Cta";
const plans = [
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
const faq = [
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
export default function Prestations() {
  return (
    <>
      <PageHero
        index="01"
        title="Des soins précis,"
        accent="des prix clairs."
        text="Choisissez la formule adaptée à votre véhicule. Chaque prestation commence par un diagnostic et se termine par un contrôle qualité."
      />
      <section className="section-pad">
        <div className="container-site grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-[2rem] border p-7 md:p-9 ${p.popular ? "border-aqua bg-mist/40 shadow-soft" : "border-black/10"}`}
            >
              {p.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-aqua px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Le plus choisi
                </span>
              )}
              <p className="text-xs font-bold uppercase tracking-widest text-aqua-dark">
                {p.time}
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold">{p.name}</h2>
              <p className="mt-2 text-sm text-black/50">{p.desc}</p>
              <p className="my-8 border-y border-black/10 py-6">
                <span className="font-display text-5xl font-bold">
                  {p.price}€
                </span>
                <span className="text-xs text-black/40"> à partir de</span>
              </p>
              <ul className="space-y-3">
                {p.items.map((x) => (
                  <li key={x} className="flex gap-3 text-sm">
                    <span className="text-aqua-dark">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-primary mt-9 w-full">
                Choisir cette formule
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad bg-ink text-white">
        <div className="container-site">
          <p className="eyebrow">À la carte</p>
          <h2 className="display text-4xl md:text-6xl">
            Les options qui font la différence.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2">
            {[
              ["Poils d’animaux", "dès 30€"],
              ["Traitement anti-odeurs", "45€"],
              ["Soin cuir premium", "55€"],
              ["Coffre très chargé", "25€"],
              ["Siège enfant", "20€"],
              ["Déplacement à domicile", "sur devis"],
            ].map((x) => (
              <div
                key={x[0]}
                className="flex items-center justify-between bg-ink p-6 transition hover:bg-white/5"
              >
                <span>{x[0]}</span>
                <b className="text-aqua">{x[1]}</b>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-aqua/30 p-6 text-sm leading-7 text-white/60">
            <b className="text-white">Bon à savoir :</b> les tarifs dépendent du
            gabarit et de l’état du véhicule. Les objets personnels doivent être
            retirés avant le rendez-vous. Un supplément peut s’appliquer en cas
            de salissure extrême.
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="display text-4xl md:text-6xl">
            Tout savoir avant de venir.
          </h2>
          <div className="mt-10 divide-y divide-black/10">
            {faq.map(([q, a]) => (
              <details key={q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl font-bold">
                  {q}
                  <span className="text-aqua-dark transition group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-7 text-black/50">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
