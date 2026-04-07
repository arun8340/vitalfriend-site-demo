import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See how the VitalFriend® platform fits alongside your existing systems — and saves you time, money, and manpower.",
  alternates: { canonical: "https://vitalfriend.com/demo" },
  openGraph: { url: "https://vitalfriend.com/demo" },
};

const reasons = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.41L5.59 10 7 8.59l2 2 5-5L15.41 7 9 13.41z" fill="currentColor"/>
      </svg>
    ),
    text: "Built for elder care management and traceability",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.41L5.59 10 7 8.59l2 2 5-5L15.41 7 9 13.41z" fill="currentColor"/>
      </svg>
    ),
    text: "Seamless device integration and simple insurance submission",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.41L5.59 10 7 8.59l2 2 5-5L15.41 7 9 13.41z" fill="currentColor"/>
      </svg>
    ),
    text: "Actionable data your team can trust",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.41L5.59 10 7 8.59l2 2 5-5L15.41 7 9 13.41z" fill="currentColor"/>
      </svg>
    ),
    text: "Happier staff, connected care teams, safer residents",
  },
];

const inputClass =
  "w-full border border-[--color-border] rounded-[var(--radius-sm)] px-4 py-2.5 text-[15px] bg-white text-[--color-dark] placeholder:text-[--color-muted] focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-shadow";

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <Section background="surface" className="py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="pill mb-5 inline-block">Book a Demo</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[--color-dark] mb-5">
            See VitalFriend® in action
          </h1>
          <p className="text-lg text-[--color-muted] leading-relaxed">
            See how the VitalFriend® platform fits alongside your existing
            systems — and saves you time, money, and manpower.
          </p>
        </div>
      </Section>

      {/* Two-column: reasons + form */}
      <Section background="white" className="py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: reasons */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[--color-dark] mb-3">
              Why facilities choose VitalFriend®
            </h2>
            <p className="text-[--color-muted] mb-8 leading-relaxed">
              A brief, no-pressure walkthrough tailored to your care setting.
              We&apos;ll show you exactly how the platform works from day one.
            </p>

            <ul className="space-y-5 mb-10">
              {reasons.map((reason) => (
                <li key={reason.text} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-0.5 text-[--color-primary]">
                    {reason.icon}
                  </span>
                  <span className="text-[--color-charcoal] font-medium leading-snug">
                    {reason.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Trust strip */}
            <div className="border border-[--color-border] rounded-[var(--radius-md)] p-5 bg-[--color-surface]">
              <p className="text-sm text-[--color-muted] leading-relaxed">
                <span className="font-semibold text-[--color-dark]">
                  No sales pressure.
                </span>{" "}
                Our demos are led by care-focused experts, not salespeople. Ask
                any question — we&apos;re here to help you decide if
                VitalFriend® is the right fit.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full">
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-[--color-dark] mb-1">
                Schedule your free demo
              </h2>
              <p className="text-sm text-[--color-muted] mb-7">
                We typically respond within one business day.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Jane"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@facility.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="facility"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Facility / Organization
                  </label>
                  <input
                    id="facility"
                    type="text"
                    placeholder="Sunrise Senior Living"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Anything you&apos;d like us to know?{" "}
                    <span className="font-normal text-[--color-muted]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your facility, resident count, or any specific questions..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full mt-2">
                  Request Demo
                </Button>

                <p className="text-xs text-center text-[--color-muted] pt-1">
                  By submitting, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="underline hover:text-[--color-primary]"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
