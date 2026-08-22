import { FiExternalLink, FiDownload } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MapPin } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "../data/experience";

function TechIcon({ tech }) {
  return (
    <div className="group relative" title={tech.name}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/30">
        <tech.icon size={18} style={{ color: tech.color }} />
      </div>
      <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-ink-700 px-2 py-1 text-[11px] text-slate-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {tech.name}
      </span>
    </div>
  );
}

function ExperienceItem({ item, index }) {
  return (
    <Reveal delay={Math.min(index * 60, 180)}>
      <article className="relative pl-10 sm:pl-14">
        {/* Node */}
        <span
          className={`absolute left-[7px] top-7 h-3 w-3 rounded-full border-2 ${
            item.current
              ? "pulse-dot border-gold-400 bg-gold-400"
              : "border-slate-600 bg-ink-800"
          }`}
        />

        <div
          className={`card card-hover p-6 sm:p-8 ${
            item.current ? "border-gold-500/25 bg-gold-500/[0.03]" : ""
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
            <div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {item.role}
                {item.current && (
                  <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-widest text-gold-300">
                    <span className="h-1 w-1 rounded-full bg-gold-400" />
                    Actualidad
                  </span>
                )}
              </h3>

              <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-medium text-sky-300 transition-colors hover:text-sky-200"
                  >
                    {item.company}
                    <FiExternalLink size={13} className="opacity-60 group-hover:opacity-100" />
                  </a>
                ) : (
                  <span className="font-medium text-sky-300">{item.company}</span>
                )}
                <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                  <MapPin size={12} />
                  {item.location}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="chip !text-slate-300">{item.date}</span>
              {item.document && (
                <a
                  href={item.document}
                  download
                  title={`Descargar ${item.type_document}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-gold-500/30 hover:text-gold-300"
                >
                  <HiOutlineDocumentText size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-slate-400">{item.summary}</p>

          <ul className="mt-4 space-y-2">
            {item.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                <span className="mt-0.5 select-none font-mono text-gold-500/50">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {item.technologies.map((tech) => (
              <TechIcon key={tech.name} tech={tech} />
            ))}
          </div>

          {item.images?.length > 0 && (
            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${item.company} — evidencia ${i + 1}`}
                    onClick={() => window.open(img, "_blank")}
                    className="h-36 w-48 cursor-pointer rounded-lg border border-white/10 object-cover transition-transform duration-300 hover:scale-[1.04]"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function ExperienceSection() {
  return (
    <Section
      id="experiencia"
      index="01"
      label="Trayectoria"
      title="Experiencia profesional"
      lead="De backend engineer a líder técnico: construyendo sistemas de manufactura, CRMs, IoT y seguridad."
    >
      <div className="relative space-y-8 before:absolute before:bottom-4 before:left-[13px] before:top-4 before:w-px before:bg-gradient-to-b before:from-gold-500/50 before:via-white/10 before:to-transparent sm:before:left-[13px]">
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
