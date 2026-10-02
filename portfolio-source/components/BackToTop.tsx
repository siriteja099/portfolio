"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "./Icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`no-print fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-accent text-on-accent shadow-lg transition-all ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp />
    </a>
  );
}
