import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import { experiencie } from "./data/experience";
import { education } from "./data/education";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";

export default function App() {
  return (
    <div className="bg-slate-950 text-gray-200 w-full">

      {/* HERO */}
      <section className="w-full flex flex-col lg:flex-row">

        <div className="lg:w-1/2 flex flex-col items-center justify-center p-16 bg-slate-900">
          <img
            className="w-66 h-96 object-cover rounded-2xl shadow-2xl"
            src="https://res.cloudinary.com/dv01nd8nv/image/upload/v1771872890/me_wugizv.jpg"
            alt="Christopher Moreno"
          />

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a href="https://www.linkedin.com/in/xchrisxy/" className="hover:text-white transition">
              <FaLinkedin size={56} />
            </a>
            <a href="https://github.com/xChrisxY" className="hover:text-white transition">
              <FaGithub size={56} />
            </a>
            <a href="https://www.youtube.com/@christophermoreno2429n" className="hover:text-white transition">
              <FaYoutube size={56} />
            </a>
            <a href="mailto:christopheryahirm@gmail.com" className="hover:text-white transition">
              <MdEmail size={56} />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center p-20">
          <h1 className="text-5xl font-bold leading-tight">
            Christopher Moreno
          </h1>

          <p className="text-xl text-slate-400 mt-4">
            Java Backend Engineer | Software Engineer | Python Developer
          </p>

          <p className="mt-8 text-slate-300 leading-relaxed max-w-xl text-justify">
            ¡Hola! 👋 Soy Christopher Yahir, Ingeniero de Software y Desarrollador Backend con más de 3 años de experiencia desarrollando aplicaciones web modernas a través de proyectos profesionales, académicos y personales.
            Soy un apasionado por la construcción de sistemas escalables y seguros utilizando FastAPI + Django + Flask + Spring Boot complementando con herramientas DevOps como Docker, Kubernetes y AWS. <br />
            Me enfoco en la seguridad, una arquitectura limpia, diseño de base de datos y de API RESTful, además de la integración con frontents modernos.
            He trabajado en proyectos que van desde sistemas basados en IoT y plataformas de telemonitorización médica hasta aplicaciones web de gestión financiera y turismo, entregando soluciones de software fiables y de alto rendimiento. <br />
            En resumen, un apasionado desarrollador de software, en constante aprendizaje y con muchas ganas de seguir creciendo profesionalmente.
          </p>
        </div>

      </section>

      {/* EXPERIENCIE */}
      <section className="w-full px-16 py-24 bg-slate-950">
        <h2 className="text-4xl font-bold mb-16 text-center">Experiencia</h2>
        
        <div>
          {experiencie.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>

      </section>


      {/* PROJECTS */}
      <section className="w-full px-16 py-24 bg-slate-950">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="w-full px-16 py-24 bg-slate-900">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Educación y Certificaciones
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </section>

    </div>
  );
}