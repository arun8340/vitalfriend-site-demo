"use client";

import Link from "next/link";
import Image from "next/image";

const informationLinks = [
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/careers", label: "Careers" },
  { href: "/contactUs", label: "Contact us" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vitalfriend",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vitalfriend",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/vitalfriend",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "24px",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
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
  return (
    <footer style={{ background: "linear-gradient(248.18deg, #FFF3F8 -1.14%, #F2F7FE 98.56%)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-y-10 gap-x-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="http://vitalfriend.com/wp-content/uploads/2025/07/cropped-Group-561.png"
                alt="VitalFriend"
                width={140}
                height={32}
                unoptimized
              />
            </Link>
            <p style={{ ...linkStyle, color: "#404655", lineHeight: "26px", maxWidth: 260 }}>
              AI powered vitals monitoring for seniors, their homes, their doctors and their families.
            </p>

            {/* HIPAA Badge — replace src with your image path */}
            <div>
              <Image
                src="/images/hipaa-badge.png"
                alt="HIPAA Compliant"
                width={120}
                height={72}
                unoptimized
              />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-75"
                  style={{ backgroundColor: "#1F2937" }}
                >
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
                <Link
                  key={link.label}
                  href={link.href}
                  style={linkStyle}
                  className="text-[#404655] hover:text-[#E5476C] transition-colors"
                >
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
                <Link
                  key={link.label}
                  href={link.href}
                  style={linkStyle}
                  className="text-[#404655] hover:text-[#E5476C] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Keep in Touch */}
          <div className="flex flex-col">
            <p style={headingStyle}>Keep in Touch</p>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#EFF6FF" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <a
                    href="mailto:support@vitalfriend.com"
                    style={{ ...linkStyle, color: "#111827", fontWeight: 500 }}
                    className="hover:text-[#E5476C] transition-colors"
                  >
                    support@vitalfriend.com
                  </a>
                  <span style={{ ...linkStyle, color: "#9CA3AF", fontSize: 12 }}>
                    We&apos;ll respond within 24 hours
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#EFF6FF" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <a
                  href="tel:+18557427300"
                  style={{ ...linkStyle, color: "#111827", fontWeight: 500 }}
                  className="hover:text-[#E5476C] transition-colors"
                >
                  1 (855) 742 7300
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-5 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={bottomTextStyle}>Copyright &copy; {new Date().getFullYear()} - VitalFriend</p>
          <div className="flex items-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                style={bottomTextStyle}
                className="hover:text-[#E5476C] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
