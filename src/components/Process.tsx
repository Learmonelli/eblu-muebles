import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="bg-terracota py-24 text-papel lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="sticker rotate-2 bg-mostaza text-ink">
              Cómo trabajamos
            </span>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[0.98] font-black tracking-tight sm:text-5xl lg:text-6xl">
              Simple, claro y{" "}
              <span className="text-ambar">a tu medida</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed font-medium text-papel/75">
            Te acompañamos en cada paso para que sepas qué esperar, cuánto tarda
            y cuánto cuesta antes de fabricar.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {site.process.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="border-t-4 border-papel/50 pt-6">
                <span className="font-display text-6xl font-black text-ambar">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-medium text-papel/80">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
