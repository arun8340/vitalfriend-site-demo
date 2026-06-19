"use client";

import Link from "next/link";
import Image from "next/image";

const informationLinks = [
  { href: "/support", label: "Support" },
  // { href: "/faq", label: "FAQ" },
];

const companyLinks = [
  { href: "/about", label: "About us" },
  // { href: "/careers", label: "Careers" },
  { href: "/contactUs", label: "Contact us" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vitalfriend",
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vitalfriend",
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  // {
  //   label: "Facebook",
  //   href: "https://www.facebook.com/vitalfriend",
  //   svg: (
  //     <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
  //       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  //     </svg>
  //   ),
  // },
];

const navLinkStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "100%",
  color: "#404655",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 13.5,
  fontWeight: 600,
  lineHeight: "100%",
  color: "#2A2F39",
};

export default function Footer() {
  return (
    <footer
      className="pb-7.5 pt-8"
      style={{ background: "linear-gradient(248.18deg, #FFF3F8 -1.14%, #F2F7FE 98.56%)" }}
    >
      <div className="mx-auto flex w-full max-w-356.25 flex-col gap-[26.25px] px-4 lg:px-35.5">

        {/* Above divider */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-0">

          {/* Logo and description */}
          <div className="flex w-full flex-col gap-4 border-b border-[#E1E3E8] pb-6 lg:w-82 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <Link href="/">
              <Image
                src="/images/full-logo.svg"
                alt="VitalFriend"
                width={141}
                height={31}
              />
            </Link>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 400, lineHeight: "21px", color: "#404655", maxWidth: 301.5 }}>
              VitalFriend provides medical-grade vitals monitoring that protects aging parents and clinical patients around the clock, around the world.
            </p>
          </div>

          {/* Information and Company */}
          <div className="flex w-full gap-[91.5px] lg:w-[231.5px]">
            <div className="flex flex-col gap-6">
              <p style={sectionHeadingStyle}>Information</p>
              <div className="flex flex-col gap-2.25">
                {informationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={navLinkStyle}
                    className="transition-colors hover:text-[#E15D77]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p style={sectionHeadingStyle}>Company</p>
              <div className="flex flex-col gap-2.25">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={navLinkStyle}
                    className="transition-colors hover:text-[#E15D77]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Keep in Touch */}
          <div className="flex w-full flex-col gap-6 lg:w-[181.5px]">
            <p style={{ fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif", fontSize: 13.5, fontWeight: 600, lineHeight: "100%", color: "#20232B" }}>
              Keep in Touch
            </p>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#DCEBFF]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#4D9AF1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <a
                  href="mailto:support@vitalfriend.com"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 400, lineHeight: "19.5px", color: "#404655" }}
                  className="transition-colors hover:text-[#E15D77]"
                >
                  support@vitalfriend.com
                </a>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 400, lineHeight: "21px", color: "#7B7777" }}>
                  We&apos;ll respond within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-[#E1E3E8] pt-3 pb-3 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright + HIPAA badge */}
          <div className="flex items-center gap-3">
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 10.5, fontWeight: 400, lineHeight: "100%", color: "#404655" }}>
              Copyright &copy; {new Date().getFullYear()} - VitalFriend
            </p>
            <Image
              src="/images/hipaa-badge.png"
              alt="HIPAA Compliant"
              width={69}
              height={39}
              unoptimized
            />
          </div>

          {/* Terms + Social: grouped together */}
          <div className="flex w-full items-center justify-between sm:w-auto sm:gap-5">

            {/* Terms / Privacy / Cookies */}
            {/* <div className="flex items-center gap-5">
              {[
                { href: "/terms", label: "Terms" },
                { href: "/privacy", label: "Privacy" },
                { href: "/cookies", label: "Cookies" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 10.5, fontWeight: 400, lineHeight: "100%", color: "#404655" }}
                  className="transition-colors hover:text-[#E15D77]"
                >
                  {label}
                </Link>
              ))}
            </div> */}

            {/* Terms link */}
            <Link
              href="/terms"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 10.5, fontWeight: 400, lineHeight: "100%", color: "#404655" }}
              className="transition-colors hover:text-[#E15D77]"
            >
              Terms
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-6 w-6 items-center justify-center rounded-md bg-[#555E72] transition-opacity hover:opacity-75"
                >
                  {svg}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
