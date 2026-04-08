"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const topBarLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/research", label: "Research" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/news", label: "News" },
  { href: "/certified-facilities", label: "Certified Facilities Directory" },
  { href: "/calculators", label: "Calculators" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/facilities", label: "Facilities" },
  { href: "/physicians", label: "Physicians" },
  { href: "/families", label: "Families" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/contactUs", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar — always solid white */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-10">
          <nav className="hidden md:flex items-center gap-6">
            {topBarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#374151] hover:text-[#E5476C] transition-colors whitespace-nowrap"
                style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "24px" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+18557427300"
            className="text-[#111827] hover:text-[#E5476C] transition-colors whitespace-nowrap ml-auto md:ml-0"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "24px" }}
          >
            Call: 1 (855) 742 7300
          </a>
        </div>
      </div>

      {/* Main nav bar — solid white at top, transparent + blur when scrolled */}
      <div className={`transition-all duration-500 ${scrolled ? "bg-white/10 backdrop-blur-md" : "bg-white shadow-[0_1px_0_0_#e2e8f0]"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-8 h-17">
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

          {/* Desktop nav — pushed to right */}
          <nav className="hidden lg:flex items-center gap-0 ml-auto">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 flex items-center h-17 whitespace-nowrap transition-colors ${
                    isActive ? "text-[#E5476C]" : "text-[#111827] hover:text-[#E5476C]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: "24px" }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E5476C] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Book Demo button */}
            <Link
              href="/scheduleDemo"
              className="ml-5 px-5 py-2 bg-[#E5476C] text-white rounded-md whitespace-nowrap transition-colors hover:bg-[#cc3a5d]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: "24px" }}
            >
              Book Demo
            </Link>

            {/* Login button */}
            <a
              href="https://devfrontend.vitalfrnd.com/FacilityLogin"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 border-2 border-[#E5476C] text-[#E5476C] rounded-md whitespace-nowrap transition-colors hover:bg-[#E5476C] hover:text-white"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: "24px" }}
            >
              Login
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-6 pb-5 pt-3 flex flex-col">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 border-b border-[#f1f5f9] transition-colors ${
                  isActive ? "text-[#E5476C]" : "text-[#111827] hover:text-[#E5476C]"
                }`}
                style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: "24px" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+18557427300"
              className="text-[#374151]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "24px" }}
            >
              Call: 1 (855) 742 7300
            </a>
            <Link
              href="/scheduleDemo"
              className="bg-[#E5476C] text-white rounded-md px-5 py-2.5 text-center transition-colors hover:bg-[#cc3a5d]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: "24px" }}
              onClick={() => setMenuOpen(false)}
            >
              Book Demo
            </Link>
            <a
              href="https://devfrontend.vitalfrnd.com/FacilityLogin"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#E5476C] text-[#E5476C] rounded-md px-5 py-2.5 text-center transition-colors hover:bg-[#E5476C] hover:text-white"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: "24px" }}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
