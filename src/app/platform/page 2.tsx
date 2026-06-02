import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The VitalFriend Platform",
  description:
    "The only health data platform that connects patients, doctors, care facilities and families, all enhanced with AI and covered by insurance.",
  alternates: { canonical: "https://vitalfriend.com/platform" },
  openGraph: { url: "https://vitalfriend.com/platform" },
};

const features = [
  {
    title: "BUDDI® Wearable",
    description:
      "FDA-cleared and reimbursable under Medicare RPM. 24/7 monitoring of 10+ key vitals — automatic and shared in a HIPAA-secure cloud environment. Designed for real-world comfort with 94% patient adherence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    pill: "Hardware",
  },
  {
    title: "VitalInsights AI",
    description:
      "AI-powered reporting and analysis. Aggregates 45,000+ data points per hour into predictive models that surface risk before it becomes crisis — giving your care team unparalleled health visibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    pill: "AI & Analytics",
  },
  {
    title: "Care Coordination",
    description:
      "Seamlessly connect facilities, physicians, and families with shared visibility into resident health. Everyone stays informed in real time — reducing gaps in communication and enabling faster intervention.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    pill: "Collaboration",
  },
  {
    title: "Automated Billing",
    description:
      "Fully reimbursable under Medicare RPM codes. VitalFriend handles clinical notes, documentation, and insurance submission — so your staff can stay focused on care, not paperwork.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    pill: "Revenue",
  },
];

const dataPoints = [
  {
    stat: "45,000+",
    label: "Data points per hour",
    description:
      "Aggregating continuous readings into Predictive AI models that give clinicians an unparalleled, real-time picture of resident health.",
  },
  {
    stat: "Contextual",
    label: "Benchmarking",
    description:
      "Every data point is benchmarked on multiple facets. Set individual AI benchmarks and custom alerts by patient — no one-size-fits-all thresholds.",
  },
  {
    stat: "GenAI",
    label: "Personalized Modeling",
    description:
      "AI learns each individual patient over time, allowing medical professionals to observe uncommon moments and take immediate, targeted action.",
  },
];

const vitals = [
  "Blood Pressure",
  "Heart Rate",
  "SpO2 Levels",
  "Body Temperature",
  "Respiratory Rate",
  "Sleep Quality",
  "Activity & Steps",
  "Skin Temperature",
  "HRV",
  "Blood Glucose (via integration)",
];

const integrationPoints = [
  {
    title: "Easy Onboarding",
    description:
      "Unlike legacy medical equipment, VitalFriend is simple to deploy. Facilities are typically up and running within days, not months.",
  },
  {
    title: "Device Neutral",
    description:
      "Our data platform supports multiple hardware sources and maintains strong data integrity across all connected devices.",
  },
  {
    title: "HIPAA-Secure Cloud",
    description:
      "All vitals data is transmitted and stored in a HIPAA-compliant environment. Enterprise-grade security at every layer.",
  },
  {
    title: "EHR-Ready",
    description:
      "Designed to work alongside existing EHR systems, surfacing the data clinicians need without disrupting established workflows.",
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[--color-surface] relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="pill bg-[--color-primary]/10 text-[--color-primary] mx-auto mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              The VitalFriend Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 text-[--color-dark] tracking-tight">
              The Only Platform That Has{" "}
              <span className="gradient-text">All the Pieces</span>
            </h1>
            <p className="text-lg text-[--color-muted] leading-relaxed max-w-2xl mx-auto mb-10">
              The only health data platform that connects patients, doctors, care
              facilities, and families — all enhanced with AI and covered by
              insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/demo" variant="primary" size="lg">
                Book a Demo
              </Button>
              <Button href="/devices-vitals" variant="outline" size="lg">
                See BUDDI&reg; Device
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards — 4 pillars */}
      <Section background="white">
        <div className="text-center mb-14">
          <div className="pill bg-[--color-accent]/10 text-[--color-accent] mx-auto mb-4">
            Platform Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-4">
            Four Integrated Pillars, One Unified Platform
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            From the wearable device to insurance billing, every component works
            together — eliminating gaps that exist when tools are stitched together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card p-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[--color-primary]/10 rounded-[var(--radius-md)] flex items-center justify-center text-[--color-primary]">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[--color-dark]">
                      {feature.title}
                    </h3>
                    <span className="pill bg-[--color-surface] text-[--color-muted] text-[11px] py-0.5 px-3">
                      {feature.pill}
                    </span>
                  </div>
                  <p className="text-[--color-muted] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Data Points Section */}
      <Section background="dark">
        <div className="text-center mb-14">
          <div className="pill bg-white/10 text-[--color-accent] mx-auto mb-4">
            Powered by Data
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tens of Thousands of Data Points, Per Patient, Per Hour
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            VitalInsights AI turns a continuous stream of biometric data into
            clear, actionable intelligence for every member of the care team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dataPoints.map((dp) => (
            <div key={dp.label} className="card-dark p-8 text-center">
              <p className="text-4xl sm:text-5xl font-bold text-[--color-accent] stat-number mb-2">
                {dp.stat}
              </p>
              <p className="text-white font-semibold mb-3">{dp.label}</p>
              <p className="text-white/70 text-sm leading-relaxed">
                {dp.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vitals tracked */}
      <Section background="surface">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1">
            <div className="pill bg-[--color-primary]/10 text-[--color-primary] mb-4">
              BUDDI&reg; Device
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-5 leading-tight">
              10+ Vital Signs, Monitored Continuously
            </h2>
            <p className="text-lg text-[--color-muted] mb-6 leading-relaxed">
              BUDDI&reg; is engineered for all-day, all-night comfort — because
              monitoring only works when patients actually wear the device. Our
              94% adherence rate proves it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {vitals.map((vital) => (
                <div key={vital} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[--color-accent] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[--color-muted] text-sm">{vital}</span>
                </div>
              ))}
            </div>
            <Button href="/devices-vitals" variant="primary" size="md">
              Explore BUDDI&reg; Device
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1575540395948-d24194d58934?w=800&q=80"
              alt="BUDDI wearable device continuously monitoring vital signs on a senior resident"
              width={800}
              height={600}
              className="rounded-[var(--radius-lg)] shadow-lg w-full max-w-md object-cover"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* Dashboard Showcase */}
      <Section background="white">
        <div className="text-center mb-10">
          <div className="pill bg-[--color-accent]/10 text-[--color-accent] mx-auto mb-4">
            Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-4">
            A Clear View of Every Resident, at a Glance
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            The VitalFriend dashboard surfaces what matters — trend changes,
            anomaly alerts, and care gaps — so your team spends less time
            searching and more time acting.
          </p>
        </div>
        <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[--color-border] shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
            alt="VitalFriend platform dashboard displaying real-time analytics and vitals monitoring data"
            width={1600}
            height={900}
            className="w-full object-cover"
            unoptimized
          />
        </div>
      </Section>

      {/* Integration / Easy Setup */}
      <Section background="surface">
        <div className="text-center mb-14">
          <div className="pill bg-[--color-primary]/10 text-[--color-primary] mx-auto mb-4">
            Integration
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-4">
            Built for Real-World Healthcare Environments
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            VitalFriend fits into the way care facilities already operate — not
            the other way around.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {integrationPoints.map((point, idx) => (
            <div key={point.title} className="card p-8 flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[--color-primary] text-white flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-bold text-[--color-dark] mb-2 text-lg">
                  {point.title}
                </h3>
                <p className="text-[--color-muted] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="cta" className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Experience VitalFriend in Action
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover how our integrated platform delivers better care at lower costs
          — with a personalized walkthrough for your facility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/demo" variant="white" size="lg">
            Book a Demo
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
          >
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
