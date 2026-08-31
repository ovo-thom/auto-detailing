import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold">
            {/* FLOW <span className="text-aqua">DETAILING</span> */}
            <Image
              src="/images/flow-detailing-white.svg"
              alt="Flow Detailing"
              width={200}
              height={70}
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
            Le soin méticuleux de votre habitacle, jusque dans les moindres
            détails.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-aqua">
            Navigation
          </p>
          <div className="grid gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-aqua">
              Accueil
            </Link>
            <Link href="/prestations" className="hover:text-aqua">
              Prestations & tarifs
            </Link>
            <Link href="/realisations" className="hover:text-aqua">
              Réalisations
            </Link>
            <Link href="/contact" className="hover:text-aqua">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-aqua">
            contact
          </p>
          <p className="text-sm leading-7 text-white/60">
            Province de Liège
            <br />
            +32 491 95 41 61
            <br />
            contact@flowdetailing.be
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © 2026 Flow Detailing · Tous droits réservés
      </div>
    </footer>
  );
}
