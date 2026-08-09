import PageHero from "@/components/ui/PageHero";
import BeforeAfter from "@/components/ui/BeforeAfter";
import Cta from "@/components/sections/Cta";
import { photos, projects, detailingSteps } from "@/lib/realisationsData";

export default function Realisations() {
  return (
    <>
      <PageHero
        eyebrow="réalisations"
        title="Des résultats qui"
        accent="parlent d’eux-mêmes."
        text="Découvrez quelques transformations réalisées sur des véhicules aux états et besoins différents. Chaque intervention est adaptée pour obtenir le meilleur résultat possible."
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-10 md:grid-cols-3">
            {projects.map((project, i) => (
              <BeforeAfter
                key={project.name}
                before={photos[i * 2]}
                after={photos[i * 2 + 1]}
                label={project.name}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#f6f9f9]">
        <div className="container-site">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Journal d’atelier</p>
              <h2 className="display text-4xl md:text-6xl">
                Dernières transformations.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/50">
              Chaque galerie documente l’état initial, les étapes clés et les
              finitions obtenues.
            </p>
          </div>
          <div className="grid auto-rows-[240px] gap-5 md:grid-cols-3">
            {photos.map((src, i) => (
              <figure
                key={src}
                className={`group relative overflow-hidden rounded-3xl ${i === 0 || i === 4 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`Réalisation automobile ${i + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16 text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <b className="font-display">{projects[i % 3].name}</b>
                  <p className="text-xs text-white/60">
                    {projects[i % 3].subtitle} · {projects[i % 3].duration}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-site grid gap-8 md:grid-cols-3">
          {detailingSteps.map((step) => (
            <div key={step.id} className="border-t border-black/15 pt-6">
              <span className="text-xs font-bold text-aqua-dark">
                {step.id}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Cta
        eyebrow="Votre voiture mérite mieux"
        title="Prêt à retrouver un intérieur impeccable ?"
        text="Une question sur la formule adaptée à votre véhicule ? Contactez-moi."
      />
    </>
  );
}
