import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Continuous Vitals Intelligence for Better Senior Care",
  description:
    "VitalFriend is an FDA-cleared consumer wearable platform that continuously monitors blood pressure and 10+ vital signs, shifting senior care from reactive treatment to proactive, continuous care.",
  alternates: { canonical: "https://vitalfriend.com" },
  openGraph: { url: "https://vitalfriend.com" },
};

const differentiators = [
  "The ONLY integrated wearable, online, monitoring, billing, support platform designed to optimize senior care facility efficiency and patient care",
  "Revolutionary, comfortable BUDDI® increases adherence, eliminates the need for expensive services and medical equipment",
  "We manage support, monitoring, clinical notes and insurance billing",
  "Monitor and manage patient data, individually and collectively, to drive better outcomes at lower costs",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white pt-24 pb-20">
        {/* Decorative blobs */}
        <div className="blob-shape blob-primary w-120 h-120 absolute top-20 right-50 -translate-y-1/2 translate-x-1/2" />
        <div className="blob-shape blob-accent w-120 h-120 absolute top-0 left-75 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-0">
            <div className="flex-[1.75] text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-[--color-primary] font-semibold text-sm mb-4">
                FDA-Cleared & Insurance-Covered
              </div>
              <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4">
                <span className="gradient-text block mb-2">
                  The New Era of Senior Care is Here
                </span>
              </h1>
              <h2 className="text-4xl sm:text-6xl font-black leading-snug mb-4 text-[--color-foreground]">
                Smarter Care.
                <br />
                Smoother Ops.
                <br />
                Safer Seniors.
              </h2>
              <p className="text-lg text-[#393939] mb-6 max-w-2xl mx-auto lg:mx-0">
                VitalFriend continuously monitors blood pressure and 10+ vital
                signs, shifting senior care from reactive treatment to proactive
                care, with Al-powered insights and clinical monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/contact" variant="pill" size="md">
                  Get Started Today
                </Button>
                <Button href="/platform" variant="pill" size="md">
                  Explore the Platform
                </Button>
              </div>
            </div>
            <div className="flex-1 flex relative">
              <div
                className="relative w-full max-w-lg"
                style={{ height: "400px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ aspectRatio: "1 / 1.3" }}
                >
                  {/* Background: entire photo visible, rounded corners */}
                  <Image
                    src="/images/senior-with-doctor.png"
                    alt="Senior with doctor and family"
                    fill
                    className="rounded-3xl"
                    style={{
                      objectFit: "cover",
                      opacity: 0.2,
                      transform: "translate(15px, 30px)",
                      clipPath: "inset(0% 0% 25% 25% round 24px)",
                      filter: "blur(3px)",
                    }}
                    unoptimized
                  />
                </div>
                <div
                  className="absolute inset-0"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  {/* Foreground: hero-shot */}
                  <Image
                    src="/images/hero-shot.png"
                    alt="Senior checking smartwatch"
                    fill
                    className="object-cover"
                    style={{
                      clipPath: "inset(0% 12.5% 2.5% 15% round 24px)",
                    }}
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUDDI */}
      <Section background="white">
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 justify-center text-center">
          <span className="gradient-text block mb-2">
            Monitor criticals vitals in real time.
          </span>
        </h2>
        <p className="text-xl text-[--color-muted] mb-4 mx-auto justify-center text-center max-w-3xl">
          Meet BUDDI - the world&apos;s only FDA-cleared blood pressure watch.
        </p>
        <p className="text-xl text-[--color-muted] mb-8 mx-auto justify-center text-center">
          BUDDI enables comfortable, continuous vitals monitoring that eases
          staff workload, improves resident outcomes, keeps physicians and
          families informed and is fully covered by insurance*.
        </p>
        <div className="flex flex-col items-center">
          <Image
            src="/images/buddi-no-bg.png"
            alt="BUDDI smartwatch"
            width={600}
            height={600}
            className="w-150 h-150 object-contain relative z-10"
            unoptimized
          />
          {/* Elliptical shadow */}
          <div
            style={{
              width: "35%",
              height: "75px",
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)",
              marginTop: "-75px",
              borderRadius: "50%",
              filter: "blur(8px)",
            }}
          />
        </div>
      </Section>

      {/* Primary Target: ALFs/ILFs/SNIFs */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-2 flex justify-center">
            <Image
              src="/images/caring-patient.png"
              alt="Caring for patient"
              width={1000}
              height={667}
              className="rounded-3xl shadow-2xl w-full"
              priority
              unoptimized
            />
          </div>
          <div className="flex-2 px-4 sm:px-6 lg:px-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-semibold text-lg mb-5"
              style={{
                background: "linear-gradient(90deg, #2F5FF3 0%, #14AE5C 100%)",
              }}
            >
              For Assisted Living & Senior Care Facilities
            </div>
            <h2 className="font-extrabold mb-4">
              <span className="gradient-text block text-4xl sm:text-6xl mb-5">
                Deliver Better Care
              </span>
              <span className="text-[--color-foreground] block text-2xl sm:text-4xl">
                and More Efficient Operations
              </span>
            </h2>
            <p className="text-lg text-[--color-muted] mb-4">
              We bring care teams, physicians, and families together on one
              platform, turning millions of data points into clear insights that
              simplify care, lighten workloads, and improve outcomes.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Reduce staff workload with automated monitoring",
                "Improve resident outcomes with early alerts",
                "Keep families and physicians informed",
                "Fully covered by Medicare/insurance*",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image
                    src="/images/check-circle.png"
                    alt="check"
                    width={20}
                    height={20}
                    className="shrink-0"
                    unoptimized
                  />
                  <span className="text-[--color-muted]">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/alfs" variant="pill" size="md">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* Secondary Target: Physicians */}
      <Section background="#f9fef9">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-2 px-4 sm:px-6 lg:px-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-semibold text-lg mb-5"
              style={{
                background: "linear-gradient(90deg, #4FC560 0%, #35976A 100%)",
              }}
            >
              For Physicians & Clinicians
            </div>
            <h2 className="font-extrabold mb-4">
              <span className="gradient-text block text-4xl sm:text-6xl mb-5 leading-tight">
                Clinical Insight
              </span>
              <span className="text-[--color-foreground] block text-2xl sm:text-4xl">
                Without Clinical Overload
              </span>
            </h2>
            <p className="text-lg text-[--color-muted] mb-4">
              VitalFriend provides continuous monitoring of blood pressure and
              key vitals, delivering timely, actionable insights without adding
              to documentation or rounding burden.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Continuous vitals visibility between visits",
                "Early alerts for faster intervention",
                "Reduced reliance on manual measurements",
                "Seamless care team coordination",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image
                    src="/images/check-circle.png"
                    alt="check"
                    width={20}
                    height={20}
                    className="shrink-0"
                    unoptimized
                  />
                  <span className="text-[--color-muted]">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/physicians" variant="pill" size="md">
              Learn More
            </Button>
          </div>
          <div className="flex-2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
              alt="Healthcare professional viewing patient data on tablet"
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl w-full"
              priority
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* Tertiary Target: Families */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&q=80"
              alt="Family spending time with senior loved one"
              width={1000}
              height={667}
              className="rounded-3xl shadow-2xl w-full"
              priority
              unoptimized
            />
          </div>
          <div className="flex-2 px-4 sm:px-6 lg:px-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-semibold text-lg mb-5"
              style={{
                background: "linear-gradient(90deg, #A14DFB 0%, #D12779 100%)",
              }}
            >
              For Patients & Families
            </div>
            <h2 className="font-extrabold mb-4">
              <span className="gradient-text block text-4xl sm:text-6xl mb-5">
                Peace of Mind
              </span>
              <span className="text-[--color-foreground] block text-2xl sm:text-4xl">
                Even When You&apos;re Not There
              </span>
            </h2>
            <p className="text-lg text-[--color-muted] mb-4">
              We keep a constant eye on your loved one&apos;s health,
              continuously monitoring their vital signs, sharing important
              changes with caregivers and clinicians so issues are caught early.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "24/7 monitoring keeps everyone informed",
                "BUDDI® is easy to wear and care for",
                "Immediate alerts when health changes occur",
                "View trends for blood pressure, sleep, oxygen, heart rate",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image
                    src="/images/check-circle.png"
                    alt="check"
                    width={20}
                    height={20}
                    className="shrink-0"
                    unoptimized
                  />
                  <span className="text-[--color-muted]">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/families" variant="pill" size="md">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* VitalFriend Difference */}
      <Section background="#f9fef9">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="gradient-text">The VitalFriend Difference</span>
          </h2>
          <p className="text-xl text-[--color-muted] mb-12">
            The only platform with all the pieces for next-level senior care
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="p-px rounded-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, #5D9FD2 0%, #56B099 100%)",
                }}
              >
                <div
                  className="flex gap-4 items-start p-6 rounded-2xl h-full"
                  style={{
                    background:
                      "linear-gradient(248.18deg, #FFF4F9 -1.14%, #C4D8F9 98.56%)",
                  }}
                >
                  <span
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                    style={{ background: "#F1EDFC", color: "#6B4FC8" }}
                  >
                    {idx + 1}
                  </span>
                  <p className="text-[--color-foreground] pt-2 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Product Snapshot */}
      <Section background="white">
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 justify-center text-center">
          <span className="gradient-text block mb-2">Product Snapshot</span>
        </h2>
        <p className="text-lg text-[--color-muted] mb-4 mx-auto justify-center text-center max-w-4xl">
          VitalFriend® helps care teams track residents&apos; health in real
          time, predict risks early, and share updates securely.
        </p>
        <div className="flex justify-center mb-8">
          <Button href="/demo" variant="pill" size="md">
            <span className="flex items-center">Watch Demo</span>
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/product-snapshot.png"
            alt="Product snapshot of VitalFriend platform"
            width={600}
            height={600}
            className="w-150 h-150 object-contain relative z-10"
            unoptimized
          />
        </div>
      </Section>

      {/* CTA */}
      <Section background="#f9fef9">
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 justify-center text-center">
          <span className="gradient-text block mb-2">
            Ready to Transform Senior Care?
          </span>
        </h2>
        <p className="text-lg text-[--color-muted] mb-10 mx-auto justify-center text-center max-w-3xl">
          Discover how VitalFriend can help your facility deliver better care
          with continuous vitals monitoring.
        </p>
        <div className="flex justify-center mb-8">
          <Button href="/platform" variant="pill" size="md">
            Explore the Platform
          </Button>
        </div>
      </Section>
    </>
  );
}
