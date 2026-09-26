import { site } from "@/lib/site";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-papel/75">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-papel bg-mostaza font-display text-xl font-black text-ink">
                e
              </span>
              <span className="font-display text-2xl font-black text-papel">
                {site.name}
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed font-medium">
              {site.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip bg-papel transition-colors hover:bg-mostaza"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.24em] text-papel/45 uppercase">
              Navegación
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-mostaza"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.24em] text-papel/45 uppercase">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mostaza"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-mostaza"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
              <li className="text-papel/50">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t-2 border-papel/15 pt-6 text-xs font-medium text-papel/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="font-bold tracking-[0.2em] uppercase">
            Diseño · Fabricación · Interiorismo
          </p>
        </div>
      </div>
    </footer>
  );
}
