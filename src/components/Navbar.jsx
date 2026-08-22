import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "youtube", label: "YouTube" },
  { id: "educacion", label: "Educación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#inicio" className="group flex items-baseline gap-1 font-display text-lg font-bold text-white">
          CM<span className="text-gold-400 transition-colors group-hover:text-gold-300">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-mono text-[13px] text-slate-400 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
          <a href="/documents/CV_Christopher_Moreno_ES.pdf" download className="btn-primary !px-4 !py-2 text-sm">
            CV ↓
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-6 pb-6 pt-2 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-sm text-slate-300 transition-colors hover:text-gold-300"
            >
              → {l.label}
            </a>
          ))}
          <a
            href="/documents/CV_Christopher_Moreno_ES.pdf"
            download
            className="btn-primary mt-4 w-full text-sm"
            onClick={() => setOpen(false)}
          >
            Descargar CV ↓
          </a>
        </div>
      )}
    </header>
  );
}
