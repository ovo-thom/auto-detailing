import Link from "next/link";
import ServicesPreview from "@/components/sections/ServicesPreview";
import BeforeAfter from "@/components/ui/BeforeAfter";
import SectionTitle from "@/components/ui/SectionTitle";
import Cta from "@/components/sections/Cta";
import { MapPinIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { homeImages as img } from "@/lib/images";
export default function Home() {
  return (
    <>
      <section className="container-site py-6">
        <div className="relative min-h-[650px] overflow-hidden rounded-[2.5rem] bg-ink">
          <img
            src={img.hero}
            alt="Detailing d'un intérieur automobile"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
          <div className="hex-bg absolute right-0 top-0 h-full w-1/3" />
          <div className="relative flex min-h-[650px] max-w-3xl flex-col justify-center px-7 py-20 text-white md:px-16">
            <p className="mb-6 text-xs font-bold uppercase tracking-[.26em] text-aqua">
              Detailing intérieur · Liège
            </p>
            <h1 className="display text-5xl sm:text-7xl lg:text-[88px]">
              Votre intérieur.
              <br />
              <span className="text-aqua">Comme neuf.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/65">
              Chaque véhicule est différent. J'adapte le nettoyage à son état
              pour un résultat soigné jusque dans les moindres détails.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-aqua px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-1"
              >
                Obtenir un devis →
              </Link>
              <Link
                href="/realisations"
                className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold transition hover:bg-white hover:text-ink"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
          <div className="absolute bottom-7 right-8 hidden gap-8 text-white md:flex">
            <div className="flex flex-col items-center space-y-1">
              <b className="font-display">
                <MapPinIcon className="h-8 w-8" />
              </b>
              <span className="block text-[10px] uppercase tracking-widest text-white/50">
                Province de Liège
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <b className="font-display text-2xl">
                <SparklesIcon className="h-8 w-8" />
              </b>
              <span className="block text-[10px] uppercase tracking-widest text-white/50">
                Service personnalisé
              </span>
            </div>
          </div>
          {/* <div className="absolute bottom-7 right-8 hidden gap-8 text-white md:flex">
            <div>
              <b className="font-display text-2xl">250+</b>
              <span className="block text-[10px] uppercase tracking-widest text-white/50">
                véhicules traités
              </span>
            </div>
            <div>
              <b className="font-display text-2xl">4.9/5</b>
              <span className="block text-[10px] uppercase tracking-widest text-white/50">
                avis clients
              </span>
            </div>
          </div> */}
        </div>
      </section>
      <ServicesPreview />
      <section className="section-pad bg-[#f6f9f9]">
        <div className="container-site">
          <SectionTitle
            eyebrow="Avant / Après"
            title="Le détail change tout."
            text="Faites glisser le curseur pour voir le travail réalisé."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {img.comparisons.map((item) => (
              <BeforeAfter
                key={item.label}
                before={item.before}
                after={item.after}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad overflow-hidden">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={img.workMethodImage}
              alt="Travail précis de detailing"
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover"
            />
            <div className="absolute -bottom-6 -right-3 rounded-3xl bg-aqua p-7 md:right-[-30px]">
              <span className="font-display text-5xl font-bold">100%</span>
              <span className="block text-xs font-bold uppercase tracking-widest">
                fait à la main
              </span>
            </div>
          </div>
          <div className="lg:pl-12">
            <SectionTitle
              eyebrow="Pourquoi Atelier Nacre"
              title="De la patience. De la précision."
              text="Chaque véhicule est nettoyé avec le même soin, qu'il s'agisse d'une citadine, d'un SUV ou d'un utilitaire. J'utilise des produits adaptés à chaque surface et je prends le temps nécessaire pour obtenir un résultat propre et durable."
            />
            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-black/10 pt-7">
              <div>
                <b className="font-display text-lg">Produits adaptés</b>
                <p className="mt-2 text-sm text-black/45">
                  Des produits adaptés à chaque matériau.
                </p>
              </div>
              <div>
                <b className="font-display text-lg">Résultat durable</b>
                <p className="mt-2 text-sm text-black/45">
                  Une finition soignée à chaque intervention
                </p>
              </div>
            </div>
          </div>
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
