import Image from "next/image";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const tipColors = ["text-mostaza", "text-rosa", "text-ambar"];

export default function Inspiration() {
  return (
    <section id="inspiracion" className="bg-jade py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="sticker rotate-2 bg-rosa text-ink">
            Tips &amp; galería
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[0.98] font-black tracking-tight text-papel sm:text-5xl">
            Inspiración para <span className="text-ambar">tu casa</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border-2 border-ink shadow-hard-cream">
              <Image
                src="/images/sala-nordica.jpg"
                alt="Living con sofá gris, almohadones de colores y butaca verde"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border-2 border-ink shadow-hard-cream lg:aspect-auto lg:h-full">
              <Image
                src="/images/sala-minimalista.jpg"
                alt="Ambiente luminoso con sofá claro y mesa de madera"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {site.tips.map((tip, index) => (
            <Reveal key={tip.title} delay={index * 80}>
              <div className="card-hard h-full p-7">
                <span
                  className={`font-display text-3xl font-black ${tipColors[index % tipColors.length]}`}
                >
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-black text-ink">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed font-medium text-ink/70">
                  {tip.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-5 rounded-[2rem] border-2 border-ink bg-mostaza px-8 py-10 text-center shadow-hard sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-2xl font-black text-ink">
                Seguinos en Instagram
              </p>
              <p className="mt-1 text-sm font-semibold text-ink/75">
                Subimos diseños, telas y proyectos terminados en @eblu.muebles.
              </p>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark shrink-0"
            >
              Ver galería en Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
