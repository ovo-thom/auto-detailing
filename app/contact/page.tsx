import PageHero from "@/components/ui/PageHero";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
export default function Contact() {
  return (
    <>
      <PageHero
        index="03"
        title="Parlons de"
        accent="votre véhicule."
        text="Décrivez-nous son état et vos attentes. Nous revenons vers vous avec une recommandation et une estimation personnalisées."
      />
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <aside>
            <p className="eyebrow">Contact direct</p>
            <h2 className="display text-4xl">
              Une question ?<br />
              On vous répond.
            </h2>
            <div className="mt-10 space-y-6">
              {[
                [PhoneIcon, "Téléphone", "+32 470 12 34 56"],
                [EnvelopeIcon, "E-mail", "bonjour@ateliernacre.be"],
                [MapPinIcon, "Atelier", "Rue de l’Atelier 24, Bruxelles"],
                [ClockIcon, "Horaires", "Lun–Sam · 08:30–18:30"],
              ].map(([Icon, l, v]: any) => (
                <div key={l} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist">
                    <Icon className="h-5 w-5 text-aqua-dark" />
                  </span>
                  <div>
                    <b className="text-xs uppercase tracking-widest">{l}</b>
                    <p className="mt-1 text-sm text-black/50">{v}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/32470123456"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              Discuter sur WhatsApp →
            </a>
          </aside>
          <form className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-soft md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm font-bold">
                Nom complet
                <input
                  required
                  placeholder="Votre nom"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none transition focus:border-aqua"
                />
              </label>
              <label className="text-sm font-bold">
                Téléphone
                <input
                  required
                  type="tel"
                  placeholder="+32 ..."
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
              </label>
              <label className="text-sm font-bold">
                E-mail
                <input
                  required
                  type="email"
                  placeholder="vous@email.be"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
              </label>
              <label className="text-sm font-bold">
                Véhicule
                <input
                  required
                  placeholder="Marque, modèle, année"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
              </label>
              <label className="text-sm font-bold md:col-span-2">
                Prestation souhaitée
                <select className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua">
                  <option>Je souhaite être conseillé</option>
                  <option>Formule Essentiel</option>
                  <option>Formule Renouveau</option>
                  <option>Formule Signature</option>
                </select>
              </label>
              <label className="text-sm font-bold md:col-span-2">
                État du véhicule et attentes
                <textarea
                  rows={5}
                  placeholder="Taches, poils d’animaux, odeurs, type de sellerie…"
                  className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
              </label>
            </div>
            <label className="mt-5 flex gap-3 text-xs leading-5 text-black/45">
              <input type="checkbox" required className="accent-aqua" />{" "}
              J’accepte que mes informations soient utilisées pour répondre à ma
              demande.
            </label>
            <button className="btn-primary mt-7 w-full" type="submit">
              Envoyer ma demande →
            </button>
          </form>
        </div>
      </section>
      <section className="bg-ink py-16 text-white">
        <div className="container-site grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Zone d’intervention</p>
            <h2 className="display text-4xl">Bruxelles & 30 km autour.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
              Notre atelier se trouve au centre de Bruxelles. Le déplacement à
              domicile est possible à Bruxelles, Waterloo, Zaventem, Vilvorde et
              environs.
            </p>
          </div>
          <div className="hex-bg grid min-h-64 place-items-center rounded-3xl border border-white/10 bg-white/5">
            <div className="relative grid h-40 w-40 place-items-center rounded-full border border-aqua/30">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-aqua/15">
                <MapPinIcon className="h-10 text-aqua" />
              </div>
              <span className="absolute -right-4 top-3 text-xs text-white/40">
                30 km
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
