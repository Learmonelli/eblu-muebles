import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Personalization() {
  return (
    <section
      id="personalizacion"
      className="pat-dots overflow-hidden bg-rosa py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="sticker -rotate-2 bg-ink text-papel">
            Personalización
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[0.98] font-black tracking-tight text-ink sm:text-5xl">
            Elegí tela, trama y color.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed font-medium text-ink/80">
            Todas nuestras telas son premium. Te asesoramos para que la pieza
            combine con tu ambiente y dure años: desde tonos crudos y linos
            naturales hasta verdes y azules profundos.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed font-medium text-ink/65">
            También definimos entrega de cuerpos, altura, profundidad y
            apoyabrazos según cómo usás tu espacio.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {site.fabrics.map((fabric, index) => (
              <li
                key={fabric.name}
                className={`card-hard p-4 ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <span
                  className="block h-16 w-full rounded-xl border-2 border-ink"
                  style={{ backgroundColor: fabric.color }}
                />
                <p className="mt-3 text-sm font-black text-ink">
                  {fabric.name}
                </p>
                <p className="mt-0.5 text-[10px] font-bold tracking-wider text-ink/50 uppercase">
                  Tela premium
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
