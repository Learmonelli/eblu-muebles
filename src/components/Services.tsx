import { site } from "@/lib/site";
import Reveal from "./Reveal";

const cardColors = [
  "bg-mostaza text-ink",
  "bg-rosa text-ink",
  "bg-teal text-papel",
  "bg-fucsia text-papel",
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="pat-dots-light bg-ink py-24 text-papel lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="sticker rotate-2 bg-mostaza text-ink">
              Qué hacemos
            </span>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[0.98] font-black tracking-tight sm:text-5xl lg:text-6xl">
              Del primer boceto a{" "}
              <span className="text-ambar">tu living</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed font-medium text-papel/70">
            Un solo equipo se ocupa de todo: diseño, fabricación, tapizado y
            asesoría. Vos solo elegís los detalles que te importan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div
                className={`h-full rounded-3xl border-2 border-ink p-8 shadow-hard-cream ${cardColors[index % cardColors.length]}`}
              >
                <span className="font-display text-sm font-black opacity-70">
                  0{index + 1}
                </span>
                <h3 className="mt-14 font-display text-2xl leading-tight font-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-medium opacity-80">
                  {service.description}
                </p>
                <span className="mt-6 block h-1 w-10 rounded-full bg-current opacity-40" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
