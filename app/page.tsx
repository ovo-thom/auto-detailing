import Link from "next/link";
import ServicesPreview from "@/components/sections/ServicesPreview";
import BeforeAfter from "@/components/ui/BeforeAfter";
import SectionTitle from "@/components/ui/SectionTitle";
import Cta from "@/components/sections/Cta";
const img = {
  hero: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=85",
  a: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  b: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
  c: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
};
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
              Detailing intérieur · Bruxelles
            </p>
            <h1 className="display text-5xl sm:text-7xl lg:text-[88px]">
              Votre intérieur.
              <br />
              <span className="text-aqua">Comme neuf.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/65">
              Nettoyage, rénovation et protection haut de gamme pour retrouver
              le plaisir d’un habitacle irréprochable.
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
          </div>
        </div>
      </section>
      <ServicesPreview />
      <section className="section-pad bg-[#f6f9f9]">
        <div className="container-site">
          <SectionTitle
            eyebrow="Avant / Après"
            title="Le détail change tout."
            text="Faites glisser le curseur pour révéler la transformation."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              [img.a, img.b, "Audi A3 · Sellerie"],
              [img.b, img.c, "BMW Série 3 · Habitacle"],
              [img.c, img.a, "Porsche Macan · Finitions"],
            ].map((x, i) => (
              <BeforeAfter key={i} before={x[0]} after={x[1]} label={x[2]} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad overflow-hidden">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={img.b}
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
              eyebrow="Notre approche"
              title="De la patience. De la précision."
              text="Chez Atelier Nacre, aucun travail à la chaîne. Chaque véhicule reçoit un diagnostic attentif, des produits adaptés et le temps nécessaire pour un résultat durable."
            />
            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-black/10 pt-7">
              <div>
                <b className="font-display text-lg">Produits sûrs</b>
                <p className="mt-2 text-sm text-black/45">
                  Pour vos surfaces et votre santé.
                </p>
              </div>
              <div>
                <b className="font-display text-lg">Résultat durable</b>
                <p className="mt-2 text-sm text-black/45">
                  Protection et conseils d’entretien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
