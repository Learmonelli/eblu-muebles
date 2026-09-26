import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

const dotColors = ["bg-terracota", "bg-teal", "bg-fucsia"];

export default function About() {
  return (
    <section id="estudio" className="bg-papel py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <span className="sticker rotate-2 bg-teal text-papel">El taller</span>
          <h2 className="mt-6 font-display text-4xl leading-[0.98] font-black tracking-tight text-ink sm:text-5xl">
            Detrás de eblu hay una arquitecta que diseña cada pieza.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed font-medium text-ink/75">
            {site.name} nace del oficio de {site.founder}, arquitecta
            especializada en diseño de muebles e interiorismo. Desde Córdoba
            pensamos, dibujamos y fabricamos muebles singulares y
            contemporáneos.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed font-medium text-ink/75">
            No trabajamos con modelos en serie: cada pieza se adapta a tu
            espacio y a tu forma de vivir. Diseño original, materiales nobles y
            terminaciones que se notan al tacto.
          </p>

          <ul className="mt-8 space-y-3">
            {site.values.map((value, index) => (
              <li
                key={value}
                className="flex items-center gap-3 text-sm font-semibold text-ink/85"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink text-[11px] font-black text-papel ${dotColors[index % dotColors.length]}`}
                >
                  ✓
                </span>
                {value}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border-2 border-ink shadow-hard-teal lg:rotate-[-1.5deg]">
            <Image
              src={asset("/images/sala-minimalista.jpg")}
              alt="Living luminoso con sofá claro, mesas de madera y decoración minimalista"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="card-hard absolute -bottom-6 right-6 rotate-2 bg-fucsia p-5 text-papel">
            <p className="font-display text-2xl leading-none font-black">
              Córdoba
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.24em] uppercase opacity-80">
              Diseño y fabricación
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
