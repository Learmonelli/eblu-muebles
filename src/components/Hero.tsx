import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

const statColors = ["bg-mostaza", "bg-teal text-papel", "bg-fucsia text-papel"];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-papel">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-1/3 h-44 w-44 rounded-full border-2 border-ink bg-rosa"
      />
      <div
        aria-hidden
        className="pat-stripes pointer-events-none absolute -bottom-6 left-6 h-32 w-32 rotate-12 rounded-2xl border-2 border-ink bg-ambar"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pt-36 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pt-44 lg:pb-28">
        <div className="animate-fade-up max-w-xl">
          <span className="sticker rotate-[-3deg] bg-mostaza">
            Arquitecta · Diseño de muebles
          </span>

          <h1 className="mt-7 font-display text-5xl leading-[0.95] font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Muebles que se sienten{" "}
            <span className="squiggle text-terracota">hechos para vos</span>.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed font-medium text-ink/75 sm:text-lg">
            Diseñamos y fabricamos muebles singulares y contemporáneos. Lo tenés
            pensado, lo hacemos realidad.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#coleccion" className="btn btn-primary">
              Ver la colección
            </a>
            <a href="#contacto" className="btn btn-light">
              Pedí tu presupuesto
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4">
            {site.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-2xl border-2 border-ink p-4 shadow-hard-sm ${statColors[index]}`}
              >
                <dt className="font-display text-2xl font-black sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[10px] font-bold tracking-wider uppercase opacity-80">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in relative">
          <span
            aria-hidden
            className="absolute -top-10 -right-4 z-10 text-6xl text-terracota"
          >
            ✺
          </span>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-2 border-ink shadow-hard lg:aspect-[4/5]">
            <Image
              src={asset("/images/sala-nordica.jpg")}
              alt="Sofá modular gris con almohadones y butaca verde en un living con escalera de madera"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <span className="sticker absolute top-6 -left-3 rotate-[-8deg] bg-teal text-papel sm:-left-6">
            100% a medida
          </span>

          <div className="card-hard absolute -bottom-6 -left-2 max-w-[15rem] rotate-[2deg] p-5 sm:-left-6">
            <p className="text-[10px] font-bold tracking-[0.24em] text-terracota uppercase">
              Hecho a medida
            </p>
            <p className="mt-2 font-display text-2xl font-black text-ink">
              Sofá modular Mío
            </p>
            <p className="mt-1 text-xs font-medium text-ink/60">
              Córdoba · Telas premium
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
