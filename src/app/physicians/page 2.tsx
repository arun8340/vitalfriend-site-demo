import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For Physicians & Clinicians",
  description:
    "Continuous vitals visibility between visits. Early alerts for faster intervention. Better data, earlier action, less noise.",
  alternates: { canonical: "https://vitalfriend.com/physicians" },
  openGraph: { url: "https://vitalfriend.com/physicians" },
};

const benefits = [
  {
    title: "Continuous Visibility",
    description:
      "See how your patients are doing between visits—not just at the moment of a spot check. Real trends, not single snapshots.",
  },
  {
    title: "AI-Powered Alerts",
    description:
      "VitalInsights surfaces meaningful anomalies and escalating trends, filtering the noise so only actionable signals reach you.",
  },
  {
    title: "Reduced Documentation Burden",
    description:
      "Automated vitals capture, structured reporting, and EHR-ready summaries mean less time on paperwork and more on patients.",
  },
  {
    title: "Better Documentation",
    description:
      "Longitudinal vitals data gives you objective records for every patient encounter—stronger clinical notes, fewer gaps.",
  },
  {
    title: "Care Coordination",
    description:
      "Share patient data seamlessly with care teams across settings. Everyone sees the same picture, enabling faster decisions.",
  },
  {
    title: "RPM Billing Support",
    description:
      "VitalFriend supports RPM coding workflows (CPT 99453, 99454, 99457), helping you capture reimbursement that's already covered.",
  },
];

export default function PhysiciansPage() {
  return (
    <>
      {/* Hero */}
      <Section background="surface" className="pt-24 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill bg-[--color-surface] border border-[--color-border] text-[--color-primary] mb-6">
            For Physicians &amp; Clinicians
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[--color-dark] leading-[1.15] mt-4 mb-5">
            See More. Act Sooner.{" "}
            <span className="gradient-text">Carry Less.</span>
          </h1>
          <p className="text-lg text-[--color-muted] leading-relaxed max-w-2xl mx-auto mb-8">
            VitalFriend delivers continuous vitals visibility between visits—with
            AI that surfaces the signals that matter and stays quiet when
            everything&apos;s fine. Better data, earlier action, no clinical overload.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/demo" variant="primary" size="lg">
              Book a Demo
            </Button>
            <Button href="/devices-vitals" variant="outline" size="lg">
              How It Works
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-[--color-dark] mb-4">
            Built Around How Clinicians Actually Practice
          </h2>
          <p className="text-[--color-muted]">
            Six ways VitalFriend supports clinical decision-making without adding
            friction to your workflow.
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
              <h3 className="text-base font-bold text-[--color-dark] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Feature Highlight: VitalInsights AI */}
      <Section background="surface">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
              alt="Clinical dashboard showing patient vitals trends and AI-powered health analytics"
              width={900}
              height={600}
              className="rounded-[var(--radius-lg)] object-cover w-full shadow-[var(--shadow-xl)]"
              unoptimized
            />
          </div>
          <div>
            <span className="pill bg-white border border-[--color-border] text-[--color-accent] mb-5">
              VitalInsights AI
            </span>
            <h2 className="text-3xl font-bold text-[--color-dark] leading-tight mt-4 mb-5">
              AI That Knows What Matters—and What Doesn&apos;t
            </h2>
            <p className="text-[--color-muted] leading-relaxed mb-6">
              VitalInsights processes{" "}
              <strong className="text-[--color-dark]">
                45,000+ data points per hour
              </strong>{" "}
              per patient and applies clinically validated models to detect
              trends, flag anomalies, and prioritize what needs your attention.
              Not alarm fatigue—clinical signal.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Trending vital signs with 30-day historical context",
                "Configurable alert thresholds per patient",
                "Daily digests and on-call escalation paths",
                "EHR-ready exports and summary reports",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[--color-muted]"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
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
            <Button href="/demo" variant="primary" size="md">
              See VitalInsights in Action
            </Button>
          </div>
        </div>
      </Section>

      {/* Social Proof Strip */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "45K+", label: "Data points per hour per patient" },
            { stat: "94%", label: "Wearable adherence rate" },
            { stat: "3×", label: "Earlier clinical intervention" },
            { stat: "$0", label: "Additional cost to patients" },
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
            Ready to See It in Action?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Learn how VitalFriend delivers continuous clinical insight without
            the complexity, noise, or documentation burden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/demo" variant="white" size="lg">
              Book a Demo
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[--color-primary]"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
