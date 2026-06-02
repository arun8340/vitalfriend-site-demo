import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About VitalFriend - Our Team & Mission",
  description:
    "Meet the seasoned technologists, operators, and entrepreneurs behind VitalFriend—a team ready to transform senior care through continuous vitals intelligence.",
  alternates: { canonical: "https://vitalfriend.com/about" },
  openGraph: { url: "https://vitalfriend.com/about" },
};

const team = [
  {
    name: "Gaurav",
    role: "Leadership",
    bio: "Seasoned entrepreneur with deep expertise in healthcare technology and building companies that deliver measurable patient outcomes.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Raj",
    role: "Technology",
    bio: "Technical leader with experience building scalable health platforms trusted by hundreds of care facilities across the country.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sean",
    role: "Operations",
    bio: "Operations expert focused on healthcare delivery excellence, ensuring every facility receives seamless onboarding and ongoing support.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "David",
    role: "Product",
    bio: "Product strategist with a track record in medical devices, shaping the BUDDI® wearable from concept to FDA clearance.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
];

const values = [
  {
    title: "Patient First",
    description:
      "Every decision starts with the patient. We build technology that serves real human needs — comfort, dignity, and health — before anything else.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Proactive Intelligence",
    description:
      "We believe care should anticipate problems before they become emergencies. Continuous data and AI give clinicians the visibility to act early.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Accessible Care",
    description:
      "World-class monitoring shouldn't be limited to large health systems. We make continuous vitals intelligence affordable for every facility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Trusted Partnership",
    description:
      "We're not a vendor — we're a partner. From onboarding to billing support, we're with every facility every step of the way.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[--color-surface] relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="pill bg-[--color-primary]/10 text-[--color-primary] mx-auto mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 text-[--color-dark] tracking-tight">
              Seasoned Technologists,{" "}
              <span className="gradient-text">Operators, and Entrepreneurs</span>
            </h1>
            <p className="text-lg text-[--color-muted] leading-relaxed max-w-2xl mx-auto">
              VitalFriend is built by a team that combines deep healthcare expertise
              with proven technology leadership — a team ready to transform how
              senior care facilities deliver proactive, continuous care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission — side by side */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1">
            <div className="pill bg-[--color-accent]/10 text-[--color-accent] mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-5 leading-tight">
              Making Proactive Care Accessible for Every Senior
            </h2>
            <p className="text-lg text-[--color-muted] mb-5 leading-relaxed">
              Our mission is to transform senior care by making continuous vitals
              monitoring accessible, affordable, and actionable for facilities,
              physicians, and families.
            </p>
            <p className="text-[--color-muted] leading-relaxed mb-8">
              We believe that every senior deserves proactive, continuous care —
              and that technology should make that care easier to deliver, not
              harder. By combining the BUDDI® wearable with AI-powered analytics
              and seamless insurance coverage, we remove every barrier standing
              between residents and better health outcomes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "400+", label: "Facilities served" },
                { value: "94%", label: "Patient adherence rate" },
                { value: "10+", label: "Vital signs tracked" },
                { value: "24/7", label: "Continuous monitoring" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-[--color-primary] stat-number mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[--color-muted] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              alt="Care team working with senior residents using VitalFriend technology"
              width={800}
              height={600}
              className="rounded-[var(--radius-lg)] shadow-lg w-full max-w-md object-cover"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="surface">
        <div className="text-center mb-14">
          <div className="pill bg-[--color-primary]/10 text-[--color-primary] mx-auto mb-4">
            Our Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-4">
            Principles That Guide Every Decision
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            From product design to customer support, these values shape how we
            build VitalFriend.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="card p-8 flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-[--color-primary]/10 rounded-[var(--radius-md)] flex items-center justify-center text-[--color-primary]">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[--color-dark] mb-2">
                  {value.title}
                </h3>
                <p className="text-[--color-muted] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="white">
        <div className="text-center mb-14">
          <div className="pill bg-[--color-accent]/10 text-[--color-accent] mx-auto mb-4">
            Leadership Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-4">
            The Team Behind VitalFriend
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            Decades of combined experience across healthcare, enterprise software,
            and medical devices — united by a shared passion for better senior care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="card p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-2 border-[--color-border]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} at VitalFriend`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-[--color-dark] mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[--color-primary] mb-3 uppercase tracking-wide">
                {member.role}
              </p>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Culture / image banner */}
      <Section background="surface">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
          <div className="flex-1">
            <div className="pill bg-[--color-primary]/10 text-[--color-primary] mb-4">
              Our Culture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[--color-dark] mb-5 leading-tight">
              Built With Purpose, Driven by Outcomes
            </h2>
            <p className="text-[--color-muted] leading-relaxed mb-5">
              At VitalFriend, we measure success the same way our customers do —
              by the health outcomes of the residents in their care. Every sprint,
              every feature, and every support call is oriented around a single
              question: does this make seniors healthier and safer?
            </p>
            <p className="text-[--color-muted] leading-relaxed mb-8">
              We are based in San Ramon, California, and work alongside care
              facilities, clinical partners, and insurance providers every day to
              continuously improve our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/demo" variant="primary" size="md">
                Book a Demo
              </Button>
              <Button href="/platform" variant="outline" size="md">
                Explore the Platform
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="VitalFriend team collaborating in a modern office environment"
              width={800}
              height={600}
              className="rounded-[var(--radius-lg)] shadow-lg w-full max-w-md object-cover"
              unoptimized
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="cta" className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Partner With Us?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you're a care facility, physician group, or strategic partner,
          we'd love to talk about how VitalFriend can elevate your care delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="white" size="lg">
            Contact Us
          </Button>
          <Button
            href="/demo"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
          >
            Book a Demo
          </Button>
        </div>
      </Section>
    </>
  );
}
