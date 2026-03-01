import { FaYoutube } from "react-icons/fa";
import { videos } from "../data/videos";

export default function YoutubeCard() {

  return (
    <section className="w-full px-16 pb-14 bg-slate-900">
      <h2 className="text-4xl font-bold mb-16 text-center">
        <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
          Videos 📹
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
          >
            {/* Miniature */}
            <div className="relative aspect-video">
              <img 
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${video.url.split('/').pop()}/hqdefault.jpg`;
                }}
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                {video.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                {video.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {video.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Link al canal */}
      <div className="text-center mt-12">
        <a
          href="https://www.youtube.com/@christophermoreno2429"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full transition-all font-medium"
        >
          <FaYoutube size={20} />
          Ver más en mi canal
        </a>
      </div>
    </section>
  );
}