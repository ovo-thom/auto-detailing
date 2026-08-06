import PageHero from "@/components/ui/PageHero";
import Cta from "@/components/sections/Cta";
import { pricingPlans, pricingOptions, pricingFaq } from "@/lib/pricing";

export default function Prestations() {
  return (
    <>
      <PageHero
        index="01"
        title="Des prestations claires,"
        accent="des prix transparents."
        text="Choisissez la formule adaptée à votre véhicule. Les prestations peuvent être ajustées selon l'état de votre habitacle et vos besoins."
      />
      <section className="section-pad">
        <div className="container-site grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 md:p-9 ${plan.popular ? "border-aqua bg-mist/40 shadow-soft" : "border-black/10"}`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-aqua px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Le plus choisi
                </span>
              )}
              <p className="text-xs font-bold uppercase tracking-widest text-aqua-dark">
                {plan.time}
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold">
                {plan.name}
              </h2>
              <p className="mt-2 text-sm text-black/50">{plan.desc}</p>
              <p className="my-8 border-y border-black/10 py-6">
                <span className="font-display text-5xl font-bold">
                  {plan.price}€
                </span>
                <span className="text-xs text-black/40"> à partir de</span>
              </p>
              <ul className="space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="text-aqua-dark">✓</span>
                    {item}
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
            {pricingOptions.map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between bg-ink p-6 transition hover:bg-white/5"
              >
                <span>{name}</span>
                <b className="text-aqua">{price}</b>
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
            {pricingFaq.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl font-bold">
                  {question}
                  <span className="text-aqua-dark transition group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-7 text-black/50">
                  {answer}
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
