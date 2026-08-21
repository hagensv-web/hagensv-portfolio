'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume"},
    { label: "Blog", href: "/blog" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-green-700 dark:bg-green-900 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-16 px-4 sm:px-6 lg:px-8 justify-between md:justify-normal">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          HagenSV
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 transition hover:bg-gray-100/20 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col text-gray-700 bg-gray-100 dark:bg-zinc-800 dark:text-gray-100 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 transition hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}