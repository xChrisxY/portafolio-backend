// components/ProjectCard.jsx
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const visibleTechnologies = showAllTech 
    ? project.technologies 
    : project.technologies.slice(0, 4);

  return (
    <div className="bg-slate-900 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg flex flex-col justify-between h-full">

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          {project.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-3 mb-2">
            {visibleTechnologies.map((tech, index) => (
              <div
                key={index}
                className="group relative"
                title={tech.name}
              >
                <tech.icon 
                  size={28} 
                  style={{ color: tech.color }}
                  className="hover:scale-110 transition-transform"
                />
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {tech.name}
                </span>
              </div>
            ))}
            
            {project.technologies.length > 4 && !showAllTech && (
              <button
                onClick={() => setShowAllTech(true)}
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                +{project.technologies.length - 4} más
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          GitHub →
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
          >
            Demo →
          </a>
        )}
      </div>
    </div>
  );
}