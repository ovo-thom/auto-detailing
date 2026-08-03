"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const links = [
  ["/", "Accueil"],
  ["/prestations", "Prestations & tarifs"],
  ["/realisations", "Réalisations"],
  ["/contact", "Contact"],
];
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="container-site flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-black text-aqua">
            AN
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            ATELIER NACRE
            <span className="block font-sans text-[9px] font-bold tracking-[.25em] text-black/40">
              DETAILING INTÉRIEUR
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold transition hover:text-aqua-dark ${path === href ? "text-aqua-dark" : "text-black/60"}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-5 !py-3">
            Demander un devis
          </Link>
        </nav>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <XMarkIcon className="h-7" /> : <Bars3Icon className="h-7" />}
        </button>
      </div>
      {open && (
        <nav className="container-site flex flex-col gap-5 border-t border-black/5 py-6 lg:hidden">
          {links.map(([href, label]) => (
            <Link
              onClick={() => setOpen(false)}
              key={href}
              href={href}
              className="text-lg font-bold"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
