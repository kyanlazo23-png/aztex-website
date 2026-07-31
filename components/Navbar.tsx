"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Schedule", href: "/schedule" },
  { label: "Retirement Calculator", href: "/retirement-calculator" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-white-warm)]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
        <Link href="/" className="text-base font-semibold uppercase tracking-[0.32em] text-[color:var(--color-navy)]">
          AZTEX
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-charcoal)] transition-colors duration-200 hover:text-[color:var(--color-navy)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-charcoal)]/10 text-[color:var(--color-charcoal)] transition-colors duration-200 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex h-5 w-5 flex-col justify-between">
            <span className="block h-[2px] w-full bg-current" />
            <span className="block h-[2px] w-full bg-current" />
            <span className="block h-[2px] w-full bg-current" />
          </div>
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-white-warm)] p-6 md:hidden">
          <div className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-[color:var(--color-charcoal)] transition-colors duration-200 hover:text-[color:var(--color-navy)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
