import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

const tagColors = [
  "bg-terracota text-papel",
  "bg-teal text-papel",
  "bg-fucsia text-papel",
  "bg-lila text-papel",
  "bg-jade text-papel",
  "bg-rosa text-ink",
];

function whatsappLink(product: string) {
  const message = `Hola eblu! Quiero consultar por ${product}.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function Catalog() {
  return (
    <section id="catalogo" className="bg-mostaza py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="sticker rotate-2 bg-ink text-papel">Catálogo</span>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[0.98] font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Piezas que podés pedir a medida.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed font-semibold text-ink/80">
            Estos son algunos modelos de referencia. Todos se adaptan en
            medidas, tela y color a tu espacio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.catalog.map((product, index) => (
            <Reveal key={product.name} delay={(index % 3) * 80}>
              <article className="card-hard group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-hard-lg">
                <div className="relative aspect-[4/3] border-b-2 border-ink bg-arena">
                  <Image
                    src={asset(product.image)}
                    alt={`${product.name} — ${product.category} de eblu muebles`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectPosition: product.position }}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span
                    className={`sticker absolute top-4 left-4 -rotate-3 ${tagColors[index % tagColors.length]}`}
                  >
                    {product.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl font-black text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed font-medium text-ink/65">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t-2 border-ink/15 pt-4">
                    <span className="text-[10px] font-bold tracking-wider text-ink/50 uppercase">
                      Precio a medida
                    </span>
                    <a
                      href={whatsappLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-terracota uppercase transition-colors hover:text-fucsia"
                    >
                      Consultar
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Pedí tu presupuesto por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
