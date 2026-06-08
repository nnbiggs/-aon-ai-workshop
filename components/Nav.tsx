"use client";

import { useEffect, useState } from "react";
import AonLogo from "@/components/AonLogo";

const links = [
  { href: "#purpose", label: "Purpose" },
  { href: "#agenda", label: "Agenda" },
  { href: "#75-days", label: "75 Days" },
  { href: "#lessons", label: "Lessons" },
  { href: "#embedding", label: "Embedding" },
  { href: "#impact", label: "Impact" },
  { href: "#outcomes", label: "Outcomes" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav-blur sticky top-0 z-50 h-nav w-full border-b border-border">
      <div className="content-wrap flex h-full items-center justify-between gap-3">
        <a href="#" className="shrink-0">
          <AonLogo height={18} className="text-white sm:hidden" />
          <AonLogo height={20} className="hidden text-white sm:block" />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="nav-blur-solid fixed inset-x-0 top-nav max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-border md:hidden"
        >
          <ul className="content-wrap flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link block py-3.5 text-base"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
