"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const marqueeItems = [
  "Hecho a mano en Córdoba",
  "Diseño a medida",
  "Telas premium",
  "Lo tenés pensado, lo hacemos realidad",
  "Envíos a todo el país",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="marquee border-b-2 border-ink bg-fucsia py-1.5 text-papel">
        <div className="marquee-track">
          {[0, 1].map((dupe) => (
            <div key={dupe} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${dupe}-${item}`}
                  className="flex items-center gap-4 px-4 text-[11px] font-bold tracking-[0.28em] uppercase"
                >
                  {item}
                  <span aria-hidden className="text-mostaza">
                    ✺
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <nav className="border-b-2 border-ink bg-papel/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-mostaza font-display text-xl font-black text-ink shadow-hard-sm">
              e
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-black tracking-tight text-ink">
                {site.name}
              </span>
              <span className="mt-0.5 text-[9px] font-bold tracking-[0.24em] text-terracota uppercase">
                {site.tagline}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[11px] font-bold tracking-[0.14em] text-ink uppercase transition-colors hover:text-terracota"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn btn-primary btn-sm hidden lg:inline-flex">
            Pedí tu presupuesto
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-[3px] w-7 rounded-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[3px] w-7 rounded-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`pat-dots fixed inset-x-0 top-24 bottom-0 z-40 bg-crema px-6 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col pt-4">
          {site.nav.map((item, index) => (
            <li key={item.href} className="border-b-2 border-ink/15">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-display text-3xl font-black text-ink"
              >
                {item.label}
                <span className="sticker bg-rosa text-[10px]">
                  0{index + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          onClick={() => setOpen(false)}
          className="btn btn-primary mt-8 w-full"
        >
          Pedí tu presupuesto
        </a>
      </div>
    </header>
  );
}
