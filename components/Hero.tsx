import { asset, profile } from "@/lib/data";
import { Download, Github, Linkedin, MapPin } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="inline-block h-px w-8 bg-accent" />
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">{profile.intro}</p>

          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPin className="text-accent" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className="btn btn-primary">
              <Download /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Github />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            className="absolute -inset-3 rounded-[2rem] border border-accent/30"
            style={{ transform: "rotate(3deg)" }}
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-2xl">
            <img
              src={asset("/images/siri-hero.webp")}
              srcSet={`${asset("/images/siri-hero-sm.webp")} 480w, ${asset("/images/siri-hero.webp")} 960w`}
              sizes="(min-width: 768px) 40vw, 90vw"
              alt={`Portrait of ${profile.name}`}
              width={960}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 left-4 right-4 flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm sm:left-auto sm:right-[-0.5rem] sm:w-auto sm:gap-6">
            <span className="font-mono text-xs text-muted">AWS Certified Cloud Practitioner</span>
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
