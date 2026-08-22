import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Reveal from "./Reveal";

const socials = [
  { icon: FaGithub, href: "https://github.com/xChrisxY", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/xchrisxy/", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://www.youtube.com/@christophermoreno2429", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden border-t border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/5 blur-[160px]"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow mb-4">06 · Contacto</p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            ¿Construimos algo <span className="text-gold-400">excepcional</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
            Siempre abierto a conversar sobre arquitectura, liderazgo técnico o nuevas
            oportunidades.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:christopheryahirm@gmail.com" className="btn-primary">
              <MdEmail size={18} />
              christopheryahirm@gmail.com
            </a>
            <a href="/documents/CV_Christopher_Moreno_ES.pdf" download className="btn-ghost">
              Descargar CV ↓
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-lg p-3 text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-white/5 hover:text-gold-300"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 font-mono text-[11px] text-slate-600 sm:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Christopher Yahir Moreno Moreno</span>
          <span>
            Monterrey, N. L. · construido con React +{" "}
            <span className="text-gold-500/100">Tailwind</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
