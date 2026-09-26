import Image from "next/image";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const frameShadows = ["shadow-hard-terracota", "shadow-hard-mostaza"];
const frameTilt = ["lg:-rotate-1", "lg:rotate-1"];

export default function Projects() {
  return (
    <section id="coleccion" className="pat-dots bg-crema py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="sticker -rotate-2 bg-terracota text-papel">
              La colección
            </span>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[0.98] font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Piezas pensadas para{" "}
              <span className="text-terracota">vivir mejor</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed font-medium text-ink/70">
            Cada mueble se diseña y fabrica de forma artesanal. Elegís medidas,
            tela, trama y color: nadie tiene uno igual.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 lg:space-y-32">
          {site.projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <Reveal key={project.title}>
                <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={`group relative overflow-hidden rounded-[2rem] border-2 border-ink bg-arena ${frameShadows[index % 2]} ${frameTilt[index % 2]} ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/11]">
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category} de eblu muebles`}
                        width={project.width}
                        height={project.height}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <span className="sticker absolute top-5 left-5 -rotate-3 bg-mostaza">
                      {project.category}
                    </span>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-ink/55 uppercase">
                      <span>{project.location}</span>
                      <span aria-hidden className="text-terracota">
                        ✺
                      </span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="mt-4 font-display text-4xl leading-[0.98] font-black text-ink sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-md leading-relaxed font-medium text-ink/75">
                      {project.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto"
                      className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-terracota uppercase transition-colors hover:text-fucsia"
                    >
                      Quiero lo mío a medida
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
