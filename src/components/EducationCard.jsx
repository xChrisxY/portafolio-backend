import { MdDateRange, MdSchool } from "react-icons/md";
import { useState } from "react";
import { SiCisco,SiAmazonwebservices} from "react-icons/si";

export default function EducationCard({ education }) {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const visibleCourses = showAllCourses 
    ? education.courses 
    : education.courses.slice(0, 6);

  const awsCourses = education.courses.filter(c => c.category === 'aws');
  const ciscoCourses = education.courses.filter(c => c.category === 'cisco');

  return (
    <div className="bg-slate-900 rounded-2xl p-8 shadow-lg mb-8 hover:shadow-xl transition-shadow">
      
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-blue-500/20 p-4 rounded-xl">
          <education.icon className="text-blue-400" size={32} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white">
            {education.institution}
          </h3>
          
          <p className="text-xl text-blue-400 mt-1">
            {education.degree}
          </p>
          
          <div className="flex items-center gap-2 mt-2 text-slate-400">
            <MdDateRange size={18} />
            <span>{education.period}</span>
          </div>
        </div>
      </div>

      {/* Cursos Relevantes */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-slate-300 mb-4">
          Cursos Relevantes
        </h4>

        {awsCourses.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <SiAmazonwebservices className="text-[#FF9900]" size={24} />
              <h5 className="text-md font-medium text-slate-300">AWS Academy</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {awsCourses.map((course, index) => (
                        <a 
                              key={index}
                              href={course.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg hover:bg-slate-800 transition-all hover:scale-[1.02] group"
                        >
                        <SiAmazonwebservices 
                              style={{ color: course.color }} 
                              size={20}
                              className="group-hover:scale-110 transition-transform"
                        />
                        <span className="text-slate-300 text-sm group-hover:text-white transition-colors flex-1">
                              {course.name}
                        </span>
                        <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        </a>
                  ))}
            </div>
          </div>
        )}

        {ciscoCourses.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SiCisco className="text-[#1BA0D7]" size={24} />
              <h5 className="text-md font-medium text-slate-300">Cisco Networking Academy</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ciscoCourses.map((course, index) => (
                        <a 
                              key={index}
                              href={course.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg hover:bg-slate-800 transition-all hover:scale-[1.02] group"
                        >
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <course.icon 
                    style={{ color: course.color }} 
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    {course.name}
                  </span>
                </div>
                        <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Estadísticas */}
      <div className="mt-6 pt-6 border-t border-slate-800">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <SiAmazonwebservices className="text-[#FF9900]" size={20} />
            <span className="text-slate-400">
              {awsCourses.length} cursos AWS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SiCisco className="text-[#1BA0D7]" size={20} />
            <span className="text-slate-400">
              {ciscoCourses.length} cursos Cisco
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}