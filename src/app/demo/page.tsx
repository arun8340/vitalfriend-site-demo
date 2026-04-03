import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See how the VitalFriend® platform fits alongside your existing systems — and saves you time, money, and manpower.",
  alternates: { canonical: "https://vitalfriend.com/demo" },
  openGraph: { url: "https://vitalfriend.com/demo" },
};

const reasons = [
  "Built for elder care management and traceability",
  "Seamless device integration and simple insurance submission",
  "Actionable data your team can trust",
  "Happier staff, connected care teams, safer residents",
];

export default function DemoPage() {
  return (
    <Section background="white" className="pt-16">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left: pitch */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-[--color-muted] mb-8">
            See how the VitalFriend® platform fits alongside your existing
            systems — and saves you time, money, and manpower.
          </p>
          <h2 className="text-xl font-bold mb-4">
            Why Facilities Choose VitalFriend®
          </h2>
          <ul className="space-y-3">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3">
                <span className="text-[--color-primary] font-bold text-xl leading-snug">
                  ✓
                </span>
                <p className="text-[--color-muted]">{reason}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: contact form */}
        <div className="flex-1 w-full">
          <div className="bg-[--color-surface] rounded-2xl p-8 border border-[--color-border]">
            <h2 className="text-2xl font-bold mb-2">Schedule Your Free Demo</h2>
            <p className="text-[--color-muted] mb-6 text-sm">
              No pressure. No long forms. Just a quick walkthrough tailored to
              your needs.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full border border-[--color-border] rounded-lg px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@facility.com"
                  className="w-full border border-[--color-border] rounded-lg px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                />
              </div>
              <div>
                <label
                  htmlFor="facility"
                  className="block text-sm font-semibold mb-1"
                >
                  Facility / Organization
                </label>
                <input
                  id="facility"
                  type="text"
                  placeholder="Sunrise Senior Living"
                  className="w-full border border-[--color-border] rounded-lg px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-[--color-border] rounded-lg px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-1"
                >
                  Anything you&apos;d like us to know?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your facility..."
                  className="w-full border border-[--color-border] rounded-lg px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[--color-primary] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[--color-primary] text-white font-bold text-lg py-3 rounded-[10px] hover:bg-[--color-primary-hover] transition-colors"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
