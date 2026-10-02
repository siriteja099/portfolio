"use client";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { Menu, Close, Sun, Moon } from "./Icons";

export default function Header() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator
  useEffect(() => {
    const els = nav
      .map((n) => document.getElementById(n.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const top = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", top, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", top);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "glass border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight" aria-label={`${profile.name} – back to top`}>
          <span className="text-accent">&lt;</span>
          {profile.shortName}
          <span className="text-accent"> /&gt;</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                active === n.id ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              {n.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform origin-left ${
                  active === n.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-accent"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <a href="#contact" className="btn btn-primary hidden !py-2 text-sm sm:inline-flex">
            Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="glass border-t border-line lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === n.id ? "true" : undefined}
                className={`border-b border-line/60 py-3.5 text-lg ${
                  active === n.id ? "text-accent" : "text-ink"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a href={profile.resume} download className="btn btn-primary mt-5 justify-center">
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
