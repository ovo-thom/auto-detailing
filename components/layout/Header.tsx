"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { navigationLinks } from "@/lib/navigation";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="container-site flex h-[64px] items-center justify-between md:h-[72px] xl:h-[76px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/flow-detailing-navbar-black.svg"
            alt="Flow Detailing"
            width={160}
            height={48}
            className="h-9 w-auto md:h-11 xl:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-7">
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold transition hover:text-aqua-dark ${
                path === href ? "text-aqua-dark" : "text-black/60"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link href="/contact" className="btn-primary !px-5 !py-3">
            Demander un devis
          </Link>
        </nav>

        <button
          className="xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {open && (
        <nav className="container-site flex flex-col gap-5 border-t border-black/5 py-6 xl:hidden">
          {navigationLinks.map(({ href, label }) => (
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
