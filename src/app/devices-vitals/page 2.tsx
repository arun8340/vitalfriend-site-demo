import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Devices & Vitals",
  description:
    "VitalFriend's Gen-AI-powered platform connects with today's top wearable technology — including our own BUDDI® device — to give care teams a clearer picture of resident health in real time.",
  alternates: { canonical: "https://vitalfriend.com/devices-vitals" },
  openGraph: { url: "https://vitalfriend.com/devices-vitals" },
};

const buddiFeatures = [
  {
    title: "Comfortable, Purpose-Built Design",
    description:
      "Engineered specifically for elder care — lightweight, discreet, and easy to wear all day without disrupting daily routines.",
  },
  {
    title: "FDA-Cleared & Clinically Validated",
    description:
      "BUDDI® meets rigorous clinical standards, giving care teams and physicians confidence in every reading it captures.",
  },
  {
    title: "Continuous, Non-Invasive Monitoring",
    description:
      "Tracks heart rate, blood pressure, oxygen saturation, and more — passively and continuously, with no manual intervention required.",
  },
  {
    title: "Seamlessly Synced to the Platform",
    description:
      "Every signal goes directly into VitalFriend® — no manual data entry, no delays, no gaps in the health record.",
  },
];

const vitalsCore = [
  "Blood Pressure",
  "Heart Rate",
  "Blood Oxygen (SpO2)",
  "Body Temperature",
  "Respiratory Rate",
  "Blood Glucose",
];

const vitalsExpanded = [
  "Sleep Quality & Duration",
  "Activity & Step Count",
  "Fall Detection",
  "HRV (Heart Rate Variability)",
  "Caloric Burn",
  "Hydration Indicators",
];

const integrations = [
  {
    label: "Leading smartwatches and rings",
    description: "Apple Watch, Samsung Galaxy Ring, Garmin, and more.",
  },
  {
    label: "Fitness trackers & glucose monitors",
    description: "Fitbit, Dexcom, Abbott FreeStyle, and compatible CGMs.",
  },
  {
    label: "Any Bluetooth-enabled health device",
    description: "Open connectivity with standard health peripherals.",
  },
  {
    label: "Manual and photo-based input",
    description: "Staff can log readings directly or capture them via photo.",
  },
];

export default function DevicesVitalsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pt-16 pb-0">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="pill mb-5">BUDDI® Device & Platform Compatibility</span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[--color-dark] mb-6">
            Every Vital Sign. Every Device.{" "}
            <span className="text-[--color-primary]">One Platform.</span>
          </h1>
          <p className="text-lg text-[--color-muted] leading-relaxed">
            VitalFriend&apos;s Gen-AI-powered platform connects with today&apos;s
            top wearable technology — including our own BUDDI® device — to give
            care teams, physicians, and families a clearer picture of resident
            health in real time.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1100&q=80"
            alt="VitalFriend device ecosystem"
            width={1100}
            height={520}
            className="w-full rounded-[var(--radius-lg)] object-cover"
            style={{ maxHeight: 520 }}
            unoptimized
          />
        </div>
      </Section>

      {/* BUDDI Device — Meet the Device */}
      <Section background="surface">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600&q=80"
              alt="BUDDI® wearable device"
              width={480}
              height={480}
              className="w-full max-w-sm rounded-[var(--radius-lg)] object-cover shadow-md"
              unoptimized
            />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <span className="pill mb-5">Our Proprietary Device</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-2">
              Meet BUDDI®
            </h2>
            <p className="text-sm text-[--color-muted] italic mb-5">
              Biometric Unified Data Delivery Interface
            </p>
            <p className="text-lg text-[--color-muted] leading-relaxed mb-10">
              Purpose-built for elder care, BUDDI® captures more vital signs
              than any wearable in its class — and syncs directly to the
              VitalFriend® platform the moment data is collected.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {buddiFeatures.map((feature) => (
                <div key={feature.title} className="card p-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3"
                    style={{ background: "var(--color-primary)", opacity: 0.9 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[--color-dark] text-[15px] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[--color-muted] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Vitals Tracked */}
      <Section background="white">
        <div className="text-center mb-12">
          <span className="pill mb-5">What We Monitor</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-4">
            Core Vitals + Expanded Health Indicators
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto leading-relaxed">
            VitalFriend® tracks a comprehensive set of resident vitals with
            smart alerts, trend analysis, and full history logs built in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Vitals */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--color-primary)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 3v4l3 2"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[--color-dark]">Core Vitals</h3>
            </div>
            <ul className="space-y-3">
              {vitalsCore.map((vital) => (
                <li key={vital} className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-primary)" }}
                  />
                  <span className="text-[--color-muted] text-[15px]">{vital}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expanded Indicators */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--color-accent)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 9h12M9 3v12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[--color-dark]">Expanded Indicators</h3>
            </div>
            <ul className="space-y-3">
              {vitalsExpanded.map((vital) => (
                <li key={vital} className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <span className="text-[--color-muted] text-[15px]">{vital}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[var(--radius-lg)] overflow-hidden border border-[--color-border]">
          <Image
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1100&q=80"
            alt="Vitals monitoring dashboard"
            width={1100}
            height={400}
            className="w-full object-cover"
            style={{ maxHeight: 380 }}
            unoptimized
          />
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="dark">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--color-accent)" }}
          >
            Early Pilot Results
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">
            Facilities and physicians are already seeing the difference
          </h2>
          <blockquote className="border-l-4 pl-6 text-left" style={{ borderColor: "var(--color-accent)" }}>
            <p className="text-xl text-white/90 italic leading-relaxed mb-5">
              &ldquo;The BUDDI® device gives us more signals, more often — and
              it&apos;s already synced to the platform. VitalFriend® saves us
              time and keeps our eyes on what matters.&rdquo;
            </p>
            <footer className="text-white/50 text-sm">
              — Assisted Living Administrator, 3-month pilot participant
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* Device Agnostic */}
      <Section background="surface">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="pill mb-5">Bring Your Own Device</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-4">
              Device Agnostic. Always Connected.
            </h2>
            <p className="text-lg text-[--color-muted] leading-relaxed mb-8">
              No matter the device or data entry method, VitalFriend® standardizes,
              visualizes, and analyzes every signal through our AI engine — so
              staff never juggle multiple systems or manually transcribe readings.
            </p>
            <h3 className="font-semibold text-[--color-dark] text-[15px] mb-5">
              Use BUDDI® — or bring your own:
            </h3>
            <div className="space-y-4">
              {integrations.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-4 rounded-[var(--radius-md)] border"
                  style={{ borderColor: "var(--color-border)", background: "white" }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "var(--color-primary)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2 6l2.5 2.5L10 3.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[--color-dark] text-[15px]">{item.label}</p>
                    <p className="text-sm text-[--color-muted] mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80"
              alt="Device compatibility and integrations"
              width={500}
              height={500}
              className="w-full max-w-md rounded-[var(--radius-lg)] object-cover shadow-md"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* AI / One Platform */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              alt="AI-powered vitals analysis"
              width={520}
              height={420}
              className="w-full max-w-md rounded-[var(--radius-lg)] object-cover shadow-md"
              unoptimized
            />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <span className="pill mb-5">Intelligent Analysis</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-5 leading-snug">
              Many Signals. One Secure Platform.{" "}
              <span className="text-[--color-primary]">Smarter Decisions.</span>
            </h2>
            <p className="text-lg text-[--color-muted] leading-relaxed mb-5">
              VitalFriend® isn&apos;t just about tracking — it&apos;s about
              understanding. Our Gen-AI engine interprets the signals, flags
              concerns early, and helps caregivers act faster with fewer
              man-hours and smarter insights.
            </p>
            <p className="text-lg text-[--color-muted] leading-relaxed mb-8">
              Whether it&apos;s one resident or one hundred, every data point
              works together to create a complete, actionable view of care.
              VitalFriend® also streamlines coding, billing, and insurance
              submissions — reducing administrative burden across the board.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="pill">Smart Alerts</span>
              <span className="pill">Trend Analysis</span>
              <span className="pill">Billing Automation</span>
              <span className="pill">Care Summaries</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="cta" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to See BUDDI® in Action?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-10">
            Schedule a quick demo and see how VitalFriend® brings your resident
            data to life — reducing errors and saving time, money, and staff
            hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/demo" variant="white" size="lg">
              Book a Demo
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[--color-dark]">
              Learn About VitalFriend®
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
