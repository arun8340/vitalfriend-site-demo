"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/devices-vitals", label: "BUDDI\u00AE Device" },
  { href: "/alfs", label: "Facilities" },
  { href: "/physicians", label: "Physicians" },
  { href: "/families", label: "Families" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-[--color-border] sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="http://vitalfriend.com/wp-content/uploads/2025/07/cropped-Group-561.png"
            alt="VitalFriend"
            width={160}
            height={36}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[--color-foreground] font-medium text-[15px] px-4 py-2 rounded-md hover:text-[--color-primary] hover:bg-[--color-surface] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-[--color-primary] text-white font-semibold text-[15px] px-6 py-2.5 rounded-[var(--radius-sm)] hover:bg-[--color-primary-hover] transition-all duration-200"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-[--color-surface] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-[--color-border] bg-white px-4 pb-6 pt-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[--color-foreground] font-medium text-base py-3 px-4 rounded-lg hover:bg-[--color-surface] hover:text-[--color-primary] transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="block bg-[--color-primary] text-white font-semibold text-base py-3 rounded-[var(--radius-sm)] text-center hover:bg-[--color-primary-hover] transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
