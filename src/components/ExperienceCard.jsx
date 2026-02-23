import { useState } from "react";

export default function ExperienceCard({experience}) {
      const [showAllTech, setShowAllTech] = useState(false);
      const visibleTechnologies = showAllTech 
      ? experience.technologies 
      : experience.technologies.slice(0, 4);

      return (
            <div className="bg-slate-900 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg flex flex-col justify-between h-full">

                  <h2 className="text-2xl font-semibold mb-4">
                        {experience.role}
                  </h2>

                  <h3>
                        {experience.company}
                  </h3>

                  <small className="mb-4">
                        {experience.date}
                  </small>

                  <h3 className="mb-4">
                        {experience.location}
                  </h3>

                  <h3 className="text-slate-400 leading-relaxed mb-6">
                        {experience.description}
                  </h3>

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
                        
                        {experience.technologies.length > 4 && !showAllTech && (
                        <button
                        onClick={() => setShowAllTech(true)}
                        className="text-sm text-blue-400 hover:text-blue-300 transition"
                        >
                        +{experience.technologies.length - 4} más
                        </button>
                        )}
                  </div>
                  </div>

                  <div className="flex">

                        <img className="w-64 h-72 mx-10 rounded-xl" src={experience.images[0]} alt="" />
                        <img className="w-64 h-72 mx-10 rounded-xl" src={experience.images[1]} alt="" />
                  </div>

            </div>
      );
}