"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { MouseEvent } from "react";

const links = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#uzmanlik", label: "Hizmetler" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/50 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden className="shrink-0">
            <rect x="2" y="2" width="44" height="44" rx="8" className="fill-[var(--fg)]" />
            <path d="M14 34L24 14L34 34" stroke="#BFA36F" strokeWidth="2.5" />
            <path d="M18 30H30" stroke="#ffffff" strokeWidth="2" />
          </svg>
          <div className="leading-tight">
            <span className="block font-serif text-xl tracking-wide">Alkan Hukuk</span>
            <span className="block text-xs text-gray-500 dark:text-gray-400">Avukatlık ve Danışmanlık</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                if (l.href.startsWith('#')) {
                  e.preventDefault();
                  const id = l.href.substring(1);
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={clsx("relative px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
