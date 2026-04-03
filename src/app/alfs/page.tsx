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
  "Easily monitor patient vitals continuously with comfortable BUDDI® devices",
  "Reduce workload on your staff with less manual logging and more meaningful interaction",
  "Improve outcomes and reduce liability with alerts that flag changes before they become emergencies",
  "Use VitalFriend Certified as a marketing tool to differentiate your facility with quality",
  "Stay compliant with automated documentation, submissions, and custom reports",
  "Device and service covered by insurance",
];

export default function ALFsPage() {
  return (
    <>
      <Section background="white" className="pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Why ALF&apos;s, ILF&apos;s & SNIFs Choose VitalFriend
          </h1>
          <p className="text-xl text-[--color-muted]">
            Transform your facility's care delivery with continuous vitals
            monitoring that improves outcomes, reduces costs, and enhances
            resident satisfaction.
          </p>
        </div>
      </Section>

      <Section background="surface">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white p-6 rounded-xl border border-[--color-border] flex gap-4 card-hover"
              >
                <span className="text-[--color-primary] font-bold text-2xl flex-shrink-0">
                  ✓
                </span>
                <p className="text-[--color-foreground] pt-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            BUDDI® Makes Continuous Monitoring Comfortable
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto mb-8">
            Unlike traditional medical equipment, BUDDI® is designed for 24/7
            wear. Residents actually keep it on, leading to 94% adherence and
            truly continuous monitoring.
          </p>
          <div className="flex justify-center mb-8">
            <Image
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80"
              alt="Senior wearing health monitoring wearable device"
              width={1200}
              height={675}
              className="rounded-2xl shadow-2xl object-cover"
              unoptimized
            />
          </div>
        </div>
      </Section>

      <Section background="dark" className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Elevate Your Facility's Care?
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Discover how VitalFriend can help you provide better care and
          differentiate your facility.
        </p>
        <Button href="/contact" size="lg">
          Contact Us
        </Button>
      </Section>
    </>
  );
}
