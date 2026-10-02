import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Award } from "./Icons";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="06 — Certifications" title="Credentials" />
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <article className="card card-hover flex h-full gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Award />
                </span>
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-accent">{c.issuer}</p>
                  <p className="mt-2 text-sm text-muted">{c.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
