import { asset, education, experience, interests, profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section bg-soft">
      <div className="container-x">
        <SectionHeading eyebrow="01 — About" title="Who I am" />
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <Reveal>
            <div className="mx-auto max-w-xs md:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-line">
                <img
                  src={asset("/images/siri-about.webp")}
                  alt={`${profile.name}, smiling`}
                  width={760}
                  height={950}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <p className="text-lg leading-relaxed">{profile.summary}</p>
            </Reveal>

            <Reveal delay={80}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card p-5">
                  <p className="eyebrow mb-2">Career background</p>
                  <p className="font-semibold">{experience[0].role}</p>
                  <p className="text-sm text-muted">
                    {experience[0].period} · {experience[0].duration}
                  </p>
                </div>
                <div className="card p-5">
                  <p className="eyebrow mb-2">Education</p>
                  <p className="font-semibold">{education.degree}</p>
                  <p className="text-sm text-muted">
                    {education.field}, {education.year}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <p className="eyebrow mb-3">Technical interests</p>
              <ul className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <li key={i} className="chip !text-ink/80">
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
