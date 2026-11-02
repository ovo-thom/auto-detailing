import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { contactInfos, whatsappUrl } from "@/lib/contactData";
import { pageMetadata } from "@/lib/metadata";
import { siteInfo } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact et devis à Saint-Nicolas (Liège)",
  description:
    "Demandez votre devis de nettoyage intérieur à Saint-Nicolas, près de Liège, par téléphone, WhatsApp ou formulaire. Du lundi au samedi, sur rendez-vous.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact · Nettoyage intérieur"
        title="Parlons de"
        accent="votre véhicule."
        text="Décrivez-moi l’état de votre véhicule et vos besoins. Je vous conseillerai la prestation la plus adaptée et vous communiquerai une estimation personnalisée."
      />

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <aside>
            <p className="eyebrow">Contact direct</p>

            <h2 className="display text-3xl md:text-4xl">
              Une question?
              <br />
              Je vous réponds.
            </h2>

            <div className="mt-10 space-y-6">
              {contactInfos.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist">
                    <Icon className="h-5 w-5 text-aqua-dark" />
                  </span>

                  <div>
                    <b className="text-xs uppercase tracking-widest">{label}</b>

                    <p className="mt-1 text-sm text-black/50">
                      {href ? (
                        <a href={href} className="hover:text-aqua-dark">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              Discuter sur WhatsApp →
            </a>
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="container-site grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Zone d’intervention</p>

            <h2 className="display text-xl md:text-2xl">
              Saint-Nicolas · Province de Liège.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
              Je reçois les clients de la commune et des environs :{" "}
              {siteInfo.nearbyCitiesLabel}. Contactez-moi pour connaître les
              disponibilités : l’adresse exacte vous est communiquée à la prise
              de rendez-vous.
            </p>
          </div>

          <div className="hex-bg grid min-h-52 place-items-center rounded-3xl border border-white/10 bg-white/5 md:min-h-64">
            <div className="relative grid h-32 w-32 place-items-center rounded-full border border-aqua/30 md:h-40 md:w-40">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-aqua/15 md:h-24 md:w-24">
                <MapPinIcon className="h-9 text-aqua md:h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
