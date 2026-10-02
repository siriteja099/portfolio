import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools I work with"
          lead="Backend development, databases and cloud — the stack I use in production."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 70}>
              <div className="card card-hover h-full p-6">
                <h3 className="mb-4 font-semibold">{g.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
