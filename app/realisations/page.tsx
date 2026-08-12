import PageHero from "@/components/ui/PageHero";
import BeforeAfter from "@/components/ui/BeforeAfter";
import Cta from "@/components/sections/Cta";
import {
  galleryPhotos,
  comparisonProjects,
  detailingSteps,
} from "@/lib/realisationsData";

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
            {comparisonProjects.map((project, i) => (
              <BeforeAfter
                key={project.name}
                before={project.before}
                after={project.after}
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
            {galleryPhotos.map((photo, i) => (
              <figure
                key={photo.src}
                className={`group relative overflow-hidden rounded-3xl ${
                  i === 0 || i === 4 ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-site mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-aqua-dark">
            Ma méthode
          </p>

          <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
            Chaque détail compte.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-black/60">
            De l’évaluation aux finitions, chaque étape est réalisée avec soin
            pour nettoyer efficacement l’habitacle tout en respectant les
            différentes surfaces.
          </p>
        </div>
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
        eyebrow="Votre véhicule, le prochain ?"
        title="À votre tour de retrouver un intérieur impeccable."
        text="Parlez-moi de votre véhicule et de son état, je vous conseillerai la formule la plus adaptée.  "
      />
    </>
  );
}
