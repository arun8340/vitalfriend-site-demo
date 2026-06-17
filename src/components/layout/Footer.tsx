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
  // {
  //   label: "Facebook",
  //   href: "https://www.facebook.com/vitalfriend",
  //   svg: (
  //     <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
  //       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  //     </svg>
  //   ),
  // },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "28px",
  letterSpacing: 0,
};

const headingStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "28px",
  color: "#111827",
  marginBottom: 32,
  letterSpacing: 0,
};

const bottomTextStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "28px",
  color: "#404655",
  letterSpacing: 0,
};

export default function Footer() {
  return (
    <footer
      className="px-6 pb-10 pt-20 lg:px-28"
      style={{
        background:
          "linear-gradient(248.18deg, #FFF3F8 -1.14%, #F2F7FE 98.56%)",
      }}
    >
      <div className="mx-auto flex max-w-[1344px] flex-col gap-[35px]">
        <div className="grid min-h-[304px] grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-[402px_309px_242px] lg:justify-between">
          {/* Brand */}
          <div className="flex min-h-[304px] flex-col gap-[54px] lg:border-r lg:border-[#E1E3E8] lg:pr-14">
            <Link href="/">
              <Image
                src="/images/full-logo.svg"
                alt="VitalFriend"
                width={188}
                height={41}
              />
            </Link>

            <div className="flex flex-col gap-[27px]">
              <p style={{ ...linkStyle, color: "#404655", maxWidth: 360 }}>
                Continuous vital signs monitoring for seniors, their homes,
                their doctors and their families.
              </p>

              <Image
                src="/images/hipaa-badge.png"
                alt="HIPAA Compliant"
                width={116}
                height={66}
                unoptimized
              />

              <div className="flex h-8 w-28 items-center gap-2">
                {socialLinks.map(({ label, href, svg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-[#596174] transition-opacity hover:opacity-75"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-[122px] lg:min-h-[170px] lg:border-l lg:border-[#E1E3E8] lg:pl-12">
            {/* Information */}
            <div className="flex w-[101px] flex-col gap-0">
              <p style={headingStyle}>Information</p>
              <div className="flex flex-col gap-1">
                {informationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={linkStyle}
                    className="text-[#5F6675] transition-colors hover:text-[#E15D77]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex w-[86px] flex-col gap-0">
              <p style={headingStyle}>Company</p>
              <div className="flex flex-col gap-1">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={linkStyle}
                    className="text-[#5F6675] transition-colors hover:text-[#E15D77]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Keep in Touch */}
          <div className="flex w-[242px] max-w-full flex-col">
            <p style={headingStyle}>Keep in Touch</p>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#DCEBFF]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4D9AF1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <a
                    href="mailto:support@vitalfriend.com"
                    style={{
                      ...linkStyle,
                      color: "#5F6675",
                      fontWeight: 500,
                      lineHeight: "24px",
                    }}
                    className="transition-colors hover:text-[#E15D77]"
                  >
                    support@vitalfriend.com
                  </a>
                  <span
                    style={{
                      ...linkStyle,
                      color: "#8A91A0",
                      fontSize: 13,
                      lineHeight: "20px",
                    }}
                  >
                    We&apos;ll respond within 24 hours
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#DCEBFF]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4D9AF1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <a
                  href="tel:+18557427300"
                  style={{
                    ...linkStyle,
                    color: "#5F6675",
                    fontWeight: 500,
                    lineHeight: "24px",
                  }}
                  className="transition-colors hover:text-[#E15D77]"
                >
                  1 (855) 742 7300
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex min-h-[60px] flex-col items-center justify-between gap-3 border border-[#E1E3E8] px-0 py-[15px] sm:flex-row">
          <p style={bottomTextStyle}>
            Copyright &copy; {new Date().getFullYear()} - VitalFriend
          </p>
          {/* <div className="flex items-center gap-10">
            {["Terms", "Privacy", "Cookies"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                style={bottomTextStyle}
                className="transition-colors hover:text-[#E15D77]"
              >
                {label}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
