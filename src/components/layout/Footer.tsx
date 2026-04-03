"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const informationLinks = [
  { href: "/support", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
  { href: "/platform", label: "Accelerate" },
];

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/careers", label: "Careers" },
  { href: "/contactUs", label: "Contact us" },
  { href: "/media", label: "Lift Media" },
];

const socialIcons = [
  {
    label: "Dribbble",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon fill="white" stroke="none" points="10 15 15 12 10 9 10 15"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "24px",
  color: "#404655",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: "24px",
  color: "#111827",
  marginBottom: 16,
};

const bottomTextStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 13,
  fontWeight: 400,
  color: "#9CA3AF",
};

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "linear-gradient(248.18deg, #FFF3F8 -1.14%, #F2F7FE 98.56%)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-y-10 gap-x-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="http://vitalfriend.com/wp-content/uploads/2025/07/cropped-Group-561.png"
                alt="VitalFriend"
                width={140}
                height={32}
                unoptimized
              />
            </Link>
            <p style={{ ...linkStyle, lineHeight: "26px", maxWidth: 240 }}>
              AI -powered vitals monitoring for Assisted Living Facilities.
            </p>
            <div className="flex items-center gap-2.5 mt-2">
              {socialIcons.map(({ label, svg }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-75"
                  style={{ backgroundColor: "#404655" }}>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col">
            <p style={headingStyle}>Information</p>
            <div className="flex flex-col gap-3">
              {informationLinks.map((link) => (
                <Link key={link.label} href={link.href} style={{ ...linkStyle, color: undefined }} className="text-[#404655] hover:text-[#E5476C] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <p style={headingStyle}>Company</p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href} style={{ ...linkStyle, color: undefined }} className="text-[#404655] hover:text-[#E5476C] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col">
            <p style={headingStyle}>Subscribe</p>
            <div className="flex items-center bg-white rounded-xl border border-[#e5e7eb] overflow-hidden pr-1.5 pl-3 mb-5" style={{ height: 48 }}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none placeholder-[#9ca3af]"
                style={linkStyle}
              />
              <button type="button" aria-label="Subscribe"
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#E5476C" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
            <div className="flex items-start gap-2.5 mb-3.5">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span style={linkStyle}>1218 Mateo Miller Cir, San Ramon, CA 94583</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+18557427300" style={linkStyle} className="hover:text-[#E5476C] transition-colors">
                1 (855) 742 7300
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-5 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={bottomTextStyle}>Copyright @ {new Date().getFullYear()} - vitalfriend</p>
          <div className="flex items-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((label) => (
              <Link key={label} href={`/${label.toLowerCase()}`}
                style={{ ...bottomTextStyle, color: undefined }}
                className="text-[#9CA3AF] hover:text-[#E5476C] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
