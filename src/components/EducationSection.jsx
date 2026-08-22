import { MdSchool } from "react-icons/md";
import { SiAmazonwebservices, SiCisco } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "../data/education";

export default function EducationSection() {
  const edu = education[0];
  const aws = edu.courses.filter((c) => c.category === "aws");
  const cisco = edu.courses.filter((c) => c.category === "cisco");

  const groups = [
    { name: "AWS Academy", icon: SiAmazonwebservices, color: "#FF9900", courses: aws },
    { name: "Cisco Networking Academy", icon: SiCisco, color: "#1BA0D7", courses: cisco },
  ];

  return (
    <Section
      id="educacion"
      index="05"
      label="Formación"
      title="Educación y certificaciones"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Degree */}
        <Reveal>
          <div className="card card-hover h-full p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
              <MdSchool size={24} className="text-gold-400" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">
              {edu.degree}
            </h3>
            <p className="mt-1 text-slate-400">{edu.institution}</p>
            <p className="mt-4 font-mono text-xs tracking-wide text-slate-500">{edu.period}</p>
            <div className="mt-6 border-t border-white/10 pt-5 font-mono text-xs text-slate-500">
              Enfoque: backend, arquitectura de software, cloud y seguridad.
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <div className="space-y-6">
          {groups.map(
            (group, gi) =>
              group.courses.length > 0 && (
                <Reveal key={group.name} delay={gi * 90}>
                  <div className="card p-7">
                    <div className="mb-4 flex items-center gap-2.5">
                      <group.icon size={20} style={{ color: group.color }} />
                      <h3 className="font-display text-lg font-semibold text-white">
                        {group.name}
                      </h3>
                    </div>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {group.courses.map((course) => (
                        <a
                          key={course.name}
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3 transition-all duration-300 hover:border-gold-500/30 hover:bg-white/[0.05]"
                        >
                          <span className="flex-1 text-sm text-slate-400 transition-colors group-hover:text-slate-200">
                            {course.name}
                          </span>
                          <FiExternalLink
                            size={13}
                            className="shrink-0 text-slate-600 transition-colors group-hover:text-gold-300"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
          )}
        </div>
      </div>
    </Section>
  );
}
