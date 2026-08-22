import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  return (
    <Section
      id="stack"
      index="03"
      label="Herramientas"
      title="Stack tecnológico"
      lead="El arsenal con el que diseño, construyo y opero sistemas en producción."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delay={(gi % 3) * 90}>
            <div className="card card-hover h-full p-7">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-gold-400">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="group flex items-center gap-3 text-sm">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/20"
                      title={skill.name}
                    >
                      <skill.icon size={16} style={{ color: skill.color }} />
                    </span>
                    <span className="text-slate-400 transition-colors group-hover:text-slate-200">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
