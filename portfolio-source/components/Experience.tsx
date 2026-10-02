import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section bg-soft">
      <div className="container-x">
        <SectionHeading eyebrow="03 — Experience" title="Where I've worked" />
        <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-10">
          {experience.map((e) => (
            <li key={e.role} className="relative">
              <span
                className="absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-[var(--bg-soft)] sm:-left-[2.95rem]"
                aria-hidden="true"
              />
              <Reveal>
                <article className="card p-6 sm:p-8">
                  <header className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{e.role}</h3>
                    <p className="font-mono text-sm text-accent">{e.period}</p>
                  </header>
                  <p className="mt-1 text-sm text-muted">{e.duration}</p>

                  <ul className="mt-6 space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[0.95rem] text-ink/90">
                        <span className="mt-2.5 h-1 w-3 shrink-0 rounded bg-accent" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {e.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
