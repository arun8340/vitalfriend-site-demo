"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import BookingModal from "./BookingModal";

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
  // const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <div className="rounded-md bg-[#FFFFFFE3] px-[7.5px] py-3 backdrop-blur-[7.5px]">
        <div className="mx-auto flex h-[49.134px] w-full max-w-356.25 items-center justify-between px-4 lg:px-35.5">
          {/* Logo */}
          <Link href="/" className="flex h-[49.134px] w-56.25 shrink-0 items-center">
            <Image
              src="/images/full-logo.svg"
              alt="VitalFriend"
              width={225}
              height={49}
              className="h-auto w-full"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden h-[37.5px] items-center gap-4.5 lg:flex">
            {/* Get a Vital Buddy button — commented out, add back later
            <button
              onClick={() => setModalOpen(true)}
              className="flex h-[37.5px] w-34.25 items-center justify-center whitespace-nowrap rounded-md border-[1.5px] border-[#E15D77] px-4.5 py-3 text-[#E15D77] transition-colors hover:bg-[#E15D77] hover:text-white"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, lineHeight: "18px", letterSpacing: 0 }}
            >
              Get a Vital Buddy
            </button>
            */}
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex h-[37.5px] items-center whitespace-nowrap border-b-2 transition-colors ${
                    isActive ? "border-[#E15D77] text-[#E15D77]" : "border-transparent text-[#18181B] hover:text-[#E15D77]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, lineHeight: "18px", letterSpacing: 0 }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="ml-auto p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute left-[7.5px] right-[7.5px] top-18.25 flex flex-col rounded-b-lg border-t border-border bg-white px-6 pb-5 pt-3 shadow-lg lg:hidden">
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
          {/* Get a Vital Buddy button (mobile) — commented out, add back later
          <div className="mt-4 flex flex-col gap-3">
            <button
              className="border-2 border-[#E5476C] text-[#E5476C] rounded-md px-5 py-2.5 text-center transition-colors hover:bg-[#E5476C] hover:text-white"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: "24px" }}
              onClick={() => { setMenuOpen(false); setModalOpen(true); }}
            >
              Get a Vital Buddy
            </button>
          </div>
          */}
        </div>
      )}

      {/* <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}
    </header>
  );
}
