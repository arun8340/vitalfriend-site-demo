import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For ALFs, ILFs & SNIFs",
  description:
    "Easily monitor patient vitals continuously with comfortable BUDDI® devices. Reduce workload, improve outcomes, stay compliant—all covered by insurance.",
  alternates: { canonical: "https://vitalfriend.com/alfs" },
  openGraph: { url: "https://vitalfriend.com/alfs" },
};

const benefits = [
  {
    title: "Reduce Staff Workload",
    description:
      "Eliminate manual vitals logging. Staff spend less time on repetitive documentation and more time on meaningful resident interaction.",
  },
  {
    title: "Improve Care Outcomes",
    description:
      "AI-powered alerts flag early warning signs before they escalate—giving your team time to intervene and reduce adverse events.",
  },
  {
    title: "Covered by Insurance",
    description:
      "BUDDI® devices and the VitalFriend monitoring service are covered under Medicare and major insurance plans at no cost to residents.",
  },
  {
    title: "Early Detection",
    description:
      "Continuous monitoring across blood pressure, heart rate, SpO2, sleep, and fall detection catches changes that spot checks miss.",
  },
  {
    title: "Family Communication",
    description:
      "Keep families informed and confident with real-time health updates, reducing inbound calls and building trust in your facility.",
  },
  {
    title: "Scales With Your Facility",
    description:
      "Whether you have 20 residents or 200, VitalFriend grows with you. Automated documentation and reporting keep compliance effortless.",
  },
];

export default function ALFsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="surface" className="pt-24 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill bg-[--color-surface] border border-[--color-border] text-[--color-primary] mb-6">
            For Assisted Living &amp; Senior Care Facilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[--color-dark] leading-[1.15] mt-4 mb-5">
            Elevate Care Delivery.{" "}
            <span className="gradient-text">Reduce the Burden.</span>
          </h1>
          <p className="text-lg text-[--color-muted] leading-relaxed max-w-2xl mx-auto mb-8">
            VitalFriend gives assisted living facilities continuous, passive
            vitals monitoring—without adding work for your staff. Better
            outcomes, lower liability, and a care quality benchmark that sets
            your facility apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/demo" variant="primary" size="lg">
              Book a Demo
            </Button>
            <Button href="/devices-vitals" variant="outline" size="lg">
              Explore BUDDI®
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-[--color-dark] mb-4">
            Built for the Way Facilities Actually Work
          </h2>
          <p className="text-[--color-muted]">
            Six reasons facility administrators and directors of nursing choose
            VitalFriend for their residents.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card p-7">
              <div
                className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center mb-5"
                style={{ background: "var(--color-surface)" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10l4 4 8-8"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-base font-700 text-[--color-dark] mb-2 font-bold">
                {benefit.title}
              </h3>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Feature Highlight: BUDDI Comfort */}
      <Section background="surface">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="pill bg-white border border-[--color-border] text-[--color-accent] mb-5">
              BUDDI® Device
            </span>
            <h2 className="text-3xl font-bold text-[--color-dark] leading-tight mt-4 mb-5">
              Continuous Monitoring Residents Actually Wear
            </h2>
            <p className="text-[--color-muted] leading-relaxed mb-6">
              Traditional medical equipment is bulky, uncomfortable, and gets
              taken off. BUDDI® is purpose-built for 24/7 wear—soft, lightweight,
              and unobtrusive. That's why VitalFriend sees a{" "}
              <strong className="text-[--color-dark]">94% adherence rate</strong>
              , delivering the truly continuous monitoring that makes early
              detection possible.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Monitors 10+ vital parameters continuously",
                "Waterproof, fall-resistant, and easy to charge",
                "No resident interaction required—fully passive",
                "Certified for clinical use in care settings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[--color-muted]">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="var(--color-primary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/devices-vitals" variant="primary" size="md">
              See BUDDI® in Detail
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80"
              alt="Senior resident wearing a comfortable BUDDI health monitoring wearable device"
              width={900}
              height={600}
              className="rounded-[var(--radius-lg)] object-cover w-full shadow-[var(--shadow-xl)]"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* Social Proof Strip */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "94%", label: "Device adherence rate" },
            { stat: "45K+", label: "Data points per hour" },
            { stat: "3×", label: "Faster incident response" },
            { stat: "$0", label: "Out-of-pocket for residents" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-bold text-[--color-primary] stat-number mb-1">
                {item.stat}
              </p>
              <p className="text-sm text-[--color-muted]">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="cta" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Facility&apos;s Standard of Care?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join facilities already using VitalFriend to differentiate their
            care quality, reduce staff burden, and improve resident outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/demo" variant="white" size="lg">
              Book a Demo
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[--color-primary]">
              Learn About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
