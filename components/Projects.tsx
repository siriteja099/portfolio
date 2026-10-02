import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work"
          lead="Production backends built with Django REST Framework and AWS."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6">
                <p className="eyebrow">{p.label}</p>
                <h3 className="mt-2 text-xl font-semibold leading-snug">{p.name}</h3>
                <p className="mt-3 text-sm text-muted">{p.description}</p>
                <p className="mt-4 text-sm">
                  <span className="text-muted">Role: </span>
                  <span className="font-medium">{p.role}</span>
                </p>

                <ul className="mt-4 space-y-2.5 text-sm text-ink/90">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-2.5 shrink-0 rounded bg-accent" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
