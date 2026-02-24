import { useState } from "react";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function ExperienceCard({ experience }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const visibleTechnologies = showAllTech 
    ? experience.technologies 
    : experience.technologies.slice(0, 4);

  const shortDescription = experience.description.length > 200 
    ? `${experience.description.substring(0, 200)}...` 
    : experience.description;

  return (
    <div className="bg-slate-900 rounded-2xl mb-5 p-8 hover:scale-[1.02] transition-all duration-300 shadow-lg flex flex-col h-full border border-slate-800 hover:border-blue-500/30">
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {experience.role}
          </h2>
          
          <a 
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-1 group"
          >
            <span className="text-lg font-medium">{experience.company}</span>
            <FiExternalLink size={16} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <a
          href={experience.document} 
          download="Carta_Recomendacion_Christopher_CloudTeen.pdf"
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all group"
          title="Descargar carta de recomendación"
        >
          <HiOutlineDocumentText size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-sm hidden sm:inline">{experience.type_document}</span>
          <FiDownload size={16} className="group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Fecha y ubicación en badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20">
          📅 {experience.date}
        </span>
        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/20">
          📍 {experience.location}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-slate-400 leading-relaxed">
          {showFullDescription ? experience.description : shortDescription}
        </p>
        {experience.description.length > 200 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors"
          >
            {showFullDescription ? "Ver menos" : "Ver más"}
          </button>
        )}
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-slate-500 mb-3">Tecnologías utilizadas</h4>
        <div className="flex flex-wrap gap-3">
          {visibleTechnologies.map((tech, index) => (
            <div
              key={index}
              className="group relative"
              title={tech.name}
            >
              <div className="bg-slate-800/50 p-2 rounded-lg hover:bg-slate-800 transition-all hover:scale-110">
                <tech.icon 
                  size={24} 
                  style={{ color: tech.color }}
                />
              </div>
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                {tech.name}
              </span>
            </div>
          ))}
          
          {experience.technologies.length > 4 && !showAllTech && (
            <button
              onClick={() => setShowAllTech(true)}
              className="bg-slate-800/50 hover:bg-slate-800 text-blue-400 px-3 py-2 rounded-lg text-sm transition-all hover:scale-105"
            >
              +{experience.technologies.length - 4} más
            </button>
          )}
        </div>
      </div>

      {/* Imágenes del proyecto */}
      {experience.images && experience.images.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-800">
          <h4 className="text-sm font-medium text-slate-500 mb-3">Capturas del proyecto</h4>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            {experience.images.map((img, index) => (
              <img 
                key={index}
                className="w-48 h-36 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer border-2 border-slate-700 hover:border-blue-500/50"
                src={img} 
                alt={`Proyecto en ${experience.company} - Imagen ${index + 1}`}
                onClick={() => window.open(img, '_blank')}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}