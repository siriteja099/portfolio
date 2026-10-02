"use client";
import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "./Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Static sites have no server, so the form composes an email in the visitor's mail app.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-base outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

  const rows = [
    { icon: <Mail />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone />, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: <MapPin />, label: "Location", value: profile.location },
    { icon: <Linkedin />, label: "LinkedIn", value: "linkedin.com/in/siriteja", href: profile.linkedin, ext: true },
    { icon: <Github />, label: "GitHub", value: "github.com/siriteja", href: profile.github, ext: true },
  ];

  return (
    <section id="contact" className="section bg-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's work together"
          lead="Open to backend and software engineering opportunities. Send a message or reach out directly."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="card divide-y divide-line">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    {r.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">{r.label}</p>
                    {r.href ? (
                      <a
                        href={r.href}
                        {...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="break-words font-medium hover:text-accent"
                      >
                        {r.value}
                      </a>
                    ) : (
                      <p className="font-medium">{r.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={field}
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Send /> Send message
              </button>
              <p className="text-xs text-muted" role="status" aria-live="polite">
                {sent
                  ? "Your email app should have opened with the message ready to send. If not, write to " +
                    profile.email +
                    " directly."
                  : "This opens your email app with the message pre-filled."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
