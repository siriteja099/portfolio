import { nav, profile } from "@/lib/data";
import { Github, Linkedin, Mail } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-x grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-muted">{profile.title}</p>
          <div className="mt-4 flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent">
              <Linkedin />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent">
              <Github />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-accent">
              <Mail />
            </a>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted md:max-w-md md:justify-end">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="container-x mt-10 text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
