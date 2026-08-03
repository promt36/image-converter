"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const toolGroups = [
  {
    label: "JPG Tools",
    links: [
      { label: "JPG to PNG", href: "/jpg-to-png" },
      { label: "JPG to WEBP", href: "/jpg-to-webp" },
      { label: "JPG to AVIF", href: "/jpg-to-avif" },
    ],
  },
  {
    label: "PNG Tools",
    links: [
      { label: "PNG to JPG", href: "/png-to-jpg" },
      { label: "PNG to WEBP", href: "/png-to-webp" },
      { label: "PNG to AVIF", href: "/png-to-avif" },
    ],
  },
  {
    label: "WEBP Tools",
    links: [
      { label: "WEBP to JPG", href: "/webp-to-jpg" },
      { label: "WEBP to PNG", href: "/webp-to-png" },
      { label: "WEBP to AVIF", href: "/webp-to-avif" },
    ],
  },
  {
    label: "AVIF Tools",
    links: [
      { label: "AVIF to JPG", href: "/avif-to-jpg" },
      { label: "AVIF to PNG", href: "/avif-to-png" },
      { label: "AVIF to WEBP", href: "/avif-to-webp" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileToolsOpen(false);
  }

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-blue-600"
            >
              Image Tools
              <span className="text-xs">▼</span>
            </button>

            <div className="invisible absolute right-0 top-full mt-4 w-[620px] translate-y-2 rounded-3xl border border-slate-200 bg-white p-6 opacity-0 shadow-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-6">
                {toolGroups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-3 text-xs font-black uppercase tracking-wider text-slate-400">
                      {group.label}
                    </p>

                    <div className="space-y-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <Link
                  href="/tools"
                  className="inline-flex items-center font-black text-blue-600 hover:text-blue-800"
                >
                  View all image tools →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/tools" className="transition hover:text-blue-600">
            All Tools
          </Link>

          <Link href="/about" className="transition hover:text-blue-600">
            About
          </Link>

          <Link href="/contact" className="transition hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-2xl font-black md:hidden"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 md:hidden">
          <nav className="mx-auto max-w-6xl space-y-2 pt-4 text-sm font-semibold">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>

            <button
              type="button"
              onClick={() => setMobileToolsOpen((current) => !current)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-blue-50 hover:text-blue-600"
            >
              <span>Image Tools</span>
              <span>{mobileToolsOpen ? "−" : "+"}</span>
            </button>

            {mobileToolsOpen && (
              <div className="space-y-5 rounded-2xl bg-slate-50 p-4">
                {toolGroups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-xs font-black uppercase tracking-wider text-slate-400">
                      {group.label}
                    </p>

                    <div className="space-y-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/tools"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              All Tools
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}