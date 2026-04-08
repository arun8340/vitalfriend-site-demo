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
  "Measures heart rate, blood pressure, oxygen, and more",
  "Tracks movement patterns, sleep cycles, and fall detection",
  "Easy to wear, easy to charge, and easy to forget it's even there",
];

const integrations = [
  { label: "Leading smartwatches and rings", icon: "https://vitalfriend.com/wp-content/uploads/2025/07/Group-588.png" },
  { label: "Fitness trackers and blood sugar monitors", icon: "https://vitalfriend.com/wp-content/uploads/2025/07/Group-583.png" },
  { label: "Almost any Bluetooth-enabled health device", icon: "https://vitalfriend.com/wp-content/uploads/2025/07/Group-581.png" },
  { label: "Manual and photo-based input tools", icon: "https://vitalfriend.com/wp-content/uploads/2025/07/Group-580.png" },
];

export default function DevicesVitalsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[--color-primary] uppercase tracking-widest mb-3">
            VitalFriend® Device Compatibility & Vitals Monitoring
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Intelligent Vitals Tracking. Every Metric You Can Monitor.
          </h1>
          <p className="text-lg text-[--color-muted]">
            VitalFriend&apos;s Gen-AI-powered platform connects with
            today&apos;s top wearable technology — including our own BUDDI®
            device — to give care teams, physicians, and families a clearer
            picture of resident health in real time.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://vitalfriend.com/wp-content/uploads/2025/07/00002.png"
            alt="VitalFriend device ecosystem"
            width={700}
            height={400}
            className="rounded-xl w-full max-w-2xl"
            unoptimized
          />
        </div>
      </Section>

      {/* BUDDI device */}
      <Section background="surface">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[--color-primary] uppercase tracking-widest mb-3">
              Prefer Our Device?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet BUDDI®
            </h2>
            <p className="text-base text-[--color-muted] mb-2 italic">
              Biometric Unified Data Delivery Interface
            </p>
            <p className="text-lg text-[--color-muted] mb-8">
              VitalFriend&apos;s proprietary BUDDI® device is purpose-built for
              elder care, capturing more vital signs than any wearable in its
              class.
            </p>
            <h3 className="font-bold text-lg mb-4">Why we recommend BUDDI®</h3>
            <ul className="space-y-4">
              {buddiFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="text-[--color-primary] font-bold text-xl leading-snug">
                    ✓
                  </span>
                  <p className="text-[--color-muted]">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://vitalfriend.com/wp-content/uploads/2025/07/Buddy-Image-01.png"
              alt="BUDDI® device"
              width={420}
              height={420}
              className="rounded-xl w-full max-w-sm"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Demand pulling us in: facilities & physicians are lining up
          </h2>
          <p className="text-white/60 mb-6">
            3-months into our pilot VitalFriend® are already having an impact
          </p>
          <blockquote className="border-l-4 border-[--color-primary] pl-6 text-left">
            <p className="text-xl text-white/90 italic mb-4">
              &ldquo;The BUDDI® device gives us more signals, more often — and
              it&apos;s already synched to the platform. VitalFriend® saves us
              time and keeps our eyes on what matters.&rdquo;
            </p>
            <footer className="text-white/60">— Assisted Living Administrator</footer>
          </blockquote>
        </div>
      </Section>

      {/* Device agnostic */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Device Agnostic, Always Connected
            </h2>
            <p className="text-lg text-[--color-muted] mb-8">
              No matter the device or data entry methodology, the data is
              standardized, visualized, and analyzed by our AI — so you have
              real-time and historic stats to make decisions from, and staff
              don&apos;t need to juggle multiple systems or manually enter
              vitals data.
            </p>
            <h3 className="font-bold text-lg mb-4">
              Use BUDDI® — or Bring Your Own
            </h3>
            <p className="text-[--color-muted] mb-6">
              Whether your facility already uses wearables or residents bring in
              their own, VitalFriend® flexes to fit your needs. Our platform
              integrates with:
            </p>
            <ul className="space-y-3">
              {integrations.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="text-[--color-primary] font-bold">✓</span>
                  <span className="text-[--color-muted]">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://vitalfriend.com/wp-content/uploads/2025/07/Buddy-2.png"
              alt="Device compatibility"
              width={500}
              height={400}
              className="rounded-xl w-full max-w-md"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* Vitals monitored */}
      <Section background="surface">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[--color-primary] uppercase tracking-widest mb-3">
            What We Monitor
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Core Vitals + Expanded Health Indicators
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            VitalFriend® helps you track a comprehensive set of resident
            vitals, with smart alerts and history logs built-in.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://vitalfriend.com/wp-content/uploads/2025/07/wesite-text-image.png"
            alt="Core vitals list"
            width={580}
            height={380}
            className="rounded-xl w-full"
            unoptimized
          />
          <Image
            src="https://vitalfriend.com/wp-content/uploads/2025/07/wesite-text-image2.png"
            alt="Expanded health indicators"
            width={580}
            height={380}
            className="rounded-xl w-full"
            unoptimized
          />
        </div>
      </Section>

      {/* AI section */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              One Platform. Many Signals — All Synced in One Secure Place
            </h2>
            <p className="text-lg text-[--color-muted] mb-4">
              <strong>VitalFriend® isn&apos;t just about tracking —</strong>{" "}
              it&apos;s about understanding. Our Gen-AI engine interprets the
              signals, flags concerns, and helps caregivers act faster — using
              fewer man-hours and smarter insights.
            </p>
            <p className="text-lg text-[--color-muted]">
              Whether it&apos;s one resident or one hundred, every data point
              works together to create a complete, actionable view of care.
              VitalFriend® also makes coding, billing, and insurance submissions
              a snap.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://vitalfriend.com/wp-content/uploads/2025/07/Ai-Image-vital.png"
              alt="AI vitals analysis"
              width={500}
              height={400}
              className="rounded-xl w-full max-w-md"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to See It in Action?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
          Schedule a quick demo and see how VitalFriend® brings your resident
          data to life, reducing errors and saving you time, money, and man
          hours.
        </p>
        <Button href="/scheduleDemo" size="lg">
          Book a demo
        </Button>
      </Section>
    </>
  );
}
