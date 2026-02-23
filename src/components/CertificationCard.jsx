export default function CertificationCard({ certification }) {
  return (
    <a 
      href={certification.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-all hover:scale-105 block"
    >
      <div className="flex items-center gap-4">
        <div className="bg-slate-700 p-3 rounded-lg">
          <certification.icon 
            style={{ color: certification.color }} 
            size={28}
          />
        </div>
        
        <div>
          <h4 className="font-semibold text-white">
            {certification.name}
          </h4>
          <p className="text-sm text-slate-400 mt-1">
            {certification.issuer} • {certification.date}
          </p>
        </div>
      </div>
    </a>
  );
}