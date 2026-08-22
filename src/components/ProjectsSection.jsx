import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { GitCommitHorizontal, Lock } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects, featuredProjects } from "../data/projects";

function TechRow({ technologies }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {technologies.map((tech) => (
        <div key={tech.name} className="group relative" title={tech.name}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/30">
            <tech.icon size={18} style={{ color: tech.color }} />
          </div>
          <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-ink-700 px-2 py-1 text-[11px] text-slate-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <Section
      id="proyectos"
      index="02"
      label="Portafolio"
      title="Proyectos"
      lead="Sistemas profesionales en producción y repositorios abiertos, ordenados por actividad real de commits."
    >
      {/* Featured professional */}
      <Reveal>
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
          En producción · proyectos profesionales
        </p>
      </Reveal>
      <div className="mb-16 grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <div className="card card-hover group relative h-full overflow-hidden p-7">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent opacity-70"
              />
              <p className="font-mono text-[11px] uppercase tracking-widest text-gold-400">
                {project.tagline}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
              <div className="mt-6">
                <TechRow technologies={project.technologies} />
              </div>
              <p className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-600">
                <Lock size={11} />
                Repositorio privado · cliente corporativo
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Open source by commits */}
      <Reveal>
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
          Código abierto · ordenados por commits
        </p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 90}>
            <div className="card card-hover flex h-full flex-col p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold leading-snug text-white">
                  {project.title}
                </h3>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 font-mono text-[11px] text-emerald-300">
                  <GitCommitHorizontal size={12} />
                  {project.commits}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-5">
                <TechRow technologies={project.technologies} />
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs text-slate-500 transition-colors hover:text-gold-300"
              >
                <FaGithub size={14} />
                xChrisxY/{project.title.split("/").pop()}
                <FiExternalLink size={11} className="ml-auto" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
