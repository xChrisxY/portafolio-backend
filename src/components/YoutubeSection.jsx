import { FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { videos, thumb, channelUrl } from "../data/videos";

export default function YoutubeSection() {
  return (
    <Section
      id="youtube"
      index="04"
      label="Contenido"
      title="YouTube · ChrisDev"
      lead="Enseñar es la mejor forma de dominar un tema: arquitectura, seguridad y concurrencia explicados desde cero."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video, i) => (
          <Reveal key={video.id} delay={(i % 3) * 90}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group block h-full overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={thumb(video.id)}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink-950/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <FaYoutube size={44} className="text-red-500 drop-shadow-lg" />
                </span>
              </div>

              <div className="p-5">
                <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-white">
                  {video.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
                  {video.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {video.skills.map((skill) => (
                    <span key={skill} className="chip !px-2 !py-0.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-12 text-center">
          <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FaYoutube size={18} />
            Ver todos los videos
            <FiExternalLink size={14} />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
