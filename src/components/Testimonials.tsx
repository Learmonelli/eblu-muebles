import { site } from "@/lib/site";
import Reveal from "./Reveal";

const markColors = ["text-terracota", "text-teal", "text-fucsia"];

export default function Testimonials() {
  return (
    <section className="bg-crema py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="sticker rotate-2 bg-terracota text-papel">
            Lo que dicen
          </span>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[0.98] font-black tracking-tight text-ink sm:text-5xl">
            Casas que ya tienen su{" "}
            <span className="text-terracota">eblu</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {site.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 100}>
              <figure className="card-hard flex h-full flex-col justify-between p-8">
                <div>
                  <span
                    className={`font-display text-5xl leading-none font-black ${markColors[index % markColors.length]}`}
                    aria-hidden
                  >
                    “
                  </span>
                  <blockquote className="mt-2 font-display text-2xl leading-snug font-semibold text-ink/90">
                    {testimonial.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t-2 border-ink/15 pt-5">
                  <p className="text-sm font-black text-ink">
                    {testimonial.author}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold tracking-wider text-ink/50 uppercase">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
