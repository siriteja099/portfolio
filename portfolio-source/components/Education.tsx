import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section bg-soft">
      <div className="container-x">
        <SectionHeading eyebrow="05 — Education" title="Academic background" />
        <Reveal>
          <article className="card flex flex-wrap items-start justify-between gap-4 p-6 sm:p-8">
            <div>
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-accent">{education.field}</p>
              <p className="mt-3 text-muted">
                {education.school} · {education.university}
              </p>
            </div>
            <p className="font-mono text-sm text-accent">{education.year}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
