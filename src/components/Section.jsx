import Reveal from "./Reveal";

export default function Section({ id, index, label, title, lead, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-28">
      <Reveal>
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-3">
            {index} · {label}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {lead && <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{lead}</p>}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
