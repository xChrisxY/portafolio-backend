import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/xchrisxy/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/xChrisxY", label: "GitHub" },
  { icon: FaYoutube, href: "https://www.youtube.com/@christophermoreno2429", label: "YouTube" },
  { icon: MdEmail, href: "mailto:christopheryahirm@gmail.com", label: "Email" },
];

const stats = [
  { value: "3+", label: "años de experiencia" },
  { value: "80+", label: "repositorios públicos" },
  { value: "7", label: "videos técnicos" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/5 blur-[140px]"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 pb-24 pt-36 md:px-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:pt-44">
        {/* Left column */}
        <div>
          <Reveal>
            <p className="mb-5 flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-slate-400 uppercase">
              <MapPin size={13} className="text-gold-400" />
              Monterrey, N. L., México
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Christopher
              <br />
              Moreno<span className="text-gold-400">.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 font-mono text-sm tracking-wide text-gold-300 sm:text-base">
              Ingeniero de Software · Backend Java &amp; Python · Líder Técnico
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
              Más de 3 años construyendo sistemas backend con{" "}
              <span className="text-slate-200">Spring Boot</span> y{" "}
              <span className="text-slate-200">Python</span>. Actualmente lidero el desarrollo de una
              plataforma de manufactura (MES + ERP + app móvil) en Software Bank. Base sólida en
              arquitectura limpia, cloud (AWS) y DevOps, con contribuciones activas a código abierto
              y contenido técnico en YouTube.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#proyectos" className="btn-primary">
                Ver proyectos →
              </a>
              <a href="/documents/CV_Christopher_Moreno_ES.pdf" download className="btn-ghost">
                Descargar CV ↓
              </a>
              <div className="ml-1 flex items-center gap-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-lg p-2.5 text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-white/5 hover:text-gold-300"
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 grid max-w-md grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5">
              {stats.map((s) => (
                <div key={s.label} className="px-4 first:pl-0">
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column — portrait + terminal card */}
        <Reveal delay={280} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://res.cloudinary.com/dv01nd8nv/image/upload/v1771872890/me_wugizv.jpg"
                alt="Christopher Moreno"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-ink-950/70 px-3 py-1 font-mono text-[11px] text-emerald-300 backdrop-blur-md">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
              abierto a conectar
            </span>

            {/* Terminal card */}
            <div className="absolute -bottom-10 left-1/2 w-[92%] -translate-x-1/2 rounded-xl border border-white/10 bg-ink-900/95 shadow-xl shadow-black/60 backdrop-blur-md sm:left-auto sm:right-[-1rem] sm:w-[88%] sm:translate-x-0">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-2 font-mono text-[10px] tracking-wider text-slate-500">
                  christopher@mes-prod: ~
                </span>
              </div>
              <div className="space-y-1.5 px-4 py-3 font-mono text-[11px] leading-relaxed sm:text-xs">
                <p className="text-slate-500">$ whoami</p>
                <p className="text-slate-300">
                  líder_técnico @ <span className="text-gold-300">softwarebank</span>
                </p>
                <p className="text-slate-500">$ stack --actual</p>
                <p className="text-slate-300">java · erpnext · flutter</p>
                <p className="text-slate-500">$ estado</p>
                <p className="text-emerald-300">
                  liderando equipo multidisciplinario<span className="animate-pulse">▌</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
