"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const inputClasses =
  "w-full rounded-xl border-2 border-ink bg-papel px-4 py-3 text-sm font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:ring-4 focus:ring-mostaza/60";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contacto"
      className="pat-dots-light bg-teal py-24 text-papel lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="sticker -rotate-2 bg-mostaza text-ink">
            Contacto
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[0.98] font-black tracking-tight sm:text-5xl">
            Contanos qué tenés en mente.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed font-medium text-papel/80">
            Escribinos con una foto, un boceto o tus medidas. Te asesoramos y te
            pasamos un presupuesto sin compromiso.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-[10px] font-bold tracking-[0.24em] text-ambar uppercase">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-papel transition-colors hover:text-ambar"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[0.24em] text-ambar uppercase">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-papel transition-colors hover:text-ambar"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[0.24em] text-ambar uppercase">
                Instagram
              </dt>
              <dd className="mt-1">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-papel transition-colors hover:text-ambar"
                >
                  @eblu.muebles
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[0.24em] text-ambar uppercase">
                Taller
              </dt>
              <dd className="mt-1 font-semibold text-papel">{site.address}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[0.24em] text-ambar uppercase">
                Horario
              </dt>
              <dd className="mt-1 font-semibold text-papel">{site.hours}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="card-hard flex h-full min-h-[22rem] flex-col items-center justify-center p-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-jade text-2xl font-black text-papel shadow-hard-sm">
                ✓
              </span>
              <h3 className="mt-6 font-display text-3xl font-black text-ink">
                ¡Gracias por escribirnos!
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed font-medium text-ink/70">
                Recibimos tu mensaje. Te vamos a contactar muy pronto para
                hablar de tu mueble.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 text-xs font-bold tracking-[0.14em] text-terracota uppercase transition-colors hover:text-fucsia"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card-hard grid gap-5 p-7 sm:grid-cols-2 lg:p-8"
            >
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] font-bold tracking-wider text-ink/70 uppercase"
                >
                  Nombre y apellido
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Lucía Gómez"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-bold tracking-wider text-ink/70 uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="lucia@email.com"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[11px] font-bold tracking-wider text-ink/70 uppercase"
                >
                  WhatsApp <span className="text-ink/40">(opcional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+54 9 351 000 0000"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="type"
                  className="mb-2 block text-[11px] font-bold tracking-wider text-ink/70 uppercase"
                >
                  ¿Qué necesitás?
                </label>
                <select
                  id="type"
                  name="type"
                  className={inputClasses}
                  defaultValue="Sofá a medida"
                >
                  <option>Sofá a medida</option>
                  <option>Sofá modular</option>
                  <option>Mesa o comedor</option>
                  <option>Placard o guardado</option>
                  <option>Mueble a medida</option>
                  <option>Asesoría de interiorismo</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-bold tracking-wider text-ink/70 uppercase"
                >
                  Contanos un poco más
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Medidas, ambiente, tela o color que te gustaría, y para cuándo lo necesitás..."
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-start gap-2 text-xs font-medium text-ink/60">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-2 border-ink accent-terracota"
                  />
                  Acepto la política de privacidad y el tratamiento de mis
                  datos.
                </label>
                <button type="submit" className="btn btn-primary shrink-0">
                  Enviar mensaje
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
